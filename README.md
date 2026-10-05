# Khandaker Tanim Mahmud Hoque — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://v0-portpolio-dqt6.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-TanimStu068-181717?style=for-the-badge&logo=github)](https://github.com/TanimStu068)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-tanim--mahmud68-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/tanim-mahmud68/)

A responsive personal portfolio for showcasing my software projects, technical skills, work experience, education, achievements, and certifications. The site is built with Next.js, React, TypeScript, and Tailwind CSS.

## Live Site

[https://v0-portpolio-dqt6.vercel.app/](https://v0-portpolio-dqt6.vercel.app/)

## Features

- Responsive, dark-themed layout with a slate-and-cyan palette
- Hero section with an animated role tagline, profile photo, social links, and resume link
- Sticky navigation matching the page order
- Experience timeline and categorized technical skills
- Seven featured projects with screenshot galleries
- Achievement cards with scroll-triggered counters
- Seven certifications with certificate previews and links
- Education history and contact form
- Scroll-triggered section animations and interactive modals
- Vercel Analytics in production

## Page Sections

The page content and navigation follow this order:

1. About
2. Experience
3. Skills
4. Projects
5. Achievements & Certifications
6. Education
7. Contact

The hero appears above these sections.

## Featured Projects

| Project | Technologies | Description |
|---|---|---|
| **KrishiMind** | FastAPI, PostgreSQL, Gemini API, Docker | Collaborative AI agriculture platform with crop recommendations, disease scanning, yield prediction, and market insights. |
| **OmniGuard** | Kotlin, Jetpack Compose, MVVM, Hilt, Room | Android privacy and system-health dashboard. |
| **UrbanOS** | Flutter, Provider, IoT architecture | Smart-city digital twin simulator with sensor feeds, automation rules, and device controls. |
| **Cyber Sense Plus** | Flutter, Firebase, AES-256 | Security vault with encryption, threat scanning, and password management. |
| **CUET CSE Course Materials** | Flutter, Firebase, Firestore, Supabase, Hive | Learning platform for course materials, previous questions, and quizzes. |
| **CUETBus** | Flutter, Node.js, SQLite, Provider | Bus route discovery, seat booking, and ticketing project. |
| **Track Spend** | Flutter, Firebase, Hive, FL Chart | Offline-ready personal finance tracker with spending analytics. |

Each project links to its source repository and includes a screenshot gallery in the portfolio.

## Experience

- **AI Research & Development Intern — TechOptions:** Working on BanglaLLM and researching AI/ML models and services.
- **Industrial Attachment — EchoLogyx Ltd:** Exposure to software engineering workflows, A/B testing, and product development.
- **Team Leader — Academic Projects, CUET Computer Science Department:** Leading project teams and coordinating timelines, tasks, and quality.

## Skills

The skills section groups technologies and tools into Languages, Mobile, Backend & Databases, AI & Machine Learning, and Tools.

## Achievements & Certifications

The portfolio highlights DSA problem-solving, applications built, UrbanOS screens, academic scholarships, and a second-place group project competition result. It also includes seven certificate previews, covering programming, machine learning, AI, scientific computing, and Google Play publishing.

## Tech Stack

| Area | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) App Router |
| UI | [React](https://react.dev/) and TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Icons | [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/) |
| Analytics | [Vercel Analytics](https://vercel.com/docs/analytics) |
| Deployment | [Vercel](https://vercel.com/) |
| Contact form | [Formspree](https://formspree.io/) |

## Getting Started

### Requirements

- Node.js 20.9 or later
- npm

### Install and run locally

```bash
git clone https://github.com/TanimStu068/v0-portpolio.git
cd v0-portpolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```text
app/
  globals.css       Global styles and animations
  layout.tsx        Root layout, metadata, and analytics
  page.tsx          Portfolio content and interactions
public/
  certificates/     Certificate preview images
  screenshots/      Project and gallery images
  profile.png       Profile photo
  Khandaker_Tanim_Mahmud_Hoque_Resume.pdf
README.md
```

## Updating Content

Project details and screenshot galleries, experience entries, achievements, and certification data are defined in `app/page.tsx`. Update the corresponding public images in `public/` when replacing the profile photo, resume, project screenshots, or certificate previews.

The contact form currently submits to a Formspree endpoint from the client. Change the endpoint in the form submission handler in `app/page.tsx` if you want to use another Formspree form.

## Contact

| Channel | Link |
|---|---|
| Email | [tmahmud547@gmail.com](mailto:tmahmud547@gmail.com) |
| GitHub | [@TanimStu068](https://github.com/TanimStu068) |
| LinkedIn | [tanim-mahmud68](https://www.linkedin.com/in/tanim-mahmud68/) |
| LeetCode | [dark_321](https://leetcode.com/u/dark_321) |
| Facebook | [tanim.mahmud.10482](https://www.facebook.com/tanim.mahmud.10482) |

## License

Copyright © 2026 Khandaker Tanim Mahmud Hoque. All rights reserved.

This repository is publicly available for viewing and portfolio purposes. The source code may not be copied, modified, distributed, or reused without prior written permission.
