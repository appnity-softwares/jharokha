import React from "react";

// --- Journal Article Data ---
const journalData = [
  {
    id: 1,
    isFeatured: true,
    category: "Philosophy",
    date: "Apr 7, 2025",
    title: "A Design That Whispers Elegance and Royalty",
    excerpt:
      "Discover how understated elegance evokes deep emotional resonance and timeless royalty in every detail.",
    image:
      "https://framerusercontent.com/images/0cUCYHrzvNWMfwlBuCtsbdPoU.png?scale-down-to=1024",
  },
  {
    id: 2,
    isFeatured: false,
    category: "Interiors",
    date: "Mar 14, 2025",
    title: "Crafting Timeless Elegance Through Spatial Movement",
    excerpt: "",
    image:
      "https://framerusercontent.com/images/5mgdQDZxgis4amRrBpoBaqY7I.png?scale-down-to=512",
  },
  {
    id: 3,
    isFeatured: false,
    category: "Craftsmanship",
    date: "Feb 15, 2025",
    title: "Royal Stories Told Through Golden Details and Craft",
    excerpt: "",
    image:
      "https://framerusercontent.com/images/YaRnREbLjFH9FTSPjtc3Qb5hXI.png?scale-down-to=512",
  },
  {
    id: 4,
    isFeatured: false,
    category: "Lighting",
    date: "Jan 25, 2025",
    title: "Sculpting Atmosphere With Royal Precision",
    excerpt: "",
    image:
      "https://framerusercontent.com/images/dnWJIN0wc12BQykNGm4ok54W330.png?scale-down-to=512",
  },
];

const JournalSection = () => {
  const featured = journalData.find((a) => a.isFeatured);
  const others = journalData.filter((a) => !a.isFeatured);

  return (
    <section className="bg-[#f6f3ee] py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16">
          <div>
            <span className="inline-block bg-purple-200 text-purple-800 text-xs font-semibold tracking-widest uppercase py-1 px-3 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-3">
              Inside Elrune <em className="italic">journal</em>
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              Explore thoughts, techniques, and philosophies shaping royal interiors.
            </p>
          </div>
          <button className="mt-6 sm:mt-0 bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold py-2.5 px-6 rounded-full shadow-md transition-all duration-300">
            View all →
          </button>
        </div>

        {/* Featured Article */}
        {featured && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-5">
                <span className="bg-purple-200 text-purple-800 text-xs font-semibold tracking-widest uppercase py-1 px-3 rounded-full">
                  {featured.category}
                </span>
                <span className="text-sm text-stone-500">{featured.date}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-5">
                {featured.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <a
                href="#"
                className="text-purple-700 font-semibold flex items-center hover:text-purple-900 transition"
              >
                Read more
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
          </div>
        )}

        {/* Other Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="bg-purple-200 text-purple-800 text-xs font-semibold tracking-widest uppercase py-1 px-3 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-stone-500">{article.date}</span>
                </div>
                <h4 className="text-lg font-serif text-stone-900 mb-3">
                  {article.title}
                </h4>
                <a
                  href="#"
                  className="text-purple-700 font-semibold text-sm flex items-center hover:text-purple-900 transition"
                >
                  Read more
                  <svg
                    className="ml-1 w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
