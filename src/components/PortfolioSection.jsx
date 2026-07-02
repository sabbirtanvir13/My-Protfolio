import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaServer,
  FaLaptopCode,
  FaFilter,
  FaBookOpen,
} from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";
import { projects, filters } from "../data/projects";
import { iconMap } from "../data/iconMap";

const PROJECTS_PER_PAGE = 4;

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
            ? "dark:bg-gray-900/40 bg-gray-100/40 dark:border-gray-800 border-gray-300 dark:text-gray-600 text-gray-400 cursor-not-allowed"
            : "dark:bg-gray-900/60 bg-gray-100 dark:border-gray-700 border-gray-400 dark:text-gray-300 text-gray-700 hover:border-[var(--accent-color)]/50 hover:text-[var(--accent-color)]"
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
              : "dark:bg-gray-900/60 bg-gray-100 dark:border-gray-800 border-gray-400 dark:text-gray-400 text-gray-600 hover:border-gray-600 hover:text-gray-200 dark:hover:text-gray-200"
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
            ? "dark:bg-gray-900/40 bg-gray-100/40 dark:border-gray-800 border-gray-300 dark:text-gray-600 text-gray-400 cursor-not-allowed"
            : "dark:bg-gray-900/60 bg-gray-100 dark:border-gray-700 border-gray-400 dark:text-gray-300 text-gray-700 hover:border-[var(--accent-color)]/50 hover:text-[var(--accent-color)]"
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
        <p className="dark:text-gray-400 text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
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
        <span className="flex items-center gap-1.5 dark:text-gray-500 text-gray-400 text-xs font-medium mr-2 self-center">
          <FaFilter className="text-[10px]" />
          Filter:
        </span>
        {filters.map((f) => {
          const FilterIcon = iconMap[f.iconName];
          return (
            <button
              key={f.key}
              onClick={() => handleFilterChange(f.key)}
              className={`relative px-4 py-2.5 md:px-5 md:py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer border flex items-center gap-2 ${
                activeFilter === f.key
                  ? "bg-gradient-to-r from-[var(--accent-color)] to-pink-600 text-white border-transparent shadow-lg shadow-[var(--accent-color)]/20"
                  : "dark:bg-gray-900/60 bg-gray-100 dark:text-gray-400 text-gray-600 dark:border-gray-800 border-gray-400 hover:border-gray-600 hover:text-gray-200 dark:hover:text-gray-200"
              }`}
            >
              <span className="text-[11px]">{FilterIcon && <FilterIcon />}</span>
              {f.label}
              {/* Count badge */}
              <span
                className={`ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  activeFilter === f.key
                    ? "bg-white/20 text-white"
                    : "dark:bg-gray-800 bg-gray-200 dark:text-gray-500 text-gray-600"
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
          );
        })}
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
            {paginatedProjects.map((project, index) => {
              const ProjectIcon = iconMap[project.iconName];
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative dark:bg-gray-900/70 bg-white/70 backdrop-blur-sm dark:border-gray-800 border-gray-200 hover:border-[var(--accent-color)]/40 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--accent-color)]/10"
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
                    <div className="absolute inset-0 bg-gradient-to-t dark:from-gray-950 from-white/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* "View Project" button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Link
                        to={`/project/${project.id}`}
                        className="px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full dark:text-white text-gray-900 text-sm font-semibold hover:bg-white/20 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2"
                      >
                        <HiOutlineCode className="text-base" />
                        View Details
                      </Link>
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
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full dark:bg-gray-900/70 bg-white/70 backdrop-blur-sm dark:border-gray-700/60 border-gray-300/60 dark:text-gray-400 text-gray-600 text-[10px] font-semibold uppercase tracking-wider">
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
                        className="w-9 h-9 rounded-lg dark:bg-gray-800 bg-gray-100 flex items-center justify-center text-base flex-shrink-0"
                        style={{ color: project.iconColor }}
                      >
                        {ProjectIcon && <ProjectIcon />}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold dark:text-white text-gray-900 group-hover:text-[var(--accent-color)] transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="dark:text-gray-400 text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t, i) => {
                        const TechIcon = iconMap[t.iconName];
                        return (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2 py-1 dark:bg-gray-800/80 bg-gray-100 dark:border-gray-700/60 border-gray-300/60 rounded-md text-[10px] md:text-[11px] font-medium dark:text-gray-400 text-gray-600"
                          >
                            <span style={{ color: t.color }} className="text-xs">
                              {TechIcon && <TechIcon />}
                            </span>
                            {t.name}
                          </span>
                        );
                      })}
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
                        className="inline-flex items-center gap-1.5 px-4 py-2 dark:bg-gray-800 bg-gray-100 dark:border-gray-700 border-gray-300 dark:text-white text-gray-800 text-xs font-semibold rounded-full hover:opacity-90 transition"
                      >
                        <FaGithub className="text-sm" />
                        GitHub
                      </a>
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 dark:bg-gray-800/50 bg-gray-100/50 dark:border-gray-700/60 border-gray-300/60 dark:text-gray-400 text-gray-600 text-xs font-semibold rounded-full hover:text-yellow-400 hover:border-yellow-500/40 transition cursor-pointer"
                      >
                        <FaBookOpen className="text-[10px]" />
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
          <span className="text-xs dark:text-gray-600 text-gray-500">
            Showing {startIndex + 1}–
            {Math.min(startIndex + PROJECTS_PER_PAGE, filtered.length)} of{" "}
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </section>
  );
}
