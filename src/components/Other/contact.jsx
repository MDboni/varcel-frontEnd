import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-8 space-y-12">
      <h1 className="text-4xl font-bold text-indigo-600 text-center">
        Contact Us
      </h1>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <p className="text-gray-600">123 Main Street, Dhaka, Bangladesh</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-600">support@coursemaster.com</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-gray-600">+880 1234 567890</p>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-500 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9047682286065!2d90.39851647504397!3d23.780573894596554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0cde28fd5%3A0x1b3c6e7d77dfdb3d!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1699897227711!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="min-h-[400px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
