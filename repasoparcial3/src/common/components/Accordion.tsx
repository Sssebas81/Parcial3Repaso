"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left p-4 font-semibold bg-base-200 hover:bg-base-300 transition flex justify-between items-center"
          >
            {item.title}
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>

          {openIndex === index && (
            <div className="p-4 bg-base-100 border-t">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}