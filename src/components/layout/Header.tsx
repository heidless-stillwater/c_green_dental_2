
"use client";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation'; // Not strictly needed for single page anchors but good practice

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "AI Tools", href: "#ai-tools" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const pathname = usePathname(); // Example of using pathname if multi-page

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.substring(1)); // Remove #
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback for initial load or if element not found immediately
      // For Next.js Link, if it's a different page, it will navigate.
      // For same-page anchors, this logic helps.
      window.location.hash = sectionId;
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Green Dental</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "transition-colors hover:text-primary",
                // pathname === item.href ? "text-primary" : "text-foreground/60" // For multi-page active state
                 "text-foreground/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeSwitcher />
          {/* Mobile menu could be added here */}
        </div>
      </div>
    </header>
  );
}
