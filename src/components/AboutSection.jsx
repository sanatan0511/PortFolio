import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutSection() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const introRef = useRef(null);
    const imageRef = useRef(null);
    const starRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Title animation - refined
        gsap.fromTo(
            titleRef.current,
            { y: 80, opacity: 0, scale: 0.9 },
            { 
                y: 0, 
                opacity: 1, 
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current, 
                    start: "top 50%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        // Intro text animation
        gsap.fromTo(
            introRef.current,
            { 
                x: -50, 
                opacity: 0, 
                filter: "blur(12px)",
                rotateY: 10 
            },
            { 
                x: 0,
                filter: "blur(0px)",
                opacity: 1,
                rotateY: 0,
                duration: 1.2,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current, 
                    start: "top 40%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        // Image animation
        gsap.fromTo(
            imageRef.current,
            { 
                x: 50, 
                opacity: 0, 
                scale: 0.95,
                rotateY: -10 
            },
            { 
                x: 0,
                opacity: 1,
                scale: 1,
                rotateY: 0,
                duration: 1.2,
                delay: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current, 
                    start: "top 40%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        // Enhanced stars animation with 3D effect
        starRef.current.forEach((star, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            const parallaxDepth = 0.3 + Math.random() * 0.7;
            
            gsap.to(star, {
                x: `${direction * (120 * parallaxDepth)}px`,
                y: `${-60 * parallaxDepth}px`,
                rotation: direction * 180,
                opacity: 0.3 + parallaxDepth * 0.4,
                scale: 0.8 + parallaxDepth * 0.4,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill();
            });
            starRef.current = [];
        };
    }, []);

    const addToStarRef = (el) => {
        if (el && !starRef.current.includes(el)) {
            starRef.current.push(el);
        }
    };

    return (
        <section 
            ref={sectionRef} 
            className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900/20 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(60)].map((_, index) => (
                    <div
                        key={index}
                        ref={addToStarRef}
                        className="absolute rounded-full opacity-0"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${1 + Math.random() * 2}px`,
                            height: `${1 + Math.random() * 2}px`,
                            backgroundColor: `rgba(255, 255, 255, ${0.3 + Math.random() * 0.4})`,
                            boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
                        }}
                    />
                ))}
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center py-20">
                {/* Title Section */}
                <div className="mb-16 lg:mb-20 text-center">
                    <h1 
                        ref={titleRef} 
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 opacity-0"
                    >
                        About Me
                    </h1>
                    <div className="mt-6 h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full opacity-70" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Text Content - Left */}
                    <div className="lg:w-1/2 space-y-8">
                        <div 
                            ref={introRef} 
                            className="space-y-6 opacity-0"
                        >
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                Hello, I'm <span className="font-semibold text-purple-300">Sanatan Singh</span>, an AI/ML Engineer and Full-Stack Developer passionate about building intelligent, high-performance systems.
                            </p>
                            
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                My expertise spans across modern web technologies and artificial intelligence, with a focus on creating scalable solutions that deliver exceptional user experiences.
                            </p>

                            <div className="pt-6 border-t border-gray-800/50">
                                <h3 className="text-xl font-semibold text-white mb-4">Core Focus Areas:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        'React & Next.js Development',
                                        'Node.js Backend Systems',
                                        'Machine Learning Implementation',
                                        'Scalable Architecture Design',
                                        'Clean Code & Best Practices',
                                        'Performance Optimization'
                                    ].map((skill, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-center space-x-3 text-gray-300 group"
                                        >
                                            <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-150 transition-transform" />
                                            <span className="group-hover:text-white transition-colors">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Container - Right */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Floating effect container */}
                            <div className="relative z-10">
                                <img
                                    ref={imageRef}
                                    src="/images/spg.png"
                                    alt="Sanatan Singh - AI/ML Engineer"
                                    className="w-full max-w-lg lg:max-w-xl rounded-2xl shadow-2xl opacity-0
                                        shadow-purple-900/30 border border-gray-800/50 
                                        hover:shadow-purple-500/20 transition-all duration-500
                                        transform hover:-translate-y-2"
                                />
                            </div>
                            
                            {/* Decorative background elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-900/20 to-transparent rounded-2xl blur-xl" />
                            <div className="absolute -inset-2 border border-purple-500/20 rounded-2xl" />
                            
                            {/* Floating tech badges */}
                            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700">
                                <span className="text-sm text-purple-300">AI/ML Engineer</span>
                            </div>
                            <div className="absolute -top-4 -right-4 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700">
                                <span className="text-sm text-purple-300">Full-Stack Dev</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-purple-500/70 rounded-full mt-2" />
                </div>
            </div>
        </section>
    );
}