import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaMapMarkerAlt,
  FaBook,
  FaCalendarAlt,
  FaCheckCircle,
  FaUserGraduate,
} from "react-icons/fa";

const education = [
  {
    id: 1,
    degree: "Higher Secondary Certificate (HSC)",
    shortDegree: "HSC",
    institution: "Government Shaheed Suhrawardy College, Dhaka",
    location: "Dhaka, Bangladesh",
    group: "Business Studies",
    duration: "2025 – Present",
    status: "Currently Studying",
    isCurrent: true,
    icon: <FaGraduationCap className="text-lg" />,
    accent: "from-yellow-500 to-amber-400",
  },
  {
    id: 2,
    degree: "Secondary School Certificate (SSC)",
    shortDegree: "SSC",
    institution: "Shantibagh High School",
    location: "Dhaka, Bangladesh",
    duration: "2025",
    status: "Completed",
    icon: <FaSchool className="text-lg" />,
    accent: "from-purple-600 to-purple-400",
  },
];

const detailIcons = {
  location: <FaMapMarkerAlt className="text-[var(--accent-color)] text-xs" />,
  group: <FaBook className="text-[var(--accent-color)] text-xs" />,
  duration: <FaCalendarAlt className="text-[var(--accent-color)] text-xs" />,
  statusCurrent: <FaUserGraduate className="text-green-400 text-xs" />,
  statusCompleted: <FaCheckCircle className="text-[var(--accent-color)] text-xs" />,
};

const EducationSection = () => {
  return (
    <section id="education" className="py-12 px-4 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[320px] h-[320px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-yellow-400">Education</span>
        </h2>
        <p className="dark:text-gray-400 text-gray-600 mt-2 text-sm max-w-xl mx-auto">
          My academic background and learning journey
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-[var(--accent-color)] to-[var(--accent-color)] hidden sm:block" />

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative pl-0 sm:pl-16"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <div
                className={`hidden sm:flex absolute left-3.5 md:left-4 top-6 w-3.5 h-3.5 rounded-full border-[3px] dark:border-gray-950 border-white bg-gradient-to-br ${item.accent} shadow-md shadow-purple-500/30 z-10`}
              />

              <div className="group dark:bg-gray-900/80 bg-white/80 backdrop-blur-sm dark:border-gray-800 border-gray-200 hover:border-[var(--accent-color)]/50 rounded-2xl p-4 md:p-5 shadow-lg hover:shadow-[var(--accent-color)]/20 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-md`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold dark:text-white text-gray-900 group-hover:text-[var(--accent-color)] transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-[var(--accent-color)] text-sm font-medium mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {item.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/40 self-start">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                <ul className="space-y-2 pl-1">
                  <li className="flex items-center gap-2.5 text-xs md:text-sm dark:text-gray-300 text-gray-700">
                    {detailIcons.location}
                    <span className="dark:text-gray-500 text-gray-500 min-w-[72px]">Location:</span>
                    <span>{item.location}</span>
                  </li>

                  {item.group && (
                    <li className="flex items-center gap-2.5 text-xs md:text-sm dark:text-gray-300 text-gray-700">
                      {detailIcons.group}
                      <span className="dark:text-gray-500 text-gray-500 min-w-[72px]">Group:</span>
                      <span className="text-yellow-400">{item.group}</span>
                    </li>
                  )}

                  <li className="flex items-center gap-2.5 text-xs md:text-sm dark:text-gray-300 text-gray-700">
                    {detailIcons.duration}
                    <span className="dark:text-gray-500 text-gray-500 min-w-[72px]">
                      {item.isCurrent ? "Duration:" : "Completion:"}
                    </span>
                    <span>{item.duration}</span>
                  </li>

                  <li className="flex items-center gap-2.5 text-xs md:text-sm dark:text-gray-300 text-gray-700">
                    {item.isCurrent
                      ? detailIcons.statusCurrent
                      : detailIcons.statusCompleted}
                    <span className="dark:text-gray-500 text-gray-500 min-w-[72px]">Status:</span>
                    <span
                      className={
                        item.isCurrent ? "text-green-400" : "text-[var(--accent-color)]"
                      }
                    >
                      {item.status}
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
