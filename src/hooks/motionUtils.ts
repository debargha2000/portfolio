import { useEffect, useLayoutEffect, useRef, useCallback } from "react";

/* ─── Shared mouse position (single global listener instead of N) ─── */
const mousePos = { x: 0, y: 0 };
let mouseListenerAttached = false;
function attachMouseListener() {
  if (mouseListenerAttached) return;
  mouseListenerAttached = true;
  window.addEventListener(
    "mousemove",
    (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    },
    { passive: true }
  );
}
function useSharedMouse() {
  useEffect(() => {
    attachMouseListener();
  }, []);
  return mousePos;
}

/* ─── Shared helpers ─── */
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function noHover(): boolean {
  return window.matchMedia("(hover: none)").matches;
}

/** Shared IntersectionObserver one-shot: adds `is-visible` class when element enters viewport */
function useScrollObserver<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  rootMargin = "0px 0px -15% 0px"
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, rootMargin]);
}

/* ---------- Count up (also replaces useNumberFlip) ---------- */
export function useCountUp(
  target: number,
  duration = 1.6,
  decimals = 0,
  start = 0,
  prefix = "",
  suffix = ""
) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    if (prefersReducedMotion()) {
      ref.current.textContent = prefix + Number(target.toFixed(decimals)).toLocaleString() + suffix;
      return;
    }
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = performance.now();
          const loop = (now: number) => {
            const progress = Math.min((now - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = start + (target - start) * eased;
            if (ref.current)
              ref.current.textContent =
                prefix + Number(current.toFixed(decimals)).toLocaleString() + suffix;
            if (progress < 1) raf = requestAnimationFrame(loop);
          };
          raf = requestAnimationFrame(loop);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration, decimals, start, prefix, suffix]);
  return { ref };
}

/** useNumberFlip — thin wrapper over useCountUp for integer pad display */
export function useNumberFlip(target: number, duration = 1.5) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    if (prefersReducedMotion()) {
      ref.current.textContent = String(target);
      return;
    }
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = performance.now();
          const loop = (now: number) => {
            const progress = Math.min((now - startTime) / (duration * 1000), 1);
            const current = Math.floor((1 - Math.pow(1 - progress, 3)) * target);
            if (ref.current)
              ref.current.textContent = String(current).padStart(String(target).length, "0");
            if (progress < 1) raf = requestAnimationFrame(loop);
          };
          raf = requestAnimationFrame(loop);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);
  return { ref };
}

/* ---------- Reveal on scroll (fade + y) ---------- */
export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    el.classList.add("reveal-fade");
    if (delay) el.style.transitionDelay = `${delay}s`;
  }, [delay]);
  useScrollObserver(ref, "0px 0px -12% 0px");
  return ref;
}

/* ---------- Clip-path reveal (circle / h / v) ---------- */
export function useClipReveal<T extends HTMLElement>(
  variant: "circle" | "h" | "v" = "h",
  delay = 0
) {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const cls =
      variant === "circle" ? "reveal-circle" : variant === "h" ? "reveal-clip-h" : "reveal-clip-v";
    el.classList.add(cls);
    if (delay) el.style.transitionDelay = `${delay}s`;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [variant, delay]);
  return ref;
}

/* ---------- Magnetic ---------- */
export function useMagnetic<T extends HTMLElement>(strength = 0.175) {
  const ref = useRef<T>(null);
  const mouse = useSharedMouse();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || noHover()) return;

    let raf = 0,
      tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      running = false;
    let rect: DOMRect | null = null,
      lastScroll = window.scrollY,
      isVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (!isVisible) {
          tx = ty = 0;
          if (running) {
            running = false;
            cancelAnimationFrame(raf);
          }
          el.style.transform = "";
        }
      },
      { rootMargin: "50px" }
    );
    observer.observe(el);

    const loop = () => {
      if (!isVisible) {
        running = false;
        return;
      }
      if (!rect || Math.abs(window.scrollY - lastScroll) > 10) {
        rect = el.getBoundingClientRect();
        lastScroll = window.scrollY;
      }
      const mx = mouse.x - (rect.left + rect.width / 2),
        my = mouse.y - (rect.top + rect.height / 2);
      const dist = Math.hypot(mx, my),
        max = Math.max(rect.width, rect.height);
      if (dist < max) {
        tx = mx * strength;
        ty = my * strength;
      } else {
        tx = ty = 0;
      }
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      if (Math.abs(tx - cx) < 0.01 && Math.abs(ty - cy) < 0.01) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const checkInterval = setInterval(() => {
      if (isVisible && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    }, 100);
    return () => {
      clearInterval(checkInterval);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [strength, mouse]);
  return ref;
}

/* ---------- 3D tilt on mouse ---------- */
export function useTilt<T extends HTMLElement>(max = 6) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || noHover()) return;

    let raf = 0,
      tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      running = false;
    let rect: DOMRect | null = null,
      lastScroll = window.scrollY;

    const startLoop = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };
    const onMove = (e: MouseEvent) => {
      if (!rect || Math.abs(window.scrollY - lastScroll) > 10) {
        rect = el.getBoundingClientRect();
        lastScroll = window.scrollY;
      }
      tx = -((e.clientY - rect.top) / rect.height - 0.5) * max;
      ty = ((e.clientX - rect.left) / rect.width - 0.5) * max;
      startLoop();
    };
    const onLeave = () => {
      tx = ty = 0;
      startLoop();
    };
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

/* ---------- Text scramble on hover ---------- */
const CHARS = "!<>-_\\/[]{}—=+*^?#________";
export function useScramble() {
  const scramble = useCallback((el: HTMLElement) => {
    if (prefersReducedMotion()) return;
    const original = el.dataset.original ?? el.textContent ?? "";
    if (!el.dataset.original) el.dataset.original = original;
    const to = el.dataset.original;
    const length = Math.max(original.length, to.length);
    const queue: { from: string; to: string; start: number; end: number; char: string }[] = [];
    for (let i = 0; i < length; i++) {
      const start = Math.floor(Math.random() * 20),
        end = start + Math.floor(Math.random() * 20);
      queue.push({ from: original[i] || "", to: to[i] || "", start, end, char: "" });
    }
    let frame = 0,
      raf = 0;
    const update = () => {
      let complete = 0;
      const fragment = document.createDocumentFragment();
      for (const q of queue) {
        if (frame >= q.end) {
          complete++;
          fragment.appendChild(document.createTextNode(q.to));
        } else if (frame >= q.start) {
          if (!q.char || Math.random() < 0.28)
            q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          const span = document.createElement("span");
          span.className = "text-[var(--acid)]";
          span.textContent = q.char;
          fragment.appendChild(span);
        } else {
          fragment.appendChild(document.createTextNode(q.from));
        }
      }
      el.replaceChildren(fragment);
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

/* ---------- Scroll parallax ---------- */
export function useParallax<T extends HTMLElement>(speed = 0.2) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      el.style.transform = `translate3d(0, ${(rect.top + rect.height / 2 - window.innerHeight / 2) * speed}px, 0)`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [speed]);
  return ref;
}

/* ---------- Scroll skew on text ---------- */
export function useScrollSkew<T extends HTMLElement>(max = 8) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let raf = 0,
      lastScroll = window.scrollY,
      skew = 0;
    const update = () => {
      const scroll = window.scrollY;
      skew += (Math.max(-max, Math.min(max, (scroll - lastScroll) * -0.05)) - skew) * 0.1;
      lastScroll = scroll;
      el.style.transform = `skewY(${skew}deg)`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [max]);
  return ref;
}
