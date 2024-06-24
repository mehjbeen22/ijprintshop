import React from 'react';

const images = [
  {
    src: 'https://123techprint.com/wp-content/uploads/2024/06/Frame-273-2.png',
    alt: 'Printer Frame 273',
  },
  {
    src: 'https://123techprint.com/wp-content/uploads/2024/06/Frame-276-2.png',
    alt: 'Printer Frame 276',
  },
  {
    src: 'https://123techprint.com/wp-content/uploads/2024/06/Frame-274-2.png',
    alt: 'Printer Frame 274',
  },
  {
    src: 'https://123techprint.com/wp-content/uploads/2024/06/Frame-275-1.png',
    alt: 'Printer Frame 275',
  },
  {
    src: 'https://123techprint.com/wp-content/uploads/2024/06/Frame-277-1.png',
    alt: 'Printer Frame 277',
  },
  {
    src: 'https://123techprint.com/wp-content/uploads/2024/06/Frame-281-1.png',
    alt: 'Printer Frame 281',
  },
];

const ImagesSection = () => {
  return (
    <div className="bg-red-600 p-4">
      <header className="bg-red p-4">
        <h1 className="text-white text-4xl font-bold text-center">
          Our Printers
        </h1>
      </header>
      <div className="flex overflow-x-auto gap-4 p-2 bg-white">
        {images.map((image, index) => (
          <div key={index} className="p-2 shadow-2xl rounded-full ">
            <img
              loading="lazy"
              decoding="async"
              width="245"
              height="245"
              src={image.src}
              alt={image.alt}
              className="rounded-full shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesSection;
