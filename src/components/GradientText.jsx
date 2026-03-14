import { useMemo } from "react";
import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  animationSpeed = 8,
  showBorder = false,
  direction = "horizontal",
  pauseOnHover = false,
  yoyo = true
}) {
  const gradientAngle =
    direction === "horizontal" ? "to right" : direction === "vertical" ? "to bottom" : "to bottom right";

  const gradientColors = useMemo(() => [...colors, colors[0]].join(", "), [colors]);

  const backgroundSize =
    direction === "horizontal" ? "300% 100%" : direction === "vertical" ? "100% 300%" : "300% 300%";

  const style = {
    "--gradient-image": `linear-gradient(${gradientAngle}, ${gradientColors})`,
    "--gradient-size": backgroundSize,
    "--gradient-duration": `${animationSpeed}s`,
    "--gradient-direction": yoyo ? "alternate" : "normal"
  };

  return (
    <div
      style={style}
      className={[
        "animated-gradient-text",
        showBorder ? "with-border" : "",
        pauseOnHover ? "pause-on-hover" : "",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {showBorder ? <div className="gradient-overlay" /> : null}
      <span className="text-content">{children}</span>
    </div>
  );
}
