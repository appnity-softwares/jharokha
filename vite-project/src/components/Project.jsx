import React from 'react';

// Placeholder function for large image URLs
const PROJECT_IMAGE_URL = (i) => {
    switch (i) {
        case 1:
            return "https://framerusercontent.com/images/e7vHmyk3naIt1aqkQMnTzkZ50.png?scale-down-to=1024";
        case 2:
            return "https://framerusercontent.com/images/CuCDcKgiLkwBfiO0ZSNgG7k9yo.png?scale-down-to=1024";
        case 3:
            return "https://framerusercontent.com/images/KAcj25VJNFzn4Keba5HZf5yKLHU.png?scale-down-to=1024";
        case 4:
        default:
            return "https://framerusercontent.com/images/rfw0RcQ9zePt4EM6pf2z2U3KjXo.png?scale-down-to=1024";
    }
};

const ProjectCard = ({ name, location, type, year, imageId, hasButton = false }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
        <div 
            className="h-96 bg-cover bg-center relative transition-transform duration-500 ease-in-out group-hover:scale-105"
            style={{ backgroundImage: `url(${PROJECT_IMAGE_URL(imageId)})` }}
        >
            <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">{type}</span>
                <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">{year}</span>
            </div>
            
            {/* Conditional "See project" button */}
            {hasButton && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-900 font-medium px-4 py-2 rounded-full shadow-xl flex items-center gap-2 hover:bg-gray-100 backdrop-blur-sm">
                        See project →
                    </button>
                </div>
            )}
        </div>
        <div className="p-6 text-center">
            <h4 className="text-xl font-serif text-gray-900 mb-1">{name}</h4>
            <p className="text-sm text-gray-600">{location}</p>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        { name: "The Zypher Royale Hotel", location: "Doha, Qatar", type: "Seven-Star Hotel", year: 2023, imageId: 1, hasButton: false },
        { name: "Samraat Mahal", location: "Rajasthan, India", type: "Seven-Star Hotel", year: 2023, imageId: 2, hasButton: true },
        { name: "Astra Villas Flagship", location: "Ibiza, Spain", type: "Seven-Star Hotel", year: 2023, imageId: 3, hasButton: false },
        { name: "The Aether Boardroom", location: "Manhattan, New York", type: "Seven-Star Hotel", year: 2023, imageId: 4, hasButton: false },
    ];

    return (
        <section className="py-20 md:py-32 bg-[#F6F4F2] font-serif">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <p className="text-sm uppercase tracking-widest text-[#A39198] mb-2">
                        Projects
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-4 max-w-3xl mx-auto">
                        Signature luxury interiors, thoughtfully selected.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Every home in our portfolio is chosen for its unique character, premium build, and elevated lifestyle experience.
                    </p>

                    {/* CTA Button */}
                    <button className="inline-flex items-center justify-center px-8 py-4 text-white font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                        style={{ background: 'linear-gradient(135deg, #5D3FD3 0%, #A39198 100%)' }}
                    >
                        View all projects
                        <span className="ml-2">↗</span>
                    </button>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            name={project.name}
                            location={project.location}
                            type={project.type}
                            year={project.year}
                            imageId={project.imageId}
                            hasButton={project.hasButton}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
