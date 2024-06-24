const About = () => {
  return (
    <>
      <div className="bg-white">
        <div className="relative bg-red-900 py-24">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/compact-home-printer-desk-with-books-against-blurred-background_93675-118920.jpg?w=826')",
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
              About IJ Print Shop
            </h1>
            <p className="text-lg md:text-2xl animate__animated animate__fadeInUp">
              Your trusted partner for all printer solutions
            </p>
          </div>
        </div>{' '}
        <div className="flex justify-center items-center m-4">
          <section className="space-y-8 w-[90%]">
            {contentArray.map((section, index) => (
              <div
                key={index}
                className="bg-white text-black p-6 rounded-lg shadow-lg border border-black"
              >
                <h2 className="text-3xl font-semibold mb-4 text-red-600 text-center">
                  {section.title}
                </h2>
                <p className="text-gray-800">{section.content}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
const contentArray = [
  {
    title: 'Who We Are',
    content:
      'At IJ Print Shop, we specialize in selling refurbished printers that meet the highest standards of performance and quality. Our team of experts meticulously inspects, repairs, and tests each printer to ensure it operates like new. Our commitment to excellence ensures you receive exceptional value without compromising on quality.',
  },
  {
    title: 'Our Mission',
    content:
      'Our mission is to make premium printing solutions accessible to everyone. By refurbishing and reselling printers, we provide an eco-friendly option that helps reduce electronic waste and promotes sustainability. We believe in delivering products that not only meet your needs but also contribute to a healthier planet.',
  },
  {
    title: 'What We Offer',
    content:
      'High-Quality Refurbished Printers: Each printer undergoes rigorous testing and certification to ensure it meets our stringent quality standards. Cost-Effective Solutions: Enjoy significant savings without sacrificing performance. Our refurbished printers offer the same functionality as new ones at a fraction of the cost. Eco-Friendly Options: Choosing refurbished helps reduce electronic waste and supports environmentally conscious practices. Comprehensive Warranty: All our refurbished printers come with a six-month warranty, providing you with peace of mind and assurance of quality. Exceptional Customer Support: Our dedicated customer service team is always ready to assist you with any questions or concerns. We are committed to providing excellent support to ensure your satisfaction.',
  },
  {
    title: 'Warranty and Returns',
    content:
      'We stand behind the quality of our products with a six-month warranty on all refurbished printers. This warranty covers defects in materials and workmanship under normal use. Detailed warranty terms and conditions are provided with each product. Additionally, we offer a clear and fair return policy, which can be found on our Returns page. We encourage customers to review these details before making a purchase to ensure complete satisfaction.',
  },
  {
    title: 'Our Commitment',
    content:
      'At IJ Print Shop, we are more than just a printer supplier. We are your partners in achieving efficient and eco-friendly printing solutions. Our commitment to quality, affordability, and sustainability drives everything we do. We strive to exceed your expectations and provide you with the best possible experience. Thank you for choosing IJ Print Shop. We look forward to helping you find the perfect printer that meets your needs and exceeds your expectations.',
  },
];
