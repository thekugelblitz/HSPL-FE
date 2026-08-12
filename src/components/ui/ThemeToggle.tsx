import * as React from "react"
import { Moon, Sun, Monitor, Check } from "lucide-react"

import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"

export function ThemeToggle() {
  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">("system")

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null;
    if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
      setThemeState(savedTheme);
    } else {
      setThemeState("system");
    }
  }, [])

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    
    const root = document.documentElement;
    let isDark = false;
    if (newTheme === "dark") {
      isDark = true;
    } else if (newTheme === "light") {
      isDark = false;
    } else {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 border border-border/40 hover:bg-muted/80 transition-colors">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36 p-1.5 shadow-xl border border-border rounded-xl">
        <DropdownMenuItem 
          onClick={() => handleThemeChange("light")}
          className={`flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${
            theme === "light" 
              ? "bg-primary/10 text-primary font-bold" 
              : "hover:bg-muted text-foreground/80"
          }`}
        >
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-amber-500" />
            <span>Light</span>
          </div>
          {theme === "light" && <Check className="h-3.5 w-3.5 text-primary font-bold shrink-0" />}
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => handleThemeChange("dark")}
          className={`flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${
            theme === "dark" 
              ? "bg-primary/10 text-primary font-bold" 
              : "hover:bg-muted text-foreground/80"
          }`}
        >
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4 text-blue-400" />
            <span>Dark</span>
          </div>
          {theme === "dark" && <Check className="h-3.5 w-3.5 text-primary font-bold shrink-0" />}
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={() => handleThemeChange("system")}
          className={`flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${
            theme === "system" 
              ? "bg-primary/10 text-primary font-bold" 
              : "hover:bg-muted text-foreground/80"
          }`}
        >
          <div className="flex items-center gap-2">
            <Monitor className="h-4 w-4 text-emerald-400" />
            <span>System</span>
          </div>
          {theme === "system" && <Check className="h-3.5 w-3.5 text-primary font-bold shrink-0" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function MobileThemeSegment() {
  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">("system");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null;
    if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
      setThemeState(savedTheme);
    } else {
      setThemeState("system");
    }
  }, []);

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    
    const root = document.documentElement;
    let isDark = false;
    if (newTheme === "dark") {
      isDark = true;
    } else if (newTheme === "light") {
      isDark = false;
    } else {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  return (
    <div className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#0A0A0C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
      <div className="flex items-center gap-2 text-xs font-black text-zinc-900 dark:text-white uppercase tracking-wider">
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-blue-400" />
        ) : theme === "light" ? (
          <Sun className="w-4 h-4 text-amber-500" />
        ) : (
          <Monitor className="w-4 h-4 text-emerald-500" />
        )}
        <span>Theme Mode</span>
      </div>

      <div className="inline-flex items-center p-1 bg-zinc-200/80 dark:bg-zinc-900 rounded-xl border border-zinc-300/60 dark:border-zinc-800 text-xs font-bold gap-1 w-full sm:w-auto justify-between">
        <button
          type="button"
          onClick={() => handleThemeChange("light")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
            theme === "light"
              ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-black"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          }`}
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>Light</span>
        </button>

        <button
          type="button"
          onClick={() => handleThemeChange("dark")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
            theme === "dark"
              ? "bg-blue-600 text-white shadow-xs font-black"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          }`}
        >
          <Moon className="w-3.5 h-3.5 text-blue-300" />
          <span>Dark</span>
        </button>

        <button
          type="button"
          onClick={() => handleThemeChange("system")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
            theme === "system"
              ? "bg-emerald-600 text-white shadow-xs font-black"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          }`}
        >
          <Monitor className="w-3.5 h-3.5 text-emerald-300" />
          <span>System</span>
        </button>
      </div>
    </div>
  );
}
