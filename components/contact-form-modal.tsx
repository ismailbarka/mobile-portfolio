"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactFormModalProps {
  children: React.ReactNode;
}

export function ContactFormModal({ children }: ContactFormModalProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ismailbarka82@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject,
            message: formData.message,
            _template: "table",
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset status when closing, but keep form data if it was an error
      if (status === "success") {
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
      setTimeout(() => setStatus("idle"), 300);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-white/20 hover:border-white/15 hover:bg-white/[0.07]";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="border-white/10 bg-black/90 backdrop-blur-2xl shadow-[0_25px_80px_-15px_rgba(0,0,0,0.5)] sm:max-w-lg rounded-[1.5rem] p-0 gap-0 overflow-hidden"
        showCloseButton={status !== "submitting"}
      >
        {/* Header with subtle glow */}
        <div className="relative px-8 pt-8 pb-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />
          <DialogHeader className="relative z-10">
            <div className="flex items-center gap-3 mb-1">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10">
                <Mail className="h-5 w-5 text-foreground/70" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-foreground tracking-tight">
                  Get in touch
                </DialogTitle>
                <DialogDescription className="text-foreground/40 text-sm mt-0.5">
                  I&apos;ll get back to you as soon as possible.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
        </div>

        {/* Form or Status */}
        <div className="px-8 pb-8 pt-4">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-8 gap-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle2 className="h-8 w-8 text-emerald-400" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Message sent!
                </h3>
                <p className="text-sm text-foreground/50">
                  Thanks for reaching out. I&apos;ll respond soon.
                </p>
              </div>
              <button
                onClick={() => handleOpenChange(false)}
                className="mt-2 rounded-xl bg-white/5 border border-white/10 px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-white/10 hover:border-white/20"
              >
                Close
              </button>
            </div>
          ) : status === "error" ? (
            <div className="flex flex-col items-center justify-center py-8 gap-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20">
                <AlertCircle className="h-8 w-8 text-red-400" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Something went wrong
                </h3>
                <p className="text-sm text-foreground/50">
                  Please try again or email me directly at{" "}
                  <a
                    href="mailto:ismailbarka82@gmail.com"
                    className="text-indigo-400 hover:underline"
                  >
                    ismailbarka82@gmail.com
                  </a>
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 rounded-xl bg-white/5 border border-white/10 px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-white/10 hover:border-white/20"
              >
                Try again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-foreground/50 mb-1.5 ml-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-foreground/50 mb-1.5 ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-foreground/50 mb-1.5 ml-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-foreground/50 mb-1.5 ml-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 group relative flex items-center justify-center rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_0_30px_-8px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.3)] duration-200"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
