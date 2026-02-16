import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

const Project = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titlelineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  // project data with live demo and github links
  const projects = [
    {
      id: 1,
      title: "Bhagirathi",
      description: "An AI-Powered SIH Based Project under Namami Ganga Prohect to Protect River Ganga and provide realtime insights",
      tech: ["Streamlit", "Python", "Heap", "BS4",'folium'],
      src: "/images/project-1.png",
      alt: "Bhagirathi",
      liveDemo: "https://bhagirathi-namamiganga.streamlit.app/",
      github: "https://github.com/sanatan0511/BHAGIRATHI"
    },
    {
      id: 2,
      title: "Samundra Setu",
      description: "A modern portfolio website showcasing projects with smooth animations and interactive elements. Built with React, GSAP, and Tailwind CSS.",
      tech: ["PyTorch", "Python", "Computer-Vision", "Transfer-Learning"],
      src: "/images/project-2.png",
      alt: "Samundra Setu",
      liveDemo: "https://github.com/sanatan0511/SIH2025-Samundra-Setu",
      github: "https://github.com/sanatan0511/SIH2025-Samundra-Setu"
    },
    {
      id: 3,
      title: "AI-powered Mock interview Platform",
      description: " Developed a real-time AI voice interview platform using Next.js and Vapi AI for mock interviews.",
      tech: ["React", "Firebase", "Stripe", "Context API","vapi Ai"],
      src: "/images/project-3.png",
      alt: "AI-powered Mock interview Platform",
      liveDemo: "https://ai-interview-two-woad.vercel.app/sign-in",
      github: "https://github.com/sanatan0511/Mockverse-Real-Time-AI-Voice-Interview-Agent/tree/main/ai_mock_interviews-main/ai_mock_interviews-main"
    }
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

    // Section enter animation
    gsap.fromTo(
      triggerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
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

    // Set initial visibility for all panel elements
    gsap.set(".project-image, .project-title, .project-description, .tech-stack, .project-links", {
      opacity: 0,
      y: 20
    });

    // Calculate total width for horizontal scroll
    const totalWidth = 100 * (projects.length - 1);
    
    // Horizontal scroll animation
    const horizontalScroll = gsap.to(".panel", {
      xPercent: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projects.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    // Individual panel animations
    const panels = gsap.utils.toArray(".panel");
    
    panels.forEach((panel, i) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");
      const description = panel.querySelector(".project-description");
      const techStack = panel.querySelector(".tech-stack");
      const projectLinks = panel.querySelector(".project-links");

      // Create timeline for each panel with immediate render
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left center",
          end: "right center",
          scrub: 1,
          toggleActions: "play none none reverse",
          onEnter: () => {
            gsap.to([image, imageTitle, description, techStack, projectLinks], {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.5,
              overwrite: true
            });
          },
          onLeave: () => {
            gsap.to([image, imageTitle, description, techStack, projectLinks], {
              opacity: 0,
              y: 20,
              duration: 0.3,
              overwrite: true
            });
          },
          onEnterBack: () => {
            gsap.to([image, imageTitle, description, techStack, projectLinks], {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.5,
              overwrite: true
            });
          },
          onLeaveBack: () => {
            gsap.to([image, imageTitle, description, techStack, projectLinks], {
              opacity: 0,
              y: 20,
              duration: 0.3,
              overwrite: true
            });
          }
        },
      });

      // Force the first panel to be visible initially
      if (i === 0) {
        gsap.set([image, imageTitle, description, techStack, projectLinks], {
          opacity: 1,
          y: 0,
          delay: 0.5
        });
      }
    });

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects.length]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Section title */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold text-center mb-4 opacity-0"
        >
          Featured Projects
        </h2>
        <div
          ref={titlelineRef}
          className="w-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto opacity-0 rounded-full"
        />
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Interactive showcase of my recent work with smooth animations and detailed insights
        </p>
      </div>

      {/* Horizontal scrolling projects */}
      <div ref={triggerRef} className="overflow-hidden">
        <div
          ref={horizontalRef}
          className="horizontal-section flex w-full"
          style={{ width: `${projects.length * 100}%` }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="panel relative w-full flex-shrink-0 flex items-center justify-center px-4"
              style={{ width: `${100 / projects.length}%` }}
            >
              <div className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    className="project-image w-full h-full object-cover"
                    src={project.src}
                    alt={project.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <h3 className="project-title text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    {project.title}
                    <SlShareAlt className="text-blue-500" />
                  </h3>

                  <p className="project-description text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="tech-stack mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="project-links flex gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity duration-300 shadow-md hover:shadow-lg"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-900 transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <p className="text-gray-500 text-sm animate-pulse">
          ← Scroll horizontally to view more projects →
        </p>
      </div>
    </section>
  );
};

export default Project;