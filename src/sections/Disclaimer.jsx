import React from 'react';

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {disclaimer.map((section) => (
        <div key={section.id} className="border rounded-lg p-6 shadow-md m-3">
          <h2 className="text-3xl font-bold mb-4 text-red-600">
            {section.title}
          </h2>
          <ul className="list-disc list-inside">
            {section.content.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Disclaimer;

const disclaimer = [
  {
    id: 1,
    title: 'General Information',
    content: [
      'The information provided by IJ Print Shop on this website is for general informational purposes only. While we strive to ensure the accuracy and reliability of our refurbished printers, we do not make any warranties or guarantees about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.',
    ],
  },
  {
    id: 2,
    title: 'Product Condition and Availability',
    content: [
      'All refurbished printers sold by IJ Print Shop have been thoroughly inspected, tested, and certified by our skilled technicians. However, as these are pre-owned items, they may show minor signs of previous use. We ensure that all functionality meets our rigorous standards, but physical imperfections may exist. Availability of specific models may vary, and we cannot guarantee the availability of any particular product.',
    ],
  },
  {
    id: 3,
    title: 'Warranty and Returns',
    content: [
      'IJ Print Shop offers a six-month warranty on all refurbished printers. The terms and conditions of the warranty, including the duration and coverage, are outlined in the warranty documentation provided with each product. The warranty covers defects in materials and workmanship under normal use during the warranty period. We also provide a return policy, the details of which can be found on our Returns page. Customers are encouraged to review the warranty and return policy details before making a purchase. Any claims under the warranty must be made in accordance with the procedures outlined in the warranty documentation.',
    ],
  },
  {
    id: 4,
    title: 'Limitation of Liability',
    content: [
      'In no event will IJ Print Shop be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits, arising out of or in connection with the use of this website or the purchase and use of our products.',
    ],
  },
  {
    id: 5,
    title: 'External Links',
    content: [
      'Through this website, you may be able to link to other websites which are not under the control of IJ Print Shop. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.',
    ],
  },
  {
    id: 6,
    title: 'Legal Compliance',
    content: [
      'IJ Print Shop operates in compliance with all applicable laws and regulations of the United States. It is the responsibility of the customer to ensure that their use of our products complies with any applicable local, state, or federal laws.',
    ],
  },
  {
    id: 7,
    title: 'Governing Law',
    content: [
      'This disclaimer and any disputes arising out of or in connection with the use of this website or the purchase of our products shall be governed by and construed in accordance with the laws of the United States.',
    ],
  },
  {
    id: 8,
    title: 'Modifications',
    content: [
      'IJ Print Shop reserves the right to modify this disclaimer at any time. Any changes will be posted on this page, and it is your responsibility to review this page periodically for updates.',
    ],
  },
  {
    id: 9,
    title: 'Contact Information',
    content: [
      'If you have any questions or concerns about this disclaimer, please contact our customer service team at:',
      'support@ijprintshop.com',
    ],
  },
  {
    id: 10,
    title: 'Agreement',
    content: [
      'By using our website and purchasing our products, you agree to this disclaimer in full. If you do not agree with any part of this disclaimer, you must not use our website or purchase our products. Thank you for choosing IJ Print Shop.',
    ],
  },
];
