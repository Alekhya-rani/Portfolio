import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => {
        const section = document.querySelector(link.href);
        if (!section) return null;
        return {
          id: link.name,
          top: section.offsetTop - 100
        };
      });

      const scrollPos = window.scrollY;

      const current = sections.findLast(section => section && scrollPos >= section.top);
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] border-b border-gray-700 shadow"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white">Alekhya</a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition duration-300 ${
                activeSection === link.name ? "text-indigo-400" : "text-gray-300 hover:text-indigo-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1e293b] px-6 pb-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-300 hover:text-indigo-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
