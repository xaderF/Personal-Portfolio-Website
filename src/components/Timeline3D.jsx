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
  secondaryColor = defaultColors.secondary,
  accentColor = defaultColors.accent,
  showImages = true,
  className = ""
}) {
  const [activeEvent, setActiveEvent] = useState(null);
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
      className={`w-full overflow-hidden ${backgroundClassName} ${className}`}
    >
      <div className="relative max-w-[90rem] mx-auto px-1 md:px-3">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 7 }).map((_, index) => (
            <motion.div
              key={`timeline-sphere-${index}`}
              className="absolute rounded-full opacity-20"
              style={{
                background: index % 2 === 0 ? primaryColor : secondaryColor,
                width: `${40 + index * 18}px`,
                height: `${40 + index * 18}px`,
                filter: "blur(10px)"
              }}
              animate={{
                x: [`${10 + index * 8}%`, `${20 + index * 9}%`, `${12 + index * 7}%`],
                y: [`${8 + index * 10}%`, `${18 + index * 8}%`, `${28 + index * 7}%`]
              }}
              transition={{
                duration: 14 + index * 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
          ))}
        </div>

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

            return (
              <motion.div
                key={event.id}
                className={`relative mb-14 pl-14 md:pl-0 md:w-[52%] ${
                  isEven ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
                }`}
                initial={{ opacity: 0, x: isEven ? 50 : -50, y: 18 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <div
                  className={`absolute top-4 left-5 md:left-auto md:top-5 z-20 ${
                    isEven ? "md:left-0 md:-translate-x-1/2" : "md:right-0 md:translate-x-1/2"
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

                <motion.div
                  className={`rounded-2xl border border-border/55 bg-card/65 overflow-hidden shadow-lg ${
                    isEven ? "md:ml-4" : "md:mr-4"
                  }`}
                  onMouseEnter={() => setActiveEvent(event.id)}
                  onMouseLeave={() => setActiveEvent(null)}
                  whileHover={{ y: -5, x: isEven ? 4 : -4 }}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `perspective(1000px) rotateY(${mousePosition.x * (isEven ? -2.8 : 2.8)}deg) rotateX(${mousePosition.y * -2.8}deg)`
                  }}
                >
                  {showImages && event.image ? (
                    <div className="relative h-52 md:h-56 overflow-hidden">
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: activeEvent === event.id ? 1.05 : 1,
                          y: activeEvent === event.id ? -8 : 0
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      {event.category ? (
                        <span
                          className="absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white"
                          style={{ background: accentColor }}
                        >
                          {event.category}
                        </span>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="p-6 md:p-7">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs md:text-sm uppercase tracking-[0.12em] text-primary font-semibold">
                        {event.date}
                      </span>
                      <motion.span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: nodeColor }}
                        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.35, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                      />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-1.5">{event.title}</h3>
                    <AnimatePresence initial={false}>
                      {activeEvent === event.id ? (
                        <motion.div
                          key={`${event.id}-desc`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.26 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm md:text-base text-muted-foreground mt-2 leading-relaxed">
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
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
