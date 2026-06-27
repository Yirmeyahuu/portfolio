import React from 'react';
import { Github, Linkedin, Facebook, Instagram, Globe } from 'lucide-react';

export default function CreativeContact() {
  const socials = [
    { icon: Github, url: 'https://github.com/jeremiahpantaras', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/jeremiah-pantaras-47092b368/', label: 'LinkedIn' },
    { icon: Facebook, url: 'https://www.facebook.com/https.poypoymignon', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/jeremiahpantaras/', label: 'Instagram' },
    { icon: Globe, url: 'https://www.cosedevs.com/', label: 'Website' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white border-t border-gray-900">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 font-semibold">
          Get in Touch
        </h2>
        <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
          LET'S CREATE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
            TOGETHER
          </span>
        </h3>
        <p className="text-gray-400 mb-12 text-lg font-light max-w-2xl">
          Looking to collaborate on a visual project, short film, or photography session? I'm always open to new creative opportunities.
        </p>
        
        <a 
          href="mailto:jeremiahpantaras@gmail.com" 
          className="inline-block px-10 py-5 bg-transparent border border-gray-600 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors mb-12"
        >
          Contact Me
        </a>

        {/* Social Links matching MainSection Footer */}
        <div className="flex gap-4 justify-center items-center mt-4">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white rounded-full transition-all duration-300 hover:scale-110 border border-gray-800 shadow-lg"
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
