import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



/* ---------- Text highlight on scroll ---------- */
export function useTextHighlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const text = el.textContent || "";
    el.innerHTML = "";
    const words = text.split(" ").map((w, i) => {
      const span = document.createElement("span");
      span.className = "highlight-word";
      span.textContent = w + (i < text.split(" ").length - 1 ? " " : "");
      el.appendChild(span);
      return span;
    });
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 70%",
      end: "bottom 30%",
      scrub: true,
      onUpdate: (self) => {
        const count = Math.floor(self.progress * words.length);
        words.forEach((w, i) => {
          w.style.opacity = i < count ? "1" : "0.3";
          w.style.color = i < count ? "var(--acid)" : "";
        });
      },
    });
    return () => st.kill();
  }, []);
  return ref;
}

/* ---------- Wave text ---------- */
export function useWaveText<T extends HTMLElement>(amplitude = 20, speed = 2) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const text = el.textContent || "";
    el.innerHTML = "";
    const chars = text.split("").map((ch) => {
      const span = document.createElement("span");
      span.className = "wave-char";
      span.textContent = ch === " " ? "\u00A0" : ch;
      el.appendChild(span);
      return span;
    });
    let frame = 0;
    let raf = 0;
    const loop = () => {
      chars.forEach((c, i) => {
        const y = Math.sin((frame + i * 0.3) * 0.05 * speed) * amplitude;
        c.style.transform = `translateY(${y}px)`;
      });
      frame++;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [amplitude, speed]);
  return ref;
}

/* ---------- Number flip ---------- */
export function useNumberFlip(target: number, duration = 1.5) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        const startTime = Date.now();
        const animate = () => {
          const elapsed = (Date.now() - startTime) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          setDisplay(String(current).padStart(String(target).length, "0"));
          if (progress < 1) requestAnimationFrame(animate);
        };
        animate();
      },
    });
    return () => st.kill();
  }, [target, duration]);
  return { ref, display };
}

/* ---------- Circle mask reveal ---------- */
export function useCircleReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    gsap.set(ref.current, { clipPath: "circle(0% at 50% 50%)" });
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(ref.current, {
          clipPath: "circle(150% at 50% 50%)",
          duration: 1.6,
          ease: "expo.out",
          delay,
        });
      },
    });
    return () => st.kill();
  }, [delay]);
  return ref;
}

/* ---------- Particle trail ---------- */
export function useParticleTrail() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9998;mix-blend-mode:screen;";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;
    const particles: { x: number; y: number; vx: number; vy: number; life: number; size: number }[] = [];
    let mx = 0, my = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mx + (Math.random() - 0.5) * 20,
          y: my + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
          life: 1,
          size: Math.random() * 3 + 1,
        });
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.life -= 0.02;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.fillStyle = `rgba(198,255,61,${p.life})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      canvas.remove();
    };
  }, []);
}

/* ---------- Magnetic ---------- */
// Pulls an element toward the cursor within a radius.
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    let running = false;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(mx, my);
      const max = Math.max(r.width, r.height);
      if (dist < max) {
        tx = mx * strength;
        ty = my * strength;
      } else {
        tx = 0; ty = 0;
      }
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };
    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      if (Math.abs(tx - cx) < 0.01 && Math.abs(ty - cy) < 0.01) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [strength]);
  return ref;
}

/* ---------- 3D tilt on mouse ---------- */
export function useTilt<T extends HTMLElement>(max = 12) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    let running = false;
    const startLoop = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      tx = -py * max;
      ty = px * max;
      startLoop();
    };
    const onLeave = () => { tx = 0; ty = 0; startLoop(); };
    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.transform = `perspective(1000px) rotateX(${cx}deg) rotateY(${cy}deg)`;
      if (Math.abs(tx - cx) < 0.01 && Math.abs(ty - cy) < 0.01) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);
  return ref;
}

/* ---------- Count up ---------- */
export function useCountUp(target: number, duration = 1.6, decimals = 0, start = 0) {
  const [val, setVal] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obj = { v: start };
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: target,
          duration,
          ease: "power2.out",
          onUpdate: () => setVal(Number(obj.v.toFixed(decimals))),
        });
      },
    });
    return () => st.kill();
  }, [target, duration, decimals, start]);
  return { ref, val };
}

/* ---------- Text scramble on hover ---------- */
const CHARS = "!<>-_\\/[]{}—=+*^?#________";
export function useScramble() {
  const scramble = useCallback((el: HTMLElement) => {
    const original = el.dataset.original ?? el.textContent ?? "";
    if (!el.dataset.original) el.dataset.original = original;
    const from = original;
    const to = el.dataset.original;
    const length = Math.max(from.length, to.length);
    const queue: { from: string; to: string; start: number; end: number; char: string }[] = [];
    for (let i = 0; i < length; i++) {
      const f = from[i] || "";
      const t = to[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queue.push({ from: f, to: t, start, end, char: "" });
    }
    let frame = 0;
    let raf = 0;
    const update = () => {
      let out = "";
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        const q = queue[i];
        const { from: f, to: t, start, end } = q;
        if (frame >= end) {
          complete++;
          out += t;
        } else if (frame >= start) {
          if (!q.char || Math.random() < 0.28) {
            q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          out += `<span class="text-[var(--acid)]">${q.char}</span>`;
        } else {
          out += f;
        }
      }
      el.innerHTML = out;
      if (complete < queue.length) {
        frame++;
        raf = requestAnimationFrame(update);
      }
    };
    cancelAnimationFrame(Number(el.dataset.raf));
    update();
    el.dataset.raf = String(raf);
  }, []);

  const reset = useCallback((el: HTMLElement) => {
    if (el.dataset.original) el.textContent = el.dataset.original;
  }, []);

  return { scramble, reset };
}

/* ---------- Scroll velocity ---------- */
export function useScrollVelocity() {
  const [vel, setVel] = useState(0);
  useEffect(() => {
    let last = window.scrollY;
    let lastTime = performance.now();
    let raf = 0;
    let current = 0;
    const loop = () => {
      const now = performance.now();
      const dt = Math.max(now - lastTime, 1);
      const target = ((window.scrollY - last) / dt) * 16; // px per frame
      current += (target - current) * 0.2;
      last = window.scrollY;
      lastTime = now;
      setVel(current);
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return vel;
}

/* ---------- Reveal on scroll (fade + y) ---------- */
export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!ref.current) return;
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.1, ease: "expo.out", delay }
        );
      },
    });
    return () => st.kill();
  }, [delay]);
  return ref;
}

/* ---------- Clip-path reveal ---------- */
export function useClipReveal<T extends HTMLElement>(variant: "circle" | "h" | "v" = "h", delay = 0) {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const initial =
      variant === "circle"
        ? "circle(0% at 50% 50%)"
        : variant === "h"
        ? "inset(0 100% 0 0)"
        : "inset(100% 0 0 0)";
    gsap.set(ref.current, { clipPath: initial });
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(ref.current, {
          clipPath: "inset(0 0 0 0)",
          duration: 1.4,
          ease: "expo.inOut",
          delay,
        });
      },
    });
    return () => st.kill();
  }, [variant, delay]);
  return ref;
}

/* ---------- Scroll parallax ---------- */
export function useParallax<T extends HTMLElement>(speed = 0.2) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const y = (self.progress - 0.5) * speed * 400;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      },
    });
    return () => st.kill();
  }, [speed]);
  return ref;
}

/* ---------- Scroll skew on text ---------- */
export function useScrollSkew<T extends HTMLElement>(max = 8) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!ref.current) return;
    let skew = 0, target = 0;
    let last = window.scrollY;
    let raf = 0;
    let running = false;
    const loop = () => {
      target = Math.max(-max, Math.min(max, (window.scrollY - last) * 0.05));
      last = window.scrollY;
      skew += (target - skew) * 0.1;
      if (ref.current) ref.current.style.transform = `skewY(${skew}deg)`;
      if (Math.abs(target) < 0.01 && Math.abs(skew) < 0.01) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    const onScroll = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [max]);
  return ref;
}
