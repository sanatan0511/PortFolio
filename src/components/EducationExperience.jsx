import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const EducationExperience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titlelineRef = useRef(null);
  const timelineRef = useRef(null);

  const educationData = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering (CSE)",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "2023 - present",
      description: "Specialized in Software + Artificial Intelligence and Machine Learning. Graduated with distinction.",
      achievements: [
        "Published research paper on Navic + inertial positioning System",
        "Teaching Assistant for Advanced Algorithms",
        "Minor in Mathmatics",
        "Master in Competative Programming"
        
      ]
    },
    {
      id: 2,
      degree: "Senior Secondary School Class-XII ",
      institution: "University of California, Berkeley",
      location: "Patna, Bihar",
      period: "2021 - 2023",
      description: "Focus on JEE MAINS + ADVANCED .",
      achievements: [
        "Led School hackathon team to 1st place",
        "President of Coding Club",
        "NSTSE Topper National-wide with Rank-45th "
      ]
    },
    {
      id: 3,
      degree: "Higher Secondary School Class-X ",
      institution: "Dr .D. Ram D.A.V public School",
      location: "Patna, Bihar",
      period: "2012 - 2021",
      description: "Focus on class Xth and overall progress",
      achievements: [
        "Led School Science-hackathon team to 2nd  place",
        "Focus on Foundation of Math and Science"
        
      ]
    }
  ];

  const experienceData = [
    {
      id: 1,
      title: "Software Team Lead and End to End System Architect",
      company: "Indian Army",
      location: "India",
      period: "Nov, 2025 - Present",
      description: "Engineered a GNSS-independent aerial navigation system leveraging onboard sensors  and control algorithms  for INDIAN ARMY",
      responsibilities: [
        "Devloping Navic + inertial positioning system with real time-trancking using xmpp server",
        "Guidance from ISRO scientist and Drdo Scientist",
        "Optimized performance resulting in 40% faster load times",
        "Implemented CI/CD pipelines for automated deployment"
      ]
    },
    {
      id: 2,
      title: "Open-Source Developer & Full-Stack / AI-ML Software Architect",
      company: "Upwork & Fiverr",
      location: "India",
      period: " June, 2025 - present",
      description: "Developed and maintained scalable full-stack web applications and AI/ML-based solutions for  National and International clients.",
      responsibilities: [
        "Built RESTful APIs using Node.js and Express.js",
        "Designed and optimized MongoDB database schemas",
        "Developed interactive dashboards using React.js and D3.js",
        "Implemented AI/ML models and integrated them into production systems",
        "Collaborated with UX/UI teams to enhance user experience and performance"
      ]
    },
    
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Title underline animation
    gsap.fromTo(
      titlelineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Timeline container animation
    gsap.fromTo(
      timelineRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Education cards animations
    gsap.utils.toArray(".education-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          x: -50, 
          opacity: 0,
          rotateY: -10 
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Experience cards animations
    gsap.utils.toArray(".experience-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          x: 50, 
          opacity: 0,
          rotateY: 10 
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Achievement list items animation
    gsap.utils.toArray(".achievement-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item.closest(".education-card"),
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Responsibility items animation
    gsap.utils.toArray(".responsibility-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item.closest(".experience-card"),
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Timeline connector animation
    gsap.fromTo(
      ".timeline-connector",
      { height: "0%" },
      {
        height: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      }
    );

    // Background parallax effect
    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education-experience"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Section title */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center mb-4 opacity-0"
        >
          Education & Experience
        </h2>
        <div
          ref={titlelineRef}
          className="w-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto opacity-0 rounded-full"
        />
        <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
          My academic background and professional journey in the tech industry
        </p>
      </div>

      {/* Timeline container */}
      <div ref={timelineRef} className="container mx-auto px-4 relative z-10 opacity-0">
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Education Section */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <FaGraduationCap className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="education-card relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 opacity-0"
                >
                  {/* Decorative line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-2xl" />
                  
                  <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <span className="flex items-center gap-2 text-sm text-gray-400">
                      <FaCalendarAlt className="text-blue-400" />
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300 mb-3">
                    <span className="font-semibold text-blue-400">{edu.institution}</span>
                    <span className="flex items-center gap-1 text-sm text-gray-400 ml-auto">
                      <FaMapMarkerAlt className="text-purple-400" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{edu.description}</p>

                  <div className="space-y-2">
                    {edu.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="achievement-item flex items-start gap-2 text-sm text-gray-400 opacity-0"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Connector for Desktop */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400">
              <div className="timeline-connector absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />
            </div>
          </div>

          {/* Experience Section */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <FaBriefcase className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="experience-card relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 opacity-0"
                >
                  {/* Decorative line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-l-2xl" />
                  
                  <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <span className="flex items-center gap-2 text-sm text-gray-400">
                      <FaCalendarAlt className="text-purple-400" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300 mb-3">
                    <span className="font-semibold text-purple-400">{exp.company}</span>
                    <span className="flex items-center gap-1 text-sm text-gray-400 ml-auto">
                      <FaMapMarkerAlt className="text-pink-400" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.responsibilities.map((responsibility, index) => (
                      <div
                        key={index}
                        className="responsibility-item flex items-start gap-2 text-sm text-gray-400 opacity-0"
                      >
                        <span className="text-purple-400 mt-1">→</span>
                        <span>{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default EducationExperience;