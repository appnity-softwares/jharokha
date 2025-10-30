import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const BG_IMAGE_URL =
    "https://framerusercontent.com/images/If6ftX218zKlCIxxYtGVwJ666B8.png";

  const projectImages = [
    "https://framerusercontent.com/images/18jLYFnp8jmIsqpvfqRCg9ukDM.png?scale-down-to=512",
    "https://framerusercontent.com/images/7gDEbNxcayf9dPcV6sVBwtRBfE.png?scale-down-to=512",
    "https://framerusercontent.com/images/x1jKKGBbcFDotH9VW4wXmw2gA.png?scale-down-to=512",
  ];

  return (
    <section
      className="relative h-screen flex flex-col justify-center px-8 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Text */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-6xl font-serif leading-tight mb-6">
          <span className="italic font-light">Jharokha-</span>
          <br /> The Wedding Palace
        </h1>
        <p className="text-lg text-gray-200 max-w-xl mb-8">
          A 3-star hotel with amenities like free Wi-Fi, a swimming pool, and
          paid airport transfers, and a larger wedding venue called
          "Jharokha- The Wedding Palace" which hosts events and can accommodate
          up to 1500 guests.
        </p>
        <button className="px-6 py-3 bg-white text-gray-900 font-medium rounded-full shadow-lg hover:bg-gray-100 transition flex items-center gap-2">
          Explore <span>↗</span>
        </button>
      </div>

      {/* Floating Project Info */}
      <div className="absolute bottom-12 right-12 bg-black/40 backdrop-blur-md p-4 rounded-2xl shadow-lg hidden md:block overflow-hidden w-80">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-400 text-xl">👑</span>
          <p className="text-sm font-medium text-white">
            Over 20+ luxury projects completed
          </p>
        </div>

        {/* Infinite linear scroll */}
        <div className="relative w-full overflow-hidden rounded-lg">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 3, // change speed here (higher = slower)
              repeat: Infinity,
            }}
          >
            {[...projectImages, ...projectImages, ...projectImages].map((img, i) => (
              <div
                key={i}
                className="min-w-[90px] h-[90px] bg-gray-500 rounded-xl mx-1"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
