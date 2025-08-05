import Navbar from '../components/Navbar';
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import EducationSection from "../components/Education";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
     <Navbar />
     <HeroSection />
     <About />
     <EducationSection />
     <Skills />
     <Experience />
     <Projects />
            {/* <ContactSection /> */}
     <Footer />
    </div>
  );
}
