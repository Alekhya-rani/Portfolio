import { motion } from 'framer-motion';

const experiences = [
  {
    company: "GA DIGITAL SOLUTIONS",
    role: "Full stack developer (Product development team)",
    duration: "May 2025 – July 2025",
    logo: "images/GA.png", // Make sure this is in public/images/
    description: "A full-stack web application for conducting secure online examinations with real-time proctoring.",
  },
  // Add more experiences as needed
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 bg-[#0f172a] px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b] rounded-xl p-6 shadow-lg border border-gray-700 flex justify-between items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Left: Text */}
              <div className="flex-1 pr-6">
                <h3 className="text-xl font-semibold text-indigo-400">{exp.role}</h3>
                <p className="text-gray-300 text-sm mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-2 italic">{exp.duration}</p>
                <p className="text-gray-400 text-sm">{exp.description}</p>
              </div>

              {/* Right: Logo */}
              <img
                src={`/${exp.logo}`}
                alt={`${exp.company} logo`}
                className="h-28 w-28 object-contain rounded-md"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
