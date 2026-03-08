"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#featured" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <nav
        className={`flex items-center gap-4 rounded-full border px-6 py-3 text-sm font-medium backdrop-blur-xl shadow-2xl transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            : "border-white/5 bg-white/[0.02] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        }`}
      >
        <Link
          href="/"
          className={`flex items-center gap-2 font-semibold transition-colors ${scrolled ? "text-foreground" : "text-foreground hover:text-white"}`}
        >
          <Image
            src="/logo.png"
            alt="Ismail Barka Logo"
            width={24}
            height={24}
            className="h-6 w-6 rounded-md object-contain"
          />
          <span>Ismail Barka</span>
        </Link>
        <div
          className={`h-4 w-px mx-2 ${scrolled ? "bg-white/10" : "bg-white/10"}`}
        />
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors text-foreground/60 hover:text-foreground`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1 ml-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            asChild
          >
            <a
              href="https://github.com/ismailbarka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground hover:bg-white/10 p-2 rounded-full transition-colors flex items-center justify-center"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/isbarka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground hover:bg-white/10 p-2 rounded-full transition-colors flex items-center justify-center"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </nav>
    </div>
  );
}
