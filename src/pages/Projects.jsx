import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SkeletonLoader from '../components/SkeletonLoader';
import { Code, ChevronLeft, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setIsVisible(true), 50);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
    {
      title: 'Sentinels - Gamified Cybersecurity Education',
      description: 'An interactive mobile application that teaches cybersecurity concepts through engaging games and quizzes.',
      tags: ['C#', 'Firebase', 'Unity Engine', 'Python', 'Django'],
      link: '#'
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
      title: 'Marketplace - E-commerce Platform',
      description: 'A full-featured e-commerce website with product listings, user accounts, and a secure checkout process.',
      tags: ['Python', 'Django', 'React', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Construction Inventory Management System',
      description: 'A comprehensive system for managing construction inventory, including tracking materials, equipment, and supplies.',
      tags: ['Python', 'Django', 'React', 'Tailwind CSS', 'PostgreSQL'],
      link: '#'
    },
  ];

  if (loading) return <SkeletonLoader />;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300 py-12">
      <div className={`max-w-6xl mx-auto px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-105 text-gray-900 dark:text-white font-medium cursor-pointer"
        >
          <ChevronLeft size={18} />
          Back
        </button>
        {/* Projects Card */}
        <div className="bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] ">
              <Code size={20} className="text-gray-700 dark:text-gray-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`flex flex-col h-full p-4 bg-gray-50 dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 group hover:scale-[1.02] hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h2>
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-all duration-300 hover:scale-110"
                      aria-label="Project Link"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium transition-all duration-300 hover:scale-105"
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
    </div>
  );
}