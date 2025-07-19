import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20 px-4"
    >
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="text-indigo-400">Touch</span>
        </motion.h2>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message Sent!'); // optional feedback
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* Optional social icons */}
        <div className="mt-10 flex justify-center gap-6 text-2xl text-gray-400">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
