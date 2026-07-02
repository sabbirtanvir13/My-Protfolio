import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaStar,
  FaTimes,
  FaCheckCircle,
  FaLightbulb,
  FaBookOpen,
  FaPalette,
  FaUtensils,
  FaMobileAlt,
  FaPlane,
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
  FaLaptopCode,
  FaServer,
  FaFilter,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { MdRocketLaunch } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";

const PROJECTS_PER_PAGE = 4;

/* ─── Project Data ─── */
const projects = [
  {
    id: 1,
    title: "ARTIFY",
    icon: <FaPalette />,
    iconColor: "#A259FF",
    category: "fullstack",
    featured: true,
    image: "https://i.ibb.co.com/k2HHCFDP/p1.jpg",
    description:
      "A full-stack MERN application for artists to showcase, explore & manage digital artworks with a beautiful gallery interface.",
    tech: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
      { name: "Express", icon: <SiExpress />, color: "#ffffff" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
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
    caseStudy: {
      overview:
        "ARTIFY is a digital art marketplace that allows artists to showcase their work and art enthusiasts to discover and explore stunning artworks.",
      problem:
        "Artists needed a dedicated platform to showcase their digital artworks in a professional gallery setting, with easy management and audience reach.",
      solution:
        "Built a full-stack MERN application featuring a beautiful gallery interface, user authentication, artwork management, and responsive design for seamless browsing.",
      challenges:
        "Implementing efficient image handling, creating a smooth gallery experience with filtering, and ensuring secure user authentication across the platform.",
      learned:
        "Deepened my understanding of full-stack architecture, image optimization techniques, MongoDB aggregation pipelines, and responsive UI design patterns.",
    },
  },
  {
    id: 2,
    title: "LocalChefBazar",
    icon: <FaUtensils />,
    iconColor: "#FF6B35",
    category: "fullstack",
    featured: true,
    image: "https://i.ibb.co.com/whRycZyY/p2.jpg",
    description:
      "A MERN-based food marketplace enabling local chefs to sell homemade meals with order management and delivery tracking.",
    tech: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
      { name: "Express", icon: <SiExpress />, color: "#ffffff" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFA000" },
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
    caseStudy: {
      overview:
        "LocalChefBazar connects local home chefs with customers looking for authentic homemade meals, creating a community-driven food marketplace.",
      problem:
        "Home chefs lacked an accessible digital platform to reach local customers and manage their meal offerings efficiently.",
      solution:
        "Developed a feature-rich marketplace with chef profiles, menu management, order handling, and Firebase-based authentication for secure user access.",
      challenges:
        "Designing an intuitive ordering flow, implementing real-time updates for order status, and building a scalable database schema for diverse menu items.",
      learned:
        "Gained experience with Firebase authentication, complex state management, building marketplace UX patterns, and optimizing MongoDB queries for search functionality.",
    },
  },
  {
    id: 3,
    title: "Hero.io",
    icon: <FaMobileAlt />,
    iconColor: "#06B6D4",
    category: "frontend",
    featured: false,
    image: "https://i.ibb.co.com/KRKgvyZ/p3.jpg",
    description:
      "A modern app installation platform where users can explore and download apps with a sleek, intuitive interface.",
    tech: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
    ],
    features: [
      "Clean & modern app showcase UI",
      "Category-based app browsing",
      "Responsive grid layout",
      "Smooth animations & transitions",
    ],
    repo: "https://github.com/sabbirtanvir13/Assignment-08.git",
    live: "https://soft-bonbon-e8ce0f.netlify.app/",
    caseStudy: {
      overview:
        "Hero.io is a modern app discovery platform designed to help users find and explore applications with an intuitive, visually appealing interface.",
      problem:
        "Needed a clean, user-friendly platform for app discovery that works smoothly across all devices.",
      solution:
        "Built a responsive React application with Tailwind CSS featuring category filters, smooth animations, and a modern card-based layout.",
      challenges:
        "Creating a responsive grid that looks great on all screen sizes while maintaining smooth performance with multiple app cards and animations.",
      learned:
        "Improved skills in responsive design patterns, CSS Grid/Flexbox layouts, and creating polished UI components with Tailwind CSS utility classes.",
    },
  },
  {
    id: 4,
    title: "TravelGo",
    icon: <FaPlane />,
    iconColor: "#FBBF24",
    category: "frontend",
    featured: false,
    image: "https://i.ibb.co.com/Y4x3spgv/p5.png",
    description:
      "A travel booking platform that helps users discover destinations and plan trips with a beautiful, immersive interface.",
    tech: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
    ],
    features: [
      "Destination discovery with rich visuals",
      "Trip planning & itinerary builder",
      "Mobile-optimized responsive design",
      "Smooth page transitions & animations",
    ],
    repo: "https://github.com/sabbirtanvir13/Travel_Project.git",
    live: "https://travel-project-8h6kytmnt-tanvir-ahmed-sabbirs-projects.vercel.app/",
    caseStudy: {
      overview:
        "TravelGo is an immersive travel booking platform designed to inspire wanderlust and simplify trip planning with stunning visuals and intuitive UX.",
      problem:
        "Travel planning platforms often feel cluttered and overwhelming. Users needed a clean, visually inspiring platform to discover and plan trips.",
      solution:
        "Created a visually stunning React application with immersive destination cards, smooth animations, and a streamlined booking interface.",
      challenges:
        "Optimizing large hero images for performance, creating immersive hover effects, and building a smooth responsive experience across devices.",
      learned:
        "Enhanced skills in performance optimization, image lazy loading, creating immersive UI experiences, and deploying production apps on Vercel.",
    },
  },
];

const filters = [
  { key: "all", label: "All", icon: <FaLayerGroup /> },
  { key: "fullstack", label: "Full Stack", icon: <FaServer /> },
  { key: "frontend", label: "Frontend", icon: <FaLaptopCode /> },
];

/* ─── Case Study Modal ─── */
const CaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;
  const cs = project.caseStudy;

  const sections = [
    { icon: <FaBookOpen />, title: "Overview", content: cs.overview, color: "text-cyan-400" },
    { icon: <FaLightbulb />, title: "The Problem", content: cs.problem, color: "text-red-400" },
    { icon: <FaCheckCircle />, title: "The Solution", content: cs.solution, color: "text-green-400" },
    { icon: <MdRocketLaunch />, title: "Challenges", content: cs.challenges, color: "text-amber-400" },
    { icon: <FaStar />, title: "What I Learned", content: cs.learned, color: "text-[var(--accent-color)]" },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-950 border border-gray-800 rounded-3xl shadow-2xl"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-gray-700 transition-all cursor-pointer"
        >
          <FaTimes className="text-sm" />
        </button>

        {/* Hero Image */}
        <div className="relative h-48 md:h-56 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          <div className="absolute bottom-4 left-6 flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-xl bg-gray-900/80 backdrop-blur-sm flex items-center justify-center text-lg"
              style={{ color: project.iconColor }}
            >
              {project.icon}
            </span>
            <span className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-lg text-xs font-medium text-gray-300"
              >
                <span style={{ color: t.color }} className="text-sm">
                  {t.icon}
                </span>
                {t.name}
              </span>
            ))}
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-3 flex items-center gap-2">
              <FaStar className="text-[10px]" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-gray-300 text-sm"
                >
                  <FaCheckCircle className="text-[var(--accent-color)] mt-0.5 flex-shrink-0 text-[11px]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Study Sections */}
          <div className="space-y-5">
            {sections.map((s, i) => (
              <div key={i}>
                <h4
                  className={`flex items-center gap-2 text-sm font-bold ${s.color} mb-2`}
                >
                  <span className="text-base">{s.icon}</span>
                  {s.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed pl-6">
                  {s.content}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[var(--accent-color)] to-pink-600 text-white text-sm font-semibold rounded-full hover:opacity-90 transition shadow-lg shadow-[var(--accent-color)]/20"
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Demo
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 border border-gray-700 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Pagination Component ─── */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 cursor-pointer ${
          currentPage === 1
            ? "bg-gray-900/40 border-gray-800 text-gray-600 cursor-not-allowed"
            : "bg-gray-900/60 border-gray-700 text-gray-300 hover:border-[var(--accent-color)]/50 hover:text-[var(--accent-color)]"
        }`}
      >
        <FaChevronLeft className="text-xs" />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border ${
            currentPage === page
              ? "bg-gradient-to-r from-[var(--accent-color)] to-pink-600 text-white border-transparent shadow-lg shadow-[var(--accent-color)]/20"
              : "bg-gray-900/60 border-gray-800 text-gray-400 hover:border-gray-600 hover:text-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 cursor-pointer ${
          currentPage === totalPages
            ? "bg-gray-900/40 border-gray-800 text-gray-600 cursor-not-allowed"
            : "bg-gray-900/60 border-gray-700 text-gray-300 hover:border-[var(--accent-color)]/50 hover:text-[var(--accent-color)]"
        }`}
      >
        <FaChevronRight className="text-xs" />
      </button>
    </div>
  );
};

/* ─── Main Component ─── */
export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [caseStudyProject, setCaseStudyProject] = useState(null);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filtered.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const handleFilterChange = (key) => {
    setActiveFilter(key);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 md:px-12 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-color)]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3 flex items-center justify-center gap-3">
          <MdRocketLaunch className="text-yellow-400" />
          <span className="text-yellow-400">Featured Projects</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          A selection of projects that showcase my skills in full-stack
          development, frontend engineering, and problem-solving.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 relative z-10"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span className="flex items-center gap-1.5 text-gray-500 text-xs font-medium mr-2 self-center">
          <FaFilter className="text-[10px]" />
          Filter:
        </span>
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => handleFilterChange(f.key)}
            className={`relative px-4 py-2.5 md:px-5 md:py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer border flex items-center gap-2 ${
              activeFilter === f.key
                ? "bg-gradient-to-r from-[var(--accent-color)] to-pink-600 text-white border-transparent shadow-lg shadow-[var(--accent-color)]/20"
                : "bg-gray-900/60 text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-200"
            }`}
          >
            <span className="text-[11px]">{f.icon}</span>
            {f.label}
            {/* Count badge */}
            <span
              className={`ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                activeFilter === f.key
                  ? "bg-white/20 text-white"
                  : "bg-gray-800 text-gray-500"
              }`}
            >
              {f.key === "all"
                ? projects.length
                : projects.filter((p) => p.category === f.key).length}
            </span>
            {activeFilter === f.key && (
              <motion.div
                layoutId="activeProjectFilter"
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {paginatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-[var(--accent-color)]/40 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--accent-color)]/10"
              >
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* "View Project" button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      onClick={() => setCaseStudyProject(project)}
                      className="px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300 cursor-pointer transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2"
                    >
                      <HiOutlineCode className="text-base" />
                      View Project
                    </button>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/40 text-yellow-400 text-[10px] font-bold">
                        <FaStar className="text-[8px]" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 text-gray-400 text-[10px] font-semibold uppercase tracking-wider">
                      {project.category === "fullstack" ? (
                        <>
                          <FaServer className="text-[8px]" /> Full Stack
                        </>
                      ) : (
                        <>
                          <FaLaptopCode className="text-[8px]" /> Frontend
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 md:p-6">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-base flex-shrink-0"
                      style={{ color: project.iconColor }}
                    >
                      {project.icon}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[var(--accent-color)] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800/80 border border-gray-700/60 rounded-md text-[10px] md:text-[11px] font-medium text-gray-400"
                      >
                        <span style={{ color: t.color }} className="text-xs">
                          {t.icon}
                        </span>
                        {t.name}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[var(--accent-color)] to-pink-600 text-white text-xs font-semibold rounded-full hover:opacity-90 transition shadow-md shadow-[var(--accent-color)]/15"
                    >
                      <FaExternalLinkAlt className="text-[9px]" />
                      Live Demo
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-800 border border-gray-700 text-white text-xs font-semibold rounded-full hover:bg-gray-700 transition"
                    >
                      <FaGithub className="text-sm" />
                      GitHub
                    </a>
                    <button
                      onClick={() => setCaseStudyProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-800/50 border border-gray-700/60 text-gray-400 text-xs font-semibold rounded-full hover:text-yellow-400 hover:border-yellow-500/40 transition cursor-pointer"
                    >
                      <FaBookOpen className="text-[10px]" />
                      Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* Results Info */}
        <div className="text-center mt-4">
          <span className="text-xs text-gray-600">
            Showing {startIndex + 1}–
            {Math.min(startIndex + PROJECTS_PER_PAGE, filtered.length)} of{" "}
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {caseStudyProject && (
          <CaseStudyModal
            project={caseStudyProject}
            onClose={() => setCaseStudyProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
