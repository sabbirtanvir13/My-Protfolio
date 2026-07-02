

import React from 'react';
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaGithub, FaInstagram } from 'react-icons/fa';
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

  return (
    <section className="mt-24 md:ml-[200px] px-4 md:px-20 flex flex-col md:flex-row items-center justify-center">
      
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, Im <span className="font-bold text-yellow-400">Tanvir Ahmed</span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-md mx-auto md:mx-0 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I build dynamic and responsive web applications using React, Node.js, Express, and MongoDB.
          I love turning ideas into powerful, user-friendly digital experiences with clean design and optimized code. 
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center md:justify-start gap-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a   href="https://www.facebook.com/profile.php?id=61576973307516" className="border-2 rounded-full p-2 hover:bg-[var(--accent-color)] transition"><CiFacebook size={24} /></a>

          <a href="https://github.com/sabbirtanvir13" className="border-2 rounded-full p-2 hover:bg-[var(--accent-color)] transition"><FaGithub size={24} /></a>

          <a href="https://www.linkedin.com/in/tanvir-ahmed-sabbir-413a68389/" className="border-2 rounded-full p-2 hover:bg-[var(--accent-color)] transition"><CiLinkedin size={24} /></a>

          <a href="#" className="border-2 rounded-full p-2 hover:bg-[var(--accent-color)] transition"><FaInstagram size={24} /></a>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
          <button
            type="button"
            onClick={handleHireMe}
            className="px-6 py-3 bg-[var(--accent-color)] hover:opacity-80 rounded-full transition"
          >
            Hire Me
          </button>

          <a
            href="/image/image.png"
            download="Tanvir_Ahmed_CV.png"
            className="px-6 py-3 border border-[var(--accent-color)] hover:bg-[var(--accent-color)] rounded-full transition text-center"
          >
            Download CV
          </a>
        </div>
      </div>

      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <img
          src={Sabbir}
          alt="Developer"
          className="w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 object-cover rounded-full shadow-2xl border-4 border-[var(--accent-color)]"
        />
      </motion.div>
    </section>
  );
};

export default Banner;
