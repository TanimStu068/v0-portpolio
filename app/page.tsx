'use client';

import { useState, useEffect, useRef } from 'react';
import { Github, Code, Linkedin, Facebook, Mail, Phone, Play, Cpu, Database, Layers, Terminal, Box, Zap, GitBranch, Shield, Book, ExternalLink, Monitor, Award, Eye, CheckCircle, Calendar, Download, Send, X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  SiKotlin,
  SiOpenjdk,
  SiC,
  SiJavascript,
  SiPython,
  SiAndroid,
  SiFlutter,
  SiNodedotjs,
  SiFastapi,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiLinux,
  SiAndroidstudio,
  SiPostman,
  SiCplusplus,
  SiDart,
} from 'react-icons/si';

type Certificate = {
  title: string;
  organization: string;
  year: string;
  certificateImage: string;
  icon: string;
  color: string;
  points: string[];
  buttons: { text: string; type: string }[];
  link?: string;
};

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'OmniGuard',
      subtitle: 'Privacy & System Health Dashboard',
      description: [
        'Audits permissions and detects hidden apps for strong privacy protection.',
        'Tracks device health and background activity with security scoring.',
        'Designed for Android with Jetpack Compose and Google Play compliance.'
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Room', 'Coroutines', 'WorkManager'],
      github: 'https://github.com/TanimStu068/omniguard',
      image: '/screenshots/omniguard_image1.png',
      secondButton: { type: 'playstore', text: 'Play Store (Coming Soon)', icon: <Play size={16} />, link: '#' },
      screenshots: [
        {
          title: 'Dashboard',
          image: '/screenshots/omniguard_image1.png',
          description: ['Security score display', 'Risk alerts', 'Quick access controls']
        }
      ]
    },
    {
      id: 2,
      title: 'UrbanOS',
      subtitle: 'Smart City Digital Twin Simulator',
      description: [
        'Simulates city-wide IoT systems with real-time sensor feeds.',
        'Includes automation rules, actuator control, and digital twin insights.',
        'Built in Flutter for a polished cross-platform interface.'
      ],
      tech: ['Flutter', 'Provider', 'IoT Architecture', 'Virtual Automation Engine'],
      github: 'https://github.com/TanimStu068/urban-os',
      image: '/screenshots/urbanos_image1.png',
      secondButton: { type: 'video', text: 'Demo Video', icon: <Play size={16} />, link: '#' },
      screenshots: [
        {
          title: 'City Overview',
          image: '/screenshots/urbanos_image1.png',
          description: ['Interactive city map', 'Real-time sensor data', 'IoT device status']
        },
        {
          title: 'Sensor Dashboard',
          image: '/screenshots/urbanos_image2.png',
          description: ['Temperature readings', 'Traffic flow data', 'Air quality metrics']
        },
        {
          title: 'Automation Rules',
          image: '/screenshots/urbanos_image3.png',
          description: ['Custom rule creation', 'Trigger conditions', 'Actuator controls']
        },
        {
          title: 'Digital Twin',
          image: '/screenshots/urbanos_image4.png',
          description: ['3D city visualization', 'Simulation controls', 'Data analytics']
        },
        {
          title: 'Reports',
          image: '/screenshots/urbanos_image5.png',
          description: ['Historical data charts', 'Performance metrics', 'Export options']
        },
        {
          title: 'Device Control',
          image: '/screenshots/urbanos_image6.png',
          description: ['Real-time device control', 'Status monitoring', 'Alert management']
        },
        {
          title: 'Analytics Dashboard',
          image: '/screenshots/urbanos_image7.png',
          description: ['Data visualization', 'Trend analysis', 'Performance insights']
        },
        {
          title: 'Traffic Management',
          image: '/screenshots/urbanos_image8.png',
          description: ['Traffic flow optimization', 'Congestion monitoring', 'Route planning']
        },
        {
          title: 'Energy Management',
          image: '/screenshots/urbanos_image9.png',
          description: ['Power consumption data', 'Energy optimization', 'Sustainability metrics']
        },
        {
          title: 'Water Systems',
          image: '/screenshots/urbanos_image10.png',
          description: ['Water supply monitoring', 'Usage tracking', 'Maintenance alerts']
        },
        {
          title: 'Public Safety',
          image: '/screenshots/urbanos_image11.png',
          description: ['Emergency response', 'Surveillance data', 'Safety metrics']
        },
        {
          title: 'Notifications',
          image: '/screenshots/urbanos_image12.png',
          description: ['Real-time alerts', 'Notification center', 'Priority management']
        },
        {
          title: 'Settings',
          image: '/screenshots/urbanos_image13.png',
          description: ['System preferences', 'User configuration', 'API settings']
        },
        {
          title: 'Data Export',
          image: '/screenshots/urbanos_image14.png',
          description: ['Export historical data', 'Report generation', 'API access']
        },
        {
          title: 'User Management',
          image: '/screenshots/urbanos_image15.png',
          description: ['Role management', 'Permission control', 'User profiles']
        },
        {
          title: 'Mobile View',
          image: '/screenshots/urbanos_image16.png',
          description: ['Mobile dashboard', 'Quick access', 'On-the-go monitoring']
        },
        {
          title: 'Advanced Analytics',
          image: '/screenshots/urbanos_image17.png',
          description: ['ML-powered insights', 'Predictive analytics', 'Recommendations']
        }
      ]
    },
    {
      id: 3,
      title: 'Cyber Sense Plus',
      subtitle: 'Security Vault',
      description: [
        'AES-256 encrypted vault with biometric authentication.',
        'Threat scoring and network safety checks for secure use.',
        'Mobile-first security UX built with Flutter and Firebase.'
      ],
      tech: ['Flutter', 'Firebase', 'AES-256 Encryption', 'Hive'],
      github: 'https://github.com/TanimStu068/cyber-sense-plus',
      image: '/screenshots/cyber_sense_image1.png',
      secondButton: { type: 'audit', text: 'Security Audit', icon: <Shield size={16} />, link: '#' },
      screenshots: [
        {
          title: 'Vault Home',
          image: '/screenshots/cyber_sense_image1.png',
          description: ['Biometric unlock', 'Recent files', 'Security status']
        },
        {
          title: 'File Encryption',
          image: '/screenshots/cyber_sense_image2.png',
          description: ['AES-256 encryption', 'File selection', 'Progress tracking']
        },
        {
          title: 'Threat Scanner',
          image: '/screenshots/cyber_sense_image3.png',
          description: ['Network security check', 'Malware detection', 'Risk assessment']
        },
        {
          title: 'Password Manager',
          image: '/screenshots/cyber_sense_image4.png',
          description: ['Secure password storage', 'Auto-generation', 'Sync across devices']
        },
        {
          title: 'Security Dashboard',
          image: '/screenshots/cyber_sense_image5.png',
          description: ['Threat overview', 'Security metrics', 'Recommendations']
        },
        {
          title: 'Notification Center',
          image: '/screenshots/cyber_sense_image6.png',
          description: ['Alert management', 'Threat notifications', 'Action items']
        },
        {
          title: 'Settings',
          image: '/screenshots/cyber_sense_image7.png',
          description: ['Security preferences', 'Backup options', 'Biometric settings']
        }
      ]
    },
    {
      id: 4,
      title: 'CUET CSE Course Materials',
      subtitle: 'Smart Learning Platform',
      description: [
        'Comprehensive course materials for all 8 semesters with previous year questions and quizzes.',
        'AI-powered recommendations, smart picks, and trending courses for personalized learning.',
        'Admin dashboard for material uploads, user profiles, and Firebase Firestore with Supabase storage.'
      ],
      tech: ['Flutter', 'Firebase', 'Firestore', 'Supabase', 'Hive'],
      github: 'https://github.com/TanimStu068/cuet_cse_course_materials_flutter_app',
      image: '/screenshots/csematerialsimage1.jpeg',
      secondButton: { type: 'demo', text: 'Demo Screens', icon: <Monitor size={16} />, link: '#' },
      screenshots: [
        {
          title: 'Home Dashboard',
          image: '/screenshots/csematerialsimage1.jpeg',
          description: ['For You recommendations', 'Trending courses', 'Smart Picks curated']
        },
        {
          title: 'Course Materials',
          image: '/screenshots/csematerialsimage2.jpeg',
          description: ['Filter by semester/year', 'Search functionality', 'Material categories']
        }
      ]
    },
    {
      id: 5,
      title: 'CUETBus',
      subtitle: 'Transit System',
      description: [
        'Full-stack ticket booking with secure user authentication.',
        'Real-time seat selection and efficient backend routing.',
        'Powered by Node.js, FastAPI, and PostgreSQL for scalability.'
      ],
      tech: ['Flutter', 'Node.js', 'SQLite', 'Provider'],
      github: 'https://github.com/TanimStu068/cuetbus_flutter',
      image: '/screenshots/cuetbusimage1.png',
      secondButton: { type: 'api', text: 'API Docs', icon: <Book size={16} />, link: '#' },
      screenshots: [
        {
          title: 'Route Selection',
          image: '/screenshots/cuetbusimage1.png',
          description: ['Available bus routes', 'Schedule information', 'Fare calculator']
        },
        {
          title: 'Seat Booking',
          image: '/screenshots/cuetbusimage2.png',
          description: ['Interactive seat map', 'Real-time availability', 'Passenger details']
        },
        {
          title: 'Payment',
          image: '/screenshots/cuetbusimage3.png',
          description: ['Secure payment options', 'Booking confirmation', 'E-ticket generation']
        },
        {
          title: 'Trip History',
          image: '/screenshots/cuetbusimage4.png',
          description: ['Past bookings', 'Trip details', 'Rebooking options']
        }
      ]
    },
    {
      id: 6,
      title: 'Track Spend',
      subtitle: 'Personal Finance Manager',
      description: [
        'Offline-ready finance tracker with Firebase sign-in.',
        'Spending analytics and charts for everyday budgeting.',
        'Clean UI with dark/light support for modern finance use.'
      ],
      tech: ['Flutter', 'Firebase', 'Hive', 'FL Chart'],
      github: 'https://github.com/TanimStu068/track_spend_flutter_app',
      image: '/screenshots/expensetrackerappimage3.png',
      secondButton: { type: 'demo', text: 'Try Demo', icon: <ExternalLink size={16} />, link: '#' },
      screenshots: [
        {
          title: 'Dashboard',
          image: '/screenshots/expensetrackerappimage3.png',
          description: ['Expense overview', 'Monthly budget', 'Spending categories']
        },
        {
          title: 'Add Expense',
          image: '/screenshots/expensetrackerappimage4.png',
          description: ['Quick expense entry', 'Category selection', 'Receipt upload']
        },
        {
          title: 'Analytics',
          image: '/screenshots/expensetrackerappimage1.png',
          description: ['Spending charts', 'Trend analysis', 'Budget vs actual']
        },
        {
          title: 'Categories',
          image: '/screenshots/expensetrackerappimage2f.png',
          description: ['Custom categories', 'Budget allocation', 'Expense limits']
        },
      ]
    },
  ];

  const skills = {
    Languages: ['Kotlin', 'Dart', 'Java', 'Python', 'C/C++', 'JavaScript', 'SQL'],
    'Android/Native': ['Jetpack Compose', 'MVVM', 'Hilt', 'Coroutines', 'Flow', 'Room', 'WorkManager'],
    'Cross-Platform': ['Flutter', 'Provider'],
    'Backend & DB': ['Node.js', 'Express', 'FastAPI', 'Firebase', 'Supabase', 'PostgreSQL'],
    Tools: ['Git', 'Linux', 'Android Studio', 'VS Code', 'Postman'],
  };

  const getTechColor = (tech: string) => {
    if (['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Room', 'Coroutines', 'WorkManager'].includes(tech)) return 'bg-green-500/20 text-green-300';
    if (['Flutter', 'Provider', 'Dart'].includes(tech)) return 'bg-blue-500/20 text-blue-300';
    if (['Node.js', 'FastAPI', 'Firebase', 'Supabase', 'PostgreSQL', 'Express'].includes(tech)) return 'bg-orange-500/20 text-orange-300';
    if (['Java', 'JavaScript', 'Python', 'C/C++', 'SQL'].includes(tech)) return 'bg-purple-500/20 text-purple-300';
    return 'bg-slate-500/20 text-slate-300';
  };

  const achievements = [
    { stat: '500+', label: 'DSA Problems Solved', icon: <Code size={32} />, color: 'from-purple-500 to-purple-600' },
    { stat: '10+', label: 'Production Apps Built', icon: <Layers size={32} />, color: 'from-blue-500 to-blue-600' },
    { stat: '40+', label: 'Screens (UrbanOS)', icon: <Monitor size={32} />, color: 'from-green-500 to-green-600' },
    { stat: '5.00/5.00', label: 'Board Scholarship (HSC & SSC)', icon: <Award size={32} />, color: 'from-yellow-500 to-orange-500' },
  ];

  const certifications = [
    {
      title: 'CS101: Introduction to Programming I',
      organization: 'Saylor University',
      year: '2026',
      certificateImage: '/certificates/saylor_academy.png',
      icon: 'https://via.placeholder.com/64x64/0A5C9F/FFFFFF?text=Saylor',
      color: 'border-blue-600',
      link: 'https://learn.saylor.org/admin/tool/certificate/index.php?code=8828409950KM',
      points: [
        'Completed rigorous foundation in computer science using Java.',
        'Proficiency in Object-Oriented Programming (OOP), control structures, and computational logic.',
        'Developed ability to design, debug, and implement efficient software solutions.',
      ],
      buttons: [
        { text: 'View Certificate', type: 'link' },
      ],
    },
    {
      title: 'Machine Learning with Python',
      organization: 'IBM',
      year: '2026',
      certificateImage: '/certificates/ibm.png',
      icon: 'https://via.placeholder.com/64x64/052FAD/FFFFFF?text=IBM',
      color: 'border-blue-500',
      link: 'https://courses.cognitiveclass.ai/certificates/5ec10aad821842d4bbe332cf196cb8e8',
      points: [
        'Supervised and unsupervised ML workflows in Python.',
        'Model evaluation, feature engineering, and scikit-learn pipelines.',
        'Hands-on with regression, classification, and real-world datasets.',
      ],
      buttons: [
        { text: 'View Certificate', type: 'link' },
      ],
    },
    {
      title: 'AI for All: From Basics to GenAI Practice',
      organization: 'NVIDIA',
      year: '2026',
      certificateImage: '/certificates/nvidia.png',
      icon: 'https://via.placeholder.com/64x64/76B900/FFFFFF?text=NVIDIA',
      color: 'border-green-500',
      points: [
        'Fundamentals of generative AI and transformer architectures.',
        'Practical GenAI workflows for text, image, and multimodal applications.',
        'Ethical AI principles and deployment considerations.',
      ],
      buttons: [
        { text: 'View Certificate', type: 'view' },
      ],
    },
    {
      title: 'Scientific Computing with Python',
      organization: 'freeCodeCamp',
      year: '2023',
      certificateImage: '/certificates/freecodecamp.png',
      icon: 'https://via.placeholder.com/64x64/0A0A23/FFFFFF?text=FC',
      color: 'border-gray-500',
      link: 'https://freecodecamp.org/certification/fcc-568477b6-72f1-43c2-96a8-9e718c2ceee4/python-v9',
      points: [
        'NumPy, pandas, and visualization for scientific data analysis.',
        'Matrix operations, simulation, and performance-focused code.',
        'Real-world exercises in statistics and computation workflows.',
      ],
      buttons: [
        { text: 'View Certificate', type: 'link' },
      ],
    },
    {
      title: 'Google Play Academy Store Listing',
      organization: 'Google',
      year: '2026',
      certificateImage: '/certificates/google_play.png',
      icon: 'https://via.placeholder.com/64x64/3DDC84/FFFFFF?text=Google',
      color: 'border-green-400',
      link: 'https://www.credential.net/a993290d-0441-4fa9-a2c6-fbd68495d0cb',
      points: [
        'App store listing best practices and store metadata optimization.',
        'Privacy policy requirements, asset guidelines, and review readiness.',
        'Publishing checklist for Play Store compliance and discoverability.',
      ],
      buttons: [
        { text: 'View Certificate', type: 'link' },
      ],
    },
    {
      title: 'Introduction to Artificial Intelligence',
      organization: 'Simplilearn',
      year: '2026',
      certificateImage: '/certificates/simplilearn.png',
      icon: 'https://via.placeholder.com/64x64/1EBA4C/FFFFFF?text=SL',
      color: 'border-green-600',
      link: 'https://simpli-web.app.link/e/NKNyxG299Zb',
      points: [
        'Core AI concepts, search algorithms, and knowledge representation.',
        'Machine learning basics with neural networks and decision trees.',
        'Introduction to AI applications in real-world problem solving.',
      ],
      buttons: [
        { text: 'View Certificate', type: 'link' },
      ],
    },
    {
      title: 'Python (Basic)',
      organization: 'HackerRank',
      year: '2023',
      certificateImage: '/certificates/hackerrank.png',
      icon: 'https://via.placeholder.com/64x64/1EBA4C/FFFFFF?text=HR',
      color: 'border-green-500',
      link: 'https://www.hackerrank.com/certificates/fb67b858da98',
      points: [
        'Python fundamentals: syntax, control flow, and data structures.',
        'Writing functions, list comprehensions, and file handling.',
        'Solved beginner problems to reinforce clean, readable code.',
      ],
      buttons: [
        { text: 'View Certificate', type: 'link' },
      ],
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const statsRef = useRef(null);

  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
  const [toast, setToast] = useState('');

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const [typedBadgeText, setTypedBadgeText] = useState('');
  const [loopIndex, setLoopIndex] = useState(0);
  const badgeMessage = 'Mobile & AI Engineer · Kotlin · Flutter';

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loopIndex < badgeMessage.length) {
        setTypedBadgeText(badgeMessage.substring(0, loopIndex + 1));
        setLoopIndex(loopIndex + 1);
      } else {
        // Reset after 2 seconds
        setTimeout(() => {
          setTypedBadgeText('');
          setLoopIndex(0);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [loopIndex, badgeMessage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const targets = [500, 10, 40, 5];
          targets.forEach((target, index) => {
            let count = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
              count += increment;
              if (count >= target) {
                count = target;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(count);
                return newCounters;
              });
            }, 20);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const [visibleProjects, setVisibleProjects] = useState(new Set<number>());
  const [visibleCertificates, setVisibleCertificates] = useState(new Set<number>());
  const [visibleExperiences, setVisibleExperiences] = useState(new Set<number>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index!);
            const type = (entry.target as HTMLElement).dataset.type;
            if (type === 'project') {
              setVisibleProjects(prev => new Set([...prev, index]));
            } else if (type === 'certificate') {
              setVisibleCertificates(prev => new Set([...prev, index]));
            } else if (type === 'experience') {
              setVisibleExperiences(prev => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const projectItems = document.querySelectorAll('[data-type="project"]');
    const certificateItems = document.querySelectorAll('[data-type="certificate"]');
    const experienceItems = document.querySelectorAll('[data-type="experience"]');

    projectItems.forEach((item) => observer.observe(item));
    certificateItems.forEach((item) => observer.observe(item));
    experienceItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const experienceObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt((entry.target as HTMLElement).dataset.index!);
              setVisibleExperiences(prev => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0 }
      );

      const experienceItems = document.querySelectorAll('[data-type="experience"]');
      experienceItems.forEach((item) => experienceObserver.observe(item));

      return () => experienceObserver.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeGallery();
      }
    };
    if (galleryOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [galleryOpen]);

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  const openGallery = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentScreenshot(0);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setSelectedProject(null);
    setCurrentScreenshot(0);
  };

  const nextScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshot((prev) => (prev + 1) % selectedProject.screenshots.length);
    }
  };

  const prevScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshot((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  const form = e.target as HTMLFormElement;
  const nameInput = form.querySelector('#name') as HTMLInputElement;
  const emailInput = form.querySelector('#email') as HTMLInputElement;
  const messageInput = form.querySelector('#message') as HTMLTextAreaElement;
  
  const nameValue = nameInput?.value || '';
  const emailValue = emailInput?.value || '';
  const messageValue = messageInput?.value || '';
  
  if (!nameValue.trim()) {
    setToast('Please enter your name.');
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    setToast('Please enter a valid email address.');
    return;
  }
  if (!messageValue.trim()) {
    setToast('Please enter a message.');
    return;
  }

  fetch('https://formspree.io/f/mpqbplnn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameValue,
      email: emailValue,
      message: messageValue
    })
  })
    .then(response => {
      if (response.ok) {
        setToast('Message sent! I\'ll get back to you soon.');
        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
        if (messageInput) messageInput.value = '';
        setTimeout(() => setToast(''), 3000);
      } else {
        setToast('Failed to send. Please email me directly at tmahmud547@gmail.com');
      }
    })
    .catch(() => {
      setToast('Failed to send. Please email me directly at tmahmud547@gmail.com');
    });
};

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <div className="backdrop" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="floating-shapes" aria-hidden="true">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-800/75 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">KT</span>
            <span>Portfolio</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300 sm:gap-5">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#achievements" className="transition hover:text-cyan-300">Achievements</a>
            <a href="#education" className="transition hover:text-cyan-300">Education</a>
            <a href="#experience" className="transition hover:text-cyan-300">Experience</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero pt-12 pb-16 px-4 sm:px-6 lg:px-8" id="top">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

              {/* Left Column - Main Content */}
              <div className="space-y-6">
                <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Khandaker Tanim <span className="gradient-text">Mahmud Hoque</span>
                </h1>

                <p className="mt-2 text-lg text-cyan-300">
                  <span className="typewriter">{typedBadgeText}</span>
                  <span className="typewriter-cursor">|</span>
                </p>
                <div className="flex flex-col items-start gap-6 pt-2">
                  {/* Button Row */}
                  <div className="flex flex-wrap gap-4">
                    {/* Resume Button */}
                    <a
                      href="/Khandaker_Tanim_Mahmud_Hoque_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                    >
                      <Download size={20} />
                      My Resume
                    </a>

                    {/* Get in Touch Button */}
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-cyan-500 bg-transparent px-8 py-3 text-base font-semibold text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/30"
                    >
                      <Mail size={20} />
                      Get in Touch
                    </a>
                  </div>

                  {/* Social Icons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://github.com/TanimStu068"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800 text-white transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
                      aria-label="GitHub"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tanim-mahmud68/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800 text-white transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="mailto:tmahmud547@gmail.com"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800 text-white transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
                      aria-label="Email"
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </div>

              </div>

              {/* Right Column - Profile Picture */}
              <div className="flex flex-col items-center justify-center space-y-6">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="h-72 w-72 rounded-full border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                />

              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About</p>
            <div className="mt-6 space-y-4 text-xl leading-relaxed sm:text-2xl">
              <p className="font-bold italic text-slate-200">
                "I build privacy-first Android apps and cross-platform Flutter applications with clean architecture, strong DSA fundamentals, and a focus on real-world deployment. I also explore new technologies and aim to specialize in ML and DL to build AI-powered modern apps and become an AI engineer. Additionally, I solve problems on LeetCode, GeeksforGeeks, and Codeforces."
              </p>
            </div>
          </div>
        </section>

        <section className="section py-20 px-4 sm:px-6 lg:px-8" id="skills">
          <div className="max-w-6xl mx-auto">
            <div className="section__header mb-12 text-center">
              <p className="eyebrow mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">Skills</p>
              <h2 className="text-4xl font-bold">
                Languages, frameworks, and <span className="gradient-text">tools I live in</span>.
              </h2>
            </div>
            <div className="glass-card overflow-hidden p-6">
              <div className="mb-8 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Technical Skills</p>
                <h3 className="mt-3 text-3xl font-bold">My Expertise Areas</h3>
              </div>
              <div className="space-y-8">
                {[
                  {
                    category: 'Languages',
                    skills: [
                      { icon: <SiKotlin size={48} className="text-purple-400" />, title: 'Kotlin' },
                      { icon: <SiDart size={48} className="text-blue-400" />, title: 'Dart' },
                      { icon: <SiOpenjdk size={48} className="text-red-500" />, title: 'Java' },
                      { icon: <SiPython size={48} className="text-yellow-400" />, title: 'Python' },
                      { icon: <SiCplusplus size={48} className="text-green-400" />, title: 'C/C++' },
                      { icon: <SiJavascript size={48} className="text-yellow-300" />, title: 'JavaScript' },
                      { icon: <SiSqlite size={48} className="text-blue-500" />, title: 'SQL' },
                    ],
                  },
                  {
                    category: 'Android/Native',
                    skills: [
                      { icon: <SiAndroid size={48} className="text-green-400" />, title: 'Jetpack Compose' },
                      { icon: <SiAndroid size={48} className="text-indigo-400" />, title: 'MVVM' },
                      { icon: <SiAndroid size={48} className="text-orange-400" />, title: 'Hilt' },
                      { icon: <SiAndroid size={48} className="text-yellow-500" />, title: 'Coroutines' },
                      { icon: <SiAndroid size={48} className="text-blue-300" />, title: 'Flow' },
                      { icon: <SiAndroid size={48} className="text-green-500" />, title: 'Room' },
                      { icon: <SiAndroid size={48} className="text-purple-500" />, title: 'WorkManager' },
                      { icon: <SiAndroid size={48} className="text-red-400" />, title: 'PackageManager' },
                      { icon: <SiAndroid size={48} className="text-teal-400" />, title: 'StorageStatsManager' },
                      { icon: <SiAndroid size={48} className="text-pink-400" />, title: 'ActivityManager' },
                      { icon: <SiAndroid size={48} className="text-orange-500" />, title: 'BatteryManager' },
                      { icon: <SiAndroid size={48} className="text-indigo-500" />, title: 'UsageStatsManager' },
                    ],
                  },
                  {
                    category: 'Cross-Platform',
                    skills: [
                      { icon: <SiFlutter size={48} className="text-blue-400" />, title: 'Flutter' },
                      { icon: <SiFlutter size={48} className="text-green-400" />, title: 'Provider' },
                    ],
                  },
                  {
                    category: 'Backend & DB',
                    skills: [
                      { icon: <SiNodedotjs size={48} className="text-green-500" />, title: 'Node.js (Express)' },
                      { icon: <SiFastapi size={48} className="text-blue-500" />, title: 'FastAPI' },
                      { icon: <SiFirebase size={48} className="text-orange-400" />, title: 'Firebase' },
                      { icon: <SiSupabase size={48} className="text-green-400" />, title: 'Supabase' },
                      { icon: <SiPostgresql size={48} className="text-blue-600" />, title: 'PostgreSQL' },
                      { icon: <SiSqlite size={48} className="text-gray-400" />, title: 'SQLite' },
                    ],
                  },
                  {
                    category: 'Tools',
                    skills: [
                      { icon: <SiGit size={48} className="text-orange-500" />, title: 'Git' },
                      { icon: <SiLinux size={48} className="text-yellow-400" />, title: 'Linux' },
                      { icon: <SiAndroidstudio size={48} className="text-green-500" />, title: 'Android Studio' },
                      { icon: <Code size={48} className="text-blue-500" />, title: 'VS Code' },
                      { icon: <SiPostman size={48} className="text-orange-400" />, title: 'Postman' },
                    ],
                  },
                ].map((category) => (
                  <div key={category.category} className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-4">{category.category}</h4>
                    <div className="flex flex-wrap gap-6">
                      {category.skills.map((skill) => (
                        <div key={skill.title} className="flex flex-col items-center text-center">
                          <div className="mb-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                            {skill.icon}
                          </div>
                          <p className="text-sm text-slate-300">{skill.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section py-32 px-4 sm:px-6 lg:px-8 bg-slate-800/50" id="projects">
          <div className="max-w-7xl mx-auto">
            <div className="section__header mb-16 text-center">
              <p className="eyebrow mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">Projects</p>
              <h2 className="text-5xl font-bold">
                Selected builds that <span className="gradient-text">ship value</span>.
              </h2>
            </div>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  data-index={index}
                  data-type="project"
                  className={`glass-card p-6 hover-lift border border-slate-700/70 transition-all duration-700 ${visibleProjects.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                    }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="grid gap-8 items-center lg:grid-cols-2">
                    <div className={`aspect-[16/10] overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-950 ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <div className={`space-y-5 ${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                      <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Featured Project</p>
                        <h3 className="text-3xl font-semibold text-white mt-3">{project.title}</h3>
                        <p className="mt-2 text-cyan-300 text-lg">{project.subtitle}</p>
                      </div>

                      <ul className="space-y-3 text-slate-300 text-sm leading-7 list-inside marker:text-cyan-300 marker:text-lg">
                        {project.description.map((point, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className={`rounded-full px-3 py-1.5 text-sm font-medium ${getTechColor(tech)}`}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                        >
                          <Github size={16} /> GitHub
                        </a>
                        {project.id === 1 ? (
                          <a
                            href="https://m.onestore.net/en-sg/apps/appsDetail?prodId=0001005494&pause=N"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-cyan-600 hover:to-blue-700"
                          >
                            <Download size={16} /> Download App
                          </a>
                        ) : (
                          <button
                            onClick={() => openGallery(project)}
                            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-500 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
                          >
                            <Monitor size={16} /> Demo Screens
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section py-32 px-4 sm:px-6 lg:px-8" id="achievements">
          <div className="max-w-7xl mx-auto">
            <div className="section__header mb-16 text-center">
              <p className="eyebrow mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">Achievements & Certifications</p>
              <h2 className="text-5xl font-bold">
                Milestones and <span className="gradient-text">credentials</span>.
              </h2>
            </div>

            {/* Stat Cards */}
            <div className="mb-20" ref={statsRef}>
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">Key Achievements</h3>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {achievements.map((achievement, index) => {
                  const gradient =
                    index === 0
                      ? 'from-purple-500 via-fuchsia-500 to-pink-500'
                      : index === 1
                        ? 'from-blue-500 via-cyan-500 to-sky-500'
                        : index === 2
                          ? 'from-emerald-500 via-lime-400 to-emerald-400'
                          : 'from-yellow-400 via-orange-400 to-orange-500';

                  return (
                    <div
                      key={achievement.label}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800/40 backdrop-blur-sm shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-cyan-500/20"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      <div className="relative z-10 p-8">
                        <div
                          className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-white shadow-2xl shadow-current/30 transition duration-300 group-hover:-translate-y-1 group-hover:scale-105`}
                        >
                          <div className="transition-transform duration-300 group-hover:-translate-y-1">
                            {achievement.icon}
                          </div>
                        </div>

                        <div className="relative">
                          <div className={`absolute inset-x-16 top-0 h-24 rounded-full opacity-40 ${index === 0 ? 'bg-purple-500' : index === 1 ? 'bg-cyan-400' : index === 2 ? 'bg-emerald-400' : 'bg-orange-400'} blur-3xl`} />
                          <p
                            className="relative text-4xl font-extrabold tracking-tight text-white"
                            style={{ textShadow: '0 0 24px rgba(0, 212, 255, 0.22)' }}
                          >
                            {index === 3 ? achievement.stat : `${counters[index]}${index < 3 ? '+' : ''}`}
                          </p>
                        </div>

                        <p className="mt-4 text-slate-200 text-lg">{achievement.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">Certifications</h3>
              <div className="space-y-16">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.title}
                    data-index={index}
                    data-type="certificate"
                    className={`flex flex-col lg:flex-row gap-8 items-center transition-all duration-700 ${visibleCertificates.has(index) ? 'animate-fade-in-up opacity-100' : 'opacity-0'} ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Image Side - Now shows actual certificate */}
                    <div className="flex-1">
                      <div className="glass-card overflow-hidden border border-slate-700/50 hover-lift rounded-3xl">
                        <div className="relative aspect-[4/3] bg-slate-800">
                          <img
                            src={cert.certificateImage}
                            alt={`${cert.title} certificate`}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.src = 'https://via.placeholder.com/400x300/1e293b/64748b?text=Certificate+Preview';
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content Side - Keep as is */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-3xl font-bold text-white">{cert.title}</h4>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${cert.color.replace('border-', 'bg-').replace('-400', '-500/20 text-').replace('-500', '-500/20 text-')}400`}>
                            {cert.organization}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-slate-400">
                          <Calendar size={16} />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                      <div className="space-y-5">
                        <ul className="space-y-3 text-slate-300 text-sm leading-6">
                          {cert.points.map((point, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-4">
                          {cert.buttons.map((button, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                if (button.type === 'link' && cert.link) {
                                  window.open(cert.link, '_blank');
                                } else if (button.type === 'view') {
                                  openModal(cert);
                                }
                              }}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
                            >
                              <Eye size={16} /> {button.text}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {modalOpen && selectedCert && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 rounded-full bg-slate-800/80 p-3 text-slate-300 hover:bg-slate-700 hover:text-white transition"
            >
              <X size={28} />
            </button>
            <img
              src={selectedCert.certificateImage}
              alt={`${selectedCert.title} certificate`}
              className="max-w-5xl max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <section className="section py-32 px-4 sm:px-6 lg:px-8" id="education">
        <div className="max-w-7xl mx-auto">
          <div className="section__header mb-16 text-center">
            <p className="eyebrow mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">Education</p>
            <h2 className="text-5xl font-bold">
              Academic foundation and <span className="gradient-text">continuous learning</span>.
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-8 top-16 bottom-16 w-px bg-slate-600/40" />
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <div className="relative overflow-hidden rounded-3xl border-l-4 border-cyan-400/80 border border-white/10 bg-slate-800/60 p-10 shadow-xl shadow-slate-950/20">
                <div className="absolute -right-3 top-6 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                  Current
                </div>
                <div className="absolute -left-3 top-20 hidden lg:block h-5 w-5 rounded-full bg-cyan-400/90 ring-8 ring-slate-900/65" />
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Chittagong University of Engineering & Technology</h3>
                    <p className="text-cyan-300 font-semibold">Bachelor of Science in Computer Science & Engineering</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-slate-300 text-sm">
                    <Calendar size={16} />
                    <span>2023 – Present</span>
                  </div>

                  {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    5.00 / 5.00 GPA
                  </div> */}

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">Data Structures</span>
                    <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200">Mobile Development</span>
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">Algorithms</span>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">System Design</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border-l-4 border-blue-500/80 border border-white/10 bg-slate-800/60 p-10 shadow-xl shadow-slate-950/20">
                <div className="absolute -left-3 top-20 hidden lg:block h-5 w-5 rounded-full bg-blue-400/90 ring-8 ring-slate-900/65" />
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Cumilla Victoria Government College</h3>
                    <p className="text-cyan-300 font-semibold">Higher Secondary Certificate (HSC), Science</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-slate-300 text-sm">
                    <Calendar size={16} />
                    <span>2019 – 2021</span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100">
                    <span className="h-2 w-2 rounded-full bg-blue-300" />
                    5.00 / 5.00 GPA
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">Physics</span>
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">Chemistry</span>
                    <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200">Mathematics</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border-l-4 border-emerald-400/80 border border-white/10 bg-slate-800/60 p-10 shadow-xl shadow-slate-950/20">
                <div className="absolute -left-3 top-20 hidden lg:block h-5 w-5 rounded-full bg-emerald-400/90 ring-8 ring-slate-900/65" />
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Meah Bazar Latifun Nesa High School</h3>
                    <p className="text-cyan-300 font-semibold">Secondary School Certificate (SSC), Science</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-slate-300 text-sm">
                    <Calendar size={16} />
                    <span>2019</span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    5.00 / 5.00 GPA
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">Biology</span>
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-200">English</span>
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">Mathematics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-32 px-4 sm:px-6 lg:px-8" id="experience">
        <div className="max-w-7xl mx-auto">
          <div className="section__header mb-16 text-center">
            <p className="eyebrow mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">Experience</p>
            <h2 className="text-5xl font-bold">
              Leadership, volunteering, and <span className="gradient-text">community impact</span>.
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Volunteer & Community Organizer',
                organization: 'CUET Islami Mahfil & CUET Islamic Ilm Seeker Society',
                date: '2022 - Present',
                bullets: [
                  <>
                    Organized <span className="font-semibold text-cyan-300">500+ students</span> across campus for community outreach events.
                  </>,
                  <>
                    Coordinated <span className="font-semibold text-cyan-300">100+ participants</span> in religious and educational seminars.
                  </>,
                  'Managed volunteer teams and event logistics for successful community engagement.',
                ],
                accent: 'from-cyan-500 to-sky-500',
              },
              {
                title: 'Team Leader - Academic Projects',
                organization: 'CUET Computer Science Department',
                date: '2021 - Present',
                bullets: [
                  'Led 4-5 group projects as technical lead and project coordinator.',
                  'Managed timelines, task delegation, and quality assurance for deliverables.',
                  'Mentored junior students on best practices and collaborative development workflows.',
                ],
                accent: 'from-fuchsia-500 to-violet-500',
              },
              {
                title: 'Knowledge Contest Participant',
                organization: 'CUET Sirat Competition',
                date: '2023',
                bullets: [
                  'Participated in university-level competition testing Islamic studies and general knowledge.',
                  'Demonstrated analytical thinking and rapid decision-making under competitive pressure.',
                  'Contributed to team strategy and knowledge sharing for improved collective performance.',
                ],
                accent: 'from-emerald-500 to-lime-400',
              },
            ].map((experience, index) => (
              <div
                key={experience.title}
                data-type="experience"
                data-index={index}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800/65 p-8 shadow-xl shadow-slate-950/20 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 lg:flex lg:items-center lg:gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} ${
                  visibleExperiences.has(index)
                    ? index % 2 === 0
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-0 opacity-100'
                    : index % 2 === 0
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                }`}
              >

                <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:w-64 lg:items-center lg:text-center">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${experience.accent} text-white shadow-2xl shadow-current/30`}>
                    {index === 0 ? (
                      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    ) : index === 1 ? (
                      <GitBranch size={32} />
                    ) : (
                      <Award size={32} />
                    )}
                  </div>
                </div>

                <div className="relative z-10 flex-1">
                  <div className="absolute right-0 top-0 hidden text-8xl font-black text-white/5 sm:block">"</div>
                  <div className="relative space-y-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{experience.organization}</p>
                        <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                      </div>
                      <span className="rounded-full border border-cyan-500/50 bg-slate-800/80 px-4 py-1 text-sm text-cyan-300">
                        {experience.date}
                      </span>
                    </div>

                    <ul className="space-y-4">
                      {experience.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3 text-slate-200">
                          <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                          <span className="text-base leading-7">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950" id="contact">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.3)]" />
        <div className="max-w-7xl mx-auto">
          <div className="section__header mb-16 text-center">
            <p className="eyebrow mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
            <h2 className="text-5xl font-bold">
              Let&apos;s build something <span className="gradient-text">amazing together</span>.
            </h2>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/TanimStu068"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-600 hover:text-cyan-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/tanim-mahmud68"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/u/dark_321"
              target="_blank"
              rel="noreferrer"
              title="LeetCode"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:text-white"
            >
              <Code size={24} />
            </a>
            <a
              href="mailto:tmahmud547@gmail.com"
              title="Email"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:text-white"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.facebook.com/tanim.mahmud.10482"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:text-white"
            >
              <Facebook size={24} />
            </a>
          </div>

          <div className="max-w-2xl mx-auto">
  <p className="text-center text-slate-400 mb-8">Or reach me directly</p>
  <form onSubmit={handleFormSubmit} className="space-y-6">
    <div className="grid gap-4 sm:grid-cols-2">
      <input
        type="text"
        placeholder="Your name"
        id="name"
        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 p-4 text-white placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
        required
      />
      <input
        type="email"
        placeholder="Your email"
        id="email"
        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 p-4 text-white placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
        required
      />
    </div>
    <textarea
      rows={4}
      placeholder="Your message..."
      id="message"
      className="w-full rounded-xl border border-slate-700 bg-slate-900/50 p-4 text-white placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
      required
    />
    <button
      type="submit"
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 text-white font-semibold transition hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
    >
      <Send size={16} />
      Send Message
    </button>
  </form>
</div>
        </div>
      </section>

      {galleryOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm" onClick={closeGallery}>
          <div className="relative max-w-6xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeGallery}
              className="absolute -top-12 right-0 z-10 rounded-full bg-slate-800 p-2 text-slate-300 hover:bg-slate-700 hover:text-white transition"
            >
              <X size={24} />
            </button>

            <div className="relative overflow-hidden rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-700 shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title} - Screenshots</h3>
                <div className="flex items-center gap-2 text-slate-400">
                  <span>{currentScreenshot + 1} of {selectedProject.screenshots.length}</span>
                </div>
              </div>

              <div className="p-6">
                <div className={`flex flex-col lg:flex-row gap-8 ${currentScreenshot % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1">
                    <img
                      src={selectedProject.screenshots[currentScreenshot].image}
                      alt={selectedProject.screenshots[currentScreenshot].title}
                      className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h4 className="text-xl font-semibold text-white">{selectedProject.screenshots[currentScreenshot].title}</h4>
                    <ul className="space-y-2">
                      {selectedProject.screenshots[currentScreenshot].description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-200">
                          <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-400" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 border-t border-slate-700">
                <button
                  onClick={prevScreenshot}
                  className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white transition"
                >
                  <ChevronLeft size={20} /> Previous
                </button>

                <div className="flex gap-2">
                  {selectedProject.screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentScreenshot(idx)}
                      className={`h-3 w-3 rounded-full transition ${idx === currentScreenshot ? 'bg-cyan-400' : 'bg-slate-600'}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextScreenshot}
                  className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white transition"
                >
                  Next <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-4 right-4 z-50 rounded-xl bg-cyan-600 px-4 py-2 text-white shadow-lg transition-opacity">
          {toast}
        </div>
      )}

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© 2026 Khandaker Tanim Mahmud Hoque</p>
      </footer>
    </div>
  );
}
