"use client";

import { Mail, ArrowRight } from "lucide-react";
import { Linkedin } from "lucide-react";
import { ContactFormModal } from "@/components/contact-form-modal";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent bg-white/[0.02] backdrop-blur-xl border border-white/5 p-10 sm:p-20 text-center flex flex-col items-center shadow-2xl">
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 w-full">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter text-foreground mb-6">
              Let&apos;s build something <br className="hidden sm:block" />
              <span className="text-emerald-500/60">great together.</span>
            </h2>
            <p className="max-w-xl mx-auto text-lg text-foreground/50 mb-12 font-light leading-relaxed">
              I&apos;m currently open for new opportunities. Whether you have a
              mobile app idea or need a React Native developer, I&apos;d love to
              hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ContactFormModal>
                <button className="group relative flex items-center justify-center rounded-2xl bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:-translate-y-1 w-full sm:w-auto">
                  <Mail className="mr-2 h-4 w-4" />
                  Send me a message
                </button>
              </ContactFormModal>
              <a
                href="https://www.linkedin.com/in/isbarka/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-white/10 hover:-translate-y-1 w-full sm:w-auto"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
