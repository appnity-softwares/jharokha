import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqData = [
  {
    id: 1,
    question: "What types of spaces does Elrune specialize in?",
    answer:
      "Elrune specializes in high-end luxury interiors, focusing on residential estates, private suites in boutique hotels, and executive corporate headquarters. Our expertise lies in creating timeless, bespoke environments.",
  },
  {
    id: 2,
    question: "Do you work internationally?",
    answer:
      "Yes, Elrune operates globally. We manage projects across Europe, the Middle East, Asia, and North America, with a specialized team dedicated to international logistics and cultural design integration.",
  },
  {
    id: 3,
    question: "How involved will I be during the design process?",
    answer:
      "Client involvement is tailored to your preference. While we offer full-service execution, we typically maintain transparent communication through key milestone approvals, ensuring the final vision perfectly aligns with yours without consuming excessive time.",
  },
  {
    id: 4,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary significantly based on scope and size, but a typical full-scale interior design project, from concept to installation, generally ranges from 12 to 24 months. We provide a detailed schedule upfront.",
  },
  {
    id: 5,
    question: "Do you handle custom furniture and materials?",
    answer:
      "Absolutely. A cornerstone of Elrune's service is our ability to source rare, bespoke materials and commission custom furniture and artwork from world-class artisans and fabricators.",
  },
  {
    id: 6,
    question: "What's unique about Elrune’s design approach?",
    answer:
      "Our approach, 'Design That Whispers,' focuses on quiet luxury and emotional resonance. We prioritize perfect spatial harmony, layered mood lighting, and unparalleled craftsmanship over ostentatious display.",
  },
  {
    id: 7,
    question: "Do you offer just consultation or full-service design?",
    answer:
      "We offer both. You can engage Elrune for a high-level design consultation, or opt for our comprehensive, full-service design management where we oversee every detail from concept to completion.",
  },
  {
    id: 8,
    question: "Can Elrune assist with historical restorations?",
    answer:
      "Yes, we have specialized experience in historical and heritage restoration, working closely with conservation experts to ensure period accuracy while integrating modern comforts and technology discreetly.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-[#F4F1EA] py-24 px-4 sm:px-8 lg:px-16 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side — Text and Image */}
        <div className="space-y-8">
          <span className="inline-block text-sm uppercase tracking-widest bg-purple-100 text-purple-800 py-1 px-4 rounded-full font-medium">
            FAQ
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-stone-900 leading-tight">
            Your doubts & <br />
            <span className="italic font-normal">questions answered.</span>
          </h2>

          {/* Featured Image Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl group">
            <img
              src="https://framerusercontent.com/images/CuCDcKgiLkwBfiO0ZSNgG7k9yo.png?scale-down-to=1024"
              alt="Royal Recognition"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 flex items-center space-x-3 shadow-lg">
              <span className="text-purple-800 font-semibold">
                👑 Royal Recognition
              </span>
              <span className="text-stone-600 text-sm">Forbes Interior</span>
            </div>
          </div>
        </div>

        {/* Right Side — FAQ Accordion */}
        <div className="bg-white rounded-[2rem] shadow-xl p-6 sm:p-8 space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
