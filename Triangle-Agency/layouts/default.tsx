import { Link } from "@nextui-org/react";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import AboutUsSection from '../components/AboutUsSection';
import Clients from "./clients";
import ServicesSection from "@/components/Servies";

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
      <footer className="bg-white bg-opacity-10 border border-slate-600 border-opacity-20 rounded-xl p-8 mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Links */}
          <div className="">
            <h3 className="text-lg font-semibold mb-3">Product</h3>
            <ul className="flex flex-col gap-1">
              <li><a href="#" className="opacity-60">Store</a></li>
              <li><a href="#" className="opacity-60">Developer</a></li>
              {/* Add more links here */}
            </ul>
          </div>
          {/* Company Links */}
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="flex flex-col gap-1">
              <li><a href="#" className="opacity-60">Careers</a></li>
              <li><a href="#" className="opacity-60">Manifesto</a></li>
              {/* Add more links here */}
            </ul>
          {/* Community Links */}
          <h3 className="text-lg font-semibold mb-3">Community</h3>
            <ul className="flex flex-col gap-1">
              <li><a href="#" className="opacity-60">Community stories</a></li>
              <li><a href="#" className="opacity-60">Slack</a></li>
              {/* Add more links here */}
            </ul>
        </div>
        {/* Logo and Agency Name */}
        <div className="text-center mt-8">
          <img src="https://via.placeholder.com/78x78" alt="logo" className="w-16 h-16 mx-auto mb-2" />
          <p className="text-zinc-300 text-2xl font-bold">Triangle Agency</p>
        </div>
      </div>
    </footer>


    </div>
  );
}
