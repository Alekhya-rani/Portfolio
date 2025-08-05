import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiPostgresql, SiMysql } from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { icon: <FaReact className="text-sky-400" />, name: "React" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <FaPython className="text-blue-400" />, name: "Python" },
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
    { icon: <SiPostgresql className="text-blue-600" />, name:"PostgreSQL"},
    { name: 'SQL', icon: <FaDatabase className="text-purple-300" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
  ];

  return (
    <section className="bg-[#0f172a] py-20 px-4" id="skills">
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SKILLS
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-white hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-5xl mb-2">{skill.icon}</div>
              <span className="text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
