"use client";

const skillCategories = [
  {
    category: "Mobile Development",
    description: "Expert in cross-platform mobile engineering.",
    skills: [
      "React Native",
      "Expo",
      "NativeWind",
      "Reanimated",
      "Gesture Handler",
      "EAS Build",
    ],
  },
  {
    category: "Frontend & Languages",
    description: "Strong fundamentals across the stack.",
    skills: ["React", "JavaScript", "TypeScript", "C", "C++", "Next.js"],
  },
  {
    category: "Backend & APIs",
    description: "Building scalable server-side solutions.",
    skills: [
      "NestJS",
      "GraphQL",
      "Firebase",
      "PostgreSQL",
      "REST APIs",
      "Firebase Analytics",
    ],
  },
  {
    category: "Tooling & DevOps",
    description: "Clean workflows and developer experience.",
    skills: ["Git", "Husky", "ESLint", "GitHub Actions", "CI/CD", "Figma"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 border-t border-white/5 relative overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center flex flex-col items-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-foreground/70 backdrop-blur-md text-emerald-400">
            Technical Arsenal
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technologies I work with
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((group, index) => (
            <div
              key={index}
              className="group relative rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
                  {group.category}
                </h3>
                <p className="text-foreground/50 text-sm mb-6">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center rounded-xl bg-white/5 px-3 py-1.5 text-sm font-medium text-foreground/80 transition-all group-hover:bg-white/10 group-hover:text-foreground border border-transparent group-hover:border-white/5"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle hover background radial glow */}
              <div className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 sm:p-10 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8 transition-all hover:bg-white/[0.03] hover:border-white/10">
          <div className="z-10 absolute -right-32 -top-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
              Full-Stack Mobile Architecture
            </h3>
            <p className="text-foreground/60 text-base leading-relaxed">
              Beyond individual frameworks, I specialize in building end-to-end
              mobile ecosystems — from React Native apps with smooth 60FPS
              interactions, to GraphQL backends and admin dashboards that keep
              everything running seamlessly at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
