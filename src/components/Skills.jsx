import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaRobot, 
  FaCode, 
  FaChartLine, 
  FaLaptopCode,
  FaChevronDown,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaCloud,
  FaServer,
  FaBrain,
  FaCogs,
  FaChartBar,
  FaCube,
  FaBolt
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch,
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiRedis,
  SiKubernetes,
  SiGraphql
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const skillCategories = [
    {
      id: 'ml',
      title: 'Machine Learning',
      icon: <FaBrain className="text-3xl" />,
      description: 'Deep learning, neural networks, computer vision, and natural language processing.',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30',
      bgColor: 'bg-gradient-to-br from-purple-900/20 to-pink-900/10',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95, color: 'from-blue-500 to-cyan-400' },
        { name: 'PyTorch', icon: <SiPytorch />, level: 90, color: 'from-red-500 to-orange-400' },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 88, color: 'from-orange-500 to-yellow-400' },
        { name: 'Computer Vision', icon: <FaRobot />, level: 92, color: 'from-green-500 to-emerald-400' },
        { name: 'NLP', icon: <FaLaptopCode />, level: 85, color: 'from-blue-400 to-indigo-400' },
        { name: 'Scikit-learn', icon: <FaCogs />, level: 87, color: 'from-orange-400 to-yellow-300' },
      ]
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: <FaCode className="text-3xl" />,
      description: 'Full-stack development with modern frameworks and cloud technologies.',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-gradient-to-br from-blue-900/20 to-cyan-900/10',
      skills: [
        { name: 'React', icon: <FaReact />, level: 95, color: 'from-cyan-500 to-blue-400' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 90, color: 'from-blue-600 to-blue-400' },
        { name: 'Node.js', icon: <FaNodeJs />, level: 92, color: 'from-green-600 to-green-400' },
        { name: '.NET Core', icon: <SiDotnet />, level: 85, color: 'from-purple-600 to-purple-400' },
        { name: 'Next.js', icon: <FaCode />, level: 88, color: 'from-gray-800 to-gray-600' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 94, color: 'from-teal-500 to-cyan-400' },
      ]
    },
    {
      id: 'data',
      title: 'Data Science',
      icon: <FaChartLine className="text-3xl" />,
      description: 'Data analysis, visualization, and manipulation for actionable insights.',
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-emerald-900/10',
      skills: [
        { name: 'Pandas', icon: <FaChartBar />, level: 93, color: 'from-red-500 to-pink-400' },
        { name: 'NumPy', icon: <FaCube />, level: 91, color: 'from-blue-500 to-indigo-400' },
        { name: 'Matplotlib', icon: <FaChartLine />, level: 89, color: 'from-yellow-500 to-orange-400' },
        { name: 'SQL', icon: <FaDatabase />, level: 92, color: 'from-blue-400 to-cyan-300' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 87, color: 'from-blue-600 to-blue-400' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: 'from-green-500 to-green-300' },
      ]
    },
    {
      id: 'engineering',
      title: 'Software Engineering',
      icon: <FaLaptopCode className="text-3xl" />,
      description: 'Algorithms, data structures, and scalable system design.',
      color: 'from-orange-500 to-yellow-500',
      borderColor: 'border-orange-500/30',
      bgColor: 'bg-gradient-to-br from-orange-900/20 to-yellow-900/10',
      skills: [
        { name: 'JavaScript', icon: <FaJs />, level: 96, color: 'from-yellow-500 to-yellow-300' },
        { name: 'AWS', icon: <FaAws />, level: 88, color: 'from-orange-600 to-yellow-500' },
        { name: 'Docker', icon: <FaDocker />, level: 86, color: 'from-blue-500 to-cyan-400' },
        { name: 'Git', icon: <FaGitAlt />, level: 94, color: 'from-orange-600 to-red-400' },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 82, color: 'from-blue-500 to-blue-300' },
        { name: 'GraphQL', icon: <SiGraphql />, level: 84, color: 'from-pink-600 to-purple-400' },
      ]
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animations
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    // Card animations
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    // Animate progress bars when category is opened
    if (activeCategory) {
      const progressBars = document.querySelectorAll('.progress-bar');
      gsap.fromTo(progressBars,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: 'power3.out',
          transformOrigin: 'left center'
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [activeCategory]);

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-full border border-purple-500/20 backdrop-blur-sm">
            <FaBolt className="text-yellow-400 animate-pulse" />
            <span className="text-purple-300 font-semibold tracking-wide">Technical Expertise</span>
          </div>
          
          <h2
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 opacity-0"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
              Technical Skills
            </span>
          </h2>
          
          <p
            ref={subtitleRef}
            className="text-xl text-gray-300 opacity-0 max-w-2xl mx-auto leading-relaxed"
          >
            Here's an overview of my technical expertise across different domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              ref={el => cardsRef.current[index] = el}
              className="relative group"
            >
              {/* Main Card */}
              <div 
                className={`
                  relative p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer
                  ${category.bgColor} ${category.borderColor}
                  hover:scale-[1.02] hover:shadow-2xl hover:shadow-${category.color.split(' ')[1].split('-')[1]}/20
                  ${activeCategory === category.id ? 'ring-2 ring-offset-2 ring-offset-black ring-opacity-50' : ''}
                `}
                style={{ 
                  borderImage: activeCategory === category.id 
                    ? `linear-gradient(to right, ${category.color}) 1`
                    : 'none'
                }}
                onClick={() => toggleCategory(category.id)}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`} />
                    </div>
                  </div>
                  
                  <div className={`
                    transform transition-transform duration-300
                    ${activeCategory === category.id ? 'rotate-180' : ''}
                  `}>
                    <FaChevronDown className="text-gray-400 text-xl" />
                  </div>
                </div>

                {/* Card Description */}
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Section - Animated Expand */}
                <div className={`
                  overflow-hidden transition-all duration-700 ease-in-out
                  ${activeCategory === category.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="pt-6 border-t border-gray-800/50">
                    <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                      <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        Technologies & Proficiency
                      </span>
                    </h4>
                    
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-20`}>
                                <div className="text-white">
                                  {skill.icon}
                                </div>
                              </div>
                              <span className="text-white font-medium">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-gray-300 font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className="progress-bar h-full rounded-full transform scale-x-0 origin-left"
                              style={{
                                background: `linear-gradient(to right, ${skill.color})`,
                                width: `${skill.level}%`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 p-4 rounded-xl bg-gray-900/50 border border-gray-800/50">
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <FaBolt className="text-yellow-500" />
                        <span>Click again to collapse this section</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <div className={`
                  absolute bottom-6 left-1/2 transform -translate-x-1/2
                  transition-all duration-300 opacity-0 translate-y-4
                  ${activeCategory === category.id ? 'opacity-0 translate-y-4 pointer-events-none' : 'group-hover:opacity-100 group-hover:translate-y-0'}
                `}>
                  <button className={`
                    px-6 py-2 rounded-full font-medium text-sm backdrop-blur-sm
                    bg-gradient-to-r ${category.color} text-white
                    hover:shadow-lg hover:shadow-${category.color.split(' ')[1].split('-')[1]}/30
                    transition-all duration-300
                  `}>
                    View Details
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`
                absolute inset-0 -z-10 rounded-3xl blur-xl transition-opacity duration-500
                bg-gradient-to-r ${category.color} opacity-0
                ${activeCategory === category.id ? 'opacity-30' : 'group-hover:opacity-20'}
              `} />
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Skills', value: '24+', icon: <FaCogs className="text-blue-400" /> },
              { label: 'Years Experience', value: '3+', icon: <FaChartLine className="text-green-400" /> },
              { label: 'Projects', value: '40+', icon: <FaCode className="text-purple-400" /> },
              { label: 'Technologies', value: '15+', icon: <FaServer className="text-orange-400" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Instruction Hint */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <FaChevronDown className="animate-bounce" />
            Click on any category to view detailed skills and proficiency levels
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;