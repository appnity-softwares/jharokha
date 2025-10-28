import React from 'react';

// Placeholder function for image URLs (removed since we are using specific URLs below)
// const IMAGE_URL = (id) => `https://placehold.co/100x100/A39198/FFFFFF?text=IMG${id}`;

// Sub-component for a single service item
// Now accepts specific image URLs for the left and right sides
const ServiceCard = ({ title, description, leftImageUrl, rightImageUrl }) => (
  <div className="flex items-center justify-between p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01] cursor-pointer">
    {/* Left Image */}
    <div 
      className="w-16 h-16 md:w-24 md:h-24 rounded-lg bg-gray-200 bg-cover bg-center flex-shrink-0"
      // Using the specific URL passed in props
      style={{ backgroundImage: `url(${leftImageUrl})` }}
    />
    
    {/* Text Content */}
    <div className="flex-1 px-4 md:px-8">
      <h3 className="text-xl font-serif font-medium text-gray-900 mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-600 max-w-lg">
        {description}
      </p>
    </div>
    
    {/* Right Image (Hidden on small screens) */}
    <div 
      className="hidden md:block w-24 h-24 rounded-lg bg-gray-300 bg-cover bg-center flex-shrink-0"
      // Using the specific URL passed in props
      style={{ backgroundImage: `url(${rightImageUrl})` }}
    />
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Palatial & Hotel Interior Design",
      description: "Designing opulent experiences for palaces and seven-star hospitality worldwide.",
      leftImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pZmEZ7Z0IHaZXe4PpVHzslD_ovV1WKpZpQ&s", // Palace Interior
      rightImage: "https://image.wedmegood.com/resized/720X/uploads/member/24694305/1713955041_WhatsApp_Image_2024_04_24_at_4.03.42_PM.jpeg", // Hotel Lounge
    },
    {
      title: "Premium Office Space Design",
      description: "Transforming executive suites into refined environments of power and precision.",
      leftImage: "https://images.jdmagicbox.com/comp/bhilai/a2/9999px788.x788.210904222005.t4a2/catalogue/jharokha-the-wedding-palace-pushpak-nagar-bhilai-fabricators-yg09k0k24k.jpg", // Executive Office
      rightImage: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/008/989/478/new_large/Screenshot-2025-07-17-170156.png", // Modern Boardroom
    },
    {
      title: "Lighting & Mood Architecture",
      description: "Sculpting emotion through atmosphere, illumination, and shadow play.",
      leftImage: "https://image.wedmegood.com/resized/720X/uploads/member/24694305/1713955042_WhatsApp_Image_2024_04_24_at_4.03.41_PM__2_.jpeg", // Dramatic Chandelier
      rightImage: "https://image.wedmegood.com/resized/720X/uploads/member/24694305/1713955043_WhatsApp_Image_2024_04_24_at_4.03.40_PM__1_.jpeg", // Mood Lighting
    },
    {
      title: "Custom Furniture & Detailing",
      description: "From sculpted seating to gilded consoles, we create heirloom-quality pieces fit for palaces.",
      leftImage: "https://hoteljharokha.in/wp-content/uploads/2023/03/photo_2023-03-03_13-02-37.webp", // Ornate Console
      rightImage: "https://r1imghtlak.mmtcdn.com/403a3d71-c346-47b6-bdd7-75bdaf5e629f.jpeg", // Velvet Sofa
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F9F7F5] font-serif">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-widest text-[#A39198] mb-2">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-4">
            Our signature royal and <br /> curated services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the signature services behind Elrune's most iconic transformations.
          </p>
        </div>

        {/* Services Grid/List */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              // Passing the specific image URLs
              leftImageUrl={service.leftImage}
              rightImageUrl={service.rightImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
