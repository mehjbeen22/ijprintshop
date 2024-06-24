import React from 'react';
import WhyChooseUs from '../sections/WhyChooseUs';

const arr = [
  'High-Quality Refurbished Printers: Each printer undergoes rigorous testing and certification to ensure it meets our stringent quality standards.',
  'Cost-Effective Solutions: Enjoy significant savings without sacrificing performance. Our refurbished printers offer the same functionality as new ones at a fraction of the cost.',
  'Eco-Friendly Options: Choosing refurbished helps reduce electronic waste and supports environmentally conscious practices.',
  'Comprehensive Warranty: All our refurbished printers come with a six-month warranty, providing you with peace of mind and assurance of quality.',
  'Exceptional Customer Support: Our dedicated customer service team is always ready to assist you with any questions or concerns. We are committed to providing excellent support to ensure your satisfaction.',
];

const Service = () => {
  return (
    <>
      <main className="bg-gray-100 p-6">
        <header className="text-center mb-8">
          <h2 className="text-6xl font-bold text-red-600">Our Services</h2>
        </header>
        <section className="flex flex-col md:flex-row items-center md:items-start bg-white p-6 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2 p-4">
            <img
              className="rounded-lg shadow-md"
              src="https://img.freepik.com/premium-photo/business-coworkers-dressed-suits-having-oline-conference-with-headset-laptop-sitting-office_506452-3497.jpg?w=826"
              alt="Coworkers having an online conference"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Welcome to IJ Print Shop
            </h2>
            <p className="text-gray-700 mb-4">
              At IJ Print Shop, we are dedicated to providing high-quality
              printing solutions tailored to meet your needs. Whether you're a
              small business owner, a student working on a project, or an
              individual looking to create personalized items, we've got you
              covered.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>We offer a wide range of printing services, including:</li>
              {arr.map((value, index) => (
                <li key={index} className="mb-2">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <WhyChooseUs />
    </>
  );
};

export default Service;
