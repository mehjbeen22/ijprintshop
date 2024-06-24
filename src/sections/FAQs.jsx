import React from 'react';

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-8">
        {faqs.map((faq) => (
          <div key={faq.id} className="border rounded-lg p-6 shadow-md m-3">
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              {faq.question}
            </h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

const faqs = [
  {
    id: 1,
    question: 'What are refurbished printers?',
    answer: [
      'Refurbished printers at IJ Print Shop are pre-owned devices that have undergone professional inspection, repair, and restoration to ensure optimal working condition. Each printer undergoes rigorous testing to meet our high-quality standards before being resold.',
    ],
  },
  {
    id: 2,
    question: 'Are refurbished printers reliable?',
    answer: [
      'Yes, refurbished printers are highly reliable. They are thoroughly tested and repaired to ensure they operate correctly. Additionally, many of our refurbished printers come with warranties, providing buyers with added peace of mind.',
    ],
  },
  {
    id: 3,
    question: 'What is the difference between refurbished and used printers?',
    answer: [
      'Refurbished printers have been carefully inspected, repaired, and restored to optimal condition, whereas used printers are sold as-is without any repairs or quality checks. Our refurbished printers often include warranties, while used printers typically do not.',
    ],
  },
  {
    id: 4,
    question: 'Do refurbished printers come with warranties?',
    answer: [
      "Yes, many of our refurbished printers come with warranties. The specific terms of the warranty can vary depending on the printer model and seller. It's important to review the warranty details provided before making a purchase.",
    ],
  },
  {
    id: 5,
    question: 'Can I return a refurbished printer if I’m not satisfied?',
    answer: [
      "IJ Print Shop offers a return policy for refurbished printers, but the terms and conditions may vary. It's essential to review our return policy before purchasing. Please note that some conditions, such as a restocking fee, may apply.",
    ],
  },
  {
    id: 6,
    question: 'Are refurbished printers environmentally friendly?',
    answer: [
      'Yes, purchasing a refurbished printer is an environmentally friendly choice. It helps reduce electronic waste by extending the life of pre-owned printers and requires fewer resources compared to manufacturing new ones.',
    ],
  },
];
