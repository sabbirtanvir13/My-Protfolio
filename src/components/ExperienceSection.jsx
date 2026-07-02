import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Diligent Soft IT",
    duration: "3 Months",
    type: "Internship",
    icon: <FaBriefcase className="text-lg" />,
    accent: "from-purple-600 to-purple-400",
    responsibilities: [
      "Developed responsive user interfaces using React/Next.js",
      "Converted Figma designs into pixel-perfect web pages",
      "Integrated REST APIs",
      "Fixed UI bugs and improved performance",
      "Collaborated with designers and backend developers using Git",
    ],
    tags: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
  },
  {
    id: 2,
    role: "Website Testing Team",
    company: "Independent Team",
    duration: "Current",
    type: "Quality Assurance",
    isCurrent: true,
    icon: <FaClipboardCheck className="text-lg" />,
    accent: "from-yellow-500 to-amber-400",
    responsibilities: [
      "Performed manual testing of web applications",
      "Identified, documented, and tracked bugs",
      "Verified bug fixes before release",
      "Tested responsive layouts across browsers and devices",
      "Worked closely with developers to improve product quality",
    ],
    tags: [
      "Manual Testing",
      "Bug Reporting",
      "Cross-browser Testing",
      "Regression Testing",
      "Quality Assurance",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 px-4 md:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[var(--accent-color)]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <motion.div
        className="text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-yellow-400">Experience</span>
        </h2>
        <p className="dark:text-gray-400 text-gray-600 mt-2 text-sm max-w-xl mx-auto">
          My professional journey — from building interfaces to ensuring quality
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-color)] via-yellow-400 to-[var(--accent-color)] hidden sm:block" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-0 sm:pl-16"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              {/* Timeline dot */}
              <div
                className={`hidden sm:flex absolute left-3.5 md:left-4 top-6 w-3.5 h-3.5 rounded-full border-[3px] dark:border-gray-950 border-white bg-gradient-to-br ${exp.accent} shadow-md shadow-[var(--accent-color)]/30 z-10`}
              />

              {/* Card */}
              <div className="group dark:bg-gray-900/80 bg-white/80 backdrop-blur-sm dark:border-gray-800 border-gray-200 hover:border-[var(--accent-color)]/50 rounded-2xl p-4 md:p-5 shadow-lg hover:shadow-[var(--accent-color)]/20 transition-all duration-300 hover:-translate-y-0.5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${exp.accent} flex items-center justify-center text-white shadow-md`}
                    >
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold dark:text-white text-gray-900 group-hover:text-[var(--accent-color)] transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-[var(--accent-color)] text-sm font-medium mt-0.5">
                        {exp.company}
                      </p>
                      <span className="inline-block mt-1.5 text-[10px] font-semibold uppercase tracking-wider dark:text-gray-500 text-gray-600 dark:bg-gray-800 bg-gray-100 px-2 py-0.5 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        exp.isCurrent
                          ? "bg-green-500/20 text-green-400 border border-green-500/40"
                          : "bg-[var(--accent-color)]/20 text-[var(--accent-color)] border border-[var(--accent-color)]/40"
                      }`}
                    >
                      {exp.isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      )}
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-2">
                    Responsibilities
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 dark:text-gray-300 text-gray-700 text-xs md:text-sm leading-relaxed"
                      >
                        <FaCheckCircle className="text-[var(--accent-color)] mt-0.5 flex-shrink-0 text-[10px]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-2">
                    {exp.id === 1 ? "Technologies" : "Skills Gained"}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, i) =>
                      typeof tag === "string" ? (
                        <span
                          key={i}
                          className="px-2 py-1 dark:bg-gray-800/80 bg-gray-100/80 dark:border-gray-700 border-gray-300 rounded-md text-[11px] dark:text-gray-300 text-gray-700 hover:border-yellow-400/50 hover:text-yellow-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ) : (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-2 py-1 dark:bg-gray-800/80 bg-gray-100/80 dark:border-gray-700 border-gray-300 rounded-md text-[11px] dark:text-gray-300 text-gray-700 hover:border-[var(--accent-color)]/50 hover:text-[var(--accent-color)] transition-colors"
                        >
                          <span className="text-sm">{tag.icon}</span>
                          {tag.name}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
