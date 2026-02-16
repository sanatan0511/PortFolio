import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Return early if mobile
    if (isMobile) return;

    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;
    
    if (!cursor || !cursorBorder) return;

    // Initial position offscreen
    gsap.set([cursor, cursorBorder], { xPercent: -50, yPercent: -50 });
    
    // Variables for cursor with different speeds
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

    const xBorderTo = gsap.quickTo(cursorBorder, "x", { 
      duration: 0.5, 
      ease: "power3.out" 
    });
    const yBorderTo = gsap.quickTo(cursorBorder, "y", { 
      duration: 0.5, 
      ease: "power3.out" 
    });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xBorderTo(e.clientX);
      yBorderTo(e.clientY);
    };

    // Add mouse move event listener
    window.addEventListener("mousemove", moveCursor);

    // Add click animation
    const handleMouseDown = () => {
      gsap.to([cursor, cursorBorder], {
        scale: 0.6,
        duration: 0.2
      });
    };

    const handleMouseUp = () => {
      gsap.to([cursor, cursorBorder], {
        scale: 1,
        duration: 0.2
      });
    };

    // Hover effects on interactive elements
    const handleLinkHover = () => {
      gsap.to(cursorBorder, {
        scale: 1.5,
        borderColor: '#8b5cf6',
        duration: 0.3
      });
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.3
      });
    };

    const handleLinkLeave = () => {
      gsap.to(cursorBorder, {
        scale: 1,
        borderColor: '#ffffff',
        duration: 0.3
      });
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3
      });
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, [isMobile]);

  // Hide cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Custom Cursor - Inner Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      />
      
      {/* Custom Cursor - Outer Border */}
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-white rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;