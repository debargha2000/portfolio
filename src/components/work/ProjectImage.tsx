import { useEffect, useRef, memo } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

/* ─── Shared WebGL helpers ─── */
const QUAD = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
    console.error("Shader error:", gl.getShaderInfoLog(shader));
  return shader;
}

function initQuadBuffer(gl: WebGLRenderingContext, program: WebGLProgram) {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, QUAD, gl.STATIC_DRAW);
  const posLoc = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
}

/* ─── GLSL shaders ─── */
const vert = `attribute vec2 position; varying vec2 vUv;
  void main() { vUv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }`;

const frag = `precision highp float;
  uniform sampler2D uTexture; uniform float uHover; uniform float uTime;
  uniform vec2 uRes; uniform vec2 uImgRes; varying vec2 vUv;
  vec2 coverUv(vec2 uv, vec2 iRes, vec2 rRes){
    vec2 ratio = vec2(min((rRes.x/rRes.y)/(iRes.x/iRes.y),1.0), min((rRes.y/rRes.x)/(iRes.y/iRes.x),1.0));
    return vec2(uv.x*ratio.x+(1.0-ratio.x)*0.5, uv.y*ratio.y+(1.0-ratio.y)*0.5);
  }
  void main() {
    vec2 uv = coverUv(vUv, uImgRes, uRes);
    float wave = sin((uv.y+uTime*0.3)*12.0)*0.5+0.5;
    float disp = uHover*0.03*wave;
    float r = texture2D(uTexture, uv+vec2(disp,0.0)).r;
    float g = texture2D(uTexture, uv).g;
    float b = texture2D(uTexture, uv-vec2(disp,0.0)).b;
    vec3 col = vec3(r,g,b);
    float gray = dot(col, vec3(0.299,0.587,0.114));
    col = mix(vec3(gray), col, 0.55+uHover*0.45);
    col *= mix(0.85, 1.0, smoothstep(1.1, 0.35, length(vUv-0.5)));
    gl_FragColor = vec4(col, 1.0);
  }`;

/* ─── Mobile: CSS filter image ─── */
const MobileProjectImage = memo(function MobileProjectImage({
  src,
  active,
}: {
  src: string;
  active: boolean;
}) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        onError={(e) => {
          e.currentTarget.src = "/images/hero-ink.jpg";
        }}
        className="w-full h-full object-cover transition-[filter] duration-700"
        style={{ filter: active ? "saturate(1)" : "saturate(0.55)" }}
      />
    </div>
  );
});

/* ─── Desktop: WebGL shader image ─── */
const WebGLProjectImage = memo(function WebGLProjectImage({
  src,
  active,
}: {
  src: string;
  active: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoverRef = useRef(0);
  const targetRef = useRef(0);

  useEffect(() => {
    targetRef.current = active ? 1 : 0;
  }, [active]);

  useEffect(() => {
    const container = containerRef.current!,
      canvas = canvasRef.current!;
    if (!container || !canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: true });
    if (!gl) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, compileShader(gl, gl.VERTEX_SHADER, vert));
    gl.attachShader(program, compileShader(gl, gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(program);
    gl.useProgram(program);
    initQuadBuffer(gl, program);

    const uHoverLoc = gl.getUniformLocation(program, "uHover");
    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uResLoc = gl.getUniformLocation(program, "uRes");
    const uImgResLoc = gl.getUniformLocation(program, "uImgRes");

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 0])
    );

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onerror = () => {
      img.src = "/images/hero-ink.jpg";
    };
    img.onload = () => {
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.uniform2f(uImgResLoc, img.naturalWidth, img.naturalHeight);
    };

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = container.clientWidth * dpr;
      canvas.height = container.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResLoc, container.clientWidth, container.clientHeight);
    };
    setSize();
    window.addEventListener("resize", setSize);

    let raf = 0,
      isVisible = false;
    const start = performance.now();
    const loop = () => {
      if (!isVisible) return;
      gl.uniform1f(uTimeLoc, (performance.now() - start) * 0.001);
      hoverRef.current += (targetRef.current - hoverRef.current) * 0.08;
      gl.uniform1f(uHoverLoc, hoverRef.current);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(loop);
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
      gl.deleteProgram(program);
      gl.deleteTexture(texture);
    };
  }, [src]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
});

/* ─── Main export ─── */
export default function ProjectImage({ src, active }: { src: string; active: boolean }) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return isMobile ? (
    <MobileProjectImage src={src} active={active} />
  ) : (
    <WebGLProjectImage src={src} active={active} />
  );
}
