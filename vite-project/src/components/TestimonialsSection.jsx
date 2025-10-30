import React from "react";
import ReviewCard from "./ReviewCard";
import reviewsData from "./reviewsData";

const TestimonialsSection = () => {
  return (
    <section className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8 font-serif">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="inline-block text-xs uppercase tracking-widest bg-purple-200/50 text-purple-800 py-1 px-3 rounded-full mb-4 font-medium">
          Reviews
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-stone-900 mb-4">
          What our clients are saying
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto text-lg">
          Real stories from those who trusted Nuvisia with their dream homes.
        </p>
      </div>

      <div className="space-y-16">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="px-8 py-4 bg-purple-800 text-white text-lg rounded-full shadow-lg hover:bg-purple-900 transition duration-300 transform hover:scale-105">
          Read All 50+ Case Studies
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
