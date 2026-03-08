"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactFormModal } from "@/components/contact-form-modal";

export function Hero() {
  return (
    <section className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="mb-8 inline-flex items-center rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-sm text-foreground/80 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.03)] hover:bg-white/10 transition-colors">
          <span className="mr-2 flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Currently available for new opportunities
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/50 sm:text-7xl lg:text-[6rem] leading-[1.1] pb-2 drop-shadow-sm">
          Building mobile <br />
          <span className="text-foreground/30">experiences.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-foreground/60 leading-relaxed font-light">
          React Native (Expo) developer building fast, scalable mobile apps with
          clean architecture and great user experience.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#featured"
            className="group relative flex items-center justify-center rounded-2xl bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] active:scale-95 duration-300"
          >
            Explore My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <ContactFormModal>
            <button className="group relative flex items-center justify-center rounded-2xl px-8 py-4 text-sm font-medium text-foreground/70 transition-all hover:text-foreground hover:bg-white/5 hover:-translate-y-1 duration-300">
              Contact Me
            </button>
          </ContactFormModal>
        </div>
      </div>
    </section>
  );
}
