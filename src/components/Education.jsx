import { motion } from 'framer-motion';

const educationList = [
  {
    institution: "XYZ University",
    degree: "B.Tech in Computer Science",
    duration: "2021 – 2025",
    details: "Current GPA: 8.7. Specialized in Web Development and Machine Learning.",
  },
  {
    institution: "ABC Junior College",
    degree: "Intermediate (MPC)",
    duration: "2019 – 2021",
    details: "Secured 96% with focus on Mathematics and Physics.",
  },
  {
    institution: "Sunshine High School",
    degree: "Secondary Education (10th)",
    duration: "2018 – 2019",
    details: "Passed with 10 GPA. Excelled in Science and Computers.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="w-full py-20 bg-[#0f172a] px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="space-y-10">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b] rounded-xl p-6 shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-indigo-400">{edu.degree}</h3>
              <p className="text-gray-300 text-sm mb-2">{edu.institution}</p>
              <p className="text-gray-400 text-sm mb-2 italic">{edu.duration}</p>
              <p className="text-gray-400 text-sm">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
