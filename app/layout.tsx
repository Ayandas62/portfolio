import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Alex Morgan — Full Stack Developer",
  description: "Full stack developer building modern, fast, and thoughtful digital products with the MERN stack.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${space.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
