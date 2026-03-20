'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-left font-heading font-semibold text-dark hover:bg-gray-50 transition-colors"
          >
            <span>{item.question}</span>
            <svg
              className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden ${
              openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 pt-0 text-gray-medium leading-relaxed">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
