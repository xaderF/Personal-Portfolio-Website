import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useChromaGridEffect = ({
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out"
} = {}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const element = rootRef.current;
    if (!element) {
      return;
    }

    setX.current = gsap.quickSetter(element, "--x", "px");
    setY.current = gsap.quickSetter(element, "--y", "px");

    const { width, height } = element.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = useCallback((x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  }, [damping, ease]);

  const handleGridPointerMove = useCallback((event) => {
    const element = rootRef.current;
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    moveTo(event.clientX - rect.left, event.clientY - rect.top);
    if (fadeRef.current) {
      gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    }
  }, [moveTo]);

  const handleGridPointerLeave = useCallback(() => {
    if (fadeRef.current) {
      gsap.to(fadeRef.current, {
        opacity: 1,
        duration: fadeOut,
        overwrite: true
      });
    }
  }, [fadeOut]);

  const handleCardPointerMove = useCallback((event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return {
    rootRef,
    fadeRef,
    handleGridPointerMove,
    handleGridPointerLeave,
    handleCardPointerMove
  };
};
