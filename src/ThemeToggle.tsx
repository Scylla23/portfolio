import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check localStorage or fallback to dark mode
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full border border-[#94a3b8] 
                 bg-[#1e293b] dark:bg-[#f8fafc] transition-all duration-200 hover:scale-110 z-50"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-[#0f172a]" />
      ) : (
        <Moon className="h-5 w-5 text-[#f1f5f9]" />
      )}
    </button>
  );
}
