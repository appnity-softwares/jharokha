import React from 'react';

// Main application component
const Founder = () => {
  // Mock data for the section content
  const founder = {
    name: "Henrik",
    vision: "Henrik shares his vision of crafting spaces where elegance meets innovation, designed to inspire and built to endure.",
    quote: "True luxury is never loud. It's in how the light falls, how the velvet breathes, how the silence speaks.",
    title: "Henrik Vadsoon, CEO & Creative Director"
  };

  // Custom styling to simulate the elegant, deep purple and sophisticated typography.
  const DeepPurple = 'text-purple-900';
  const DarkBackground = 'bg-gray-900'; // For the internal card background

  // Placeholder URL for the dramatic portrait image.
  // Using a placeholder that suggests a sophisticated, deep-toned, portrait-style image.
  const imageUrl = "https://framerusercontent.com/images/jVQMMBZvfV4ThCK0tY8ypTzDZqQ.png?scale-down-to=2048";


  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
      <div className="max-w-7xl w-full text-center">

        {/* --- Top Header Section --- */}
        <p className="inline-block text-xs uppercase tracking-widest bg-purple-900 text-white py-1 px-3 rounded-full mb-6 font-medium">
          A Word from Our Founder
        </p>

        {/* --- Main Title --- */}
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-snug ${DeepPurple} mb-6`}>
          Shaping timeless spaces
          <br />
          with <span className="font-semibold">{founder.name}</span>
        </h1>

        {/* --- Descriptive Paragraph --- */}
        <p className="text-stone-700 max-w-2xl mx-auto text-lg mb-12">
          {founder.vision}
        </p>

        {/* --- Media Card (Simulating Video/Image Block) --- */}
        <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-purple-400/50">
          
          {/* Background Image (Henrik's Portrait) */}
          <div 
            className="w-full h-[60vh] sm:h-[70vh] bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageUrl})`,
              // Using a gradient overlay to add the rich purple/dark effect seen in the image
              backgroundBlendMode: 'multiply',
              backgroundColor: 'rgba(76, 8, 76, 0.7)' // Deep purple color
            }}
          >
            {/* Dark Overlay for text legibility */}
            <div className={`absolute inset-0 transition-opacity flex justify-center items-center`}>
              
              {/* Play Button */}
              <div className="p-5 border-2 border-white rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-all duration-300">
                <svg 
                  className="w-10 h-10 text-white fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>

              {/* Quote Block at the bottom */}
              <div className="absolute bottom-10 left-0 right-0 px-8">
                <blockquote className="text-white text-xl sm:text-2xl font-medium italic leading-relaxed max-w-2xl mx-auto">
                  "{founder.quote}"
                </blockquote>
                <p className="text-stone-300 mt-4 text-sm uppercase tracking-wide font-light">
                  {founder.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
