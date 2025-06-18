import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profileImg from '../public/img/Pantaras-profile.jpeg';
import mabelsImg from '../public/img/mabels.png';
import carInventoryImg from '../public/img/car-inverntory.png';
import bacolodImg from '../public/img/bacolod.png';
import ContactParticles from './components/ContactParticles';

// Constants for video paths
const communityVideo = '/portfolio/videos/Community Outreach.mp4';
const camp2024Video = '/portfolio/videos/FSBC Post Camp 2024.mp4';
const camp2025Video = '/portfolio/videos/FSBC Post Camp 2025.mp4';


const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [text] = useTypewriter({
    words: [
      'Jeremiah P. Pantaras .',
      'a Creative Developer .',
      'a Video Editor .'
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 100,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <ParallaxProvider>
      <Navbar />
      <main className="relative">
        {/* Welcome Section - Content Only */}
        <section id="home" className="min-h-screen">
          <div className="relative w-full px-8 md:px-16 min-h-screen flex items-start pt-32 md:pt-64 justify-center">
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <Parallax translateY={[-20, 20]} opacity={[0.8, 1]}>
                <h1 className="text-xs sm:text-lg md:text-xl font-bold text-white mb-4 leading-tight uppercase text-center">
                  Hello there! I'm glad you're here.
                </h1>
              </Parallax>
              <Parallax translateY={[-15, 15]} opacity={[0.8, 1]} speed={-5}>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-yellow-400 uppercase mb-16">
                  I DESIGN AND DEVELOP ELEGANT WEBSITES. 
                </p>
              </Parallax>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                <Parallax translateY={[0, -20]} opacity={[0.5, 1]} speed={5}>
                  {/* First card - UI/UX Designer */}
                  <div className="group">
                    <div className="mb-4">
                      <svg 
                        className="w-8 h-8 mx-auto text-yellow-400/80 group-hover:text-yellow-400 transition-all duration-300 animate-float" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="1.5" 
                          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                        />
                      </svg>
                    </div>
                    <h3 className="text-base md:text-lg text-white font-medium transition-all duration-300 group-hover:text-yellow-400">
                      UI/UX Designer
                    </h3>
                    <div className="h-1 w-12 bg-yellow-400/50 mx-auto mt-3 transition-all duration-300 group-hover:w-24"></div>
                  </div>
                </Parallax>
                <Parallax translateY={[0, -20]} opacity={[0.5, 1]} speed={10}>
                  {/* Second card - Full-Stack Developer */}
                  <div className="group">
                    <div className="mb-4">
                      <svg 
                        className="w-8 h-8 mx-auto text-yellow-400/80 group-hover:text-yellow-400 transition-all duration-300 animate-float-delay-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="1.5" 
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-base md:text-lg text-white font-medium transition-all duration-300 group-hover:text-yellow-400">
                      Aspiring Full-Stack Web Developer
                    </h3>
                    <div className="h-1 w-12 bg-yellow-400/50 mx-auto mt-3 transition-all duration-300 group-hover:w-24"></div>
                  </div>
                </Parallax>
                <Parallax translateY={[0, -20]} opacity={[0.5, 1]} speed={15}>
                  {/* Third card - Video Editor */}
                  <div className="group">
                    <div className="mb-4">
                      <svg 
                        className="w-8 h-8 mx-auto text-yellow-400/80 group-hover:text-yellow-400 transition-all duration-300 animate-float-delay-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="1.5" 
                          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-base md:text-lg text-white font-medium transition-all duration-300 group-hover:text-yellow-400">
                      Video Editor
                    </h3>
                    <div className="h-1 w-12 bg-yellow-400/50 mx-auto mt-3 transition-all duration-300 group-hover:w-24"></div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </section>

        {/* Container for other sections */}
        <div className="relative bg-[#131313]">
          {/* About Me Section */}
          <section id="about" 
            className={`min-h-screen w-full bg-[#131313] flex items-center justify-center py-16 
              transform transition-all duration-1000 ease-out
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="hidden md:block">
                  <Parallax translateY={[15, -15]} opacity={[0.8, 1]} speed={-3}>
                    <h2 className="text-2xl font-bold shine-effect mb-16 md:mb-32  text-center">About me</h2>
                  </Parallax>
                </div>
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 max-w-7xl mx-auto">
                {/* Left Column - Photo */}
                <div className="w-full md:w-1/2 max-w-[400px] transform transition-all duration-1000 px-4 md:px-0 mb-4 md:mb-0">
                  <Parallax translateY={[0, -15]} opacity={[0.8, 1]} speed={-3} className="md:block">
                    <div className="relative rounded-2xl overflow-hidden">
                      <img 
                        src={profileImg}
                        alt="Developer Profile"
                        className="rounded-2xl shadow-xl object-cover w-full h-[440px] md:h-[500px] object-[center_70%] md:object-[center_60%]"
                      />
                    </div>
                  </Parallax>
                </div>

                {/* Right Column - Information */}
                <div className="w-full md:w-1/2 max-w-xl transform transition-all duration-1000 text-center md:text-left">
                  <Parallax translateY={[0, -15]} opacity={[0.8, 1]} speed={-3} className="md:block">
                    <h3 className="text-xl md:text-2xl lg:text-4xl font-light text-white mb-4 md:mb-6">
                      Hi, I'm <span className="font-semibold text-yellow-400 italic">{text}<Cursor cursorStyle="_" /></span>
                    </h3>
                    <p className="text-yellow-300 mb-6 text-left md:mb-8 text-xs md:text-sm leading-relaxed border-l-2 border-yellow-400/50 pl-4">
                      A 23-year old aspiring Full-Stack Web Developer based in Bacolod City, Philippines. I specialize in creative and interactive websites using React, Vite, and Tailwind CSS, with additional experience in Python and the Django framework. Outside programming I am Proficient with Adobe Photoshop, Adobe Lightroom, Adobe Illustrator, Adobe Premiere, and Adobe After Effects. Beyond the virtual world, I engage in outdoor activities such as running, swimming, and cycling.
                    </p>

                    {/* View CV Button */}
                    <div className="flex justify-center md:justify-start">
                      <a
                        href="/portfolio/files/Pantaras-Portfolio.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-xs md:text-sm items-center gap-2 bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-500 hover:text-white py-2 px-6 md:px-8 rounded-lg transition-all duration-300"
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="1.5" 
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="1.5" 
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        View CV
                      </a>
                    </div>

                    <div className="space-y-6">
                      {/* Tech Stack and Tools */}
                      <div className="mt-8">
                        <h4 className="text-yellow-400 font-medium mb-8 text-center md:text-left">Tech Stack & Tools</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-4">
                          {/* Development Tools */}
                          <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8 mb-2" alt="React" />
                            <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">React</span>
                          </div>
                          <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                            <img src="https://vitejs.dev/logo.svg" className="w-8 h-8 mb-2" alt="Vite" />
                            <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Vite</span>
                          </div>
                          <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="w-8 h-8 mb-2" alt="Tailwind" />
                            <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Tailwind</span>
                          </div>
                          <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8 mb-2" alt="Python" />
                            <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Python</span>
                          </div>
                          <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                            <svg
                              className="w-8 h-8 mb-2 text-green-600 group-hover:text-yellow-400 transition-colors duration-300"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"/>
                            </svg>
                            <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Django</span>
                          </div>
                          <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-8 h-8 mb-2" alt="MySQL" />
                            <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">MySQL</span>
                          </div>
                          
                          {/* Adobe Tools */}
                          <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" className="w-8 h-8 mb-2" alt="Photoshop" />
                            <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Photoshop</span>
                          </div>
                          <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" className="w-8 h-8 mb-2" alt="Premiere Pro" />
                            <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Premiere</span>
                          </div>
                          <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" className="w-8 h-8 mb-2" alt="After Effects" />
                            <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">After Effects</span>
                          </div>
                          <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                            <div className="w-8 h-8 mb-2 bg-[#001E36] rounded-sm flex items-center justify-center">
                              <span className="text-[#31A8FF] font-bold text-sm">Lr</span>
                            </div>
                            <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Lightroom</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Parallax>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" 
            className={`min-h-screen w-full bg-[#131313] flex items-center justify-center py-16 
              transform transition-all duration-1000 ease-out
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="container mx-auto px-4 md:px-2 lg:px-4">
                <div className="hidden md:block">
                  <Parallax translateY={[15, -15]} opacity={[0.8, 1]} speed={-3}>
                    <h2 className="text-2xl font-bold shine-effect mb-16 text-center">Web Projects</h2>
                  </Parallax>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-0">
                {/* Project Card 1 */}
                <div className="md:hidden">
                  <Parallax translateY={[15, -15]} opacity={[0.8, 1]} speed={-3}>
                    <div className="transform transition-all duration-1000 h-full" style={{ transitionDelay: '500ms' }}>
                      {/* Project Card 1 */}
                      <a 
                        href="https://yirmeyahuu.github.io/Mabels/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                          <div className="relative aspect-video overflow-hidden">
                            <img 
                              src={mabelsImg} 
                              alt="Mabels POS System"
                              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Mabels Point-of-Sale System</h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">A streamlined POS solution for managing products, orders, invoices, customers, and payment modes for Mables Café and Restaurant.</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">HTML</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">CSS</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">JavaScript</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Firebase</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Parallax>
                </div>
                <div className="hidden md:block">
                  <Parallax translateX={[15, -20]} opacity={[0.8, 1]} speed={-3}>
                    <div className="transform transition-all duration-1000 h-full" style={{ transitionDelay: '500ms' }}>
                      {/* Project Card 1 */}
                      <a 
                        href="https://yirmeyahuu.github.io/Mabels/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                          <div className="relative aspect-video overflow-hidden">
                            <img 
                              src={mabelsImg} 
                              alt="Mabels POS System"
                              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Mabels Point-of-Sale System</h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">A streamlined POS solution for managing products, orders, invoices, customers, and payment modes for Mables Café and Restaurant.</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">HTML</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">CSS</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">JavaScript</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Firebase</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Parallax>
                </div>

                {/* Project Card 2 */}
                <div className="md:hidden">
                  <Parallax translateY={[15, -15]} opacity={[0.8, 1]} speed={-3}>
                    <div className="transform transition-all duration-1000 h-full" style={{ transitionDelay: '600ms' }}>
                      {/* Project Card 2 */}
                      <a 
                        href="https://github.com/Yirmeyahuu/Car-Management-System"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                          <div className="relative aspect-video overflow-hidden">
                            <img 
                              src={carInventoryImg} 
                              alt="Car Inventory System"
                              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Car Inventory System</h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">It manages various cars focuses on Creating, Reading, Updating, Archiving.</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Python</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Django</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Bootstrap</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">MySQL</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Parallax>
                </div>
                <div className="hidden md:block">
                  <Parallax translateX={[15, -20]} opacity={[0.8, 1]} speed={-3}>
                    <div className="transform transition-all duration-1000 h-full" style={{ transitionDelay: '600ms' }}>
                      {/* Project Card 2 */}
                      <a 
                        href="https://github.com/Yirmeyahuu/Car-Management-System"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                          <div className="relative aspect-video overflow-hidden">
                            <img 
                              src={carInventoryImg} 
                              alt="Car Inventory System"
                              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Car Inventory System</h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">It manages various cars focuses on Creating, Reading, Updating, Archiving.</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Python</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Django</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Bootstrap</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">MySQL</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Parallax>
                </div>

                {/* Project Card 3 */}
                <div className="md:hidden">
                  <Parallax translateY={[15, -15]} opacity={[0.8, 1]} speed={-3}>
                    <div className="transform transition-all duration-1000 h-full" style={{ transitionDelay: '700ms' }}>
                      {/* Project Card 3 */}
                      <a 
                        href="https://yirmeyahuu.github.io/Bacolod/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                          <div className="relative aspect-video overflow-hidden">
                            <img 
                              src={bacolodImg} 
                              alt="Bacolod Travels"
                              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Bacolod Travels</h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">A simple website showing the famous Bacolod spots with title and description.</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">HTML</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">CSS</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">JavaScript</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Parallax>
                </div>
                <div className="hidden md:block">
                  <Parallax translateX={[15, -20]} opacity={[0.8, 1]} speed={-3}>
                    <div className="transform transition-all duration-1000 h-full" style={{ transitionDelay: '700ms' }}>
                      {/* Project Card 3 */}
                      <a 
                        href="https://yirmeyahuu.github.io/Bacolod/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                          <div className="relative aspect-video overflow-hidden">
                            <img 
                              src={bacolodImg} 
                              alt="Bacolod Travels"
                              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Bacolod Travels</h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">A simple website showing the famous Bacolod spots with title and description.</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">HTML</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">CSS</span>
                              <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">JavaScript</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Parallax>
                </div>
              </div>

              {/* Video Projects Row */}
              <div className="mt-16">
                <div className="hidden md:block">
                  <Parallax translateY={[15, -15]} opacity={[0.8, 1]} speed={-3}>
                    <h2 className="text-2xl font-bold shine-effect mb-16 text-center">Video Projects</h2>
                  </Parallax>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-0">

                  {/* Video Project here */}
                  {/* Video Project 1 */}
                  <div className="md:hidden">
                    <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <video 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          controls
                          preload="metadata"
                        >
                          <source src={communityVideo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Community Outreach</h3>
                        <p className="text-gray-400 text-sm mb-4">A documentary-style video showcasing community outreach activities and their impact.</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Adobe Premiere Pro</span>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <Parallax translateX={[15, -20]} opacity={[0.8, 1]} speed={-3}>
                      {/* Video Project 1 */}
                      <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                        <div className="relative aspect-video overflow-hidden">
                          <video 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            controls
                            preload="metadata"
                          >
                            <source src={communityVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Community Outreach</h3>
                          <p className="text-gray-400 text-sm mb-4">A documentary-style video showcasing community outreach activities and their impact.</p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Adobe Premiere Pro</span>

                          </div>
                        </div>
                      </div>
                    </Parallax>
                  </div>


                  {/* Video Project 2 */}
                  <div className="md:hidden">
                    <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <video 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          controls
                          preload="metadata"
                        >
                          <source src={camp2024Video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">FSBC Post Camp 2024</h3>
                        <p className="text-gray-400 text-sm mb-4">Highlights and memorable moments from the FSBC Post Camp event in 2024.</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Adobe Premiere Pro</span>
                          <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Adobe After Effects</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <Parallax translateX={[15, -20]} opacity={[0.8, 1]} speed={-3}>
                      {/* Video Project 2 */}
                      <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                        <div className="relative aspect-video overflow-hidden">
                          <video 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            controls
                            preload="metadata"
                          >
                            <source src={camp2024Video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">FSBC Post Camp 2024</h3>
                          <p className="text-gray-400 text-sm mb-4">Highlights and memorable moments from the FSBC Post Camp event in 2024.</p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Adobe Premiere Pro</span>
                            <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Adobe After Effects</span>
                          </div>
                        </div>
                      </div>
                    </Parallax>
                  </div>

                  {/* Video Project 3 */}
                  <div className="md:hidden">
                    <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <video 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          controls
                          preload="metadata"
                        >
                          <source src={camp2025Video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">FSBC Post Camp 2025</h3>
                        <p className="text-gray-400 text-sm mb-4">Coverage of the latest FSBC Post Camp activities and achievements in 2025.</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Adobe Premiere Pro</span>
                          <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Adobe After Effects</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <Parallax translateX={[15, -20]} opacity={[0.8, 1]} speed={-3}>
                      {/* Video Project 3 */}
                      <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300 h-full flex flex-col">
                        <div className="relative aspect-video overflow-hidden">
                          <video 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            controls
                            preload="metadata"
                          >
                            <source src={camp2025Video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">FSBC Post Camp 2025</h3>
                          <p className="text-gray-400 text-sm mb-4">Coverage of the latest FSBC Post Camp activities and achievements in 2025.</p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Adobe Premiere Pro</span>
                            <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Adobe After Effects</span>
                          </div>
                        </div>
                      </div>
                    </Parallax>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get in Touch Section */}
          <section id="contact" 
            className={`min-h-[400px] md:h-[450px] w-full bg-[#131313] flex items-center justify-center py-12 md:py-16 relative overflow-hidden
              transform transition-all duration-1000 ease-out
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <ContactParticles />
            <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10">
              <Parallax translateY={[-25, 25]} opacity={[0.5, 1]} speed={5}>
                <h2 className="text-lg md:text-xl font-light text-white mb-6 md:mb-8 text-center">Get in Touch</h2>
              </Parallax>
              <div className="max-w-3xl mx-auto transform transition-all duration-1000">
                <Parallax translateY={[-35, 35]} scale={[0.9, 1.1]} opacity={[0.8, 1]} speed={-5}>
                  <div className="flex justify-center mb-12 md:mb-16 px-4">
                    <a 
                      href="https://tinyurl.com/3pevma9y"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl md:text-4xl text-yellow-300 italic hover:text-yellow-500 transition-colors duration-300 wave-text inline-flex justify-center text-center"
                    >
                      {"yirmeyahu@dev.tech".split('').map((letter, index) => (
                        <span key={index} className="wave-letter">
                          {letter}
                        </span>
                      ))}
                    </a>
                  </div>
                </Parallax>
                <Parallax translateY={[-15, 15]} scale={[0.95, 1.05]} opacity={[0.8, 1]} speed={3}>
                  <div className="flex items-center justify-center gap-4 md:gap-8">
                    {/* Social media icons */}
                    <a 
                      href="https://www.facebook.com/https.poypoymignon" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/poypoy.div/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://github.com/Yirmeyahuu" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/jeremiah-pantaras-47092b368/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </Parallax>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="w-full bg-[#131313] py-6 md:py-8 px-4">
            <div className="container mx-auto text-center">
              <p className="text-gray-400 text-xs md:text-sm">
                ©2025 Yirmeyahu.<span className="italic"> All Rights Reserved.</span>
              </p>
            </div>
          </footer>
        </div>
      </main>
    </ParallaxProvider>
  );
};

export default Home;
