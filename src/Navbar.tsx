import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're at the bottom of the page
      const isAtBottom = scrollPosition + viewportHeight >= documentHeight - 50;
      
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Find the section whose midpoint is closest to the center of the viewport
      let closestSection = sections[0];
      let minDistance = Infinity;
      const viewportCenter = viewportHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionMid = rect.top + rect.height / 2;
          const distance = Math.abs(sectionMid - viewportCenter);
          if (distance < minDistance && rect.bottom > 0 && rect.top < viewportHeight) {
            minDistance = distance;
            closestSection = section;
          }
        }
      }
      setActiveSection(closestSection);

      // Close menu on scroll down in mobile
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsMenuOpen(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    // Also call on mount in case user lands mid-page
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const createWaveLetters = (text: string) => {
    return text.split('').map((letter, index) => (
      <span 
        key={index} 
        className={`wave-letter inline-block ${letter === ' ' ? 'mr-1' : ''}`}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        {letter === '' ? '\u00A0' : letter}
      </span>
    ));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      const button = document.getElementById('menu-button');
      if (nav && !nav.contains(event.target as Node) && 
          button && !button.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Mobile Menu Button - Now sticky */}
      <button
        id="menu-button"
        onClick={toggleMenu}
        className="sticky top-6 right-6 z-50 ml-auto mr-6 block md:hidden bg-[#1A1A1A]/80 backdrop-blur-sm p-3 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5 w-6">
          <span className={`h-0.5 bg-yellow-400 rounded-full transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 bg-yellow-400 rounded-full transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 bg-yellow-400 rounded-full transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu - Now with reduced height */}
      <nav
        id="mobile-nav"
        className={`fixed top-4 right-4 w-64 bg-[#1A1A1A]/95 backdrop-blur-lg transform transition-all duration-300 ease-in-out z-40 rounded-lg
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="flex flex-col py-8">
          <ul className="flex flex-col space-y-6 list-none m-0 px-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Get in touch" }
            ].map(({ id, label }) => (
              <li key={id}>
                <a 
                  href={`#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white font-medium transition-all duration-300 wave-text block
                    ${activeSection === id 
                      ? 'text-yellow-400 hover:text-yellow-600' 
                      : 'hover:text-yellow-400'}`}
                >
                  {createWaveLetters(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Desktop Menu */}
      <nav className="fixed top-16 right-12 z-50 hidden md:block">
        <div className="flex justify-end">
          <ul className="flex flex-col space-y-2 list-none m-0 p-0">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Get in touch" }
            ].map(({ id, label }) => (
              <li key={id} className="text-right">
                <a 
                  href={`#${id}`}
                  className={`text-white font-medium transition-all duration-300 wave-text inline-block
                    ${activeSection === id 
                      ? 'text-yellow-400 hover:text-yellow-600' 
                      : 'hover:text-yellow-400'}`}
                >
                  {createWaveLetters(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </>
  );
};

export default Navbar;
