import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition() {
  const location = useLocation();
  const isFirst = useRef(true);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    // Restart the CSS animation by toggling the class.
    // `void el.offsetWidth` forces a reflow so removing + re-adding
    // the class in the same frame actually restarts the animation.
    el.classList.remove("is-running");
    void el.offsetWidth;
    el.classList.add("is-running");

    const onEnd = () => {
      el.classList.remove("is-running");
    };
    el.addEventListener("animationend", onEnd, { once: true });
    return () => {
      el.removeEventListener("animationend", onEnd);
    };
  }, [location.pathname]);

  return <div ref={ref} aria-hidden className="page-curtain" />;
}
