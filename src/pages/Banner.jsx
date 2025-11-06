import React from 'react';
import { motion } from "framer-motion";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaGithub, FaInstagram } from 'react-icons/fa';
const Banner = () => {
    return (
         <section className="mt-[200px] flex ml-[165PX] flex-col md:flex-row items-center justify-center px-10  text-white">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="text-purple-400">Tanvir Ahmed</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4"
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
        I love turning ideas into powerful, user-friendly digital experiences with clean design and optimized code. 🚀
        </motion.p>

        <motion.div>
            <div className='  icon flex gap-4 w-60  '>
                <p className='border-2 rounded-2xl'><CiFacebook /></p>
                <p className='border-2   rounded-2xl'><FaGithub /></p>
                <p className='border-2   rounded-2xl'><CiLinkedin /></p>
                <p className='border-2   rounded-2xl'><FaInstagram /></p>
            </div>
        </motion.div>

        <div className="flex gap-4 justify-center md:justify-start mt-4">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition">
            Hire Me
          </button>
          <button className="px-6 py-3 border border-purple-500 hover:bg-purple-600 rounded-full transition">
            Download CV
          </button>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQENoYOGnVc9mQ/profile-displayphoto-crop_800_800/B4EZo_Av6rJgAI-/0/1761993753227?e=1764201600&v=beta&t=heBizilWHaEQWNf05xW1w3m9TJV3d4xi6qQxVWA1V0A"
          alt="Developer"
          style={{ borderColor: "#9D00FF" }}
          className="w-72 h-72 object-cover rounded-full shadow-2xl border-4 "
        />
      </motion.div>
    </section>
    );
};

export default Banner;