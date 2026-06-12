import { useEffect, useState, useCallback, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Preloader from "./components/Preloader";
import { usePreloader } from "./hooks/usePreloader";
import { PreloaderProvider } from "./context/PreloaderContext";

import Home from "./pages/Home";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import Studio from "./pages/Studio";
import Process from "./pages/Process";
import Contact from "./pages/Contact";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [location.pathname]);
  return null;
}

function ScrollProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      ref.current.style.transform = `scaleX(${Math.max(0, Math.min(1, p))})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div ref={ref} className="scroll-progress" />;
}

function AppShell() {
  const {
    progress,
    isComplete,
    start,
    heroVideoResult,
    failedTasks,
    retryFailed
  } = usePreloader();
  
  const [showApp, setShowApp] = useState(false);
  const [preloaderMounted, setPreloaderMounted] = useState(false);
  
  useEffect(() => {
    setPreloaderMounted(true);
    start();
  }, [start]);
  
  // Initialize Lenis once on mount
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    
    return () => {
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);
  
  // Show app after preloader completes
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setShowApp(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);
  
  const handlePreloaderDone = useCallback(() => {
    // Preloader exit animation complete - app stays visible
  }, []);
  
  return (
    <>
      <Cursor />
      <ScrollProgressBar />
      {preloaderMounted && (
        <Preloader 
          progress={progress} 
          isComplete={isComplete}
          onDone={handlePreloaderDone}
          failedTasks={failedTasks}
          onRetry={retryFailed}
        />
      )}
      {showApp && (
        <PreloaderProvider heroVideoResult={heroVideoResult}>
          <Nav />
          <div className="grain" />
          <PageTransition />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </PreloaderProvider>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}