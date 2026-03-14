import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import DarkVeil from "../components/DarkVeil";
import { ArrowDown } from "lucide-react";
import Stack from "../components/Stack";
import Masonry from "../components/Masonry";
import GradientText from "../components/GradientText";
import { useCallback, useState } from "react";

const placeholderImages = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
];

const masonryItems = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=900&auto=format",
    url: "https://example.com/one",
    height: 460
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=900&auto=format",
    url: "https://example.com/two",
    height: 320
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=900&auto=format",
    url: "https://example.com/three",
    height: 540
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=900&auto=format",
    url: "https://example.com/four",
    height: 360
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=900&auto=format",
    url: "https://example.com/five",
    height: 400
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=900&auto=format",
    url: "https://example.com/six",
    height: 310
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format",
    url: "https://example.com/seven",
    height: 520
  },
  {
    id: "8",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=900&auto=format",
    url: "https://example.com/eight",
    height: 330
  }
];

export const Gallery = () => {
  const [imageRatios, setImageRatios] = useState({});

  const handleImageLoad = useCallback(
    (src) => (event) => {
      const { naturalWidth, naturalHeight } = event.currentTarget;
      if (!naturalWidth || !naturalHeight) return;
      const ratio = naturalWidth / naturalHeight;
      setImageRatios((prev) => (prev[src] ? prev : { ...prev, [src]: ratio }));
    },
    []
  );

  const getImageStyle = useCallback(
    (src) => {
      const ratio = imageRatios[src];

      if (!ratio) {
        return {
          width: "100%",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          display: "block"
        };
      }

      if (ratio >= 1) {
        return {
          width: "100%",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          display: "block"
        };
      }

      return {
        width: "auto",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        display: "block"
      };
    },
    [imageRatios]
  );

  return (
    <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden flex flex-col">
      <ThemeToggle />
      <div className="fixed inset-0 pointer-events-none z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <Navbar />
      <main className="relative z-10 flex-1">
        <section className="pt-32 pb-24 px-4 relative">
          <div className="container mx-auto max-w-[90rem]">
            <div className="bg-card/55 border border-border/55 rounded-2xl p-8 md:p-12 shadow-lg text-left">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                Visuals
              </p>
              <h1 className="mb-4">
                <GradientText
                  colors={["var(--aurora-stop-1)", "var(--aurora-stop-2)", "var(--aurora-stop-3)"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-3xl md:text-5xl font-bold leading-tight"
                >
                  Life Through My Eyes
                </GradientText>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
                A curated collection of moments I&apos;ve captured over the years.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="w-[min(98vw,66rem)] h-[min(92vh,56rem)] min-w-[22rem] min-h-[26rem]">
                <Stack
                  randomRotation={false}
                  sensitivity={200}
                  sendToBackOnClick
                  cards={placeholderImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`placeholder-card-${i + 1}`}
                      onLoad={handleImageLoad(src)}
                      style={getImageStyle(src)}
                    />
                  ))}
                  autoplay={false}
                  autoplayDelay={3000}
                  pauseOnHover={false}
                />
              </div>
            </div>

            <div className="mt-14 flex justify-center">
              <div
                role="button"
                tabIndex={0}
                onClick={() => document.getElementById("visuals-view-all")?.scrollIntoView({ behavior: "smooth" })}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    document.getElementById("visuals-view-all")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex flex-col items-center animate-bounce cursor-pointer select-none"
              >
                <span className="text-sm text-muted-foreground mb-2">View All</span>
                <ArrowDown className="h-5 w-5 text-primary" />
              </div>
            </div>

            <div id="visuals-view-all" className="mt-28 pb-2 mx-auto w-full max-w-[90rem]">
              <Masonry
                items={masonryItems}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover
                hoverScale={0.95}
                blurToFocus
                colorShiftOnHover={false}
              />
            </div>
          </div>
        </section>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
