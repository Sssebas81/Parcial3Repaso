"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // cargar tema guardado
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  // cambiar tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
// depende de como tengan la config de su pc lo pueden cambiar en el texto para que se adapte a la config de su pc 
  return (
    <label className="flex items-center gap-2 cursor-pointer">

      Modo calro

      <input
        type="checkbox"
        className="toggle"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />

      Modo oscuro

    </label>
  );
}