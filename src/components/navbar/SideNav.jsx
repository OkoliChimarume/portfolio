import React, { useEffect, useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    sections.forEach(({ id }) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`w-3 h-3 rounded-full transition-all duration-300 relative group ${
            activeSection === id ? 'bg-myAccent scale-125' : 'bg-myGray/50 hover:bg-myWhite'
          }`}
          aria-label={`Scroll to ${label}`}
        >
          {/* Tooltip on hover */}
          <span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 bg-myDusk text-myWhite text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-myGray/20">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SideNav;
