import { useEffect, useRef } from "react";

const TWO_PI = Math.PI * 2;

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const getDefaultSparkColor = () => {
  const rootStyles = getComputedStyle(document.documentElement);
  const primaryHsl = rootStyles.getPropertyValue("--primary").trim();
  return primaryHsl ? `hsl(${primaryHsl})` : "#7c3aed";
};

export const ClickSparkOverlay = ({
  sparkColor,
  sparkSize = 9,
  sparkRadius = 34,
  sparkCount = 10,
  duration = 460
}) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const sparksRef = useRef([]);
  const rafRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mediaQuery.matches;

    const handleMotionPreferenceChange = (event) => {
      reducedMotionRef.current = event.matches;
    };

    mediaQuery.addEventListener("change", handleMotionPreferenceChange);
    return () => mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const resizeCanvas = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      contextRef.current = ctx;
    };

    const renderFrame = (now) => {
      const ctx = contextRef.current;
      if (!ctx) {
        rafRef.current = 0;
        return;
      }

      const width = canvas.width / Math.max(1, window.devicePixelRatio || 1);
      const height = canvas.height / Math.max(1, window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, width, height);

      const activeSparks = [];
      for (const spark of sparksRef.current) {
        const elapsed = now - spark.createdAt;
        const progress = elapsed / spark.duration;
        if (progress >= 1) continue;

        const easedProgress = easeOutCubic(progress);
        const traveled = spark.distance * easedProgress;
        const tailLength = Math.max(1, spark.length * (1 - progress));

        const headX = spark.x + Math.cos(spark.angle) * traveled;
        const headY = spark.y + Math.sin(spark.angle) * traveled;
        const tailX = spark.x + Math.cos(spark.angle) * (traveled - tailLength);
        const tailY = spark.y + Math.sin(spark.angle) * (traveled - tailLength);

        ctx.globalAlpha = 1 - progress;
        ctx.strokeStyle = spark.color;
        ctx.lineWidth = spark.thickness * (1 - progress * 0.4);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();

        activeSparks.push(spark);
      }

      sparksRef.current = activeSparks;

      if (activeSparks.length > 0) {
        rafRef.current = requestAnimationFrame(renderFrame);
      } else {
        rafRef.current = 0;
      }
    };

    const startAnimation = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(renderFrame);
      }
    };

    const spawnSparks = (event) => {
      if (reducedMotionRef.current) return;
      if ("button" in event && event.button !== 0) return;

      const color = sparkColor || getDefaultSparkColor();
      const originX = event.clientX;
      const originY = event.clientY;
      const now = performance.now();
      const randomOffset = Math.random() * TWO_PI;

      for (let i = 0; i < sparkCount; i += 1) {
        const angle = (i / sparkCount) * TWO_PI + randomOffset;
        sparksRef.current.push({
          x: originX,
          y: originY,
          angle: angle + (Math.random() - 0.5) * 0.2,
          distance: sparkRadius * (0.85 + Math.random() * 0.4),
          length: sparkSize * (0.8 + Math.random() * 0.45),
          thickness: Math.max(1, sparkSize * 0.18 * (0.9 + Math.random() * 0.6)),
          createdAt: now,
          duration: duration * (0.85 + Math.random() * 0.25),
          color
        });
      }

      startAnimation();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointerdown", spawnSparks, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointerdown", spawnSparks);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
      sparksRef.current = [];
      const ctx = contextRef.current;
      if (ctx) {
        const width = canvas.width / Math.max(1, window.devicePixelRatio || 1);
        const height = canvas.height / Math.max(1, window.devicePixelRatio || 1);
        ctx.clearRect(0, 0, width, height);
      }
    };
  }, [duration, sparkColor, sparkCount, sparkRadius, sparkSize]);

  return <canvas ref={canvasRef} className="click-spark-canvas" aria-hidden="true" />;
};
