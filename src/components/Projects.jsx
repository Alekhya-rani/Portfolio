import { motion } from "framer-motion";

const projects = [
  {
    title: "Proctored Test",
    description:
      "A full-stack web application for conducting secure online examinations with real-time proctoring.",
    tech: ["React", "Django", "PostgreSql"],
    image: "images/proctoredtest.webp", // store in public/images/
    liveLink: "https://gradarena.in/",
    codeLink: "https://github.com/Asha-deepthi/GA_Backend",
  },
  {
    title: "TechNova-Tech Event",
    description:
      "Designed and developed a website for the Tech Nova technical event conducted in our national technical symposium fest CRESENCE2K25 at JNTU-GV university ",
    tech: ["React", "node.js", "MongoDB","TailwindCss"],
    image: "images/techevent.avif", // store in public/images/
    liveLink: "https://technova2k25.vercel.app ",
    codeLink: "https://github.com/technova-022234/technova",
  },
  {
    title: "File Synchronizer",
    description:
      "Desktop app to sync folders locally using Electron + React. Includes auto/manual sync and real-time sync monitoring.",
    tech: ["React", "Electron", "Node.js"],
    image: "images/filesync.jpg",
    liveLink: "https://file-synchronizer.vercel.app/",
    codeLink: "https://github.com/Alekhya-rani/File_Synchronizer_Frontend",
  },
  {
    title: "Inventory Management System",
    description:
      "Developed a Inventory Management System application to facilitate real-time CRUD operations in inventory management.",
    tech: ["Python", "pandas", "Tkinter"],
    image: "images/inventory.webp", // store in public/images/
    codeLink: "https://github.com/Alekhya-rani/Advance-Python-Project",
  },
  {
    title: "My Music Player",
    description:
      "The core functionality allows users to play, pause, and navigate through music tracks.",
    tech: ["HTML", "CSS", "Javascript"],
    image: "images/musicplayer.webp", // store in public/images/
    codeLink: "https://github.com/Alekhya-rani/my-music-player",
  },
  {
    title: "ML From Scratch",
    description:
      "Implemented ML algorithms like Linear Regression, KNN, Decision Trees, K-Means, PCA, and more — without using any external ML libraries.",
    tech: ["Python", "NumPy", "Matplotlib"],
    image: "images/ml.webp", // store in public/images/
    codeLink: "https://github.com/Alekhya-rani/ml-zero",
  },
  // Add more as needed
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#0f172a] text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.4)",
                }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm text-indigo-400 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-[#334155] px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 hover:underline transition duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 hover:underline transition duration-200"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
