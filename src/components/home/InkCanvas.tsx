import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { vertexShader, fragmentShader } from "./shaders/inkCanvasShaders";

function DesktopInkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "high-performance" });
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader error:", gl.getShaderInfoLog(shader));
      }
      return shader;
    };

    const vert = compile(gl.VERTEX_SHADER, vertexShader);
    const frag = compile(gl.FRAGMENT_SHADER, fragmentShader);
    const program = gl.createProgram()!;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1
    ]), gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uResLoc = gl.getUniformLocation(program, "uResolution");

    let raf: number;
    const start = performance.now();
    let lastTime = performance.now();
    let isVisible = true;
    let currentDpr = Math.min(window.devicePixelRatio || 2, 1.5);

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * currentDpr;
      canvas.height = h * currentDpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResLoc, window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", resize);
    resize();

    const loop = (time: DOMHighResTimeStamp) => {
      // 👱‍♀️ ponytail: completely pause WebGL render loop when hero is out of view
      if (!isVisible) return;
      raf = requestAnimationFrame(loop);

      const delta = time - lastTime;
      // 👱‍♀️ ponytail: Cap at ~60fps to save battery on 120Hz+ screens
      if (delta < 16) return;
      lastTime = time - (delta % 16);

      // 👱‍♀️ ponytail: Detect struggling refresh rate (<20fps) and dynamically degrade resolution
      if (delta > 50 && currentDpr > 1) {
        currentDpr = 1;
        resize();
      }

      gl.uniform1f(uTimeLoc, (time - start) * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        lastTime = performance.now();
        raf = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(raf);
      }
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      observer.disconnect();
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div className="h-full w-full">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

export function InkCanvas() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

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
