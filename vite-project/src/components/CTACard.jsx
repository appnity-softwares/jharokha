import React from "react";

const CTACard = () => {
  return (
    <section className="bg-[#F4F1EA] py-24 px-4 sm:px-8 lg:px-16 font-serif">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#4B256C] text-white text-center rounded-[2rem] shadow-2xl px-6 sm:px-12 py-20 relative overflow-hidden">

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Let's create something{" "}
            <span className="italic font-normal">timeless</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-purple-100/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Whether you have a vision in mind or are just exploring, our team is
            here to bring beauty, purpose, and elegance to your space.
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-white text-stone-900 font-medium text-base sm:text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
            >
              <span>Let's talk</span>
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

          {/* Subtle background dot (decoration) */}
          <div className="absolute bottom-10 right-10 w-4 h-4 bg-green-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CTACard;
