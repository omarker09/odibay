"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const [mounted, setIsMounted] = useState(null);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          setTheme("dark");
        }}
        className=" p-2 bg-orange-500 "
      >
        Dark
      </button>
      <button
        onClick={() => {
          setTheme("light");
        }}
        className=" p-2 bg-orange-500 "
      >
        light
      </button>
    </div>
  );
}

export default ThemeSwitcher;
