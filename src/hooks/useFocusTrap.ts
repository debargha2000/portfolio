import { useEffect, RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active || !ref.current) return;
    const root = ref.current;
    const previouslyFocused = document.activeElement as HTMLElement;

    const focusables = () => Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE));

    // Slight delay to allow animation to complete before grabbing focus
    const timer = setTimeout(() => {
      focusables()[0]?.focus();
    }, 100);

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const elements = focusables();
      if (elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    };

    root.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      root.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [active, ref]);
}
