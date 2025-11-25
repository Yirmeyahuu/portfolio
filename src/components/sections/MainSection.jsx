// src/components/sections/MainSection.jsx
import { useState, useEffect } from 'react'
import { 
  MapPin, 
  Mail, 
  Calendar,
  Briefcase,
  Code,
  Award,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Globe,
  ChevronRight,
  Moon,
  Sun,
  MessageSquare
} from 'lucide-react'
import Preloader from '../Preloader';
import Chat from '../chat';

export default function MainSection() {
  const [activeTab, setActiveTab] = useState('about')
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Trigger animation after preloader
      setTimeout(() => setIsVisible(true), 50);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }, [])

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
      document.body.classList.add('light')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
      document.body.classList.remove('light')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    }
  }

  // Personal Info
  const profile = { 
    name: 'Jeremiah Pantaras',
    title: 'Software Engineer | Full-Stack Developer',
    location: 'Bacolod City, Negros Occidental, Philippines',
    email: 'jeremiahpantaras@gmail.com',
    avatar: '/poypoy.png',
    bio: "I'm a Junior Software Engineer, eager to learn and grow in the field. I specialize in Python (Django) and React (Vite), focusing on building modern web applications, mobile apps, and contributing to digital marketing efforts.",
    bio2: "Currently, I'm helping startups and MSMEs grow with my company, COS Devs. Beyond building systems, my goal is to foster a community for all developers in Negros Island, centered on sharing knowledge and providing mentorship.",
    bio3: "I've recently been diving deep into the world of artificial intelligence, fascinated by its potential. I'm actively learning to integrate AI tools and techniques into modern applications, focusing on developing AI-powered solutions, creating intelligent apps, and using generative AI to optimize workflows and deliver cutting-edge technology."
  }

  // Social Links
  const socials = [
    { icon: Github, url: 'https://github.com/Yirmeyahuu', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/jeremiah-pantaras-47092b368/', label: 'LinkedIn' },
    { icon: Facebook, url: 'https://www.facebook.com/https.poypoymignon', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/poypoy.div/', label: 'Instagram' },
    { icon: Globe, url: 'https://cosdevsph.vercel.app/', label: 'Website' },
  ]

  // Experience
  const experiences = [
    {
      role: 'Software Engineer - Full-Stack Developer',
      company: 'COS Devs',
      year: '2025',
      current: true
    },
    {
      role: 'Project Manager / Lead Web Developer',
      company: 'Computer Science Thesis',
      year: '2024',
      current: true
    },
    {
      role: 'Freelance Full-Stack Developer',
      company: 'Bacolod City, Philippines',
      year: '2024',
      current: true
    },
  ]

  // Projects
  const projects = [
    {
      title: 'Satoru - Automated learning tool',
      description: 'Satoru is a web application designed to intelligently summarize and extract key information from uploaded documents, providing users with quick, distilled insights.',
      tags: ['Python Django', 'Rest-framework','Vite React', 'Typescript', 'GSAP', 'Tailwind CSS'],
      link: 'https://github.com/Yirmeyahuu/satoru'
    },
    {
      title: 'Askium - AI Chatbot with Ollama',
      description: 'A modern, full-stack AI chatbot application powered by local LLMs',
      tags: ['Python Django', 'Ollama - Local LLM','Vite React', 'Tailwind CSS'],
      link: 'https://github.com/Yirmeyahuu/Askium'
    },
    {
      title: 'Tabang Negros - Emergency Help Request System',
      description: 'A real-time emergency help request system designed for Negros Island, Philippines. Allows users to quickly send emergency requests with exact GPS location to responders.',
      tags: ['React', 'Django', 'PostgreSQL', 'Leaflet', 'Tailwind CSS', 'Vite'],
      link: 'https://tabangnegros-installation.vercel.app/'
    },
    {
      title: 'Avendro - Lending Management System',
      description: 'A comprehensive system to manage lending operations, from client onboarding to payment tracking.',
      tags: ['Python Django', 'PostgreSQL', 'Tailwind CSS'],
      link: 'https://avendrobcd.onrender.com/'
    },
  ]

  // Tech Stack
  const techStack = {
    frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'GSAP'],
    backend: ['Node.js', 'Python', 'Django'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
    tools: ['Git', 'Bitbucket', 'Docker', 'AWS', 'Firebase', 'Vercel', 'Render']
  }

  // Certifications
  const certifications = [
    {
      title: 'ICT Olympics Web Design and Development Champion',
      issuer: 'STIWNU-CICT',
      year: '2022',
      badge: '🏆'
    },
    {
      title: 'ICT Olympics Web Design and Development 3rd Placer',
      issuer: 'STIWNU-CICT',
      year: '2023',
      badge: '🏆'
    },
    {
      title: 'Philippine Institute of Cyber Security Professionals Inc.',
      issuer: 'PICSPRO Inc.',
      year: '2023',
      badge: '🎖️'
    }
  ]

  // Seminars & Workshops
const workshops = [
  {
    title: 'DevFest Workshop Series: Introduction to Web Development',
    organizer: 'Google Developer Groups Bacolod',
    year: '2025',
    badge: '📲'
  },
  {
    title: 'House of Algorithm Seminar and Workshop',
    organizer: 'STIWNU Programmers\' Guild',
    year: '2025',
    badge: '🧑🏻‍💻'
  },
  {
    title: 'Philippines Institute of Cyber Security Professionals Workshop',
    organizer: 'PICSPRO Inc.',
    year: '2024',
    badge: '🪪'
  }
]

  if (loading) return <Preloader />;
  
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Header/Profile Section */}
        <div className={`relative bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-6 sm:p-8 mb-6 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl mt-8 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ transitionDelay: '100ms' }}>
          {/* Theme Toggle Button - Top Right Corner */}
          <div className="absolute top-6 right-6 z-10">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg dark:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer w-16 h-8 flex items-center relative"
              aria-label="Toggle theme"
            >
              {/* Toggle Track */}
              <div className="absolute inset-0 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300" />
              
              {/* Toggle Circle */}
              <div className={`relative z-10 w-6 h-6 rounded-full bg-white shadow-md transform transition-all duration-300 flex items-center justify-center ${
                darkMode ? 'translate-x-7' : 'translate-x-0'
              }`}>
                {darkMode ? (
                  <Moon size={14} className="text-gray-700" />
                ) : (
                  <Sun size={14} className="text-yellow-500" />
                )}
              </div>
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 sm:w-36 sm:h-36">
                {/* Orange gradient container with floating particles */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-700 border-4 border-white dark:border-white shadow-xl overflow-hidden">
                  {/* Floating particles */}
                  <div className="absolute w-4 h-4 bg-white/50 rounded-full animate-float-1" style={{top: '20%', left: '15%'}} />
                  <div className="absolute w-3 h-3 bg-white/50 rounded-full animate-float-2" style={{top: '60%', left: '70%'}} />
                  <div className="absolute w-5.5 h-5.5 bg-white/60 rounded-full animate-float-3" style={{top: '40%', left: '80%'}} />
                  <div className="absolute w-4.5 h-4.5 bg-white/55 rounded-full animate-float-4" style={{top: '75%', left: '25%'}} />
                  <div className="absolute w-2 h-2 bg-white/75 rounded-full animate-float-5" style={{top: '30%', left: '50%'}} />
                </div>
                
                {/* Image overlapping the container */}
                <div className="absolute -inset-2 flex items-center justify-center mt-12 cursor-ns-resize">
                  {profile.avatar ? (
                    <img 
                      src={profile.avatar} 
                      alt={profile.name} 
                      className="w-44 h-44 sm:w-64 sm:h-64 object-cover mb-16" 
                    />
                  ) : (
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold text-white">
                      {profile.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl sm:text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 cursor-default">
                    {profile.name}
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="white" 
                        className="w-3 h-3"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </span>
                  </h1>
                  <div className="flex items-center gap-2 text-xs md:text-xs lg:text-xs text-gray-600 dark:text-gray-300 mb-3 cursor-default">
                    <MapPin size={16} />
                    <span className="text-sm">{profile.location}</span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 cursor-default">
                    {profile.title}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-[#333] transition-all duration-300 hover:scale-105 text-xs md:text-xs lg:text-xs text-gray-900 dark:text-white cursor-pointer">
                  <Calendar size={18} />
                  <span>Schedule a Call</span>
                  <ChevronRight size={16} />
                </button>
                <button 
                  onClick={() => window.location.href = 'mailto:jeremiahpantaras@gmail.com'}
                  className="flex items-center gap-2 px-2.5 py-1 bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-[#333] transition-all duration-300 hover:scale-105 text-xs md:text-xs lg:text-xs text-gray-900 dark:text-white cursor-pointer"
                >
                  <Mail size={18} />
                  <span>Send Email</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-4">
                {socials.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-[#2a2a2a] hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon size={20} className="text-gray-700 dark:text-gray-300" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div className={`bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-6 sm:p-8 mb-6 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg ">
                {/* Replace with actual logo image if available */}
                <img 
                  src="/COSDEVSLOGOrelicon.png"  
                  alt="COS Devs" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to text if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center text-white font-bold text-xl">
                  CD
                </div>
              </div>
            </div>
        
            {/* Company Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="text-md sm:text-lg font-bold text-gray-900 dark:text-white">
                  Founder & CEO
                </h3>
                <span className="text-gray-800 dark:text-gray-400">•</span>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
                  COS Devs
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Leading a team of passionate developers building innovative solutions for startups and MSMEs
              </p>
              <a 
                href="https://cosdevsph.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 font-medium transition-colors"
              >
                Visit Website
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - About & Tech Stack */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* About Section */}
            <div className={`bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
                  <Briefcase size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">About</h2>
                {/* More about me link */}
                <a
                  href="/about"
                  className="ml-auto text-xs text-sky-600 dark:text-sky-400 hover:underline hover:text-sky-700 dark:hover:text-sky-300 font-semibold transition-colors underline"
                  style={{ cursor: 'pointer' }}
                >
                  More about me
                </a>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-md leading-relaxed">
                <p>{profile.bio}</p>
                <p>{profile.bio2}</p>
                <p>{profile.bio3}</p>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className={`bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
                  <Code size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
                {/* View all link */}
                <a
                  href="/tech-stacks"
                  className="ml-auto text-xs text-sky-600 dark:text-sky-400 hover:underline hover:text-sky-700 dark:hover:text-sky-300 font-semibold transition-colors underline"
                  style={{ cursor: 'pointer' }}
                >
                  View all
                </a>
              </div>

              <div className="space-y-6">
                {Object.entries(techStack).map(([category, techs]) => (
                  <div key={category}>
                    <h3 className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase mb-3 capitalize">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1.5 bg-gray-100 dark:bg-[#2a2a2a] text-gray-800 dark:text-gray-200 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className={`bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
                  <Code size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
                {/* View all projects link */}
                <a
                  href="/projects"
                  className="ml-auto text-xs text-sky-600 dark:text-sky-400 hover:underline hover:text-sky-700 dark:hover:text-sky-300 font-semibold transition-colors underline"
                  style={{ cursor: 'pointer' }}
                >
                  View all projects
                </a>
              </div>
            
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-6 bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer group hover:scale-[1.02] hover:shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Certifications */}
          <div className="space-y-6">
            
            {/* Experience Section */}
            <div className={`bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
                  <Briefcase size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Experience</h2>
                {/* View all experiences link */}
                <a
                  href="/experience"
                  className="ml-auto text-xs text-sky-600 dark:text-sky-400 hover:underline hover:text-sky-700 dark:hover:text-sky-300 font-semibold transition-colors underline"
                  style={{ cursor: 'pointer' }}
                >
                  View all
                </a>
              </div>
            
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:border-l-0 last:pb-0 transition-all duration-300 hover:translate-x-2">
                    <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 ${
                      exp.current 
                        ? 'bg-blue-500 border-blue-500 animate-pulse' 
                        : 'bg-gray-300 dark:bg-gray-600 border-gray-300 dark:border-gray-600'
                    }`} />
                    <div>
                      <h3 className="font-bold text-sm md:text-sm text-gray-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm md:text-xs text-gray-600 dark:text-gray-400 mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 rounded transition-all duration-300 hover:scale-105">
                          {exp.year}
                        </span>
                        {exp.current && (
                          <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded font-medium transition-all duration-300 hover:scale-105 animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className={`bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
                  <Award size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-md sm:text-md font-bold text-gray-900 dark:text-white">Recent Certifications</h2>
                {/* View all certifications link */}
                <a
                  href="/certifications"
                  className="ml-auto text-xs text-sky-600 dark:text-sky-400 hover:underline hover:text-sky-700 dark:hover:text-sky-300 font-semibold transition-colors underline"
                  style={{ cursor: 'pointer' }}
                >
                  View all
                </a>
              </div>
            
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl transition-transform duration-300 hover:scale-125">{cert.badge}</span>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {cert.issuer}
                        </p>
                        <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 rounded mt-2 inline-block transition-all duration-300 hover:scale-105">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>            
            {/* Seminars / Workshops Section */}
            <div className={`bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
                  <Award size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-md sm:text-md font-bold text-gray-900 dark:text-white">Seminars & Workshops</h2>
                {/* View all Workshops link */}
                <a
                  href="/workshops"
                  className="ml-auto text-xs text-sky-600 dark:text-sky-400 hover:underline hover:text-sky-700 dark:hover:text-sky-300 font-semibold transition-colors underline"
                  style={{ cursor: 'pointer' }}
                >
                  View all
                </a>
              </div>
            
              <div className="space-y-4">
                {workshops.map((workshop, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl transition-transform duration-300 hover:scale-125">{workshop.badge}</span>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">
                          {workshop.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {workshop.organizer}
                        </p>
                        <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 rounded mt-2 inline-block transition-all duration-300 hover:scale-105">
                          {workshop.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Section */}
        <footer className={`mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '600ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Column */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Jeremiah Pantaras
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Junior Software Engineer passionate about building innovative solutions and fostering developer communities.
              </p>
              <div className="flex gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon size={18} className="text-gray-700 dark:text-gray-300" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/tech-stacks" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    Tech Stack
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Bacolod City, Negros Occidental, Philippines
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-600 dark:text-gray-400 flex-shrink-0" />
                  <a href="mailto:jeremiahpantaras@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    jeremiahpantaras@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-gray-600 dark:text-gray-400 flex-shrink-0" />
                  <a href="https://cosdevsph.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    COS Devs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col justify-between items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                © {new Date().getFullYear()} Jeremiah Pantaras. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Chat Button & Chat Window */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 z-40 flex animate-bounce items-center justify-center rounded-full bg-blue-600 text-white font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-gray-900 h-14 w-14 md:h-auto md:w-auto md:px-4 md:py-3 md:gap-2 md:bottom-6 md:right-6"
          aria-label="Open AI Assistant"
        >
          <MessageSquare size={20} className="md:shrink-0"/>
          <span className="hidden md:inline">Chat with Jeremiah</span>
        </button>
      )}

      {isChatOpen && <Chat onClose={() => setIsChatOpen(false)} />}
    </div>
  )
}