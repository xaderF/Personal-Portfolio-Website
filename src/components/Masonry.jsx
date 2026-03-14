import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Masonry.css";

const useMedia = (queries, values, defaultValue) => {
  const getValue = () => values[queries.findIndex((query) => matchMedia(query).matches)] ?? defaultValue;
  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    queries.forEach((query) => matchMedia(query).addEventListener("change", handler));
    return () => queries.forEach((query) => matchMedia(query).removeEventListener("change", handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const ITEM_HEIGHT_DIVISOR = 1.45;

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false
}) => {
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)", "(min-width: 400px)"],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const getInitialPosition = (item) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const directions = ["top", "bottom", "left", "right"];
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map((item) => item.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo(() => {
    if (!width) return [];

    const columnHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    return items.map((item) => {
      const column = columnHeights.indexOf(Math.min(...columnHeights));
      const x = columnWidth * column;
      const h = item.height / ITEM_HEIGHT_DIVISOR;
      const y = columnHeights[column];

      columnHeights[column] += h;

      return { ...item, x, y, w: columnWidth, h };
    });
  }, [columns, items, width]);

  const contentHeight = useMemo(
    () => (grid.length ? Math.max(...grid.map((item) => item.y + item.h)) : 0),
    [grid]
  );

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus ? { filter: "blur(10px)" } : {})
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus ? { filter: "blur(0px)" } : {}),
          duration: 0.8,
          ease: "power3.out",
          delay: index * stagger
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration,
          ease,
          overwrite: "auto"
        });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (event, item) => {
    const element = event.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) {
        gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
      }
    }
  };

  const handleMouseLeave = (event, item) => {
    const element = event.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) {
        gsap.to(overlay, { opacity: 0, duration: 0.3 });
      }
    }
  };

  const closeLightbox = () => setActiveIndex(null);
  const openLightboxAt = (index) => setActiveIndex(index);
  const showPrev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + grid.length) % grid.length;
    });
  };
  const showNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % grid.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, grid.length]);

  return (
    <>
      <div ref={containerRef} className="list" style={{ height: contentHeight ? `${contentHeight}px` : undefined }}>
        {grid.map((item, index) => (
          <div
            key={item.id}
            data-key={item.id}
            className="item-wrapper"
            onClick={() => openLightboxAt(index)}
            onMouseEnter={(event) => handleMouseEnter(event, item)}
            onMouseLeave={(event) => handleMouseLeave(event, item)}
          >
            <div className="item-img" style={{ backgroundImage: `url(${item.img})` }}>
              {colorShiftOnHover ? (
                <div
                  className="color-overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))",
                    opacity: 0,
                    pointerEvents: "none",
                    borderRadius: "10px"
                  }}
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && grid[activeIndex] ? (
        <div className="masonry-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="masonry-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button className="masonry-lightbox-close" type="button" onClick={closeLightbox} aria-label="Close image">
              <X size={24} />
            </button>

            <button className="masonry-lightbox-nav masonry-lightbox-nav--left" type="button" onClick={showPrev} aria-label="Previous image">
              <ChevronLeft size={28} />
            </button>

            <img
              src={grid[activeIndex].img}
              alt={`Expanded view ${activeIndex + 1}`}
              className="masonry-lightbox-image"
            />

            <button className="masonry-lightbox-nav masonry-lightbox-nav--right" type="button" onClick={showNext} aria-label="Next image">
              <ChevronRight size={28} />
            </button>

            <div className="masonry-lightbox-thumbs">
              {grid.map((item, index) => (
                <button
                  key={`${item.id}-thumb`}
                  className={`masonry-lightbox-thumb ${index === activeIndex ? "is-active" : ""}`}
                  type="button"
                  onClick={() => openLightboxAt(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={item.img} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Masonry;
