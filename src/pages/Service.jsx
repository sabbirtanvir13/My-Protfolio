import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaMobileAlt,
  FaRocket,
  FaPaintBrush,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiJsonwebtokens,
} from "react-icons/si";
import { MdApi, MdBugReport, MdDevices, MdSpeed } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";

const services = [
  {
    title: "Frontend Development",
    emoji: "🌐",
    icon: <HiOutlineCode />,
    color: "from-cyan-500 to-blue-600",
    shadowColor: "shadow-cyan-500/20",
    borderHover: "hover:border-cyan-500/50",
    description:
      "Building fast, responsive, and modern user interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
    tags: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#fff" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
    ],
  },
  {
    title: "Full Stack Web Development",
    emoji: "⚙️",
    icon: <FaServer />,
    color: "from-purple-500 to-violet-600",
    shadowColor: "shadow-purple-500/20",
    borderHover: "hover:border-purple-500/50",
    description:
      "Developing complete web applications with secure REST APIs, authentication, databases, and scalable backend architecture.",
    tags: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
      { name: "Express", icon: <SiExpress />, color: "#fff" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
    ],
  },
  {
    title: "Responsive UI Development",
    emoji: "🎨",
    icon: <FaPaintBrush />,
    color: "from-pink-500 to-rose-600",
    shadowColor: "shadow-pink-500/20",
    borderHover: "hover:border-pink-500/50",
    description:
      "Transforming Figma or design mockups into pixel-perfect, mobile-friendly, and accessible websites.",
    tags: [
      { name: "Figma", icon: <SiFigma />, color: "#A259FF" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "Responsive", icon: <FaMobileAlt />, color: "#F472B6" },
    ],
  },
  {
    title: "API Integration",
    emoji: "🔗",
    icon: <MdApi />,
    color: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/20",
    borderHover: "hover:border-amber-500/50",
    description:
      "Integrating REST APIs, authentication systems, payment gateways, and third-party services into web applications.",
    tags: [
      { name: "REST API", icon: <MdApi />, color: "#FF6B6B" },
      { name: "JWT", icon: <SiJsonwebtokens />, color: "#D63AFF" },
      { name: "Express", icon: <SiExpress />, color: "#fff" },
    ],
  },
  {
    title: "Testing & Quality Assurance",
    emoji: "🧪",
    icon: <MdBugReport />,
    color: "from-green-500 to-emerald-600",
    shadowColor: "shadow-green-500/20",
    borderHover: "hover:border-green-500/50",
    description:
      "Performing manual testing, bug reporting, responsive testing, and cross-browser compatibility testing to ensure high-quality software.",
    tags: [
      { name: "Manual Testing", color: "#34D399" },
      { name: "Bug Reporting", icon: <MdBugReport />, color: "#EF4444" },
      { name: "Cross-Browser", icon: <MdDevices />, color: "#8B5CF6" },
    ],
  },
  {
    title: "Performance Optimization",
    emoji: "🚀",
    icon: <FaRocket />,
    color: "from-indigo-500 to-blue-700",
    shadowColor: "shadow-indigo-500/20",
    borderHover: "hover:border-indigo-500/50",
    description:
      "Improving website speed, SEO, responsiveness, and overall user experience for better performance.",
    tags: [
      { name: "Speed", icon: <MdSpeed />, color: "#FBBF24" },
      { name: "SEO", icon: <FaRocket />, color: "#60A5FA" },
      { name: "UX", icon: <FaPaintBrush />, color: "#F472B6" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Service = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 px-4 md:px-12 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[var(--accent-color)]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        className="text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          <span className="text-yellow-400">💼 My Services</span>
        </h2>
        <p className="dark:text-gray-400 text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          From crafting beautiful UIs to building robust backend systems — here's
          what I can do for you.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`group relative dark:bg-gray-900/70 bg-white/80 backdrop-blur-sm dark:border-gray-800 border-gray-200 ${service.borderHover} rounded-2xl p-6 md:p-7 flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:${service.shadowColor} hover:shadow-xl cursor-default overflow-hidden`}
          >
            {/* Top gradient accent line */}
            <div
              className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Corner glow on hover */}
            <div
              className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.06] rounded-full blur-2xl transition-opacity duration-700`}
            />

            {/* Icon + Emoji */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
              >
                {service.icon}
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold dark:text-white text-gray-900 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="dark:text-gray-400 text-gray-700 text-xs md:text-sm leading-relaxed mb-5 flex-1">
              {service.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-1 dark:bg-gray-800/80 bg-gray-100 dark:border-gray-700/60 border-gray-300 rounded-md text-[10px] md:text-[11px] font-medium dark:text-gray-400 text-gray-700 group-hover:border-gray-400 transition-all duration-300"
                >
                  {tag.icon && (
                    <span style={{ color: tag.color }} className="text-xs">
                      {tag.icon}
                    </span>
                  )}
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Learn More link */}
            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 text-xs font-semibold dark:text-gray-500 text-gray-600 group-hover:text-yellow-400 transition-all duration-300 cursor-pointer">
                Learn More
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Service;
