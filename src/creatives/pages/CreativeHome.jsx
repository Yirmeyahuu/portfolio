import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import CreativeHero from '../components/CreativeHero';
import CreativeAbout from '../components/CreativeAbout';
import CreativeGallery from '../components/CreativeGallery';
import CreativeServices from '../components/CreativeServices';
import CreativeContact from '../components/CreativeContact';

gsap.registerPlugin(ScrollTrigger);

export default function CreativeHome() {
  const container = useRef(null);

  useEffect(() => {
    // Add dark mode to body specifically for the creative module
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.utils.toArray('.blur-reveal').forEach((section) => {
      if (prefersReducedMotion) {
        // Accessibility: Only a gentle fade for users who prefer reduced motion
        gsap.fromTo(section, 
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
            }
          }
        );
      } else {
        // Full Cinematic Blur Reveal
        gsap.fromTo(section, 
          { opacity: 0, filter: 'blur(24px)', scale: 0.96, y: 80 },
          {
            opacity: 1, 
            filter: 'blur(0px)', 
            scale: 1, 
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 50%",
              scrub: 1,
            }
          }
        );
      }
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-[#0a0a0a] font-sans selection:bg-gray-800 selection:text-white overflow-hidden">
      <section className="blur-reveal">
        <CreativeHero />
      </section>
      
      <section className="blur-reveal">
        <CreativeAbout />
      </section>
      
      <section className="blur-reveal">
        <CreativeGallery />
      </section>
      
      <section className="blur-reveal">
        <CreativeServices />
      </section>

      <section className="blur-reveal">
        <CreativeContact />
      </section>
    </div>
  );
}
