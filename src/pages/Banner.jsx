
import React from 'react';
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiDownload } from 'react-icons/hi';
import Sabbir from '../assets/Sabbir.png'
import { scrollToSection } from '../utils/scrollToSection';

const Banner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHireMe = () => {
    if (location.pathname === '/') {
      scrollToSection('contact');
    } else {
      navigate('/#contact');
    }
  };

  const socialLinks = [
    { icon: CiFacebook, href: "https://www.facebook.com/profile.php?id=61576973307516" },
    { icon: FaGithub, href: "https://github.com/sabbirtanvir13" },
    { icon: CiLinkedin, href: "https://www.linkedin.com/in/tanvir-ahmed-sabbir-413a68389/" },
    { icon: FaInstagram, href: "#" },
  ];

  return (
    <section className="mt-24 md:ml-[200px] px-4 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10">

      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight dark:text-white text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Tanvir Ahmed
          </span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold dark:text-gray-300 text-gray-700 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="dark:text-gray-400 text-gray-600 max-w-md mx-auto md:mx-0 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          I build dynamic and responsive web applications using React, Node.js, Express, and MongoDB.
          I love turning ideas into powerful, user-friendly digital experiences with clean design and optimized code.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center md:justify-start gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {socialLinks.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 rounded-full p-2 hover:bg-[var(--accent-color)] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <button
            type="button"
            onClick={handleHireMe}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-color)] hover:opacity-85 hover:scale-105 rounded-full transition-all duration-300 font-medium shadow-lg"
          >
            <HiOutlineMail size={20} />
            Hire Me
          </button>

          <a
            href="/image/image.png"
            download="Tanvir_Ahmed_CV.png"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:scale-105 rounded-full transition-all duration-300 font-medium text-center"
          >
            <HiDownload size={20} />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[var(--accent-color)] blur-3xl opacity-20 animate-pulse" />
          <img
            src={Sabbir}
            alt="Developer"
            className="relative w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 object-cover rounded-full shadow-2xl border-4 border-[var(--accent-color)] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
