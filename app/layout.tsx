"use client";

import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";
//
import Clients from "@/layouts/clients";
import ServicesSection from "@/components/Servies";
import OurProjects from "@/components/OurProjects";
import { Head } from "@/layouts/head";
import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero"
import "@/styles/globals.css";
import Link from "next/link";
import AboutUsSection from "@/components/AboutUsSection";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <Head /> */}
      <ThemeProvider>
        <body className="relative flex flex-col h-screen">
          <Navbar />
          <main
            className={`${fontSans.className} ${fontMono.className} container mx-auto max-w-7xl flex-grow pt-16`}
          >
            {children}
          </main>
          <Hero/>
          <AboutUsSection />
          <Clients />
          <ServicesSection />
          <OurProjects />
          <footer className="bg bg-opacity-10 border border-slate-600 border-opacity-20 rounded-xl p-8 mt-10">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Product Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text">Quick Links</h3>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <Link href="/#about-us" className="opacity-60 text">
                        About us
                      </Link> 
                    </li>
                    <li>
                      <Link href="/#services" className="opacity-60 text">
                      Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/#our-projects" className="opacity-60 text">
                      our projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Logo and Agency Name */}
              <div className="text-center mt-8">
                <img
                  src="/Logo.svg"
                  alt="logo"
                  className="w-80 h-80 mx-auto mb-2"
                />
                <p className="text-zinc-300 text-2xl font-bold">
                  Triangle Agency
                </p>
              </div>
            </div>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
