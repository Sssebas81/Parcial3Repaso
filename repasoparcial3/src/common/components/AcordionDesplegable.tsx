// common/components/Accordion.tsx
'use client';

import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
}

export default function Accordion({ items, defaultOpenIndex }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex ?? null);

  return (
    <div className="join join-vertical w-full">
      {items.map((item, index) => (
        <div key={index} className="collapse collapse-arrow join-item border border-base-300">
          <input
            type="radio"
            name="accordion"
            checked={openIndex === index}
            onChange={() => setOpenIndex(openIndex === index ? null : index)}
          />
          <div className="collapse-title text-xl font-medium">{item.title}</div>
          <div className="collapse-content">{item.content}</div>
        </div>
      ))}
    </div>
  );
}