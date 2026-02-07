import React from "react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink,
  ShieldCheck,
  ChevronUp 
} from "lucide-react";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full">
      {/* Footer Wrapper */}
      <footer className="bg-[#07042b] text-white pt-24 pb-12 relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#56ab2f]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
            
            {/* Brand Column */}
            <div className="space-y-8">
             <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink-0">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-[#56ab2f] blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />

          <div className="relative bg-linear-to-br from-[#56ab2f] to-[#4a9328] p-1.5 sm:p-2 rounded-xl shadow-sm group-hover:shadow-emerald-200 group-hover:-rotate-12 transition-all duration-500 ease-out">
            <div className="border-[2.5px] border-white w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center">
              <div className="bg-white w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <button
              onClick={() => handleNavigate("home")}
              className="text-[#2d5a84] font-black text-[19px]  tracking-[calc(-0.05em)] leading-none group-hover:text-[#56ab2f] transition-colors duration-300"
            >
              CHIELDENG LIMITED
            </button>
            <span className="w-1.5 h-1.5 bg-[#56ab2f] rounded-full ml-0.5 mt-1.5 sm:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
          </div>

          <div className="overflow-hidden">
            <span className="text-[8px] sm:text-[9px] block leading-none font-bold text-slate-400 uppercase tracking-[0.3em] translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
              Cleaning Service
            </span>
          </div>
        </div>
      </div>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                The gold standard for residential and commercial cleaning in London. We don't just clean—we restore.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook size={18} />, link: "#", label: "Facebook" },
                  { icon: <Instagram size={18} />, link: "#", label: "Instagram" },
                  { icon: <Twitter size={18} />, link: "#", label: "Twitter" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#56ab2f] hover:text-white transition-all duration-300 border border-white/10"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#56ab2f]">Services</h4>
              <ul className="space-y-4 text-slate-300 font-medium">
                {[ 'End of Tenancy', 'Kitchen Specialist', 'Office Cleaning'].map((item) => (
                  <li key={item} className="flex items-center group cursor-pointer hover:text-white transition-colors text-sm">
                    <ExternalLink size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0 text-[#56ab2f]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#56ab2f]">Trust & Safety</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-[#56ab2f]/30 transition-colors">
                  <ShieldCheck className="text-[#56ab2f]" size={20} />
                  <div>
                    <p className="text-[10px] font-bold text-white uppercase tracking-tight">Fully Insured</p>
                    <p className="text-[10px] text-slate-500">£5m Public Liability</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-[#56ab2f]/30 transition-colors">
                  <Clock className="text-[#56ab2f]" size={20} />
                  <div>
                    <p className="text-[10px] font-bold text-white uppercase tracking-tight">Fast Response</p>
                    <p className="text-[10px] text-slate-500">Quotes in 60 Mins</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect */}
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#56ab2f]">Connect</h4>
              <div className="space-y-5">
                <a href="mailto:hello@CHIELDENG LIMITEDservices.co.uk" className="flex items-start gap-3 group text-sm">
                  <Mail className="text-slate-500 group-hover:text-[#56ab2f] transition-colors" size={18} />
                  <span className="text-slate-300 group-hover:text-white transition-colors truncate">hello@CHIELDENG LIMITEDservices.co.uk</span>
                </a>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="text-slate-500" size={18} />
                  <span className="text-slate-300">London, Greater London</span>
                </div>
                <button 
                  onClick={scrollToTop}
                  className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors group"
                >
                  Back to top <ChevronUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

          {/* Footer Bottom Line */}
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-slate-500 text-[11px] font-medium uppercase tracking-wider">
                © {new Date().getFullYear()} CHIELDENG LIMITED Services. All rights reserved.
              </p>
              <p className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">
                CHIELDENG LIMITED Cleaning Services is a trading name of CHIELDENG LIMITED. Registered in England & Wales. Company No. 13824032
              </p>
              <div className="flex gap-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                <span className="hover:text-[#56ab2f] cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-[#56ab2f] cursor-pointer transition-colors">Terms of Work</span>
              </div>
            </div>
            
            <div className="hidden lg:block px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">
              Precision • Purity • Professionalism
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;