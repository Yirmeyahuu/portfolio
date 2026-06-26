// src/components/sections/MainSection.jsx
import { useState, useEffect, useRef }  from 'react'
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
  MessageSquare,
  Medal,
  ChevronUp,
  Image as ImageIcon
} from 'lucide-react';
import MainSkeletonLoader from '../MainSkeletonLoader';
import Preloader from '../Preloader';
import Chat from '../chat';
import OpenCv from '../OpenCv';
import ImageModal from '../ImageModal';

export default function MainSection() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const cvButtonRef = useRef(null);

  useEffect(() => {
    if (!sessionStorage.getItem('preloaderShown')) {
      setIsInitialLoad(true);
      sessionStorage.setItem('preloaderShown', 'true');
    }

    const timer = setTimeout(() => {
      setLoading(false);
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
    bio: "I'm an aspiring Software Engineer, eager to learn and grow in the field. I specialize in Python (Django) and React (Vite), focusing on building modern web applications, mobile apps, and contributing to digital marketing efforts.",
    bio2: "Currently, I'm helping startups and MSMEs grow with my company, COS Devs. Beyond building systems, my goal is to foster a community for all developers in Negros Island, centered on sharing knowledge and providing mentorship.",
    bio3: "I've recently been diving deep into the world of artificial intelligence, fascinated by its potential. I'm actively learning to integrate AI tools and techniques into modern applications, focusing on developing AI-powered solutions, creating intelligent apps, and using generative AI to optimize workflows and deliver cutting-edge technology."
  }

  // Social Links
  const socials = [
    { icon: Github, url: 'https://github.com/jeremiahpantaras', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/jeremiah-pantaras-47092b368/', label: 'LinkedIn' },
    { icon: Facebook, url: 'https://www.facebook.com/https.poypoymignon', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/jeremiahpantaras/', label: 'Instagram' },
    { icon: Globe, url: 'https://www.cosedevs.com/', label: 'Website' },
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
      title: 'Orki - Board Exam Review Platform',
      description: 'Orki is a modern, web-app-first platform designed to help board exam takers study smarter, stay consistent, and track their progress with clarity.',
      tags: ['Python Django', 'ReactJs', 'Typescript', 'Firebase', 'RESTful API'],
      link: 'https://orki.cosedevs.com'
    },
    {
      title: 'Incognito - Anonymous Messaging App',
      description: 'Incognito is a modern web application that allows people to send anonymous messages through a unique, shareable link. It’s designed not just for fun confessions, but for honest feedback, suggestions, and civic participation—without fear or bias.',
      tags: ['Node.js', 'TypeScript', 'React', 'Tailwind CSS', 'Firebase', 'Firestore Auth'],
      link: 'https://incognito.cosedevs.com'
    },
    {
      title: 'Asikaso - Task Management Application',
      description: 'ASIK is a modern, full-stack task management application designed for companies to efficiently manage tasks, teams, and projects. Built with the power of React, Node.js, Firebase, and Tailwind CSS, it provides a seamless experience for teams to collaborate and stay productive.',
      tags: ['TypeScript', 'Node.js', 'Tailwind CSS', 'Firebase', 'Firestore Auth']
    },
    {
      title: 'ePuno',
      description: 'ePuno is designed as a foundational block, demonstrating the power of localized tracking in a global framework. It is the benchmark in this directory, setting standards for clarity, impact, and user focus.',
      tags: ['Node.js', 'TypeScript', 'React', 'Tailwind CSS', 'Firebase', 'Firestore Auth'],
      link: 'https://epuno.vercel.app'
    },
    {
      title: 'Recivo - Receipt Generation Platform',
      description: 'Recivo is a modern receipt generation platform designed specifically for online sellers and business owners. Create, manage, and share professional receipts in seconds—without the hassle of manual paperwork.',
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Firebase'],
      link: 'https://recivo.cosedevs.com'
    },
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
      title: 'Mabels - Restaurant Management System',
      description: 'An open source restaurant management system. This is used for clone, push, and remote code with regards to our project, MBALES POS | ORDER | INVENTORY MANAGEMENT SYSTEM.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/jeremiahpantaras/Mabels'
    },
    {
      title: 'Sentinels Student Management System',
      description: 'A gamified cybersecurity learning platform for Cybersecurity Fundamentals. A Thesis Study of DevInnovate. Empower your classroom with interactive tasks, real-time progress tracking, and a leaderboard that sparks friendly competition.',
      tags: ['Python Django', 'Tailwind CSS'],
      link: 'https://sentinelsadmin.onrender.com'
    },
    {
      title: 'Open Source Car Management System',
      description: 'Developed a web-based Car Management System utilizing Python Django and a MySQL database. This project implements fundamental CRUD (Create, Read, Update, Delete) operations, featuring a responsive user interface built with Bootstrap.',
      tags: ['Python Django', 'Bootstrap'],
      link: 'https://github.com/jeremiahpantaras/Car-Management-System'
    },
    {
      title: 'Open Source QR Generator',
      description: 'A sleek Python-based QR code generator that creates beautiful, white-on-transparent QR codes with corners. Perfect for overlaying on dark backgrounds, presentations, or modern web designs!',
      tags: ['Python', 'qrcode[pil]', 'Pillow'],
      link: 'https://github.com/jeremiahpantaras/python-qr-generator'
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

  // Gallery
  const galleries = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    image: `/gallery/${i + 1}.webp`,
    title: `Highlight ${i + 1}`,
    date: '2024'
  }));

  // Workshops & Tech Events
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

  if (loading) {
    return isInitialLoad ? <Preloader /> : <MainSkeletonLoader />;
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className={`w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-4 sm:py-6 transition-all duration-700 flex flex-col lg:flex-row gap-6 items-start ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Left Column - Side Profile */}
        <div className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0 lg:sticky lg:top-6 lg:self-start z-20">
          {/* Header/Profile Section */}
        <div className={`relative bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl mt-2 lg:mt-0 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ transitionDelay: '100ms' }}>
          {/* Theme Toggle Button - Top Right Corner */}
          <div className="w-full flex justify-end mb-6 z-10">
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 dark:bg-gray-700 shadow-lg dark:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer w-16 h-8 flex items-center relative"
              aria-label="Toggle theme"
            >
              {/* Toggle Track */}
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 transition-colors duration-300" />
              
              {/* Toggle Circle */}
              <div className={`relative z-10 w-6 h-6 bg-white shadow-md transform transition-all duration-300 flex items-center justify-center ${
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
          <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center gap-6 text-center sm:text-left lg:text-center">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-300">
                <img
                  src={darkMode ? '/profile/darkMode.webp' : '/profile/lightMode.webp'}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between lg:flex-col lg:items-center gap-4 mb-4">
                <div className="w-full flex flex-col items-center sm:items-start lg:items-center">
                  <h1 className="text-2xl sm:text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center sm:justify-start lg:justify-center gap-2 cursor-default">
                    {profile.name}
                    <span className="inline-flex items-center justify-center relative w-7 h-7">
                      <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0" aria-label="Verified user"><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#1d9bf0"></path>
                      </svg>
                    </span>
                  </h1>
                  <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-1.5 text-gray-600 dark:text-gray-300 mb-3 cursor-default whitespace-nowrap">
                    <MapPin size={14} className="flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs truncate">{profile.location}</span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 cursor-default">
                    {profile.title}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 w-full max-w-[280px] mx-auto">
                <div className="flex flex-row justify-center gap-2 w-full">
                  <button 
                    ref={cvButtonRef}
                    onClick={() => setIsCvModalOpen(true)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#333] transition-all duration-300 hover:scale-105 text-[11px] sm:text-xs text-gray-900 dark:text-white cursor-pointer"
                  >
                    <Briefcase size={14} className="flex-shrink-0" />
                    <span className="whitespace-nowrap">View <span className="italic">CV</span></span>
                  </button>
                  <button 
                    onClick={() => window.location.href = 'mailto:jeremiahpantaras@gmail.com'}
                    className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#333] transition-all duration-300 hover:scale-105 text-[11px] sm:text-xs text-gray-900 dark:text-white cursor-pointer"
                  >
                    <Mail size={14} className="flex-shrink-0" />
                    <span className="whitespace-nowrap">Email</span>
                  </button>
                </div>
                
                {/* Achievement Badge */}
                <a 
                  href="https://portal.connectingasia.org/conference/schedule/aic?_gl=1*tctq5t*_gcl_au*MTY4NTUzNzc5NS4xNzYzNTU4NTg4*_ga*MTE0Mjk2NzQ4My4xNzYzNTU4NTg4*_ga_VGQ86S5R1H*czE3NjUyODYwNjkkbzMkZzAkdDE3NjUyODYwNjkkajYwJGwwJGgw&_ga=2.32719870.1781276684.1765286072-1142967483.1763558588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-2 py-1.5 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 hover:from-slate-400 hover:via-slate-200 hover:to-slate-400 text-slate-900 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer w-full text-center"
                >
                  <Medal size={14} className="flex-shrink-0" />
                  <span className="text-[10px] leading-tight font-semibold">
                    Presented in the 11th Asia International Conference 2025
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center sm:justify-start lg:justify-center gap-3 mt-4">
                {socials.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-[#2a2a2a] hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-300 hover:scale-110"
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
        </div>
        {/* End of Left Column */}

        {/* Right Column - Main Content */}
        <div className="flex-1 w-full flex flex-col min-w-0">

        {/* Company Section */}
        <div className={`bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-6 sm:p-8 mb-6 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden shadow-lg ">
                {/* Replace with actual logo image if available */}
                <img 
                  src="/COSDevsLogo2026.svg"  
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
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:gap-2 mb-1">
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white text-center sm:text-left">
                  Co-Founder and Lead Project Manager
                </h3>
                <span className="hidden sm:inline text-gray-800 dark:text-gray-400">•</span>
                <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 bg-clip-text text-transparent mt-1 sm:mt-0">
                  COS Devs
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Leading a team of passionate developers building innovative solutions for startups and MSMEs
              </p>
              <a 
                href="https://www.cosedevs.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 font-medium transition-colors"
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
            <div className={`bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] ">
                  <Briefcase size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">About</h2>
                {/* More about me link */}
                <a
                  href="/about"
                  className="ml-auto text-xs text-slate-600 dark:text-slate-400 hover:underline hover:text-slate-700 dark:hover:text-slate-300 font-semibold transition-colors underline"
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
            <div className={`bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] ">
                  <Code size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
                {/* View all link */}
                <a
                  href="/tech-stacks"
                  className="ml-auto text-xs text-slate-600 dark:text-slate-400 hover:underline hover:text-slate-700 dark:hover:text-slate-300 font-semibold transition-colors underline"
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
                          className="px-2.5 py-1.5 bg-gray-100 dark:bg-[#2a2a2a] text-gray-800 dark:text-gray-200 text-xs font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-300 hover:scale-105"
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
            <div className={`bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] ">
                  <Code size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
                {/* View all projects link */}
                <a
                  href="/projects"
                  className="ml-auto text-xs text-slate-600 dark:text-slate-400 hover:underline hover:text-slate-700 dark:hover:text-slate-300 font-semibold transition-colors underline"
                  style={{ cursor: 'pointer' }}
                >
                  View all projects
                </a>
              </div>
            
              <div className="space-y-4">
                {projects.slice(0, 3).map((project, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-6 bg-gray-50 dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 cursor-pointer group hover:scale-[1.02] hover:shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-slate-200 dark:bg-slate-800/50 text-slate-800 dark:text-slate-300 text-xs font-medium transition-all duration-300 hover:scale-105"
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
            <div className={`bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] ">
                  <Briefcase size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Experience</h2>
                {/* View all experiences link */}
                <a
                  href="/experience"
                  className="ml-auto text-xs text-slate-600 dark:text-slate-400 hover:underline hover:text-slate-700 dark:hover:text-slate-300 font-semibold transition-colors underline"
                  style={{ cursor: 'pointer' }}
                >
                  View all
                </a>
              </div>
            
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:border-l-0 last:pb-0 transition-all duration-300 hover:translate-x-2">
                    <div className={`absolute left-[-9px] top-0 w-4 h-4 border-2 ${
                      exp.current 
                        ? 'bg-slate-400 border-slate-400 animate-pulse' 
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
                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105">
                          {exp.year}
                        </span>
                        {exp.current && (
                          <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium transition-all duration-300 hover:scale-105 animate-pulse">
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
            <div className={`bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] ">
                  <Award size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-md sm:text-md font-bold text-gray-900 dark:text-white">Recent Certifications</h2>
                {/* View all certifications link */}
                <a
                  href="/certifications"
                  className="ml-auto text-xs text-slate-600 dark:text-slate-400 hover:underline hover:text-slate-700 dark:hover:text-slate-300 font-semibold transition-colors underline"
                  style={{ cursor: 'pointer' }}
                >
                  View all
                </a>
              </div>
            
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg"
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
                        <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 mt-2 inline-block transition-all duration-300 hover:scale-105">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>            
            {/* Seminars / Workshops Section */}
            <div className={`bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] ">
                  <Award size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-md sm:text-md font-bold text-gray-900 dark:text-white">Seminars | Workshops</h2>
                {/* View all Workshops link */}
                <a
                  href="/workshops"
                  className="ml-auto text-xs text-slate-600 dark:text-slate-400 hover:underline hover:text-slate-700 dark:hover:text-slate-300 font-semibold transition-colors underline"
                  style={{ cursor: 'pointer' }}
                >
                  View all
                </a>
              </div>
            
              <div className="space-y-4">
                {workshops.map((workshop, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg"
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
                        <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 mt-2 inline-block transition-all duration-300 hover:scale-105">
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
        {/* Gallery Section */}
        <div className={`mt-6 bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '550ms' }}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a]">
                <ImageIcon size={20} className="text-gray-700 dark:text-gray-300" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Gallery
              </h2>
            </div>
            <a 
              href="/gallery" 
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors group cursor-pointer"
            >
              View all
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {galleries.slice(0, 3).map((item) => (
              <div 
                key={item.id} 
                className="relative group overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#2a2a2a] break-inside-avoid cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  <p className="text-gray-300 text-xs">{item.date}</p>
                </div>
              </div>
            ))}
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
                      className="p-2 bg-gray-100 dark:bg-[#1a1a1a] hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-110"
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
                  <a href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/tech-stacks" className="text-sm text-gray-600 dark:text-gray-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
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
                  <a href="mailto:jeremiahpantaras@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    jeremiahpantaras@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-gray-600 dark:text-gray-400 flex-shrink-0" />
                  <a href="https://www.cosedevs.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
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
        {/* End of Right Column */}
      </div>

      {/* Floating Chat Button & Chat Window */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 z-40 flex animate-bounce items-center justify-center bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 hover:from-slate-400 hover:via-slate-200 hover:to-slate-400 text-slate-900 font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:ring-offset-gray-900 h-14 w-14 md:h-auto md:w-auto md:px-4 md:py-3 md:gap-2 md:bottom-6 md:right-6 cursor-pointer"
          aria-label="Open AI Assistant"
        >
          <MessageSquare size={20} className="md:shrink-0"/>
          <span className="hidden md:inline">Chat with Jeremiah</span>
        </button>
      )}

      {isChatOpen && <Chat onClose={() => setIsChatOpen(false)} />}
      <OpenCv 
        isOpen={isCvModalOpen} 
        onClose={() => setIsCvModalOpen(false)} 
        triggerRef={cvButtonRef}
      />
      <ImageModal 
        isOpen={!!selectedImage} 
        image={selectedImage?.image} 
        title={selectedImage?.title} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  )
}