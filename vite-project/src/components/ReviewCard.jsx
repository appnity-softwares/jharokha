import React from "react";

const ReviewCard = ({ review }) => {
  // Fallback if no review data
  if (!review) {
    return (
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-md p-10 max-w-5xl mx-auto text-center">
        Missing review data
      </div>
    );
  }

  // Image section
  const imageContent = (
    <div className="relative overflow-hidden rounded-2xl w-full h-72 lg:h-full">
      <img
        src={review.image}
        alt={review.category}
        className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/360036/ffffff/png?text=Image+Load+Error";
        }}
      />
    </div>
  );

  // Quote + Author section
  const quoteContent = (
    <div className="p-6 sm:p-10 w-full flex flex-col justify-between">
      <div className="mb-6">
        <span className="inline-block text-xs uppercase tracking-widest bg-purple-100 text-purple-800 py-1 px-3 rounded-full mb-4 font-medium">
          {review.category}
        </span>
        <blockquote className="text-stone-800 text-lg italic leading-relaxed relative">
          <span className="absolute -top-6 -left-6 text-6xl text-purple-200 font-serif opacity-70 leading-none">
            “
          </span>
          {review.quote}
          <span className="absolute bottom-0 right-0 text-3xl text-purple-200 font-serif opacity-70 leading-none">
            ”
          </span>
        </blockquote>
      </div>

      <div className="mt-8 pt-4 border-t border-purple-100">
        <p className="font-semibold text-stone-900">{review.author}</p>
        <p className="text-sm text-stone-600">{review.title}</p>
      </div>
    </div>
  );

  return (
    <div
      className={`group bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 lg:min-h-[400px] transition-all duration-700 ease-out mb-12 lg:mb-16 max-w-5xl mx-auto`}
    >
      <div className={review.layout === "image-right" ? "lg:order-2" : "lg:order-1"}>
        {imageContent}
      </div>
      <div className={review.layout === "image-right" ? "lg:order-1" : "lg:order-2"}>
        {quoteContent}
      </div>
    </div>
  );
};

export default ReviewCard;
