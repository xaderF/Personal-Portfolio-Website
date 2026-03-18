import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import { Gallery } from "./pages/Gallery";
import { Experiences } from "./pages/Experiences";
import { Skills } from "./pages/Skills";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { ClickSparkOverlay } from "@/components/ClickSparkOverlay";

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
      <Toaster /> 
      <BrowserRouter>
        <RouteScrollManager />
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="resume" element={<Resume />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
