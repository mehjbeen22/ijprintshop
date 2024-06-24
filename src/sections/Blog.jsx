import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'The Advantages of Refurbished Printers',
      excerpt:
        'Discover the benefits of using refurbished printers, including cost savings and environmental benefits.',
      image:
        'https://img.freepik.com/free-photo/woman-working-office-using-printer_23-2149456970.jpg?t=st=1718620871~exp=1718624471~hmac=4bde806072fa3d890eda35f504453780ce8fd180100c000aa1ba612c873976c5&w=826',
    },
    {
      title: 'How to Choose the Right Refurbished Printer',
      excerpt:
        'Learn essential tips for selecting the best refurbished printer for your needs and budget.',
      image:
        'https://img.freepik.com/free-photo/woman-working-office-using-printer_23-2149456970.jpg?t=st=1718620871~exp=1718624471~hmac=4bde806072fa3d890eda35f504453780ce8fd180100c000aa1ba612c873976c5&w=826',
    },
    {
      title: 'Maintaining Your Refurbished Printer: Tips and Tricks',
      excerpt:
        'Explore maintenance techniques to keep your refurbished printer running smoothly and efficiently.',
      image:
        'https://img.freepik.com/free-photo/people-repairing-computer-chips_23-2150880959.jpg?t=st=1718620997~exp=1718624597~hmac=4fd03aca4783e57018b77692f88e1db972045ca5cde227d5a6f6969cee8c000a&w=826',
    },
    {
      title: 'Refurbished vs. New Printers: Which One Should You Choose?',
      excerpt:
        'Understand the differences between refurbished and new printers to make an informed decision.',
      image:
        'https://img.freepik.com/free-photo/medium-shot-bored-people-working_23-2150697614.jpg?t=st=1718621051~exp=1718624651~hmac=16e97c834f5b50ed96a3bfdc0a706842d4b4ba2a62341fa8786423cb7bf20d5d&w=826',
    },
  ];

  return (
    <div className="bg-[#f1f5f9] text-black flex flex-col shadow-xl py-6">
      <header className="bg-red-600 p-4">
        <h1 className="text-white text-4xl font-bold text-center">
          IJ Print Blog
        </h1>
      </header>
      <main className="flex-grow p-4">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="mb-4">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
