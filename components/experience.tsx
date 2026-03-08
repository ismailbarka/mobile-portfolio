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
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-start">
        <div className="mb-16">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-foreground/70 backdrop-blur-md">
            Professional Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience
          </h2>
        </div>

        <div className="w-full flex flex-col gap-12 sm:gap-16">
          {experience.map((item, index) => (
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
                <h3 className="text-xl font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                  {item.role}
                </h3>
                <p className="mt-1 text-base text-foreground/60 font-medium">
                  {item.company}
                </p>
                <p className="mt-4 text-base text-foreground/50 leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm text-foreground/50 group-hover:text-foreground/60 transition-colors"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20 group-hover:bg-purple-500/50 transition-colors" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
