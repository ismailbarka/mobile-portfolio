"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Featured() {
  return (
    <section id="featured" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-foreground/70 backdrop-blur-md">
            Selected Work
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Projects operating at scale
          </h2>
          <p className="mt-4 text-lg text-foreground/50 max-w-2xl">
            A selection of production mobile applications I've engineered from
            the ground up, focusing on performance, native feel, and robust
            architecture.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {/* Project 1: Domicilia */}
          <div className="group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm lg:h-[500px] flex flex-col lg:flex-row items-center transition-all duration-700 hover:bg-white/[0.04] hover:border-white/10 hover:shadow-2xl">
            <div className="z-10 flex-1 w-full order-2 lg:order-1 p-8 sm:p-12">
              <div className="mb-4 inline-flex items-center rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs text-purple-400 backdrop-blur-md">
                React Native / NestJS
              </div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4">
                Domicilia
              </h3>
              <p className="text-foreground/60 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                A seamless location-based mobile platform transforming how
                families find trusted cleaners and babysitters. Built with a
                focus on cross-platform performance and a scalable GraphQL
                backend.
              </p>

              <Link
                href="/projects/domicilia"
                className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/5 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:border-white/20 hover:-translate-y-0.5"
              >
                Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="flex-1 order-1 lg:order-2 relative w-full h-[350px] sm:h-[450px] lg:h-full lg:min-h-[500px] overflow-hidden bg-gradient-to-br from-purple-500/5 to-transparent flex items-end justify-center pt-12">
              <div className="relative w-[280px] sm:w-[340px] h-[110%] sm:h-full transform transition-transform duration-700 group-hover:-translate-y-3">
                <Image
                  src="/domicilia/home page-portrait.png"
                  alt="Domicilia App Home Page"
                  fill
                  className="object-contain object-top drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Project 2: Providers Map */}
          <div className="group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm lg:h-[500px] flex flex-col lg:flex-row items-center transition-all duration-700 hover:bg-white/[0.04] hover:border-white/10 hover:shadow-2xl">
            <div className="flex-1 order-1 relative w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[500px] overflow-hidden bg-gradient-to-br from-orange-500/5 to-transparent flex items-center justify-center p-8 sm:p-12">
              <div className="relative w-full h-full max-w-lg transform transition-transform duration-700 group-hover:scale-[1.03]">
                <Image
                  src="/providers-map/Screenshot 2026-03-08 at 13.52.41.png"
                  alt="Providers Map Location"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="z-10 flex-1 w-full order-2 p-8 sm:p-12">
              <div className="mb-4 inline-flex items-center rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs text-orange-400 backdrop-blur-md">
                React Native / Expo
              </div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4">
                Providers Map
              </h3>
              <p className="text-foreground/60 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                A high-performance interactive map application built with Expo
                and TypeScript. It leverages advanced clustering and optimized
                data caching to handle dense location data smoothly.
              </p>

              <Link
                href="/projects/providers-map"
                className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/5 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:border-white/20 hover:-translate-y-0.5"
              >
                Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* View All */}
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
          >
            View Full Application Archive
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
