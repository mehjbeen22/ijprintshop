import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 flex-col p-4">
      <header>
        <h2 className="text-6xl text-red-600 p-4">Why choose us</h2>
      </header>
      <section className=" flex items-center w-[95%] bg-white rounded shadow-xl p-4">
        <div className="w-full md:w-1/2 px-4">
          <ul className="space-y-6">
            {whyChooseUsData.map(({ title, description }, index) => {
              return (
                <li key={index}>
                  <h2 className="text-2xl font-bold mb-2">{title}</h2>
                  <p className="text-gray-700">{description}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <img
            className="mx-auto rounded-lg shadow-md"
            src="https://img.freepik.com/premium-photo/rear-view-businessman-with-question-marks-thinking-gesture-trying-find-idea-solve-problem_21336-3966.jpg?w=826"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
const whyChooseUsData = [
  {
    title: 'Quality',
    description:
      'At IJ Print Shop, we use the latest printing technology and high-quality materials to ensure that your prints look their best.',
  },
  {
    title: 'Customization',
    description:
      'With our customizable options, you can create prints that are unique to your needs and preferences.',
  },
  {
    title: 'Fast Turnaround',
    description:
      'We understand that time is of the essence, which is why we strive to deliver your prints quickly and efficiently.',
  },
  {
    title: 'Customer Satisfaction',
    description:
      'Your satisfaction is our top priority. Our friendly and knowledgeable team, unaffiliated with any specific brand, is here to assist you every step of the way.',
  },
];
