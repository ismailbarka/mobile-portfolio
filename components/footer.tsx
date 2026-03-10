"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/ismailbarka",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/isbarka/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:ismailbarka82@gmail.com",
    label: "Email",
  },
];

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#featured" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image
                src="/logo.png"
                alt="Ismail Barka Logo"
                width={24}
                height={24}
                className="h-6 w-6 rounded object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-semibold text-foreground tracking-tight">
                Ismail Barka
              </span>
            </Link>
            <p className="text-sm text-foreground/40 text-center md:text-left max-w-xs">
              Building fast, polished mobile apps with React Native &amp; Expo.
            </p>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 text-foreground/40 hover:text-foreground hover:bg-white/5 rounded-full transition-all"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/30 font-medium">
            © {new Date().getFullYear()} Ismail Barka. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-foreground/20">
            <span>Designed with intention</span>
            <span className="h-1 w-1 rounded-full bg-emerald-500/20" />
            <span>Built with Next.js &amp; React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
