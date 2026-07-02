import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaLightbulb,
  FaArrowLeft,
  FaBookOpen,
  FaStar,
} from "react-icons/fa";
import { projects } from "../data/projects";
import { iconMap } from "../data/iconMap";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="py-24 px-4 md:px-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">Project Not Found</h2>
          <Link
            to="/project"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent-color)] text-white rounded-full hover:opacity-90 transition"
          >
            <FaArrowLeft className="text-sm" />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const ProjectIcon = iconMap[project.iconName];

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-color)]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Back Button */}
        <Link
          to="/project"
          className="inline-flex items-center gap-2 mb-8 text-sm dark:text-gray-400 text-gray-600 hover:text-[var(--accent-color)] transition"
        >
          <FaArrowLeft className="text-xs" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="mb-10">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t dark:from-gray-950 from-white/80 via-black/30 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl dark:bg-gray-800 bg-gray-100 flex items-center justify-center text-xl"
                style={{ color: project.iconColor }}
              >
                {ProjectIcon && <ProjectIcon />}
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-gray-900">
                  {project.title}
                </h1>
                <p className="text-sm dark:text-gray-400 text-gray-600 capitalize">
                  {project.category} Project
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 dark:bg-gray-800 bg-gray-100 dark:border-gray-700 border-gray-300 border dark:text-white text-gray-800 text-sm font-semibold rounded-full hover:opacity-90 transition"
              >
                <FaGithub className="text-sm" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-10">
          <h2 className="text-xl font-bold dark:text-white text-gray-900 mb-4 flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            Main Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, i) => {
              const TechIcon = iconMap[t.iconName];
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 dark:bg-gray-900 bg-gray-100 dark:border-gray-800 border-gray-300 border rounded-xl text-sm font-medium dark:text-gray-300 text-gray-700"
                >
                  <span style={{ color: t.color }} className="text-base">
                    {TechIcon && <TechIcon />}
                  </span>
                  {t.name}
                </span>
              );
            })}
          </div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-xl font-bold dark:text-white text-gray-900 mb-4 flex items-center gap-2">
            <FaBookOpen className="text-cyan-400" />
            About the Project
          </h2>
          <p className="dark:text-gray-400 text-gray-600 leading-relaxed text-base">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-10">
          <h2 className="text-xl font-bold dark:text-white text-gray-900 mb-4 flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            Key Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-3 dark:text-gray-300 text-gray-700 text-base"
              >
                <FaCheckCircle className="text-[var(--accent-color)] mt-1 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="mb-10">
          <h2 className="text-xl font-bold dark:text-white text-gray-900 mb-4 flex items-center gap-2">
            <FaLightbulb className="text-amber-400" />
            Challenges Faced
          </h2>
          <p className="dark:text-gray-400 text-gray-600 leading-relaxed text-base">
            {project.challenges}
          </p>
        </div>

        {/* Improvements */}
        <div>
          <h2 className="text-xl font-bold dark:text-white text-gray-900 mb-4 flex items-center gap-2">
            <FaStar className="text-pink-400" />
            Future Improvements
          </h2>
          <p className="dark:text-gray-400 text-gray-600 leading-relaxed text-base">
            {project.improvements}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectDetail;
