import React from "react";
import bgImage from "../assets/hero-bg.png"; // replace with your background image

const Hero = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center px-8 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-6xl font-serif leading-tight mb-6">
          Luxury interiors for iconic
          <span className="italic font-light"> living</span>
        </h1>
        <p className="text-lg text-gray-200 max-w-xl mb-8">
          Elrune creates bespoke interiors for villas, royal estates, and world-class
          hospitality. Our work blends architectural excellence with regal sophistication.
        </p>
        <button className="px-6 py-3 bg-white text-gray-900 font-medium rounded-full shadow-lg hover:bg-gray-100 transition flex items-center gap-2">
          Explore <span>↗</span>
        </button>
      </div>

      {/* Floating box for project info */}
      <div className="absolute bottom-12 right-12 bg-black/40 backdrop-blur-md p-4 rounded-2xl shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-400 text-xl">👑</span>
          <p className="text-sm font-medium text-white">
            Over 20+ luxury projects completed
          </p>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-gray-500 rounded-md overflow-hidden"
              style={{
                backgroundImage: `url(/project${i + 1}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
