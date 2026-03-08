import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnimatedBackground } from "@/components/animated-background";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ismail Barka | Mobile Developer (React / React Native)",
  description:
    "React Native (Expo) developer building fast, scalable mobile apps with clean architecture and great user experience. Based in Casablanca, Morocco.",
  keywords: [
    "React Native",
    "Expo",
    "mobile development",
    "TypeScript",
    "React",
    "NestJS",
    "GraphQL",
    "Ismail Barka",
  ],
  openGraph: {
    title: "Ismail Barka | Mobile Developer (React / React Native)",
    description:
      "React Native (Expo) developer with 2+ years of experience building production mobile apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        <AnimatedBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
