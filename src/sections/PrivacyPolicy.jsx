import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {privacyPolicy.map((section) => (
        <div key={section.id} className="border rounded-lg p-6 shadow-md m-3">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            {section.title}
          </h2>
          <ul className="list-disc pl-6">
            {section.content.map((point, index) => (
              <li key={index} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;

const privacyPolicy = [
  {
    id: 1,
    title: 'Privacy Policy',
    content: [
      "This Privacy Policy describes IJ Print Shop's policies and procedures regarding the collection, use, and disclosure of Your information when You use our Service. It outlines Your privacy rights and how we protect Your data.",
      'By using our Service, You agree to the collection and use of information as described in this Privacy Policy.',
    ],
  },
  {
    id: 2,
    title: 'Interpretation and Definitions',
    content: [
      'Interpretation: The capitalized words in this Privacy Policy have specific meanings defined under certain conditions. These definitions apply whether the words appear in singular or plural form.',
      "Definitions: For the purposes of this Privacy Policy, terms like 'Account', 'Affiliate', 'Company', 'Cookies', 'Country', 'Device', 'Personal Data', 'Service', 'Service Provider', 'Usage Data', and 'Website' have specific meanings.",
    ],
  },
  {
    id: 3,
    title: 'Collecting and Using Your Personal Data',
    content: [
      'Types of Data Collected: We may collect personally identifiable information such as email address, first name, last name, phone number, address, and Usage Data while You use our Service.',
      'Usage Data: This includes information like IP address, browser type, pages visited, time spent on pages, and device identifiers, collected automatically during Your use of our Service.',
    ],
  },
  {
    id: 4,
    title: 'Tracking Technologies and Cookies',
    content: [
      'We use Cookies and similar tracking technologies to improve and analyze our Service. These technologies include cookies, web beacons, and scripts.',
      'Types of Cookies: We use Session Cookies, Persistent Cookies, and other types to enhance Your browsing experience and functionality on our Website.',
    ],
  },
  {
    id: 5,
    title: 'Use of Your Personal Data',
    content: [
      'We use Your Personal Data for purposes such as providing and maintaining our Service, managing Your Account, contacting You, providing news and offers, managing requests, and conducting business transfers.',
      'Sharing Your Personal Data: We may share Your information with Service Providers, business partners, affiliates, and in other specific circumstances outlined in our Privacy Policy.',
    ],
  },
  {
    id: 6,
    title: 'Retention of Your Personal Data',
    content: [
      'We retain Your Personal Data only as long as necessary for the purposes described in this Privacy Policy. Usage Data may be retained for analysis and to improve our Service.',
    ],
  },
  {
    id: 7,
    title: 'Transfer of Your Personal Data',
    content: [
      'Your information, including Personal Data, may be transferred to and processed in locations outside of Your jurisdiction where data protection laws may differ. By using our Service, You consent to such transfers.',
    ],
  },
  {
    id: 8,
    title: 'Delete Your Personal Data',
    content: [
      'You have the right to request the deletion of Your Personal Data held by IJ Print Shop. You can manage Your information through Your Account settings or contact us directly for assistance.',
    ],
  },
  {
    id: 9,
    title: 'Disclosure of Your Personal Data',
    content: [
      'We may disclose Your Personal Data in situations such as business transactions, law enforcement requests, legal obligations, and to protect the rights, safety, and security of our users and the public.',
    ],
  },
  {
    id: 10,
    title: 'Security of Your Personal Data',
    content: [
      'While we employ security measures to protect Your Personal Data, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to safeguard Your information.',
    ],
  },
  {
    id: 11,
    title: 'Children’s Privacy',
    content: [
      'Our Service is not directed at individuals under the age of 13. We do not knowingly collect personally identifiable information from minors. If You are a parent and discover Your child has provided us with Personal Data, please contact us.',
    ],
  },
  {
    id: 12,
    title: 'Links to Other Websites',
    content: [
      'Our Service may contain links to third-party websites not operated by IJ Print Shop. We have no control over the content, privacy policies, or practices of these websites. We encourage You to review their Privacy Policies.',
    ],
  },
  {
    id: 13,
    title: 'Changes to this Privacy Policy',
    content: [
      'IJ Print Shop reserves the right to update this Privacy Policy periodically. We will notify You of any changes by posting the updated Privacy Policy on our Website. Please review this Privacy Policy periodically for updates.',
    ],
  },
  {
    id: 14,
    title: 'Contact Us',
    content: [
      'If You have any questions about this Privacy Policy or our practices, please contact us at support@ijprintshop.com.',
    ],
  },
];
