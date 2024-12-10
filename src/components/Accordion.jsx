import { useState } from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-secondary p-3 rounded-2xl my-3 opacity-90"
        >
          <button
            className="w-full flex justify-between items-center p-4 transition"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium flex items-center gap-2">
              <HiQuestionMarkCircle /> {item.title}
            </span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-auto" : "max-h-0"
            }`}
          >
            <div className="p-4 ms-1 text-lg">
              {item.title === "Rules and Regulations" ? (
                // Render as HTML for rulebook URL
                <div
                  dangerouslySetInnerHTML={{ __html: item.content }}
                  className="list"
                ></div>
              ) : (
                // Render as plain text for other items
                <p>{item.content}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
