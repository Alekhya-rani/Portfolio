import { motion } from 'framer-motion';

const experiences = [
  {
    company: "TechNova Solutions",
    role: "Frontend Developer Intern",
    duration: "Jan 2024 – May 2024",
    description: "Built responsive React interfaces and optimized Tailwind CSS components for real-world dashboards.",
  },
  {
    company: "CodeCraft Club",
    role: "Web Developer",
    duration: "Aug 2023 – Dec 2023",
    description: "Developed and maintained the club website; collaborated with team on full-stack mini projects.",
  },
  // Add more if needed
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
              className="bg-[#1e293b] rounded-xl p-6 shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-indigo-400">{exp.role}</h3>
              <p className="text-gray-300 text-sm mb-2">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-2 italic">{exp.duration}</p>
              <p className="text-gray-400 text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
