import React, { useEffect } from "react";
import { Home, Key, Utensils, Bath, CheckCircle2, Calculator, ChevronRight } from "lucide-react";
import FooterSection  from "../Components/footer";

const Service = ({ onNavigate }) => {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    faders.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const serviceCards = [
    {
      title: "Residential Deep Clean",
      desc: "Comprehensive deep cleaning for all rooms including kitchens, bathrooms, bedrooms, and living areas.",
      icon: <Home className="w-8 h-8" />,
    },
    {
      title: "End of Tenancy Clean",
      desc: "Thorough cleaning to help tenants get their deposit back and prepare properties for new occupants.",
      icon: <Key className="w-8 h-8" />,
    },
    {
      title: "Kitchen Deep Clean",
      desc: "Intensive kitchen cleaning including appliances, cabinets, countertops, and hard-to-reach areas.",
      icon: <Utensils className="w-8 h-8" />,
    },
    {
      title: "Bathroom Deep Clean",
      desc: "Complete bathroom sanitization including tiles, grout, fixtures, and all surfaces for a hygienic finish.",
      icon: <Bath className="w-8 h-8" />,
    },
  ];

  const priceList = [
    { item: "Single Room Deep Clean", price: "£30" },
    { item: "Kitchen Deep Clean", price: "£50 - £80" },
    { item: "Bathroom Deep Clean", price: "£40 - £60" },
    { item: "End of Tenancy Clean", price: "Based on Size" },
    { item: "Entire Property", price: "Custom Quote" },
  ];

  return (
    <div className="bg-white font-sans text-slate-800">
      {/* SECTION 1: VISUAL SERVICE CARDS */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-sm font-bold text-[#56ab2f] uppercase tracking-widest mb-3">Professional Solutions</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#0b0642]">Our Deep Cleaning Services</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((service, index) => (
              <div key={index} className="fade-in group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#56ab2f] mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[#0b0642] mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PRICING BREAKDOWN */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b0642] mb-4">Transparent Pricing</h2>
            <p className="text-lg text-slate-600 mb-6 font-medium italic">No hidden costs. Just premium quality.</p>
          </div>

          <div className="fade-in bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h3 className="text-xl font-bold text-[#0b0642] mb-6 border-b pb-4">Standard Rates:</h3>
            <ul className="space-y-4">
              {priceList.map((p, i) => (
                <li key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-white transition-all border border-transparent hover:border-slate-100">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#56ab2f]" size={20} />
                    <span className="font-semibold text-slate-700">{p.item}</span>
                  </div>
                  <span className="font-bold text-[#0b0642] text-lg">{p.price}</span>
                </li>
              ))}
            </ul>

            <button className="w-full mt-10 bg-gradient-to-t from-[#1c4b77] to-[#23486a] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:brightness-110 transition flex items-center justify-center gap-2 active:scale-95">
              <Calculator size={22} />
              Request a Custom Quote
            </button>
          </div>
        </div>
      </section>

      <FooterSection/>
    </div>


  );
};

export default Service;