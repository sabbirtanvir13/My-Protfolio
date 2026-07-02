import React from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaCheckCircle,
  FaBullseye,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certifications = [
  {
    id: 1,
    title: "Complete Web Development Course (Batch 12)",
    provider: "Programming Hero",
    status: "Successfully Completed",
    credentialUrl: "https://drive.google.com/file/d/1vP7e8SSSWAYRmg7O8EAvYPx0yz1rUJnU/view?usp=drive_link",
    accent: "from-purple-600 to-indigo-500",
    skills: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",

      "REST API Development",
      "JWT Authentication",
      "Git & GitHub",
      "Responsive Web Design",
      "Full Stack Project Development",
    ],
  },
];

const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="py-12 px-4 md:px-12 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[var(--accent-color)]/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-yellow-400">Certifications & Training</span>
        </h2>
        <p className="dark:text-gray-400 text-gray-600 mt-2 text-sm max-w-xl mx-auto">
          Professional courses and hands-on training I have completed
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            className="group dark:bg-gray-900/80 bg-white/80 backdrop-blur-sm dark:border-gray-800 border-gray-200 hover:border-[var(--accent-color)]/50 rounded-2xl p-4 md:p-5 shadow-lg hover:shadow-[var(--accent-color)]/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="flex items-start gap-3">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${cert.accent} flex items-center justify-center text-white shadow-md`}
                >
                  <FaCertificate className="text-lg" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold dark:text-white text-gray-900 group-hover:text-[var(--accent-color)] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-[var(--accent-color)] text-sm font-medium mt-0.5">
                    {cert.provider}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/40 self-start">
                <FaCheckCircle className="text-[10px]" />
                {cert.status}
              </span>
            </div>

            {/* Skills Covered */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <FaBullseye className="text-yellow-400 text-xs" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-yellow-400">
                  Skills Covered
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 dark:bg-gray-800/80 bg-gray-100 dark:border-gray-700 border-gray-300 rounded-md text-[11px] dark:text-gray-300 text-gray-700 hover:border-[var(--accent-color)]/50 hover:text-[var(--accent-color)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Credential Link */}
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-color)]/20 hover:bg-[var(--accent-color)] border border-[var(--accent-color)]/40 hover:border-[var(--accent-color)] rounded-full text-xs md:text-sm font-medium text-[var(--accent-color)] hover:text-white transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-xs" />
              View Credential
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
