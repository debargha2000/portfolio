import { useState } from "react";
import Preloader from "../motion/Preloader";
import { ErrorBoundary } from "./ErrorBoundary";
import { Layout } from "./Layout";
import CursorOverlay from "../ui/CursorOverlay";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

export function AppShell() {
  const [showApp, setShowApp] = useState(false);
  
  useSmoothScroll();
  
  return (
    <>
      <CursorOverlay />
      {!showApp && <Preloader onComplete={() => setShowApp(true)} />}
      {showApp && (
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      )}
    </>
  );
}
