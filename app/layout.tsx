import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
//
import AboutUsSection from "@/components/AboutUsSection";
import Clients from "@/layouts/clients";
import ServicesSection from "@/components/Servies";
import OurProjects from "@/components/OurProjects";
import { Head } from "@/layouts/head";
import { Navbar } from "@/components/navbar";

import "@/styles/globals.css";
import Link from "next/link";

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
    <html lang="en">
      {/* <Head /> */}
      <body className="relative flex flex-col h-screen">
        <Navbar />
        <main
          className={`${fontSans.className} ${fontMono.className} container mx-auto max-w-7xl flex-grow pt-16`}
        >
          {children}
        </main>
        <AboutUsSection />
        <Clients />
        <ServicesSection />
        <OurProjects />
        <footer className="bg bg-opacity-10 border border-slate-600 border-opacity-20 rounded-xl p-8 mt-10">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text">Product</h3>
                <ul className="flex flex-col gap-1">
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Store
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Teams
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Pro
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      API Docs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Changelog
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Company Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text">Company</h3>
                <ul className="flex flex-col gap-1">
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Manifesto
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      DPA
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Press Kit
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Community Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text">Community</h3>
                <ul className="flex flex-col gap-1">
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Community stories
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Slack
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="opacity-60 text">
                      Dribbble
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
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="text-zinc-300 text-2xl font-bold">
                Triangle Agency
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
