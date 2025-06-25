"use client";
import React, { type PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
const DynamicThemeToggle = dynamic(
  () => import("./ThemeToggle").then((mod) => mod.ThemeToggle),
  { ssr: false },
);
export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
      {children}

      <DynamicThemeToggle />
    </ThemeProvider>
  );
}

export default Providers;
