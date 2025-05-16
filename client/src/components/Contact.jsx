const Contact = () => {
  return (
    <section id="contact" className="min-h-screen -scroll-mt-28 px-6 md:px-16 py-16 text-white flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-xl p-10 max-w-xl w-full text-center shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Contact Me
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          If you have any questions or just want to say hi, feel free to reach out!
        </p>

        <div className="mb-6 space-y-2">
          <p>
            <span className="font-semibold text-white">Email:</span>
            <a href="mailto:samleoknowles@outlook.com" className="text-gray-400 hover:text-white">
              {" "}samleoknowles@outlook.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">Phone:</span>
            <a href="tel:07490126352" className="text-gray-400 hover:text-white">
              {" "}07490126352
            </a>
          </p>
        </div>

        <a
        href="mailto:samleoknowles@outlook.com"
        className="inline-block border bg-white text-black hover:border-white hover:bg-gray-800 hover:text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
        Send Email
        </a>

      </div>
    </section>
  );
};

export default Contact;
