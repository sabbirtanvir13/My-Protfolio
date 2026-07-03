// import React from 'react';

// const Footer = () => {
//     return (
//         <div className="p-4 text-center dark:text-gray-300 text-gray-700"> 
//       © 2026 MyPortfolio

//         </div>
//     );
// };

// export default Footer;


import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi2";
import { Link } from "react-router";

const quickLinks = [
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Experience", to: "/#experience" },
  { label: "Contact", to: "/#contact" },
];

const stack = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Postgressql", 'Prisma'];

const socials = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  {
    icon: FaEnvelope,
    href: "mailto:sabbirtanvirahmed18@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0B1120] text-gray-300 overflow-hidden">
      {/* subtle glow, echoes the Banner's animated glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              Tanvir Ahmed
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400 max-w-xs">
              Full Stack Developer crafting clean, responsive web apps with
              React, Node.js, Express &amp; MongoDB.
            </p>

            <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to Work
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-indigo-400 shrink-0" />
                <a
                  href="mailto:sabbirtanvirahmed18@gmail.com"
                  className="hover:text-cyan-400 transition-colors duration-200 break-all"
                >
                  sabbirtanvirahmed18@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-indigo-400 shrink-0" />
                <a
                  href="tel:+8801777829308"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  +880 1777-829308
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-indigo-400 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-gray-700 text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* bottom bar */}
        <div className="flex flex-col-reverse items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {year} Tanvir Ahmed. Built with{" "}
            {stack.map((t, i) => (
              <span key={t}>
                <span className="text-gray-400">{t}</span>
                {i < stack.length - 1 && <span>, </span>}
              </span>
            ))}
            .
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-xs font-medium text-gray-300 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            Back to top
            <HiArrowUp className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;