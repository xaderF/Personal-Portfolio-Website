import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const defaultColors = {
  background: "",
  primary: "#4f46e5",
  secondary: "#7c3aed",
  accent: "#10b981"
};

export default function Timeline3D({
  events,
  backgroundClassName = defaultColors.background,
  primaryColor = defaultColors.primary,
  accentColor = defaultColors.accent,
  showImages = true,
  className = ""
}) {
  const [activeEvent, setActiveEvent] = useState(null);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [failedImages, setFailedImages] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((event.clientY - rect.top) / rect.height) * 2 - 1
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const resolveProjectCTA = (event) => {
    const projectTypes = new Set([
      "hackathon",
      "project",
      "large-project",
      "product-shipment",
      "shipped-product"
    ]);

    if (!projectTypes.has(event.type)) return null;

    if (event.projectSlug) {
      return {
        label: "View Project",
        href: `/projects#${event.projectSlug}`
      };
    }

    return { label: "View Project", href: "/projects" };
  };

  return (
    <div
      ref={containerRef}
      className={`w-full ${backgroundClassName} ${className}`}
    >
      <div className="relative max-w-[96rem] mx-auto px-4 md:px-10">
        <motion.h2
          className="relative z-10 text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          3D Interactive Timeline
        </motion.h2>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-5 md:left-1/2 md:-translate-x-1/2 w-1 rounded-full"
            style={{ background: primaryColor }}
          />

          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            const nodeColor = event.color || primaryColor;
            const cta = resolveProjectCTA(event);
            const isExpanded = hoveredEvent === event.id || activeEvent === event.id;

            return (
              <motion.div
                key={event.id}
                className={`relative mb-14 pl-14 md:pl-0 md:w-1/2 ${
                  isEven ? "md:ml-auto" : "md:mr-auto"
                }`}
                initial={{ opacity: 0, x: isEven ? 50 : -50, y: 18 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <div
                  className={`hidden md:flex absolute top-5 h-10 z-20 items-center ${
                    isEven ? "right-full mr-4" : "left-full ml-4"
                  }`}
                >
                  {isEven ? (
                    <>
                      <span className="text-primary text-lg md:text-xl font-semibold whitespace-nowrap tracking-tight">
                        {event.date}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-primary text-lg md:text-xl font-semibold whitespace-nowrap tracking-tight">
                        {event.date}
                      </span>
                    </>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => setHoveredEvent(event.id)}
                  onMouseLeave={() => setHoveredEvent((current) => (current === event.id ? null : current))}
                >
                  <div
                    className={`hidden md:block absolute top-5 z-30 ${
                      isEven ? "left-0 translate-x-6" : "right-0 -translate-x-6"
                    }`}
                  >
                    <motion.button
                      type="button"
                      className="w-10 h-10 rounded-full border-4 border-background text-white font-semibold flex items-center justify-center"
                      style={{ background: nodeColor }}
                      whileHover={{ scale: 1.12 }}
                      onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
                    >
                      {index + 1}
                    </motion.button>
                  </div>

                  <div className="absolute top-4 left-5 z-20 md:hidden">
                    <motion.button
                      type="button"
                      className="w-10 h-10 rounded-full border-4 border-background text-white font-semibold flex items-center justify-center"
                      style={{ background: nodeColor }}
                      whileHover={{ scale: 1.12 }}
                      onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
                    >
                      {index + 1}
                    </motion.button>
                  </div>

                  <motion.div
                    className={`relative rounded-2xl border border-border/70 bg-card/65 overflow-hidden shadow-lg min-h-[22rem] md:min-h-[24rem] md:w-[84%] ${
                      isEven ? "md:ml-28" : "md:mr-28"
                    }`}
                  whileHover={{ y: -5, x: isEven ? 4 : -4 }}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `perspective(1000px) rotateY(${mousePosition.x * (isEven ? -2.8 : 2.8)}deg) rotateX(${mousePosition.y * -2.8}deg)`
                  }}
                >
                  {showImages ? (
                    <motion.div
                      className="absolute inset-x-0 top-0 h-52 md:h-56 overflow-hidden pointer-events-none"
                      animate={isExpanded ? { y: "-110%", opacity: 0 } : { y: "0%", opacity: 1 }}
                      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {event.image && !failedImages[event.id] ? (
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          onError={() =>
                            setFailedImages((prev) => ({
                              ...prev,
                              [event.id]: true
                            }))
                          }
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </motion.div>
                  ) : null}

                  <motion.div
                    className="relative z-10 p-6 md:p-7"
                    animate={
                      showImages && event.image
                        ? isExpanded
                          ? { paddingTop: 24 }
                          : { paddingTop: 232 }
                        : undefined
                    }
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs md:text-sm uppercase tracking-[0.12em] text-primary font-semibold">
                        {event.date}
                      </span>
                      <div className="flex items-center gap-3">
                        {event.category ? (
                          <span
                            className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white"
                            style={{ background: accentColor }}
                          >
                            {event.category}
                          </span>
                        ) : null}
                        <motion.span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: nodeColor }}
                          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.35, 1] }}
                          transition={{ duration: 1.8, repeat: Infinity }}
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-1.5">{event.title}</h3>
                    <AnimatePresence initial={false}>
                      {isExpanded ? (
                        <motion.div
                          key={`${event.id}-desc`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.26 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm md:text-base text-muted-foreground mt-2 leading-relaxed whitespace-pre-line">
                            {event.description}
                          </p>
                          {cta ? (
                            <a
                              href={cta.href}
                              className="inline-block mt-4 rounded-lg px-3.5 py-2 text-sm font-medium text-white"
                              style={{ background: primaryColor }}
                            >
                              {cta.label}
                            </a>
                          ) : null}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
