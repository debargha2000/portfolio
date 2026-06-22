import { useRef, useMemo, useState, useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

// Only import R3F types for TypeScript — actual module loaded dynamically
type CanvasProps = import("@react-three/fiber").CanvasProps;

/**
 * Desktop-only WebGL ink canvas component.
 * Dynamically imports Three.js and R3F to avoid loading the 890KB chunk on mobile.
 */
function DesktopInkCanvas() {
  const [R3FCanvas, setR3FCanvas] = useState<React.ComponentType<CanvasProps> | null>(null);
  const [shaders, setShaders] = useState<{ vertexShader: string; fragmentShader: string } | null>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      import("@react-three/fiber"),
      import("./shaders/inkCanvasShaders"),
      import("three"),
    ]).then(([r3f, sh]) => {
      if (cancelled) return;
      setR3FCanvas(() => r3f.Canvas);
      setShaders({ vertexShader: sh.vertexShader, fragmentShader: sh.fragmentShader });
      setThreeLoaded(true);
    });
    return () => { cancelled = true; };
  }, []);

  if (!R3FCanvas || !shaders || !threeLoaded) {
    // Show static fallback while WebGL loads
    return (
      <div className="h-full w-full">
        <img
          src="/images/hero-ink.jpg"
          alt=""
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>
    );
  }

  return (
    <DesktopCanvas
      CanvasComponent={R3FCanvas}
      vertexShader={shaders.vertexShader}
      fragmentShader={shaders.fragmentShader}
    />
  );
}

/** Inner canvas that only renders once R3F is loaded */
function DesktopCanvas({
  CanvasComponent,
  vertexShader,
  fragmentShader,
}: {
  CanvasComponent: React.ComponentType<any>;
  vertexShader: string;
  fragmentShader: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Cap DPR at 1.5 — no visible quality difference, major GPU savings
  const maxDpr = Math.min(window.devicePixelRatio || 2, 1.5);

  return (
    <div ref={containerRef} className="h-full w-full">
      <CanvasComponent
        camera={{ position: [0, 0, 1] }}
        dpr={[1, maxDpr]}
        gl={{ antialias: false, powerPreference: "high-performance", alpha: false }}
        frameloop={isVisible ? "always" : "demand"}
      >
        <ShaderPlane vertexShader={vertexShader} fragmentShader={fragmentShader} />
      </CanvasComponent>
    </div>
  );
}

/** The actual shader mesh */
function ShaderPlane({ vertexShader, fragmentShader }: { vertexShader: string; fragmentShader: string }) {
  const materialRef = useRef<any>(null);
  // Cache resolution — only update on resize, NOT per frame
  const resolutionRef = useRef<[number, number]>([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const onResize = () => {
      resolutionRef.current = [window.innerWidth, window.innerHeight];
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Dynamically import THREE for Vector2
  const [THREE, setTHREE] = useState<any>(null);
  useEffect(() => {
    import("three").then(setTHREE);
  }, []);

  const uniforms = useMemo(() => {
    if (!THREE) return null;
    return {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(resolutionRef.current[0], resolutionRef.current[1]) },
    };
  }, [THREE]);

  // Use R3F's useFrame — import dynamically
  const [useFrame, setUseFrame] = useState<any>(null);
  useEffect(() => {
    import("@react-three/fiber").then((mod) => setUseFrame(() => mod.useFrame));
  }, []);

  // Use a custom hook that calls useFrame
  if (!uniforms || !useFrame) return null;

  return (
    <ShaderPlaneInner
      materialRef={materialRef}
      uniforms={uniforms}
      resolutionRef={resolutionRef}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      useFrame={useFrame}
    />
  );
}

function ShaderPlaneInner({
  materialRef,
  uniforms,
  resolutionRef,
  vertexShader,
  fragmentShader,
  useFrame,
}: any) {
  useFrame((state: any) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uResolution.value.set(
        resolutionRef.current[0],
        resolutionRef.current[1]
      );
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ─── Main export: auto-selects mobile vs desktop ─── */
export function InkCanvas() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  // Mobile or reduced-motion: static hero image (zero JS, zero GPU)
  if (isMobile || prefersReducedMotion) {
    return (
      <div className="h-full w-full">
        <img
          src="/images/hero-ink.jpg"
          alt=""
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>
    );
  }

  return <DesktopInkCanvas />;
}
