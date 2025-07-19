import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey, I'm <span className="text-indigo-500">Alekhya Rani</span>
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 mb-6 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Passionate Web Developer & Future ML Engineer
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          I build beautiful, fast, and scalable web applications using modern tools like React, Tailwind, and Node.js.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full transition duration-300 w-52 text-center"
          >
            View Projects
          </a>
          <a
            href="/Alekhya_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 hover:border-white text-gray-200 hover:text-white px-6 py-3 rounded-full transition duration-300 w-52 text-center"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
