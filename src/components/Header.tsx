import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">ShelfLife AI</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button size="sm" className="hidden sm:inline-flex">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
