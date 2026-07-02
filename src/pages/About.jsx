import React from "react";
import { motion } from "framer-motion";
import Sabbir from "../assets/Sabbir.png";
import {
  FaReact,
  FaNodeJs,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
  { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
];


const openTo = [
  "Frontend Developer",
  "Full Stack Developer",
  "Software QA",
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-12 relative overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 -left-32 w-[420px] h-[420px] bg-[var(--accent-color)]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] bg-yellow-500/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Title */}
      <motion.div
        className="text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="text-yellow-400">👋 About Me</span>
        </h2>
      </motion.div>

      {/* Main Content — Photo Left | Info Right */}
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        {/* ── LEFT: Profile Photo ── */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="relative group">
            {/* Outer animated ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[var(--accent-color)] via-yellow-400 to-[var(--accent-color)] opacity-60 blur-md group-hover:opacity-80 transition-opacity duration-700 animate-spin-slow" />

            {/* Photo container */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
              <img
                src={Sabbir}
                alt="Tanvir Ahmed – Full Stack Developer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* "Open to Work" floating badge */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/40 text-green-400 text-xs font-bold shadow-lg shadow-green-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                Open to Work
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── RIGHT: About Content ── */}
        <motion.div
          className="flex-1 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Description */}
          <div className="space-y-3">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              I'm a passionate{" "}
              <span className="text-white font-semibold">
                Full Stack Developer
              </span>{" "}
              with a strong interest in building modern, scalable, and
              user-friendly web applications. I successfully completed a{" "}
              <span className="text-[var(--accent-color)] font-semibold">
                3-month Frontend Developer Internship
              </span>
              , where I developed responsive interfaces, integrated APIs, and
              collaborated with development teams to deliver high-quality
              products.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Currently, I contribute to a{" "}
              <span className="text-yellow-400 font-semibold">
                Website Testing Team
              </span>
              , performing manual testing, identifying and reporting bugs, and
              ensuring applications work smoothly across different browsers and
              devices.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              My goal is to continuously improve my skills, solve real-world
              problems, and create software that provides an excellent user
              experience.
            </p>
          </div>



          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-3 flex items-center gap-2 justify-center lg:justify-start">
              🚀 Core Tech Stack
            </h4>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900/80 border border-gray-800 rounded-lg text-xs font-medium text-gray-300 hover:border-gray-600 hover:text-white transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  <span style={{ color: tech.color }} className="text-sm transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </span>
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Location + Open To */}
          <motion.div
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {/* Location */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/60 border border-gray-800 rounded-full text-sm text-gray-300">
              <FaMapMarkerAlt className="text-red-400 text-xs" />
              <span>Dhaka, Bangladesh</span>
            </div>

            {/* Open To Roles */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {openTo.map((role, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30 rounded-full text-[11px] md:text-xs font-semibold text-[var(--accent-color)] hover:bg-[var(--accent-color)]/20 hover:border-[var(--accent-color)]/50 transition-all duration-300 cursor-default"
                >
                  <FaBriefcase className="text-[10px] text-[var(--accent-color)]" />
                  {role}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
