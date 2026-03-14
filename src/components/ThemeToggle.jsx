import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;

    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
    } else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDarkMode}
      className={cn(
        "fixed hidden md:flex top-4 right-4 md:right-5 lg:right-6 z-50",
        "items-center justify-between w-24 h-12 p-1 rounded-full transition-all duration-300",
        "focus:outline-none",
        isDarkMode
          ? "bg-[#0a0d12]/88 border border-white/10 shadow-[0_8px_28px_rgba(0,0,0,0.5)]"
          : "bg-[#f2f3f5] border-2 border-[#0b66ff] shadow-[0_6px_22px_rgba(11,102,255,0.3)]"
      )}
    >
      <span className="relative flex w-full h-full items-center justify-between px-2 pointer-events-none">
        <span
          className={cn(
            "absolute top-0 left-0 w-10 h-10 rounded-full transition-transform duration-300",
            isDarkMode
              ? "translate-x-0 bg-[#2d333f] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_6px_14px_rgba(0,0,0,0.45)]"
              : "translate-x-12 bg-[#d8dbe2] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
          )}
        />
        <Moon
          className={cn(
            "relative z-10 h-5 w-5 transition-colors duration-300",
            isDarkMode ? "text-white" : "text-[#131722]"
          )}
        />
        <Sun
          className={cn(
            "relative z-10 h-5 w-5 transition-colors duration-300",
            isDarkMode ? "text-[#8e98ad]" : "text-[#4d5566]"
          )}
        />
      </span>
    </button>
  );
};
