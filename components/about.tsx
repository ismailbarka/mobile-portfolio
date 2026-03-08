"use client";

import Image from "next/image";
import { MapPin, Calendar, Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center flex flex-col items-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-foreground/70 backdrop-blur-md">
            About Me
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who I am
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          {/* Profile Image */}
          <div className="shrink-0 relative group">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.15)]">
              <Image
                src="/ismail-barka-profile.png"
                alt="Ismail Barka"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/20 to-emerald-500/10 rounded-[2.2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          </div>

          {/* Bio Content */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/5 px-4 py-2 text-sm text-foreground/60">
                <MapPin className="h-4 w-4 text-emerald-400" />
                Casablanca, Morocco
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/5 px-4 py-2 text-sm text-foreground/60">
                <Calendar className="h-4 w-4 text-indigo-400" />
                2+ Years Experience
              </div>
            </div>

            <div className="space-y-4 text-foreground/60 text-base sm:text-lg leading-relaxed">
              <p>
                I build React Native apps with Expo that don't just work—they
                feel fast, polished, and reliable. I care about clean,
                maintainable code and projects structured to scale, so the apps
                I create are easy to extend, debug, and evolve.
              </p>
              <p>
                I love turning ideas into real mobile experiences, tackling both
                UI finesse and engineering challenges. From managing API data to
                optimizing performance and designing smooth interactions, I make
                sure every app looks and feels professional.
              </p>
              <p>
                Beyond code, I focus on problem-solving and craftsmanship—I
                don't just ship features, I build apps that users enjoy and
                teams can maintain. My goal is to combine speed, quality, and
                smart architecture to deliver mobile products that truly work.
              </p>
            </div>

            <a
              href="/Ismail Barka Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center self-start rounded-2xl bg-white/5 border border-white/10 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
