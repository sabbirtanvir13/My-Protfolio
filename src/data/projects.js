import dri from "../assets/dri.PNG";
import ahmed from "../assets/Ahmed.PNG";
import duke from "../assets/duke.PNG";
import truf from "../assets/truf.PNG";

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
  {
    id: "fixitnow",
    title: "FixItNow",
    iconName: "FaServer",
    iconColor: "#3B82F6",
    category: "fullstack",
    featured: true,
    image: "https://placehold.co/800x600/3B82F6/white?text=FixItNow",
    description:
      "A production-ready full-stack home service platform that connects customers with skilled technicians for reliable home repair and maintenance services. The platform includes service booking, technician management, role-based dashboards, reviews, and secure online payments.",
    tech: [
      { name: "Next.js", iconName: "SiNextdotjs", color: "#ffffff" },
      { name: "TypeScript", iconName: "SiTypescript", color: "#3178C6" },
      { name: "Node.js", iconName: "FaNodeJs", color: "#68A063" },
      { name: "Express", iconName: "SiExpress", color: "#ffffff" },
      { name: "PostgreSQL", iconName: "SiPostgresql", color: "#336791" },
      { name: "Prisma", iconName: "SiPrisma", color: "#0C344B" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "#38BDF8" },
      { name: "SSLCommerz", iconName: "FaCreditCard", color: "#F59E0B" },
    ],
    features: [
      "Customer, Technician & Admin role-based dashboards",
      "Home service booking and scheduling",
      "Technician service management",
      "Secure SSLCommerz payment integration",
      "Booking and payment status management",
      "Reviews and ratings",
      "Admin management system",
      "Responsive modern UI",
    ],
    repo: "https://github.com/sabbirtanvir13/FixItNow.git",
    live: "https://fixitnow-frontend-flax.vercel.app/",
    challenges:
      "Implementing role-based access control across three different user types, integrating SSLCommerz payment gateway securely, managing real-time booking status updates, and building a scalable technician management system.",
    improvements:
      "Add real-time notifications for booking updates, implement AI-powered technician recommendations, add advanced analytics dashboard for admins, and integrate SMS notifications for booking confirmations.",
  },
  {
    id: "ahmed",
    title: "Ahmed Gym & Cafe 29",
    iconName: "FaDumbbell",
    iconColor: "#A259FF",
    category: "frontend",
    featured: false,
    image: ahmed,
    description:
      "A modern, responsive gym and fitness website designed to deliver a premium digital experience, showcasing fitness services, professional trainers, workout schedules, a gallery, and interactive fitness tools.",
    tech: [
      { name: "Next.js", iconName: "SiNextdotjs", color: "#ffffff" },
      { name: "React", iconName: "FaReact", color: "#61DAFB" },
      { name: "TypeScript", iconName: "SiTypescript", color: "#3178C6" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "#38BDF8" },
    ],
    features: [
      "Modern and responsive gym website design",
      "Premium UI with smooth animations and transitions",
      "Trainer profiles and workout schedule sections",
      "Interactive protein calculator for fitness enthusiasts",
      "Attractive gallery showcasing gym facilities",
      "Mobile-first layout for all devices",
      "Smooth navigation and intuitive user interactions",
      "Reusable components and maintainable code structure",
    ],
    repo: "https://github.com/sabbirtanvir13/Ahmed.git",
    live: "https://gym-xi-ecru.vercel.app/",
    challenges:
      "Designing a visually appealing fitness website that maintains a consistent premium look across different screen sizes while balancing visual quality and website performance.",
    improvements:
      "Add online membership registration and subscription plans, integrate backend APIs for dynamic management, implement online booking for personal training sessions, add member authentication and personalized dashboards, integrate analytics, and further improve accessibility, SEO, and loading performance.",
  },
  {
    id: "duke",
    title: "Duke Fitness Club",
    iconName: "FaDumbbell",
    iconColor: "#FF6B35",
    category: "frontend",
    featured: false,
    image: duke,
    description:
      "A premium gym and fitness website designed with a modern black-and-gold luxury aesthetic, showcasing comprehensive fitness and lifestyle experience with gym facilities, swimming pools, restaurant services, pool game zone, professional trainers, membership plans, and workout schedules.",
    tech: [
      { name: "Next.js", iconName: "SiNextdotjs", color: "#ffffff" },
      { name: "React", iconName: "FaReact", color: "#61DAFB" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "#38BDF8" },
    ],
    features: [
      "Premium black-and-gold luxury design",
      "Fully responsive layouts for mobile, tablet, and desktop",
      "Dedicated gym and fitness facility sections",
      "Swimming pool and restaurant showcases",
      "Pool game zone and recreational facilities",
      "Professional trainer profiles and membership plans",
      "Workout schedules and fitness programs",
      "Interactive gallery, blog, and contact sections",
      "Smooth animations and interactive UI elements",
      "WhatsApp and call buttons for easy communication",
      "Theme and language switching functionality",
      "Responsive navigation and optimized visual presentation",
    ],
    repo: "https://github.com/sabbirtanvir13/Duke.git",
    live: "https://duke-gym-sable.vercel.app/",
    challenges:
      "Creating a premium fitness website that combines multiple facilities and services within a consistent luxury design while maintaining visual consistency, implementing smooth animations, ensuring responsive layouts across devices, and preparing for production deployment.",
    improvements:
      "Integrate backend APIs for dynamic content management, implement online membership registration and payment integration, add user authentication and member dashboards, develop online personal training and facility booking, add an admin dashboard for managing memberships and schedules, integrate analytics, and further improve accessibility, SEO, and performance.",
  },
  {
    id: "truf",
    title: "Truf Management System",
    iconName: "FaServer",
    iconColor: "#10B981",
    category: "fullstack",
    featured: true,
    image: truf,
    description:
      "A comprehensive full-stack management system with advanced features including user management, data visualization, real-time updates, and role-based access control.",
    tech: [
      { name: "React", iconName: "FaReact", color: "#61DAFB" },
      { name: "Node.js", iconName: "FaNodeJs", color: "#68A063" },
      { name: "Express", iconName: "SiExpress", color: "#ffffff" },
      { name: "MongoDB", iconName: "SiMongodb", color: "#4DB33D" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "#38BDF8" },
    ],
    features: [
      "Advanced user management system",
      "Role-based access control",
      "Interactive data visualization",
      "Real-time data synchronization",
      "Secure authentication flow",
      "Comprehensive admin panel",
      "Complete CRUD operations",
    ],
    repo: "https://github.com/sabbirtanvir13/Truf.git",
    live: "https://tms-frontend-beta-lime.vercel.app/",
    challenges:
      "Implementing real-time data synchronization, building interactive data visualizations, and creating a comprehensive admin panel with role-based access control.",
    improvements:
      "Add AI-powered insights, implement advanced reporting features, add mobile app integration, and optimize database performance with indexing.",
  },
  {
    id: "testingteam",
    title: "Website Testing Team",
    iconName: "FaServer",
    iconColor: "#3B82F6",
    category: "fullstack",
    featured: true,
    image: "https://placehold.co/800x600/3B82F6/white?text=Testing+Team",
    description:
      "A full-stack application for an independent QA Engineering team, featuring comprehensive bug tracking, test case management, and collaboration tools to streamline the quality assurance process.",
    tech: [
      { name: "React", iconName: "FaReact", color: "#61DAFB" },
      { name: "Node.js", iconName: "FaNodeJs", color: "#68A063" },
      { name: "Express", iconName: "SiExpress", color: "#ffffff" },
      { name: "MongoDB", iconName: "SiMongodb", color: "#4DB33D" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "#38BDF8" },
    ],
    features: [
      "Manual testing workflow management",
      "Bug identification, documentation, and tracking",
      "Bug fix verification before release",
      "Responsive layout testing across browsers and devices",
      "Developer collaboration and communication tools",
      "Test case creation and execution tracking",
      "Quality metrics and reporting dashboard",
      "Role-based access for QA team members",
      "Cross-browser compatibility testing records",
    ],
    repo: "https://github.com/sabbirtanvir13/TestingTeam.git",
    live: "https://testing-team.vercel.app/",
    challenges:
      "Building a comprehensive QA platform that supports manual testing workflows, enables effective bug tracking and verification, facilitates cross-browser and device testing, and improves collaboration between QA engineers and developers.",
    improvements:
      "Add automated testing integration, implement cross-browser testing automation, add performance testing tools, integrate with CI/CD pipelines for continuous testing, and add mobile testing capabilities.",
  },
];

export const filters = [
  { key: "all", label: "All", iconName: "FaServer" },
  { key: "fullstack", label: "Full Stack", iconName: "FaServer" },
  { key: "frontend", label: "Frontend", iconName: "FaLaptopCode" },
  { key: "backend", label: "Backend", iconName: "FaServer" },
];
