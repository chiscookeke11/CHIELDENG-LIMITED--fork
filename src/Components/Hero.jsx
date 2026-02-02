import React, { useState } from "react";
import { Mail, ShieldCheck, Star, ThumbsUp, Menu, X } from "lucide-react";
import heroimage from "../assets/housewife-young-smiling-woman-with-basin-with-cleansing-appliances.jpg";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white font-sans text-slate-800 h-fit w-full">
      {/* --- NAVIGATION --- */}
      <nav className="relative flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto z-30">
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* Modernized Icon Container */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#56ab2f] blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
            
            <div className="relative bg-gradient-to-br from-[#56ab2f] to-[#4a9328] p-2 rounded-xl shadow-sm group-hover:shadow-emerald-200 group-hover:-rotate-12 transition-all duration-500 ease-out">
              <div className="border-[2.5px] border-white w-5 h-5 rounded-md flex items-center justify-center">
                <div className="bg-white w-1.5 h-1.5 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Brand Text Stack */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[#2d5a84] font-black text-2xl tracking-[calc(-0.05em)] leading-none group-hover:text-[#56ab2f] transition-colors duration-300">
                OZED
              </span>
              <span className="w-1.5 h-1.5 bg-[#56ab2f] rounded-full ml-0.5 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
            </div>
            
            <div className="overflow-hidden">
              <span className="text-[9px] block leading-none font-bold text-slate-400 uppercase tracking-[0.3em] translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
                Cleaning Service
              </span>
              <span className="text-[9px] block leading-none font-bold text-[#56ab2f] uppercase tracking-[0.3em] translate-y-full group-hover:-translate-y-full transition-transform duration-500">
                Professional
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a className="text-[#56ab2f] border-b-2 border-[#56ab2f] cursor-pointer">Home</a>
          <a className="hover:text-[#56ab2f] cursor-pointer transition-colors">About Us</a>
          <a className="hover:text-[#56ab2f] cursor-pointer transition-colors">Services</a>
          <a className="hover:text-[#56ab2f] cursor-pointer transition-colors">Pricing</a>
          <a className="hover:text-[#56ab2f] cursor-pointer transition-colors">Contact</a>
          <div className="flex items-center gap-2 text-slate-400 text-sm ml-4">
            <Mail size={14} />
            <span>info@ozedcleaning.co.uk</span>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            className="text-slate-700 focus:outline-none transition-transform active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown - NOW INSIDE nav for correct absolute positioning */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-200 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-8 px-6 text-center font-medium text-slate-700">
            <a
              className="text-[#56ab2f] text-lg hover:text-[#4a9328] transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              className="text-lg hover:text-[#56ab2f] transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center gap-3 text-slate-500 mt-4 pt-4 border-t border-slate-100 w-full justify-center">
              <Mail size={16} />
              <span className="text-sm">info@ozedcleaning.co.uk</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className=" relative overflow-hidden bg-gradient-to-r from-slate-50 to-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroimage}
            alt="Professional cleaning service"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/30 to-white/30 md:bg-gradient-to-l md:from-transparent md:via-white/50 md:to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-extrabold text-[#0b0642] leading-tight">
              Expert Deep Cleaning Services in Bexley, UK
            </h1>

            <p className="text-2xl sm:text-3xl md:text-3xl text-[#0b0642e5] font-semibold">
              Only{" "}
              <span className="text-[#56ab2f] text-4xl sm:text-5xl md:text-5xl font-bold">
                £30
              </span>{" "}
              Per Room
            </p>

            <p className="text-lg sm:text-xl md:text-lg text-[#0b0642d0] font-medium italic">
              Professional & Reliable Cleaning for Your Home
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button className="w-full sm:w-auto bg-gradient-to-t from-[#2c700d] to-[#4a9328] hover:from-[#4a9328] hover:to-[#3c7a20] text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg shadow-green-100 transition active:scale-95">
                Get a Quote
              </button>
              <button className="w-full sm:w-auto bg-gradient-to-t from-[#1c4b77] to-[#23486a] hover:from-[#23486a] hover:to-[#1b3a55] text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg shadow-blue-100 transition active:scale-95">
                Book a Cleaning
              </button>
            </div>

            {/* BADGES */}
            <div className="pt-10 md:pt-12 flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10">
              {[
                { icon: <ShieldCheck />, label: "Fully Insured", desc: "£5m Public Liability" },
                { icon: <Star />, label: "Top Rated", desc: "4.9/5 Average Rating" },
                { icon: <ThumbsUp />, label: "Expert Staff", desc: "DBS Checked & Vetted" }
              ].map((badge, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 md:gap-4 group cursor-default"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#56ab2f] opacity-20 blur-lg group-hover:opacity-40 transition-opacity rounded-full"></div>
                    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:shadow-emerald-100 group-hover:-translate-y-1 transition-all duration-300">
                      <div className="text-[#56ab2f]">
                        {React.cloneElement(badge.icon, { size: 20, strokeWidth: 2.5 })}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-0.5 text-left">
                    <span className="text-sm md:text-base font-extrabold text-[#0b0642ef] tracking-tight leading-none group-hover:text-[#56ab2f] transition-colors">
                      {badge.label}
                    </span>
                    <span className="text-[10px] md:text-[11px] text-slate-500 font-semibold tracking-wide uppercase italic">
                      {badge.desc}
                    </span>
                    <div className="h-[2px] w-0 bg-[#56ab2f]/40 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Shape */}
      <div className="w-full h-16 bg-white relative -mt-8 rounded-t-[100%] z-20 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]" />
    </div>
  );
};

export default Hero;