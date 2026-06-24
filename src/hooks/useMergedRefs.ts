import type { Ref, RefCallback } from "react";

/**
 * Combine multiple refs into one callback ref.
 * Useful when a component needs to attach several hooks to the same DOM node.
 */
export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>): RefCallback<T> {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref && "current" in ref) {
        (ref as { current: T | null }).current = node;
      }
    });
  };
}
