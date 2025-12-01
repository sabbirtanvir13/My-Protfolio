

import React from 'react';
import { motion } from "framer-motion";
import Sabbir from '../assets/Sabbir.png'
const About = () => {
  return (
    <div className='about mt-24 px-4 md:px-20 py-12  '>
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span className='text-blue-500'> Me </span>
      </motion.h1>

      {/* Content */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20'>
        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <img
            src={Sabbir}
            alt="Developer"
            className="w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 object-cover rounded-full shadow-2xl border-4 border-purple-600"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="text-white space-y-4 max-w-md sm:max-w-lg md:max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p>
            I build modern and responsive web applications using <strong>React, Node.js, Express, MongoDB, and Tailwind CSS</strong>.
          </p>
          <p>
            I enjoy creating <strong>user-friendly interfaces</strong> and writing <strong>clean, efficient code</strong>.
          </p>
          <p>
            My goal is to turn ideas into <strong>interactive digital experiences</strong>.
          </p>
          <p>
            I am continuously learning and improving my skills to deliver the best solutions. 
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
