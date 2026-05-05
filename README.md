# 🚀 Khandaker Tanim Mahmud Hoque — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://v0-portpolio-dqt6.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-TanimStu068-181717?style=for-the-badge&logo=github)](https://github.com/TanimStu068)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-tanim--mahmud68-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/tanim-mahmud68/)

> A privacy-first, performance-focused personal portfolio built with **Next.js** and **Tailwind CSS** — showcasing mobile apps, cross-platform projects, certifications, and more.

---

## 🌐 Live Site

**[https://v0-portpolio-dqt6.vercel.app/](https://v0-portpolio-dqt6.vercel.app/)**

---

## ✨ Features

- **Responsive Design** — Works seamlessly on mobile, tablet, and desktop
- **Animated Hero** — Typewriter effect with role cycling
- **Skills Showcase** — Icon-based grid covering languages, frameworks, and tools
- **Project Gallery** — Screenshot carousel with multi-image support per project
- **Certifications Section** — Certificate image viewer with modal lightbox
- **Animated Stats** — Scroll-triggered counter animations for achievements
- **Scroll Animations** — IntersectionObserver-powered fade/slide-in effects
- **Contact Form** — Formspree-powered form with validation and toast notifications
- **Dark Theme** — Slate/cyan color palette with glassmorphism cards

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| Deployment | [Vercel](https://vercel.com/) |
| Form Backend | [Formspree](https://formspree.io/) |

---

## 📁 Project Structure

```
├── app/
│   ├── page.tsx          # Main portfolio component
│   ├── layout.tsx        # Root layout & metadata
│   └── globals.css       # Global styles & animations
├── public/
│   ├── profile.png                          # Profile photo
│   ├── Khandaker_Tanim_Mahmud_Hoque_Resume.pdf
│   ├── screenshots/                         # Project screenshots
│   │   ├── omniguard_image1.png
│   │   ├── urbanos_image1.png ... image17.png
│   │   ├── cyber_sense_image1.png ... image7.png
│   │   ├── csematerialsimage1.jpeg ... image2.jpeg
│   │   ├── cuetbusimage1.png ... image4.png
│   │   └── expensetrackerappimage1.png ... image4.png
│   └── certificates/                        # Certificate images
│       ├── saylor_academy.png
│       ├── ibm.png
│       ├── nvidia.png
│       ├── freecodecamp.png
│       ├── google_play.png
│       ├── simplilearn.png
│       └── hackerrank.png
└── README.md
```

---

## 🧩 Sections

| Section | Description |
|---|---|
| **Hero** | Name, role typewriter, resume download, social links |
| **About** | Developer philosophy and goals |
| **Skills** | Languages, Android/Native, Cross-Platform, Backend & DB, Tools |
| **Projects** | 6 featured projects with screenshot galleries |
| **Achievements** | Animated stat counters + 7 certifications |
| **Education** | CUET BSc CSE, HSC, SSC academic records |
| **Experience** | Volunteer, leadership, and community roles |
| **Contact** | Social links + contact form |

---

## 📱 Featured Projects

| Project | Stack | Description |
|---|---|---|
| **OmniGuard** | Kotlin, Jetpack Compose, MVVM, Hilt, Room | Privacy & System Health Dashboard for Android |
| **UrbanOS** | Flutter, Provider, IoT Architecture | Smart City Digital Twin Simulator (40+ screens) |
| **Cyber Sense Plus** | Flutter, Firebase, AES-256 | Security vault with biometric auth & threat scoring |
| **CUET CSE Materials** | Flutter, Firebase, Supabase, Firestore | Smart learning platform for all 8 CSE semesters |
| **CUETBus** | Flutter, Node.js, SQLite | Full-stack bus ticket booking system |
| **Track Spend** | Flutter, Firebase, Hive, FL Chart | Offline-ready personal finance tracker |

---

## 🏅 Certifications

- CS101: Introduction to Programming I — **Saylor University**
- Machine Learning with Python — **IBM**
- AI for All: From Basics to GenAI Practice — **NVIDIA**
- Scientific Computing with Python — **freeCodeCamp**
- Google Play Academy Store Listing — **Google**
- Introduction to Artificial Intelligence — **Simplilearn**
- Python (Basic) — **HackerRank**

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TanimStu068/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

---

## ⚙️ Configuration

### Contact Form

The contact form uses [Formspree](https://formspree.io/). To use your own endpoint, replace the form ID in `page.tsx`:

```typescript
fetch('https://formspree.io/f/YOUR_FORM_ID', { ... })
```

### Updating Content

All portfolio data (projects, skills, certifications, experience) is defined as arrays at the top of `app/page.tsx`. Update those arrays to customize the content.

---

## 🎨 Customization

- **Colors** — Cyan/slate theme defined in `globals.css` and Tailwind utility classes
- **Animations** — Scroll animations use `IntersectionObserver` in `page.tsx`
- **Fonts** — Configured via Next.js font system in `layout.tsx`

---

## 📬 Contact

| Channel | Link |
|---|---|
| Email | [tmahmud547@gmail.com](mailto:tmahmud547@gmail.com) |
| GitHub | [@TanimStu068](https://github.com/TanimStu068) |
| LinkedIn | [tanim-mahmud68](https://www.linkedin.com/in/tanim-mahmud68/) |
| LeetCode | [dark_321](https://leetcode.com/u/dark_321) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <strong>Khandaker Tanim Mahmud Hoque</strong>
</p>
