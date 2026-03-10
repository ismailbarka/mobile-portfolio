"use client";

const experience = [
  {
    role: "Lead Full-Stack Developer",
    company: "Aura Prestige",
    period: "Aug 2024 — Present",
    location: "Casablanca, Morocco",
    description:
      "Led full-stack development for client-facing platforms and internal tools, building high-performance cross-platform solutions from the ground up.",
    achievements: [
      "Built the Aura Prestige Platform: high-performance multilingual agency website (Next.js, TypeScript, responsive UI, internationalization, integrated contact/email workflows).",
      "Developed the Domicilia Platform: a cross-platform mobile app (React Native/Expo) with live booking, real-time geolocation, and OTP authentication.",
      "Built a scalable admin dashboard (Next.js) to manage users, providers, services, and bookings.",
      "Architected a NestJS + GraphQL backend with PostgreSQL and background job processing for notifications and scheduled tasks.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Chemp AI",
    period: "May 2025 — Present",
    location: "Spain",
    description:
      "Developing and maintaining the mobile frontend of an AI-powered wellbeing application using React Native (Expo) and TypeScript.",
    achievements: [
      "Built reusable UI components, navigation, authentication flows, and user dashboards with AI-driven conversational features.",
      "Collaborated closely with backend engineers to ensure seamless API integration.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center flex flex-col items-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-foreground/70 backdrop-blur-md">
            Professional Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience
          </h2>
        </div>

        <div className="grid gap-6">
          {experience.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 sm:p-10 overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12">
                {/* Period & Location */}
                <div className="md:w-1/4 shrink-0">
                  <p className="text-sm font-bold text-emerald-400 mb-1">
                    {item.period}
                  </p>
                  <p className="text-xs text-foreground/40 font-medium">
                    {item.location}
                  </p>
                </div>

                {/* Details */}
                <div className="md:w-3/4 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-1 tracking-tight group-hover:text-white transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-base text-foreground/70 font-medium mb-6">
                    {item.company}
                  </p>
                  <p className="text-base text-foreground/50 leading-relaxed max-w-3xl mb-8">
                    {item.description}
                  </p>

                  <ul className="space-y-4">
                    {item.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex gap-4 text-sm text-foreground/50 group-hover:text-foreground/60 transition-colors"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/10 group-hover:bg-emerald-500/50 transition-all" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
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
