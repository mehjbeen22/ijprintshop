import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      {terms.map((term) => (
        <div key={term.id} className="border rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">
            {term.title}
          </h2>
          <ul className="list-disc list-inside">
            {term.content.map((point, index) => (
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

export default TermsAndConditions;

const terms = [
  {
    id: 1,
    title: 'Welcome to IJ Print Shop!',
    content: [
      'These terms and conditions outline the rules and regulations for the use of IJ Print Shop’s Website, located at https://ijprintshop.com/.',
      'By accessing this website, we assume you accept these terms and conditions. Do not continue to use IJ Print Shop if you do not agree to take all of the terms and conditions stated on this page.',
    ],
  },
  {
    id: 2,
    title: 'Terminology',
    content: [
      "The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: 'Client', 'You', and 'Your' refer to you, the person logging on to this website and compliant with the Company’s terms and conditions. 'The Company', 'Ourselves', 'We', 'Our', and 'Us', refer to our Company. 'Party', 'Parties', or 'Us', refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of us. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.",
    ],
  },
  {
    id: 3,
    title: 'Cookies',
    content: [
      'We employ the use of cookies. By accessing IJ Print Shop, you agree to use cookies in accordance with the IJ Print Shop’s Privacy Policy.',
      'Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.',
    ],
  },
  {
    id: 4,
    title: 'License',
    content: [
      'Unless otherwise stated, IJ Print Shop and/or its licensors own the intellectual property rights for all material on IJ Print Shop. All intellectual property rights are reserved. You may access this from IJ Print Shop for your own personal use subject to restrictions set in these terms and conditions.',
      'You must not: Republish material from IJ Print Shop; Sell, rent or sub-license material from IJ Print Shop; Reproduce, duplicate or copy material from IJ Print Shop; Redistribute content from IJ Print Shop.',
    ],
  },
  {
    id: 5,
    title: 'Posting Comments',
    content: [
      'Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. IJ Print Shop does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of IJ Print Shop, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, IJ Print Shop shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.',
      'You warrant and represent that: You are entitled to post the Comments on our website and have all necessary licenses and consents to do so; The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party; The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy; The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.',
      'You hereby grant IJ Print Shop a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.',
    ],
  },
  {
    id: 6,
    title: 'Hyperlinking to our Content',
    content: [
      'The following organizations may link to our Website without prior written approval: Government agencies; Search engines; News organizations; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.',
      'These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.',
    ],
  },
  {
    id: 7,
    title: 'iFrames',
    content: [
      'Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.',
    ],
  },
  {
    id: 8,
    title: 'Content Liability',
    content: [
      'We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.',
    ],
  },
  {
    id: 9,
    title: 'Reservation of Rights',
    content: [
      'We reserve the right to request that you remove all links or any particular link to our Website. You agree to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.',
    ],
  },
  {
    id: 10,
    title: 'Removal of links from our website',
    content: [
      'If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.',
    ],
  },
  {
    id: 11,
    title: 'Disclaimer',
    content: [
      'To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will: limit or exclude our or your liability for death or personal injury; limit or exclude our or your liability for fraud or fraudulent misrepresentation; limit any of our or your liabilities in any way that is not permitted under applicable law; or exclude any of our or your liabilities that may not be excluded under applicable law.',
      'As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.',
    ],
  },
];
