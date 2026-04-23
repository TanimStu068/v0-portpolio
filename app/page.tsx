'use client';

import Link from 'next/link';
import { Github, Linkedin, Code, Mail, ExternalLink, Play } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'OmniGuard',
      subtitle: 'Privacy & System Health Dashboard',
      description:
        'Production-ready, privacy-first security dashboard for Android. Audits dangerous permissions, detects shadow apps, monitors background activity, calculates security score, and tracks battery health. 100% Google Play compliant with zero telemetry.',
      tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Room', 'Coroutines', 'WorkManager'],
      github: 'https://github.com/TanimStu068/omniguard',
      featured: true,
      demo: true,
    },
    {
      id: 2,
      title: 'UrbanOS',
      subtitle: 'Smart City Digital Twin Simulator',
      description:
        'Architected a 40-screen IoT-based autonomous city platform with custom Virtual Automation Engine processing real-time sensor data. Implemented scalable Digital Twin architecture with conflict resolution for concurrent rules.',
      tech: ['Flutter', 'Provider', 'IoT Architecture', 'Real-time Data'],
      github: 'https://github.com/TanimStu068/urban-os',
      featured: true,
      demo: true,
    },
    {
      id: 3,
      title: 'Cyber Sense Plus',
      subtitle: 'Security Vault',
      description:
        'Security platform with AES-256 encrypted vault, biometric lock, digital risk score (0-100), and network safety analyzer for Wi-Fi risks.',
      tech: ['Flutter', 'Firebase', 'AES-256 Encryption', 'Hive'],
      github: 'https://github.com/TanimStu068/cyber-sense-plus',
      featured: false,
    },
    {
      id: 4,
      title: 'CUETBus',
      subtitle: 'Transit System',
      description:
        'Full-stack booking app with high-concurrency ticket handling, real-time seat selection, and secure authentication.',
      tech: ['Flutter', 'Node.js', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/TanimStu068/cuetbus_flutter',
      featured: false,
    },
    {
      id: 5,
      title: 'Track Spend',
      subtitle: 'Personal Finance Manager',
      description:
        'Finance manager with Firebase auth, offline storage, dark/light theme, interactive spending charts, and expense categorization.',
      tech: ['Flutter', 'Firebase', 'Hive', 'FL Chart'],
      github: 'https://github.com/TanimStu068/track_spend_flutter_app',
      featured: false,
    },
  ];

  const skills = {
    'Languages': ['Kotlin', 'Dart', 'Java', 'Python', 'C/C++', 'JavaScript', 'SQL'],
    'Android/Native': ['Jetpack Compose', 'MVVM', 'Hilt', 'Coroutines', 'Flow', 'Room', 'WorkManager'],
    'Cross-Platform': ['Flutter', 'Provider', 'Riverpod'],
    'Backend & DB': ['Node.js', 'Express', 'FastAPI', 'Firebase', 'Supabase', 'PostgreSQL', 'MongoDB'],
    'Tools': ['Git', 'Linux', 'Android Studio', 'VS Code', 'Postman', 'JUnit', 'MockK'],
  };

  const achievements = [
    { stat: '500+', label: 'DSA Problems Solved' },
    { stat: '10+', label: 'Production Apps Built' },
    { stat: '40+', label: 'Screens (UrbanOS)' },
    { stat: 'Board', label: 'Scholarship (HSC & SSC)' },
  ];

  const certifications = [
    'Machine Learning with Python – IBM',
    'AI for All: From Basics to GenAI Practice – NVIDIA',
    'Scientific Computing with Python – freeCodeCamp',
    'Google Play Academy Store Listing – Google',
    'Introduction to Artificial Intelligence – Simplilearn',
    'Python (Basic) – HackerRank',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            KTM.Dev
          </h1>
          <div className="flex gap-6">
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#achievements" className="hover:text-blue-400 transition">Achievements</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold">
                KT
              </div>
            </div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Khandaker Tanim Mahmud Hoque
          </h1>
          <p className="text-2xl text-cyan-400 mb-4">
            Android Developer (Kotlin/Jetpack Compose) | Privacy & Security Focus | Flutter Dev
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
            Native Android developer with production experience building privacy-first security dashboards. Built OmniGuard — a Google Play compliant privacy dashboard. Also skilled in Flutter, backend integration, and AI/ML. 500+ DSA problems solved.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:tmahmud547@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition transform hover:scale-105"
            >
              <Mail size={20} /> Email
            </a>
            <a
              href="https://github.com/TanimStu068"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition transform hover:scale-105"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tanim-mahmud68/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition transform hover:scale-105"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/dark_321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition transform hover:scale-105"
            >
              <Code size={20} /> LeetCode
            </a>
          </div>
          <div className="mt-8 text-slate-400">
            <p>Chittagong, Bangladesh</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Showcasing my best work in Android development and cross-platform architecture
          </p>

          {/* OmniGuard - Main Featured */}
          <div className="mb-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden border border-slate-600 hover:border-blue-400 transition p-8 lg:flex gap-8 items-center">
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-600/30 text-blue-300 rounded-full text-sm font-semibold mb-4">
                  FEATURED - ANDROID
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-2">OmniGuard</h3>
              <p className="text-lg text-cyan-400 mb-4">Privacy & System Health Dashboard</p>
              <p className="text-slate-300 mb-6">
                Production-ready, privacy-first security dashboard for Android. Audits dangerous permissions (Camera, Mic, Location, Contacts, SMS), detects shadow apps, monitors background activity, calculates security score (0-100), analyzes storage usage, and tracks battery health. 100% Google Play compliant with zero telemetry.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Room', 'Coroutines', 'WorkManager', 'MPAndroidChart'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/TanimStu068/omniguard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition transform hover:scale-105"
              >
                <Github size={20} /> View on GitHub
              </a>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="bg-slate-900/50 rounded-lg h-64 lg:h-80 flex items-center justify-center border border-slate-600 hover:border-blue-400 transition group cursor-pointer">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-slate-400 group-hover:text-blue-400 transition" />
                  <p className="text-slate-400 group-hover:text-slate-300 transition">Demo Video - Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* UrbanOS - Second Featured */}
          <div className="mb-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden border border-slate-600 hover:border-cyan-400 transition p-8 lg:flex gap-8 items-center flex-row-reverse">
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-600/30 text-cyan-300 rounded-full text-sm font-semibold mb-4">
                  FEATURED - FLUTTER
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-2">UrbanOS</h3>
              <p className="text-lg text-cyan-400 mb-4">Smart City Digital Twin Simulator</p>
              <p className="text-slate-300 mb-6">
                Architected a 40-screen IoT-based autonomous city platform with a custom Virtual Automation Engine that processes real-time sensor data (Traffic, AQI, Energy) and triggers actuators based on priority-based logic. Implemented scalable Digital Twin architecture with conflict resolution for concurrent rules.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Flutter', 'Provider', 'IoT Architecture', 'Real-time Data', 'Automation Engine'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/TanimStu068/urban-os"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition transform hover:scale-105"
              >
                <Github size={20} /> View on GitHub
              </a>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="bg-slate-900/50 rounded-lg h-64 lg:h-80 flex items-center justify-center border border-slate-600 hover:border-cyan-400 transition group cursor-pointer">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-slate-400 group-hover:text-cyan-400 transition" />
                  <p className="text-slate-400 group-hover:text-slate-300 transition">Demo Video - Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Other Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.slice(2).map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-700/50 rounded-lg border border-slate-600 hover:border-slate-500 transition p-6 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <h4 className="text-xl font-bold mb-1">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-3">{project.subtitle}</p>
                  <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Technical Skills</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Expertise across native Android, cross-platform development, backend, and DevOps
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-800/50 rounded-lg border border-slate-700 p-6 hover:border-blue-400 transition">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Achievements & Certifications</h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Key Achievements</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 p-6 text-center hover:border-blue-400 transition"
                >
                  <p className="text-4xl font-bold text-cyan-400 mb-2">{achievement.stat}</p>
                  <p className="text-slate-300">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-slate-700/50 rounded-lg border border-slate-600 p-4 flex items-center hover:border-blue-400 transition"
                >
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-slate-300 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Education</h2>

          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-6 hover:border-blue-400 transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Bachelor of Science in Computer Science & Engineering</h3>
                <span className="text-cyan-400 font-semibold">2023 - 2026</span>
              </div>
              <p className="text-slate-400 mb-2">Chittagong University of Engineering & Technology (CUET)</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-6 hover:border-blue-400 transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">HSC, Science</h3>
                <span className="text-cyan-400 font-semibold">GPA: 5.00/5.00</span>
              </div>
              <p className="text-slate-400 mb-2">Cumilla Victoria Government College</p>
              <p className="text-sm text-slate-500">Board Scholarship Awarded</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border-t border-blue-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Let&apos;s collaborate on your next Android, Flutter, or backend project. Reach out!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:tmahmud547@gmail.com"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition transform hover:scale-105 font-semibold"
            >
              Get In Touch
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition transform hover:scale-105 font-semibold inline-flex items-center gap-2"
            >
              <ExternalLink size={20} /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
            <p className="text-slate-400">
              © 2024 Khandaker Tanim Mahmud Hoque. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/TanimStu068"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tanim-mahmud68/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/dark_321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                LeetCode
              </a>
            </div>
          </div>
          <p className="text-slate-500 text-sm text-center">
            Last updated: April 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
