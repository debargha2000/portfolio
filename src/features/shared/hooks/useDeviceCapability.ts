import { useMemo } from "react";
import { useMediaQuery } from "./useMediaQuery";

export type DeviceTier = "high" | "medium" | "low";

interface DeviceCapability {
  tier: DeviceTier;
  isTouchDevice: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  /** Whether to enable heavy WebGL effects (InkCanvas, ProjectImage shaders) */
  enableWebGL: boolean;
  /** Whether to enable per-element magnetic/tilt effects */
  enableMouseEffects: boolean;
  /** Max DPR to use for WebGL canvases */
  maxDpr: number;
  /** Whether connection is slow (2g/3g) */
  isSlowConnection: boolean;
}

function getConnectionSpeed(): "slow" | "fast" {
  const nav = navigator as any;
  if (nav.connection) {
    const ect = nav.connection.effectiveType;
    if (ect === "slow-2g" || ect === "2g" || ect === "3g") return "slow";
  }
  return "fast";
}

function computeTier(): DeviceTier {
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as any).deviceMemory || 4; // GB, defaults to 4 if unsupported

  if (cores >= 8 && memory >= 8) return "high";
  if (cores >= 4 && memory >= 4) return "medium";
  return "low";
}

export function useDeviceCapability(): DeviceCapability {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isTouchDevice = useMediaQuery("(hover: none) and (pointer: coarse)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return useMemo(() => {
    const tier = computeTier();
    const isSlowConnection = getConnectionSpeed() === "slow";

    return {
      tier,
      isTouchDevice,
      isMobile,
      prefersReducedMotion,
      enableWebGL: !isMobile && !prefersReducedMotion && tier !== "low",
      enableMouseEffects: !isTouchDevice && !prefersReducedMotion,
      maxDpr: tier === "high" ? 2 : 1.5,
      isSlowConnection,
    };
  }, [isTouchDevice, isMobile, prefersReducedMotion]);
}
