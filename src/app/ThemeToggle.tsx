"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <div className={"mt-3.5 fixed right-10 bottom-10 z-50"}>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={
          "p-2 rounded-full dark:text-white text-neutral-800 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
        }
      >
        {theme === "dark" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
