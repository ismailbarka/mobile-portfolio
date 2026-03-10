"use client";

import { useState, useCallback, useEffect } from "react";
import {
  ArrowRight,
  Smartphone,
  Globe,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from "@/lib/data/projects";

type FilterType = "all" | "mobile" | "web";

export function Featured() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    const isMobile =
      project.category.toLowerCase().includes("mobile") ||
      project.category.toLowerCase().includes("native");
    return filter === "mobile" ? isMobile : !isMobile;
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Re-init carousel when filter changes
  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [filter, emblaApi]);

  const categories = [
    { id: "all", label: "All", icon: LayoutGrid },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "web", label: "Web", icon: Globe },
  ];

  return (
    <section
      id="featured"
      className="py-24 sm:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-foreground/70 backdrop-blur-md"
          >
            Selected Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Production Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-foreground/50 max-w-2xl"
          >
            A high-fidelity showcase of scalable applications engineered for
            performance and exceptional user experience.
          </motion.p>
        </div>

        {/* Minimal Filter Tabs - Centered to match header */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 rounded-xl bg-white/5 border border-white/5 backdrop-blur-xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as FilterType)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-white text-black"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                <cat.icon size={14} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroller */}
        <div className="relative group/embla">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex gap-6 py-4">
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredProjects.map((project) => {
                  const isMobile =
                    project.category.toLowerCase().includes("mobile") ||
                    project.category.toLowerCase().includes("native");

                  return (
                    <motion.div
                      key={project.slug}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="flex-[0_0_280px] sm:flex-[0_0_350px] min-w-0"
                    >
                      <div className="group/card relative flex flex-col h-[320px] overflow-hidden rounded-3xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="absolute inset-0 z-10"
                        />

                        {/* Thumbnail */}
                        <div className="relative h-48 w-full overflow-hidden bg-white/[0.02] border-b border-white/5">
                          <div className="absolute inset-0 flex items-center justify-center p-6 opacity-60 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-500">
                            <Image
                              src={project.images[0]}
                              alt={project.title}
                              fill
                              className={`pointer-events-none drop-shadow-xl ${
                                isMobile
                                  ? "object-contain scale-110"
                                  : "object-cover"
                              }`}
                            />
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="mb-1 text-[9px] font-bold uppercase tracking-widest text-white/20">
                              {project.category}
                            </div>
                            <h3 className="text-lg font-bold text-white tracking-tight truncate">
                              {project.title}
                            </h3>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-white/40 group-hover/card:text-white/60 transition-colors">
                              Case Study
                            </span>
                            <div className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/10 text-white/40 group-hover/card:bg-white group-hover/card:text-black transition-all duration-300">
                              <ArrowRight size={12} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls - Only show if content overflows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black opacity-0 group-hover/embla:opacity-100 disabled:opacity-0 ${!canScrollPrev ? "pointer-events-none" : ""}`}
            disabled={!canScrollPrev}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-white transition-all hover:bg-white hover:text-black opacity-0 group-hover/embla:opacity-100 disabled:opacity-0 ${!canScrollNext ? "pointer-events-none" : ""}`}
            disabled={!canScrollNext}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
