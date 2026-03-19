import { useEffect, useRef, useState } from "react";

const formatLatency = (value) => (value == null ? "--" : `${Math.max(0, Math.round(value))}ms`);
const formatFps = (value) => `${Math.max(0, Math.round(value))}`;

export const PerformanceStats = () => {
  const [fps, setFps] = useState(0);
  const [latency, setLatency] = useState(null);
  const rafRef = useRef(0);
  const frameCountRef = useRef(0);
  const fpsWindowStartRef = useRef(0);

  useEffect(() => {
    let mounted = true;
    let latencyInterval = 0;

    const tick = (timestamp) => {
      if (!fpsWindowStartRef.current) {
        fpsWindowStartRef.current = timestamp;
      }

      frameCountRef.current += 1;
      const elapsed = timestamp - fpsWindowStartRef.current;

      if (elapsed >= 500) {
        const instantFps = (frameCountRef.current * 1000) / elapsed;
        setFps((prev) => (prev === 0 ? instantFps : prev * 0.65 + instantFps * 0.35));
        frameCountRef.current = 0;
        fpsWindowStartRef.current = timestamp;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const stopLoop = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    };

    const sampleLatency = async () => {
      if (document.hidden) return;

      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection?.rtt && Number.isFinite(connection.rtt) && connection.rtt > 0) {
        setLatency(connection.rtt);
        return;
      }

      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 4500);
      const startedAt = performance.now();

      try {
        await fetch(window.location.origin, {
          method: "HEAD",
          cache: "no-store",
          signal: controller.signal,
        });
        if (!mounted) return;
        setLatency(performance.now() - startedAt);
      } catch {
        const navEntry = performance.getEntriesByType("navigation")[0];
        if (!mounted) return;
        if (navEntry && navEntry.responseStart > navEntry.requestStart) {
          setLatency(navEntry.responseStart - navEntry.requestStart);
        } else {
          setLatency(null);
        }
      } finally {
        window.clearTimeout(timeoutId);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
        sampleLatency();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startLoop();
    sampleLatency();
    latencyInterval = window.setInterval(sampleLatency, 20000);

    return () => {
      mounted = false;
      stopLoop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.clearInterval(latencyInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[60] pointer-events-none text-xs font-medium text-foreground/85 [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-3">
        <span>FPS: {formatFps(fps)}</span>
        <span>Latency: {formatLatency(latency)}</span>
      </div>
    </div>
  );
};

export default PerformanceStats;
