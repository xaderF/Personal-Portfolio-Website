import { Suspense, lazy, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ClickSparkOverlay } from "@/components/ClickSparkOverlay";
import { PerformanceStats } from "@/components/PerformanceStats";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Resume = lazy(() => import("./pages/Resume"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Experiences = lazy(() => import("./pages/Experiences"));
const Skills = lazy(() => import("./pages/Skills"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return undefined;

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <>
      <ClickSparkOverlay />
      <PerformanceStats />
      <Toaster /> 
      <BrowserRouter>
        <RouteScrollManager />
        <Suspense fallback={null}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="resume" element={<Resume />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
