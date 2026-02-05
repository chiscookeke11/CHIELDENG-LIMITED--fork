import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import AboutUs from "./Components/about.jsx";
import Service from "./Components/Service.jsx"; 
import ContactPage from "./Components/ContactUs.jsx";

function App() {
  // 1. Initialize state from localStorage if it exists, otherwise default to "home"
  const [page, setPage] = useState(() => {
    return localStorage.getItem("ozed_current_page") || "home";
  });

  // 2. Use useEffect to update localStorage whenever the 'page' state changes
  useEffect(() => {
    localStorage.setItem("ozed_current_page", page);
  }, [page]);

  return (
    <>
      <Navbar onNavigate={setPage} currentPage={page} />
      
      {/* Main Content Areas */}
      <main className="min-h-screen">
        {page === "home" && <Hero onNavigate={setPage} />}
        {page === "about" && <AboutUs />}
        {page === "service" && <Service />}
        {page === "contact" && <ContactPage />}
      </main>
    </>
  );
}

export default App;