const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <form className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mt-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;