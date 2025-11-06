// import React from 'react';
// import { IoCodeSharp } from 'react-icons/io5';

// const Service = () => {
//     return (
//         <div>
//           <div className="service">
//             <div className="container ml-[200px]">
//                <hi className="sub-title flex justify-center items-center ">My   <span>  Services</span></hi>
//                 <div className="service-list ">
//                    <div>
//                   <i className='text-white'><IoCodeSharp /></i>

//                      <h2 className='text-white'>UI/UX Design </h2>
                 
//                     <p className='text-white space-y-4'>I specialize in <strong>UI/UX design</strong> to create visually appealing and user-friendly interfaces. <br />           My focus is on designing <strong>intuitive layouts, smooth navigation</strong>, and engaging experiences that keep users satisfied. <br /> I combine creativity with functionality to deliver <strong>modern and responsive designs</strong> that enhance the overall usability of web applications. <br /> Every design I create is carefully crafted to ensure <strong>clarity, accessibility, and aesthetic appeal</strong>. </p> 
                 
//                       <a href="" className='btn text-white bg-purple-500 hover:bg-purple-800 rounded-2xl mt-3'>Read More</a>
           
           

//                     </div> 
//                     {/* 2 */}
//                       <div>
//                      <i className='text-white'><IoCodeSharp /></i>
//                      <h2 className='text-white'>UI/UX Design </h2>
//                     <p className='text-white space-y-4'>I specialize in <strong>UI/UX design</strong> to create visually appealing and user-friendly interfaces. <br />           My focus is on designing <strong>intuitive layouts, smooth navigation</strong>, and engaging experiences that keep users satisfied. <br /> I combine creativity with functionality to deliver <strong>modern and responsive designs</strong> that enhance the overall usability of web applications. <br /> Every design I create is carefully crafted to ensure <strong>clarity, accessibility, and aesthetic appeal</strong>. </p> 
//                         <a href="" className='btn text-white bg-purple-500 hover:bg-purple-800 rounded-2xl mt-3'>Read More</a>
           
//                     </div> 
//                     {/* 3 */}
//                       <div>
//                                        <i className='text-white'><IoCodeSharp /></i>

//                      <h2 className='text-white'>UI/UX Design </h2>
//                     <p className='text-white space-y-4'>I specialize in <strong>UI/UX design</strong> to create visually appealing and user-friendly interfaces. <br />           My focus is on designing <strong>intuitive layouts, smooth navigation</strong>, and engaging experiences that keep users satisfied. <br /> I combine creativity with functionality to deliver <strong>modern and responsive designs</strong> that enhance the overall usability of web applications. <br /> Every design I create is carefully crafted to ensure <strong>clarity, accessibility, and aesthetic appeal</strong>. </p> 
//                           <a href="" className='btn text-white bg-purple-500 hover:bg-purple-800 rounded-2xl mt-3'>Read More</a>
           
//                     </div> 
//                 </div>
//             </div>
//             </div>  
//         </div>
//     );
// };

// export default Service;


import React from "react";
import { IoCodeSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    description:
      "I specialize in UI/UX design to create visually appealing and user-friendly interfaces. My focus is on designing intuitive layouts, smooth navigation, and engaging experiences that keep users satisfied. I combine creativity with functionality to deliver modern and responsive designs that enhance usability.",
  },
  {
    title: "Web Development",
    description:
      "I develop full-stack web applications using React, Node.js, Express, and MongoDB. My goal is to write clean, efficient, and maintainable code that ensures high performance and scalability for any project.",
  },
  {
    title: "Responsive Design",
    description:
      "I create fully responsive websites that look great on all devices — from mobile phones to large desktop screens. I use Tailwind CSS and modern layouts to ensure fluid user experiences everywhere.",
  },
];

const Service = () => {
  return (
    <div className="py-16 px-6 md:px-13  text-white">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-blue-500">Services</span>
      </motion.h1>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:ml-[200px]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4 text-purple-400 text-4xl">
              <IoCodeSharp />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-center">
              {service.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;


