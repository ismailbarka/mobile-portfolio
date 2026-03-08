"use client";

import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "1337 Coding School",
    degree: "IT Architect",
    period: "Oct 2022 — Present",
    location: "Khouribga, Morocco",
    description:
      "Part of the 42 Network — a peer-to-peer, project-based coding school with no teachers and no classes. Developed deep expertise in C, C++, algorithms, system programming, and software architecture through hands-on collaborative projects.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-start">
        <div className="mb-16">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-foreground/70 backdrop-blur-md">
            <GraduationCap className="mr-1.5 h-3.5 w-3.5" />
            Education
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where I learned
          </h2>
        </div>

        <div className="w-full flex flex-col gap-12 sm:gap-16">
          {education.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row gap-4 sm:gap-12 w-full transition-all duration-300 p-6 -mx-6 rounded-3xl hover:bg-white/[0.02] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] border border-transparent hover:border-white/5"
            >
              {/* Period - Left Column */}
              <div className="sm:w-1/4 shrink-0 pt-1">
                <p className="text-sm font-medium text-foreground/40 group-hover:text-foreground/70 transition-colors">
                  {item.period}
                </p>
                <p className="text-xs text-foreground/30 mt-1">
                  {item.location}
                </p>
              </div>

              {/* Details - Right Column */}
              <div className="sm:w-3/4 flex flex-col">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                  {item.institution}
                </h3>
                <p className="mt-1 text-base text-foreground/60 font-medium">
                  {item.degree}
                </p>
                <p className="mt-4 text-base text-foreground/50 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
