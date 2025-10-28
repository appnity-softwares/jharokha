import React from "react";

const MenuOverlay = ({ isOpen, onClose }) => {
  const navLinks = ["Home", "Services", "Features", "Projects", "Blog", "Contact"];

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-500 font-serif
      ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-full"}
      bg-[#1c1722] text-white p-8 md:p-16`}
      style={{ transition: 'opacity 0.4s ease, transform 0s' }}
    >
      {/* Header: Logo and Close Button */}
      <div className="flex justify-between items-start mb-16 md:mb-24">
        <h1 className="text-3xl font-serif text-white tracking-wide">elrune</h1>
        <button
          onClick={onClose}
          className="text-xl text-gray-400 hover:text-white transition uppercase tracking-widest flex items-center gap-1"
        >
          CLOSE
          {/* Close icon (X) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Content Area: Links and Details */}
      <div className="flex flex-col md:flex-row justify-between h-[65%]">
        {/* Left Side: Navigation Links */}
        <nav className="flex-1 mb-10 md:mb-0">
          <ul className="space-y-4 md:space-y-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-5xl md:text-7xl lg:text-8xl font-serif font-light hover:italic transition-all duration-300 block"
                  onClick={onClose}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side: Contact and Socials */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-start md:justify-end text-sm text-gray-400 space-y-8 mt-10 md:mt-0">
          {/* Mail */}
          <div>
            <p className="uppercase mb-1">mail</p>
            <a href="mailto:hello@elrune.com" className="text-white hover:text-gray-300 text-base">
              hello@elrune.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="uppercase mb-1">phone</p>
            <a href="tel:+97124435656" className="text-white hover:text-gray-300 text-base">
              +971-24435656
            </a>
          </div>

          {/* Socials */}
          <div>
            <p className="uppercase mb-2">socials</p>
            <div className="flex gap-4 text-2xl">
              {/* Instagram Icon */}
              <a href="#" className="hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12 8a4 4 0 0 1 4 3.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* X/Twitter Icon */}
              <a href="#" className="hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-8 right-8 text-sm text-gray-400 border-t border-gray-700 pt-6 md:pt-8">
        <div className="flex justify-between items-center flex-col md:flex-row gap-2">
          <div className="order-2 md:order-1">&copy; 2025 Elrune. All rights reserved.</div>
          <div className="flex gap-4 order-1 md:order-2">
            <a href="#" className="hover:text-white transition flex items-center">
              Terms & Conditions <span className="ml-1">↗</span>
            </a>
            <a href="#" className="hover:text-white transition flex items-center">
              Privacy Policy <span className="ml-1">↗</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MenuOverlay;
