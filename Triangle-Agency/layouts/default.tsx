import { Link } from "@nextui-org/react";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import AboutUsSection from '../components/AboutUsSection';
import Clients from "./clients";
import ServicesSection from "@/components/Servies";
import OurProjects from "@/components/OurProjects"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow pt-16">
        {children}
      </main>
      <AboutUsSection />
      <Clients />
      <ServicesSection />
      <OurProjects/>
      <footer className="bg bg-opacity-10 border border-slate-600 border-opacity-20 rounded-xl p-8 mt-10">
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text">Product</h3>
          <ul className="flex flex-col gap-1">
            <li><a href="#" className="opacity-60 text">Store</a></li>
            <li><a href="#" className="opacity-60 text">Developer</a></li>
            <li><a href="#" className="opacity-60 text">Teams</a></li>
            <li><a href="#" className="opacity-60 text">Pro</a></li>
            <li><a href="#" className="opacity-60 text">API Docs</a></li>
            <li><a href="#" className="opacity-60 text">Pricing</a></li>
            <li><a href="#" className="opacity-60 text">Changelog</a></li>
          </ul>
        </div>
        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text">Company</h3>
          <ul className="flex flex-col gap-1">
            <li><a href="#" className="opacity-60 text">Careers</a></li>
            <li><a href="#" className="opacity-60 text">Manifesto</a></li>
            <li><a href="#" className="opacity-60 text">Privacy policy</a></li>
            <li><a href="#" className="opacity-60 text">Terms of Service</a></li>
            <li><a href="#" className="opacity-60 text">DPA</a></li>
            <li><a href="#" className="opacity-60 text">Press Kit</a></li>
            <li><a href="#" className="opacity-60 text">Contact</a></li>
          </ul>
        </div>
        {/* Community Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text">Community</h3>
          <ul className="flex flex-col gap-1">
            <li><a href="#" className="opacity-60 text">Community stories</a></li>
            <li><a href="#" className="opacity-60 text">Slack</a></li>
            <li><a href="#" className="opacity-60 text">Twitter</a></li>
            <li><a href="#" className="opacity-60 text">GitHub</a></li>
            <li><a href="#" className="opacity-60 text">Dribbble</a></li>
          </ul>
        </div>
      </div>
      {/* Logo and Agency Name */}
      <div className="text-center mt-8">
        <img src="/logo.svg" alt="logo" className="w-16 h-16 mx-auto mb-2" />
        <p className="text-zinc-300 text-2xl font-bold">Triangle Agency</p>
      </div>
    </div>
    </footer>


    </div>
  );
}
