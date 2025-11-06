

import React from 'react';
import { motion } from "framer-motion";
const About = () => {
    return (
      <div className='about mt-[102px] '>
         
       <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
               <h1 className='text-white text-5xl flex justify-center items-center'>About Me</h1>
              </motion.h1>
          

           <div className='flex justify-center items-center gap-9'>

           
        <div>
             <motion.div
        className=" mt-10 md:mt-0 "
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
        </div>
        <div>
           <div className="text-white space-y-4">
  <p>I build modern and responsive web applications using <strong>React, Node.js, Express, MongoDB, and Tailwind CSS</strong>.</p>
  <p>I enjoy creating <strong>user-friendly interfaces</strong> and writing <strong>clean, efficient code</strong>.</p>
  <p>My goal is to turn ideas into <strong>interactive digital experiences</strong>.</p>
  <p>I am continuously learning and improving my skills to deliver the best solutions. 🚀</p>
</div>
</div>

        </div>
      </div>
    );
};

export default About;