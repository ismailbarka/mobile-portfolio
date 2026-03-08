import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data/projects";

// In Next.js 15+, params is a promise
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black dark:bg-[#050505] text-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link
            href="/#featured"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <article className="pb-24">
        {/* Project Header */}
        <header className="pt-24 pb-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-md">
            {project.category}
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl sm:text-2xl text-white/60 max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech Stack Tags */}
          <div className="mt-10 flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-lg bg-[#111] border border-white/10 px-3 py-2 text-sm text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Content Section */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Description */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-8">
              Project Overview
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              {project.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Sidebar / Key Features */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 rounded-3xl bg-[#111] border border-white/5 p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-white/60">
                    <span className="mr-3 text-white/20 mt-1">•</span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-white tracking-tight">
              Interface Showcase
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.images.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[9/19] bg-transparent overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 rounded-[2rem]"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* Small footer */}
      <footer className="border-t border-white/5 py-12 text-center">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Ismail Barka. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
