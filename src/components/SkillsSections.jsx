import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDatabase,
  FaHandshake,
  FaLaptopCode,
  FaCogs,
  FaFlask,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFigma,
  SiVercel,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoIosGitMerge } from "react-icons/io";
import {
  MdBugReport,
  MdDevices,
  MdOutlineAccessTime,
  MdOutlinePsychology,
} from "react-icons/md";
import { BsPeopleFill, BsChatDotsFill, BsLightningChargeFill } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const categories = [
  {
    name: "Frontend Development",
    emoji: "💻",
    icon: <FaLaptopCode />,
    color: "from-cyan-500 to-blue-600",
    glowColor: "cyan",
    items: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "JavaScript (ES6+)", icon: <FaJsSquare />, color: "#F0DB4F" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
      { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
    ],
  },
  {
    name: "Backend Development",
    emoji: "⚙️",
    icon: <FaCogs />,
    color: "from-green-500 to-emerald-600",
    glowColor: "emerald",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
      { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
      { name: "REST API", icon: <FaCogs />, color: "#FF6B6B" },
      { name: "JWT Authentication", icon: <SiJsonwebtokens />, color: "#D63AFF" },
    ],
  },
  {
    name: "Database",
    emoji: "🗄",
    icon: <FaDatabase />,
    color: "from-orange-500 to-amber-500",
    glowColor: "amber",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
      { name: "Prisma ORM", icon: <SiPrisma />, color: "#5A67D8" },
    ],
  },
  {
    name: "Tools & Technologies",
    emoji: "🧰",
    icon: <FaCogs />,
    color: "from-purple-500 to-violet-600",
    glowColor: "purple",
    items: [
      { name: "Git", icon: <IoIosGitMerge />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "VS Code", icon: <VscVscodeInsiders />, color: "#00C8FF" },
      { name: "Figma", icon: <SiFigma />, color: "#A259FF" },
      { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
    ],
  },
  {
    name: "Testing & QA",
    emoji: "🧪",
    icon: <FaFlask />,
    color: "from-rose-500 to-pink-600",
    glowColor: "pink",
    items: [
      { name: "Manual Testing", icon: <FaFlask />, color: "#F472B6" },
      { name: "Bug Reporting", icon: <MdBugReport />, color: "#EF4444" },
      { name: "Cross-Browser Testing", icon: <HiOutlineDesktopComputer />, color: "#8B5CF6" },
      { name: "Responsive Testing", icon: <MdDevices />, color: "#06B6D4" },
    ],
  },
  {
    name: "Soft Skills",
    emoji: "🤝",
    icon: <FaHandshake />,
    color: "from-yellow-500 to-orange-500",
    glowColor: "yellow",
    items: [
      { name: "Team Collaboration", icon: <BsPeopleFill />, color: "#FBBF24" },
      { name: "Problem Solving", icon: <MdOutlinePsychology />, color: "#34D399" },
      { name: "Communication", icon: <BsChatDotsFill />, color: "#60A5FA" },
      { name: "Time Management", icon: <MdOutlineAccessTime />, color: "#F472B6" },
      { name: "Adaptability", icon: <BsLightningChargeFill />, color: "#A78BFA" },
    ],
  },
];

export default function SkillsSections() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-12 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          <span className="text-yellow-400">🛠 Skills</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          A comprehensive toolkit spanning frontend mastery, backend engineering,
          databases, testing, and the soft skills that tie it all together.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Category Tab Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`group relative px-4 py-2.5 md:px-5 md:py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                activeTab === index
                  ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg`
                  : "bg-gray-900/60 text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-200"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-base">{cat.emoji}</span>
                <span className="hidden sm:inline">{cat.name}</span>
              </span>

              {/* Active indicator dot */}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTabDot"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Active Category Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white flex items-center justify-center gap-3">
              <span
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categories[activeTab].color} flex items-center justify-center text-white text-lg shadow-lg`}
              >
                {categories[activeTab].icon}
              </span>
              {categories[activeTab].name}
            </h3>
          </motion.div>
        </AnimatePresence>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5"
          >
            {categories[activeTab].items.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="group relative"
              >
                <div
                  className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center gap-3 
                  hover:border-gray-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden cursor-default"
                >
                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`,
                    }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] transition-all duration-500 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />

                  {/* Icon */}
                  <div
                    className="relative text-3xl md:text-4xl transition-all duration-500 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>

                  {/* Name */}
                  <p className="relative text-xs md:text-sm font-semibold tracking-wide text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </p>

                  {/* Bottom shimmer on hover */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills Count Footer */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-full">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-1.5 text-xs font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === i ? "text-yellow-400 scale-110" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                <span>{cat.emoji}</span>
                <span className="hidden md:inline">{cat.items.length}</span>
              </button>
            ))}
            <div className="h-4 w-[1px] bg-gray-700" />
            <span className="text-xs text-gray-500">
              <span className="text-yellow-400 font-bold">
                {categories.reduce((acc, c) => acc + c.items.length, 0)}
              </span>{" "}
              Total Skills
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
