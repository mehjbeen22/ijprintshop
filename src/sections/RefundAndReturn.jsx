import React from 'react';

const ReturnRefundsPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {returnRefundsPolicy.map((policy) => (
        <div key={policy.id} className="border rounded-lg p-6 shadow-md m-3">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            {policy.title}
          </h2>
          <ul className="list-disc list-inside">
            {policy.content.map((item, index) => (
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

export default ReturnRefundsPolicy;

const returnRefundsPolicy = [
  {
    id: 1,
    title: 'Return and Refund Policy',
    content: [
      'If, for any reason, You are not completely satisfied with a purchase from IJ Print Shop, We invite You to review our policy on refunds and returns.',
      'The following terms apply to any products purchased from Us.',
    ],
  },
  {
    id: 2,
    title: 'Interpretation and Definitions',
    content: [
      'Interpretation: The capitalized words in this Return and Refund Policy have specific meanings defined under certain conditions.',
      "Definitions: For the purposes of this Return and Refund Policy, terms like 'Company', 'Goods', 'Orders', 'Service', 'Website', and 'You' have specific meanings.",
    ],
  },
  {
    id: 3,
    title: 'Your Order Cancellation Rights',
    content: [
      'You have the right to cancel Your Order within 7 days without giving any reason.',
      'The cancellation period will expire after 7 days from the day on which You received the Goods or a third party appointed by You, who is not the carrier, takes possession of the Goods.',
    ],
  },
  {
    id: 4,
    title: 'Conditions for Returns',
    content: [
      'To be eligible for a return, please ensure that the Goods were purchased within the last 7 days and are in their original packaging.',
      'Certain Goods are not eligible for return, such as customized or personalized items, perishable goods, and items sealed for hygiene reasons that have been unsealed after delivery.',
    ],
  },
  {
    id: 5,
    title: 'Returning Goods',
    content: [
      'You are responsible for the cost and risk of returning the Goods to Us. Ship the Goods to:',
      '89 Woodland Center, USA',
      'We recommend using an insured and trackable mail service, as We cannot be held responsible for Goods lost or damaged in transit.',
    ],
  },
  {
    id: 6,
    title: 'Refunds',
    content: [
      'We will reimburse You no later than 14 days from the day We receive the returned Goods, using the same payment method as You used for the Order. You will not incur any fees for this reimbursement.',
      'Only regular priced Goods may be refunded; sale items are non-refundable unless otherwise required by law.',
    ],
  },
  {
    id: 7,
    title: 'Gifts',
    content: [
      'If the Goods were marked as a gift when purchased and shipped directly to You, You’ll receive a gift credit for the value of Your return. Once the returned product is received, a gift certificate will be mailed to You.',
      'If the Goods were not marked as a gift when purchased, or if the gift giver had the Order shipped to themselves to give to You later, We will issue the refund to the gift giver.',
    ],
  },
  {
    id: 8,
    title: 'Contact Us',
    content: [
      'If You have any questions about our Returns and Refunds Policy, please contact us at support@ijprintshop.com.',
    ],
  },
];
