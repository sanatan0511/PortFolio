import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Horizontal } from './components/Horizontal';
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import AboutSection from "./components/AboutSection";
import Project from "./components/Project";
import Skills from "./components/Skills";
import EducationExperience from  "./components/EducationExperience"
import ComponentSection from "./components/componentSection";
import Footer from "./components/Footer";
import { Certificates } from "./components/Certificates";
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Refresh scroll trigger when page is fully loaded
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Horizontal />
      <HeroSection />
      <CustomCursor />
      <AboutSection />
      <Skills/>
      <Project />
      <EducationExperience/>
      <Certificates />
      <ComponentSection/>
      <Footer />
      
      
    </>
  );
}