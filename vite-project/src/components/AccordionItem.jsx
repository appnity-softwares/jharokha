import React from "react";

const AccordionItem = ({ faq, isOpen, toggleOpen }) => {
  if (!faq) return null;

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center text-left py-4 px-6 font-semibold text-lg text-stone-900 hover:text-purple-700 transition"
        aria-expanded={isOpen}
      >
        {faq.question}
        <span
          className={`flex items-center justify-center w-6 h-6 border border-stone-300 rounded-full transition-all duration-300 ${
            isOpen
              ? "rotate-45 bg-purple-100 text-purple-700"
              : "bg-white text-stone-500"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-40 opacity-100 px-6 pb-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
