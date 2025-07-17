import React, { useState } from 'react';
import { FaFacebookMessenger, FaWhatsapp, FaTelegramPlane, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Form Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form Data:', formData);
  };

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section id='contact' className="min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Contact</h1>
      </div>

      <div className="container mx-auto px-20">
        {/* Contact Info Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="p-8 transform  transition duration-300 rounded-lg shadow-lg shadow-green-500 border">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-400 mb-4 sm:mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 break-all">+880 1319 602545</p>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 break-all">
                  mahalamgir1213@gmail.com
                </p>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 break-all">Kulbaria, Samonta, Maheshpur, Jhenaidah, Bangladesh</p>
              </div>

              {/* Google Map */}
              <div>
                <h3 className="text-xl font-bold text-gray-400 mb-4">Location</h3>
                <div className="mt-6 border p-2">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2412.0935593582035!2d88.76755379348218!3d23.258261218596775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1742376725205!5m2!1sen!2sbd" width="100%"
                    height="200"
                    style={{ border: 3 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className=" p-8 rounded-lg transform  transition duration-300 border shadow-lg shadow-green-500">
            <h2 className="text-2xl font-bold text-gray-400 mb-6">Send Mail</h2>
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                {/* <p>Thank you for your mail! I'll get back to you soon.</p> */}
                <p>Thank you! But Backend not ready yet , Please Mail at <span className='text-yellow-500 text-xl'>"mahalamgir1213@gmail.com"</span> or contact the number provide in Contact Information secton.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            )}

            {/* Social Media Contact */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-400 mb-4 text-center md:text-left">Connect Via</h3>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/in/alamgir22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  title="Message on Linkedin"
                >
                  <FaLinkedin className="text-base sm:text-md" />
                </a>

                {/* Facebook Messenger */}
                <a
                  href="https://m.me/Alamgir.2.web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  title="Message on Facebook"
                >
                  <FaFacebookMessenger className="text-base sm:text-md" />
                </a>

                {/* Whatsapp */}
                <a
                  href="https://wa.me/01648263272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-2 sm:p-3 rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  title="Message on WhatsApp"
                >
                  <FaWhatsapp className="text-base sm:text-md" />
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/Alamgir_2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-500 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  title="Message on Telegram"
                >
                  <FaTelegramPlane className="text-base sm:text-md" />
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;