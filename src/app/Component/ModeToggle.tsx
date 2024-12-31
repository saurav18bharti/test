"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { CgMoon } from "react-icons/cg";
import { SiUnacademy } from "react-icons/si";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents SSR mismatches

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="fixed cursor-pointer bottom-0 right-8 mb-8 z-[100] group" aria-label="Toggle theme">
      <div className="relative p-2 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transform transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
        <div className="relative">
          <SiUnacademy className="w-6 h-6 text-amber-500 transition-all duration-500 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
          <CgMoon className="w-6 h-6 text-blue-500 transition-all duration-500 rotate-90 scale-0 absolute top-0 dark:rotate-0 dark:scale-100" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-200 to-amber-100 dark:from-blue-200 dark:to-blue-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
      </div>
    </button>
  );
}
