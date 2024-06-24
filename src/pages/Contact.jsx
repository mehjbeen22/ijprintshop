import React from 'react';

const Contact = () => {
  return (
    <main className="pb-10">
      <div className="relative bg-red-900 py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/call-center-employee-man-hand-holding-headset-telephone_42708-311.jpg?w=1060')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
            Contact us
          </h1>
        </div>
      </div>

      <form
        className="max-w-lg mx-auto mt-12 bg-white shadow-2xl p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              className="mt-2 block w-full px-4 py-3 border rounded-md bg-white text-gray-900 focus:border-red-600 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              className="mt-2 block w-full px-4 py-3 border rounded-md bg-white text-gray-900 focus:border-red-600 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="mt-2 block w-full px-4 py-3 border rounded-md bg-white text-gray-900 focus:border-red-600 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="+91 11100022233"
              className="mt-2 block w-full px-4 py-3 border rounded-md bg-white text-gray-900 focus:border-red-600 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="mt-2 block w-full px-4 py-3 border rounded-md bg-white text-gray-900 focus:border-red-600 focus:outline-none"
            ></textarea>
          </div>
        </div>
        <button className="mt-8 block w-full py-3 px-4 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:bg-red-700">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;
