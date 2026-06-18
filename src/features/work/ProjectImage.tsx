import { useEffect, useRef, memo } from "react";
import { useMediaQuery } from "../../features/shared/hooks/useMediaQuery";

/* ─── GLSL shaders (only used on desktop) ─── */
const vert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const frag = /* glsl */ `
  uniform sampler2D uTexture;
  uniform float uHover;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec2 uImgRes;
  varying vec2 vUv;

  vec2 coverUv(vec2 uv, vec2 iRes, vec2 rRes){
    vec2 ratio = vec2(
      min((rRes.x / rRes.y) / (iRes.x / iRes.y), 1.0),
      min((rRes.y / rRes.x) / (iRes.y / iRes.x), 1.0)
    );
    return vec2(uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
                uv.y * ratio.y + (1.0 - ratio.y) * 0.5);
  }

  void main() {
    vec2 uv = coverUv(vUv, uImgRes, uRes);

    // displacement wave on hover
    float wave = sin((uv.y + uTime * 0.3) * 12.0) * 0.5 + 0.5;
    float disp = uHover * 0.03 * wave;

    vec2 uvR = uv + vec2(disp, 0.0);
    vec2 uvG = uv;
    vec2 uvB = uv - vec2(disp, 0.0);

    float r = texture2D(uTexture, uvR).r;
    float g = texture2D(uTexture, uvG).g;
    float b = texture2D(uTexture, uvB).b;

    vec3 col = vec3(r, g, b);

    // desaturate slightly when idle
    float gray = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(gray), col, 0.55 + uHover * 0.45);

    // vignette
    float vig = smoothstep(1.1, 0.35, length(vUv - 0.5));
    col *= mix(0.85, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`;

/* ─── Mobile-only: CSS filter-based image (zero WebGL, zero GPU contexts) ─── */
const MobileProjectImage = memo(function MobileProjectImage({ src, active }: { src: string; active: boolean }) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-[filter] duration-700"
        style={{
          filter: active ? "saturate(1)" : "saturate(0.55)",
        }}
      />
    </div>
  );
});

/* ─── Desktop-only: WebGL shader image ─── */
const WebGLProjectImage = memo(function WebGLProjectImage({ src, active }: { src: string; active: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoverRef = useRef(0);
  const targetRef = useRef(0);

  useEffect(() => {
    targetRef.current = active ? 1 : 0;
  }, [active]);

  useEffect(() => {
    // Dynamic import to avoid pulling Three.js into the main bundle
    import("three").then((THREE) => {
      const container = containerRef.current!;
      const canvas = canvasRef.current!;
      if (!container || !canvas) return;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const uniforms = {
        uTexture: { value: null as any },
        uHover: { value: 0 },
        uTime: { value: 0 },
        uRes: { value: new THREE.Vector2(1, 1) },
        uImgRes: { value: new THREE.Vector2(1, 1) },
      };

      const setSize = () => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        renderer.setSize(w, h, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        uniforms.uRes.value.set(w, h);
      };

      const tex = new THREE.TextureLoader().load(src, (t: any) => {
        const img = t.image as HTMLImageElement;
        uniforms.uImgRes.value.set(img.naturalWidth, img.naturalHeight);
      });
      tex.minFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      uniforms.uTexture.value = tex;

      const geo = new THREE.PlaneGeometry(2, 2);
      const mat = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms,
      });
      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      setSize();
      window.addEventListener("resize", setSize);

      const clock = new THREE.Clock();
      let raf = 0;
      let isVisible = false;

      const loop = () => {
        if (!isVisible) return;
        uniforms.uTime.value = clock.getElapsedTime();
        hoverRef.current += (targetRef.current - hoverRef.current) * 0.08;
        uniforms.uHover.value = hoverRef.current;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(loop);
      };

      // Only render when visible — prevents GPU waste
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(loop);
          } else {
            cancelAnimationFrame(raf);
          }
        });
      }, { threshold: 0, rootMargin: "200px" });

      observer.observe(container);

      return () => {
        observer.disconnect();
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", setSize);
        renderer.dispose();
        geo.dispose();
        mat.dispose();
        tex.dispose();
      };
    });
  }, [src]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
});

/* ─── Main export: auto-selects mobile vs desktop ─── */
interface Props {
  src: string;
  active: boolean;
}

export default function ProjectImage({ src, active }: Props) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  if (isMobile) {
    return <MobileProjectImage src={src} active={active} />;
  }

  return <WebGLProjectImage src={src} active={active} />;
}
