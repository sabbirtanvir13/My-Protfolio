import dri from "../assets/dri.PNG";

/* ─── Project Data ─── */
export const projects = [
  {
    id: "artify",
    title: "ARTIFY",
    iconName: "FaPalette",
    iconColor: "#A259FF",
    category: "fullstack",
    featured: true,
    image: "https://i.ibb.co.com/k2HHCFDP/p1.jpg",
    description:
      "A full-stack MERN application for artists to showcase, explore & manage digital artworks with a beautiful gallery interface.",
    tech: [
      { name: "React", iconName: "FaReact", color: "#61DAFB" },
      { name: "Node.js", iconName: "FaNodeJs", color: "#68A063" },
      { name: "Express", iconName: "SiExpress", color: "#ffffff" },
      { name: "MongoDB", iconName: "SiMongodb", color: "#4DB33D" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "#38BDF8" },
    ],
    features: [
      "User authentication & profile management",
      "Artwork upload with image preview",
      "Gallery browsing with category filters",
      "Responsive design across all devices",
      "RESTful API with CRUD operations",
    ],
    repo: "https://github.com/sabbirtanvir13/ARTIFY-CLIENT.git",
    live: "https://fluffy-palmier-ff2ab6.netlify.app/",
    challenges:
      "Implementing efficient image handling, creating a smooth gallery experience with filtering, and ensuring secure user authentication across the platform.",
    improvements:
      "Add payment integration for artwork sales, implement AI-powered artwork recommendations, add social sharing features, and optimize image loading with CDN.",
  },
  {
    id: "localchefbazar",
    title: "LocalChefBazar",
    iconName: "FaUtensils",
    iconColor: "#FF6B35",
    category: "fullstack",
    featured: true,
    image: "https://i.ibb.co.com/whRycZyY/p2.jpg",
    description:
      "A MERN-based food marketplace enabling local chefs to sell homemade meals with order management and delivery tracking.",
    tech: [
      { name: "React", iconName: "FaReact", color: "#61DAFB" },
      { name: "Node.js", iconName: "FaNodeJs", color: "#68A063" },
      { name: "Express", iconName: "SiExpress", color: "#ffffff" },
      { name: "MongoDB", iconName: "SiMongodb", color: "#4DB33D" },
      { name: "Firebase", iconName: "SiFirebase", color: "#FFA000" },
    ],
    features: [
      "Chef profile & menu management",
      "Real-time order tracking system",
      "Firebase authentication integration",
      "Search & filter by cuisine type",
      "Responsive mobile-first design",
    ],
    repo: "https://github.com/sabbirtanvir13/LocalChefBazaar-Frontend.git",
    live: "https://localchefbazar-4ff5a.web.app/",
    challenges:
      "Designing an intuitive ordering flow, implementing real-time updates for order status, and building a scalable database schema for diverse menu items.",
    improvements:
      "Add payment gateway integration, implement a rating/review system, add delivery partner dashboard, and optimize search with Elasticsearch.",
  },
  {
    id: "heroio",
    title: "Hero.io",
    iconName: "FaMobileAlt",
    iconColor: "#06B6D4",
    category: "frontend",
    featured: false,
    image: "https://i.ibb.co.com/KRKgvyZ/p3.jpg",
    description:
      "A modern app installation platform where users can explore and download apps with a sleek, intuitive interface.",
    tech: [
      { name: "React", iconName: "FaReact", color: "#61DAFB" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "#38BDF8" },
      { name: "Netlify", iconName: "SiNetlify", color: "#00C7B7" },
    ],
    features: [
      "Clean & modern app showcase UI",
      "Category-based app browsing",
      "Responsive grid layout",
      "Smooth animations & transitions",
    ],
    repo: "https://github.com/sabbirtanvir13/Assignment-08.git",
    live: "https://soft-bonbon-e8ce0f.netlify.app/",
    challenges:
      "Creating a responsive grid that looks great on all screen sizes while maintaining smooth performance with multiple app cards and animations.",
    improvements:
      "Add user accounts and favorites, implement app ratings and reviews, add a dark mode, and integrate with an API for real app data.",
  },
  {
    id: "travelgo",
    title: "TravelGo",
    iconName: "FaPlane",
    iconColor: "#FBBF24",
    category: "frontend",
    featured: false,
    image: "https://i.ibb.co.com/Y4x3spgv/p5.png",
    description:
      "A travel booking platform that helps users discover destinations and plan trips with a beautiful, immersive interface.",
    tech: [
      { name: "React", iconName: "FaReact", color: "#61DAFB" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "#38BDF8" },
      { name: "Vercel", iconName: "SiVercel", color: "#ffffff" },
    ],
    features: [
      "Destination discovery with rich visuals",
      "Trip planning & itinerary builder",
      "Mobile-optimized responsive design",
      "Smooth page transitions & animations",
    ],
    repo: "https://github.com/sabbirtanvir13/Travel_Project.git",
    live: "https://travel-project-8h6kytmnt-tanvir-ahmed-sabbirs-projects.vercel.app/",
    challenges:
      "Optimizing large hero images for performance, creating immersive hover effects, and building a smooth responsive experience across devices.",
    improvements:
      "Add booking functionality, integrate with real travel APIs, add user reviews, and implement a multi-step booking wizard.",
  },
  {
    id: "devpulse",
    title: "DevPulse API",
    iconName: "FaServer",
    iconColor: "#10B981",
    category: "backend",
    featured: true,
    image: dri,
    description:
      "A lightweight, production-ready backend system for internal issue tracking and team collaboration with role-based access control.",
    tech: [
      { name: "Node.js", iconName: "FaNodeJs", color: "#68A063" },
      { name: "Express", iconName: "SiExpress", color: "#ffffff" },
      { name: "PostgreSQL", iconName: "SiMongodb", color: "#336791" },
      { name: "JWT", iconName: "FaLaptopCode", color: "#F59E0B" },
      { name: "TypeScript", iconName: "FaReact", color: "#3178C6" },
    ],
    features: [
      "JWT-based authentication & role-based authorization (contributor/maintainer)",
      "RESTful API for issue tracking (bug + feature requests)",
      "Secure password hashing using bcrypt",
      "Raw SQL queries using native pg driver (no ORM/query builder)",
      "Role-controlled issue workflow system",
      "Flexible filtering & sorting for issues",
      "Modular Express architecture with TypeScript",
      "Secure middleware for authentication & validation",
    ],
    repo: "https://github.com/sabbirtanvir13/DevPulse.git",
    live: "https://dev-pulse-alpha-ebon.vercel.app/",
    challenges:
      "Designing role-based access (contributor vs maintainer), implementing secure JWT authentication flow, enforcing update rules (own issue vs any issue), handling filtering & sorting without ORM support, managing relational data without JOIN-heavy architecture constraints, and building clean raw SQL-based service layers.",
    improvements:
      "Add frontend interface, implement email notifications, add file attachments for issues, integrate CI/CD, and add rate limiting and API documentation with Swagger.",
  },
];

export const filters = [
  { key: "all", label: "All", iconName: "FaServer" },
  { key: "fullstack", label: "Full Stack", iconName: "FaServer" },
  { key: "frontend", label: "Frontend", iconName: "FaLaptopCode" },
  { key: "backend", label: "Backend", iconName: "FaServer" },
];
