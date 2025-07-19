// src/components/FooterSection.jsx
import { Mail, Linkedin, Github, Instagram, Phone } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#0f172a] text-white px-6 py-16 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
          <p className="text-gray-400 mb-6">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
          <form 
          action="https://formspree.io/f/xwpqvekk"  
          method="POST"
          className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Socials and Contact Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
            <p className="text-gray-400 mb-6">
              Follow me or contact directly via mail or phone.
            </p>
            <div className="flex items-center gap-5 flex-wrap text-gray-300">
              <a
                href="mailto:alekhyamodalavalasa@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-500 transition flex items-center gap-2"
              >
                <Mail size={20} />
                <span>alekhyamodalavalasa@gmail.com</span>
              </a>
              <a
                href="tel:+916301790875"
                className="hover:text-indigo-500 transition flex items-center gap-2"
              >
                <Phone size={20} />
                <span>6301790875</span>
              </a>
              <a
                href="https://github.com/Alekhya-rani"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-500 transition flex items-center gap-2"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/alekhya-modalavalasa-098341253/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-500 transition flex items-center gap-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <p className="mt-12 text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Alekhya Rani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
