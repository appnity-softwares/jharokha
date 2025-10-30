import React from "react";
import { Instagram, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#1D092B] text-white font-[Canela,serif] overflow-hidden py-32 sm:py-36 px-6 sm:px-12 lg:px-28">
      {/* Background watermark */}
      <img
        src="https://framerusercontent.com/images/hJVdDj6UHurNGL6RRHt48W8Ve7U.png?scale-down-to=2048"
        alt="Elrune watermark"
        className="absolute bottom-[-6rem] left-1/2 -translate-x-1/2 w-[90rem] max-w-none opacity-[0.06] select-none pointer-events-none"
      />

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
        {/* Left Section */}
        <div className="space-y-8 max-w-sm">
          <h2 className="text-[4rem] sm:text-[5rem] font-light tracking-tight leading-none">
            elrune
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Luxury interiors for iconic living.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-white text-stone-900 font-medium text-base sm:text-lg px-7 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
          >
            <span>Get in touch</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Right Section (Navigation + Contact) */}
        <div className="flex flex-col sm:flex-row gap-20">
          {/* Navigation */}
          <div>
            <h3 className="bg-[#4B256C] inline-block px-3 py-1 rounded-md text-sm font-semibold tracking-wide mb-6">
              Navigation
            </h3>
            <ul className="space-y-5 text-gray-300 text-base leading-relaxed">
              {["Services", "Features", "Vision", "Projects", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 hover:text-white transition-all duration-200"
                  >
                    <span>{item}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="bg-[#4B256C] inline-block px-3 py-1 rounded-md text-sm font-semibold tracking-wide mb-6">
              Contact
            </h3>
            <div className="text-gray-300 space-y-3 text-base">
              <p>hello@elrune.com</p>
              <p>+971-24435656</p>
            </div>

            <div className="flex space-x-4 mt-8">
              <a
                href="#"
                className="bg-white text-stone-900 p-3 rounded-full hover:scale-105 shadow transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-white text-stone-900 p-3 rounded-full hover:scale-105 shadow transition"
              >
                <X size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="relative z-10 mt-24 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 border-t border-gray-700/40 pt-8">
        <div className="space-x-10">
          <a href="#" className="hover:text-white transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
        <p className="mt-4 sm:mt-0">© 2025 Elrune. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
