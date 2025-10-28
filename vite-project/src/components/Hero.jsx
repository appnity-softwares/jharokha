import React from "react";

const Hero = () => {
const BG_IMAGE_URL = "https://framerusercontent.com/images/If6ftX218zKlCIxxYtGVwJ666B8.png";
const PROJECT_IMAGE_URL = (i) => `https://placehold.co/64x64/000000/FFFFFF?text=P${i}`;
  return (
    <section
      className="relative h-screen flex flex-col justify-center px-8 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-6xl font-serif leading-tight mb-6">
          <span className="italic font-light">Jharokha-</span><br /> The Wedding Palace
        </h1>
        <p className="text-lg text-gray-200 max-w-xl mb-8">
         A 3-star hotel with amenities like free Wi-Fi, a swimming pool, and paid airport transfers, and a larger wedding venue called "Jharokha- The Wedding Palace" which hosts events and can accommodate up to 1500 guests. 
        </p>
        <button className="px-6 py-3 bg-white text-gray-900 font-medium rounded-full shadow-lg hover:bg-gray-100 transition flex items-center gap-2">
          Explore <span>↗</span>
        </button>
      </div>

      {/* Floating box for project info */}
      <div className="absolute bottom-12 right-12 bg-black/40 backdrop-blur-md p-4 rounded-2xl shadow-lg hidden md:block">
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
                backgroundImage: `url(${PROJECT_IMAGE_URL(i + 1)})`,
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
