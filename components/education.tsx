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
    <section id="education" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center flex flex-col items-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-foreground/70 backdrop-blur-md">
            <GraduationCap className="mr-1.5 h-3.5 w-3.5" />
            Education
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where I learned
          </h2>
        </div>

        <div className="grid gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 sm:p-10 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12">
                {/* Period & Location */}
                <div className="md:w-1/4 shrink-0">
                  <p className="text-sm font-bold text-indigo-400 mb-1">
                    {item.period}
                  </p>
                  <p className="text-xs text-foreground/40 font-medium">
                    {item.location}
                  </p>
                </div>

                {/* Details */}
                <div className="md:w-3/4 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-1 tracking-tight group-hover:text-white transition-colors">
                    {item.institution}
                  </h3>
                  <p className="text-base text-foreground/70 font-medium mb-6">
                    {item.degree}
                  </p>
                  <p className="text-base text-foreground/50 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-t from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
