import { useEffect, useRef } from "react";
import * as THREE from "three";

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

interface Props {
  src: string;
  active: boolean;
}

export default function ProjectImage({ src, active }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoverRef = useRef(0);
  const targetRef = useRef(0);

  useEffect(() => {
    targetRef.current = active ? 1 : 0;
  }, [active]);

  useEffect(() => {
    const container = containerRef.current!;
    const canvas = canvasRef.current!;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const setSize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      uniforms.uRes.value.set(w, h);
    };

    const tex = new THREE.TextureLoader().load(src, (t) => {
      const img = t.image as HTMLImageElement;
      uniforms.uImgRes.value.set(img.naturalWidth, img.naturalHeight);
    });
    tex.minFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;

    const uniforms = {
      uTexture: { value: tex },
      uHover: { value: 0 },
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
      uImgRes: { value: new THREE.Vector2(1, 1) },
    };

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
    }, { threshold: 0 });

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
  }, [src]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
