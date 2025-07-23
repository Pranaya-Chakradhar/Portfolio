import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="bg-[#1E1E1E] text-white font-inter min-h-screen">
      <section className="container mx-auto max-w-4xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-[#CFCFCF] text-sm max-w-xl mx-auto">
            Have a project in mind, want to collaborate, or just want to say hi? Drop me a message — I’d love to hear from you!
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#252525] p-10 rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#1E1E1E] border border-[#444] text-white px-4 py-3 rounded focus:outline-none focus:border-white col-span-2 md:col-span-1"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#1E1E1E] border border-[#444] text-white px-4 py-3 rounded focus:outline-none focus:border-white col-span-2 md:col-span-1"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-[#1E1E1E] border border-[#444] text-white px-4 py-3 rounded focus:outline-none focus:border-white col-span-2"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="bg-[#1E1E1E] border border-[#444] text-white px-4 py-3 rounded focus:outline-none focus:border-white col-span-2"
          ></textarea>
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded hover:bg-[#CFCFCF] transition"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="text-center mt-16">
          <p className="text-sm text-[#AAAAAA]">
            Or reach me at: <a href="mailto:chakradharpranaya@gmail.com" className="text-white underline">chakradharpranaya@gmail..com</a>
          </p>
          <p>Contact: 9869079688</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
