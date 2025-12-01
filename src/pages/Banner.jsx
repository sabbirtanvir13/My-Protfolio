

import React from 'react';
import { motion } from "framer-motion";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import Sabbir from '../assets/Sabbir.png'
const Banner = () => {
  return (
    <section className="mt-24 md:ml-[200px] px-4 md:px-20 flex flex-col md:flex-row items-center justify-center text-white">
      
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="text-purple-400">Tanvir Ahmed</span>
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
          <a   href="https://www.facebook.com/profile.php?id=61576973307516" className="border-2 rounded-full p-2 hover:bg-purple-600 transition"><CiFacebook size={24} /></a>

          <a href="https://github.com/sabbirtanvir13" className="border-2 rounded-full p-2 hover:bg-purple-600 transition"><FaGithub size={24} /></a>

          <a href="https://www.linkedin.com/in/tanvir-ahmed-sabbir-413a68389/" className="border-2 rounded-full p-2 hover:bg-purple-600 transition"><CiLinkedin size={24} /></a>

          <a href="#" className="border-2 rounded-full p-2 hover:bg-purple-600 transition"><FaInstagram size={24} /></a>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition">Hire Me</button>
        
    
    <a
  href="/public/image/image.png"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border border-purple-500 hover:bg-purple-600 rounded-full transition"
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
          className="w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 object-cover rounded-full shadow-2xl border-4 border-purple-600"
        />
      </motion.div>
    </section>
  );
};

export default Banner;
