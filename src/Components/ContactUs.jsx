import React, { useState } from "react";
import { 
  Mail, Phone, ChevronRight, CheckCircle2, MessageSquare, 
  ShieldCheck, Clock, Calendar, ChevronDown, MapPin 
} from "lucide-react";
import FooterSection  from "../Components/footer";

const ContactPage = () => {
  // 1. All Hooks at the top
  const [formStatus, setFormStatus] = useState("idle");
  const [isOpen, setIsOpen] = useState(false);
  
  // Form Data State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "Select a Service",
    details: ""
  });

  const services = [
    "End of Tenancy Specialist",
    "Commercial / Office Maintenance",
    "Luxury Oven & Kitchen Steam"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.service === "Select a Service") {
      alert("Please select a service");
      return;
    }
    
    setFormStatus("sending");
    console.log("Form Submitted:", formData); // This is where your data lives
    
    setTimeout(() => {
      setFormStatus("success");
    }, 2000);
  };

  return (
    <div className="relative pt-11 min-h-screen bg-[#fcfcfd] font-sans text-slate-900 z-10 selection:bg-[#56ab2f]/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Clean" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Branding Column */}
            <div className="text-white space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#56ab2f] animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Concierge Service</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                  Elevate your <br />
                  <span className="text-[#56ab2f] italic">living space.</span>
                </h1>
                <p className="text-lg text-slate-300 max-w-md leading-relaxed">
                  Bespoke cleaning solutions for London's finest homes. Experience the CHIELDENG LIMITED difference today.
                </p>
              </div>

              <div className="space-y-6 border-l-2 border-[#56ab2f]/30 pl-8">
                <div>
                  <p className="text-[10px] font-bold text-[#56ab2f] uppercase tracking-widest mb-1">Direct Line</p>
                  <a href="tel:07123456789" className="text-2xl font-bold hover:text-[#56ab2f] transition-all">07123 456 789</a>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#56ab2f] uppercase tracking-widest mb-1">Email Enquiries</p>
                  <a href="mailto:hello@CHIELDENG LIMITEDservices.co.uk" className="text-2xl font-bold hover:text-[#56ab2f] transition-all">hello@CHIELDENG LIMITEDservices.co.uk</a>
                </div>
              </div>
            </div>

            {/* Premium Form Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#56ab2f] to-[#2c700d] rounded-[3rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              
              <div className="relative bg-white p-8 md:p-12 rounded-[2.8rem] shadow-2xl">
                {formStatus === "success" ? (
                  <div className="py-16 text-center space-y-6">
                    <div className="w-20 h-20 bg-green-50 text-[#56ab2f] rounded-full flex items-center justify-center mx-auto ring-8 ring-green-50/50">
                      <CheckCircle2 size={40} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-slate-900">Request Received</h3>
                      <p className="text-slate-500 mt-2">A cleaning specialist will contact you shortly.</p>
                    </div>
                    <button onClick={() => setFormStatus("idle")} className="text-sm font-bold text-[#56ab2f] uppercase tracking-widest hover:opacity-70">New Request</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-slate-900">Book a Consultation</h3>
                      <p className="text-sm text-slate-500">Fixed-price quotes provided within 45 minutes.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="group/input">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-2 mb-1 block">Full Name</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="Sarah Jenkins" 
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-[#56ab2f]/10 focus:border-[#56ab2f] outline-none transition-all" 
                        />
                      </div>
                      <div className="group/input">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-2 mb-1 block">Phone</label>
                        <input 
                          required 
                          type="tel" 
                          placeholder="07123 456 789" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-[#56ab2f]/10 focus:border-[#56ab2f] outline-none transition-all" 
                        />
                      </div>
                    </div>

                    {/* PROFESSIONAL DROPDOWN */}
                    <div className="group/input relative">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-2 mb-1 block">Desired Service</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsOpen(!isOpen)}
                          className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-slate-50 border transition-all duration-300 outline-none
                            ${isOpen ? "bg-white border-[#56ab2f] ring-4 ring-[#56ab2f]/10" : "border-slate-100 hover:border-slate-200"}`}
                        >
                          <span className={`font-medium ${formData.service === "Select a Service" ? "text-slate-400" : "text-slate-700"}`}>
                            {formData.service}
                          </span>
                          <ChevronDown className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#56ab2f]" : ""}`} size={20} />
                        </button>

                        {isOpen && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                            <div className="absolute top-full left-0 right-0 mt-2 z-20 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden overflow-y-auto max-h-60 transition-all">
                              <div className="py-2">
                                {services.map((service) => (
                                  <button
                                    key={service}
                                    type="button"
                                    onClick={() => {
                                      setFormData({...formData, service: service});
                                      setIsOpen(false);
                                    }}
                                    className="w-full text-left px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#56ab2f] flex items-center justify-between"
                                  >
                                    {service}
                                    {formData.service === service && <CheckCircle2 size={16} className="text-[#56ab2f]" />}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="group/input">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-2 mb-1 block">Project Details</label>
                      <textarea 
                        rows="3" 
                        placeholder="Tell us about your property..." 
                        value={formData.details}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-[#56ab2f]/10 focus:border-[#56ab2f] outline-none transition-all resize-none font-medium" 
                      />
                    </div>

                    <button 
                      disabled={formStatus === "sending"}
                      className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-[#56ab2f] transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3 active:scale-95"
                    >
                      {formStatus === "sending" ? "Processing..." : "Send Secure Enquiry"}
                      <ChevronRight size={18} strokeWidth={3} />
                    </button>
                    
                    <p className="text-[10px] text-center text-slate-400 font-medium uppercase tracking-widest">
                      🛡️ Secure encrypted communication
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE AREA & STEPS --- */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-slate-900">The CHIELDENG LIMITED Journey</h2>
              <p className="text-slate-500 max-w-sm">From initial enquiry to a pristine finish, we handle every detail with precision.</p>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
              <MapPin className="text-[#56ab2f]" />
              <div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Primary Area</p>
                <p className="font-bold text-slate-900">London 
                  
                & Greater London</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <MessageSquare className="text-white" />, title: "Discovery", desc: "A specialist will reach out to understand your specific property needs.", color: "bg-slate-900" },
              { icon: <Calendar className="text-white" />, title: "Precision Scheduling", desc: "Choose a time slot that suits your lifestyle. We operate on your clock.", color: "bg-[#56ab2f]" },
              { icon: <ShieldCheck className="text-white" />, title: "Premium Delivery", desc: "Our vetted, insured professionals execute the CHIELDENG LIMITED standard.", color: "bg-slate-900" }
            ].map((step, i) => (
              <div key={i} className="relative space-y-6 group">
                <div className={`${step.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:-rotate-12 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection/>
    </div>
  );
};

export default ContactPage;