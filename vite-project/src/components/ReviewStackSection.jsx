import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewStackSection = () => {
  const reviews = [
    {
      id: 1,
      image: "https://placehold.co/600x400",
      category: "Luxury",
      quote: "Absolutely stunning work!",
      author: "John Doe",
      title: "Client",
      layout: "image-left",
    },
    {
      id: 2,
      image: "https://placehold.co/600x400",
      category: "Modern",
      quote: "The experience was amazing.",
      author: "Sarah White",
      title: "Designer",
      layout: "image-right",
      
    },
  ];

  return (
    <section className="py-16">
      {reviews.map((r) => (
        <ReviewCard key={r.id} review={r} />
      ))}
    </section>
  );
};

export default ReviewStackSection;
