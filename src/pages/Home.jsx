import React from 'react';
import Blog from '../sections/Blog';
import ImagesSection from '../sections/OurPrinterImages';

const Home = () => {
  return (
    <>
      <div className="bg-white text-black min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col md:flex-row items-center justify-center p-4">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left text-red-600">
              Welcome to IJ Print Shop
            </h2>
            <p className="text-center md:text-left mb-8">
              your premier destination for refurbished printing solutions.
              Whether you need business documents or promotional materials,
              we've got you covered. Our state-of-the-art refurbished printing
              technology guarantees high-quality prints every time. From flyers
              to customized merchandise, we deliver exceptional results with
              fast turnaround times.
            </p>
            <p className="text-center md:text-left mb-8">
              As an independent third-party provider, we offer professional,
              reliable, and affordable printing services. Catering to both
              individuals and businesses, our team provides personalized service
              and expert guidance to meet your unique printing needs. Discover
              how we can help you make a lasting impression with our premium
              refurbished print products.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-red text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://img.freepik.com/premium-photo/electronic-device-copier-white-background_145644-15156.jpg?w=996"
              alt="Printer"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </main>
      </div>
      <ImagesSection />
      <Blog />
    </>
  );
};

export default Home;
