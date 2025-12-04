


// import React from "react";
// import { IoCodeSharp } from "react-icons/io5";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "UI/UX Design",
//     description:
//       "I specialize in UI/UX design to create visually appealing and user-friendly interfaces. My focus is on designing intuitive layouts, smooth navigation, and engaging experiences that keep users satisfied. I combine creativity with functionality to deliver modern and responsive designs that enhance usability.",
//   },
//   {
//     title: "Web Development",
//     description:
//       "I develop full-stack web applications using React, Node.js, Express, and MongoDB. My goal is to write clean, efficient, and maintainable code that ensures high performance and scalability for any project.",
//   },
//   {
//     title: "Responsive Design",
//     description:
//       "I create fully responsive websites that look great on all devices — from mobile phones to large desktop screens. I use Tailwind CSS and modern layouts to ensure fluid user experiences everywhere.",
//   },
// ];

// const Service = () => {
//   return (
//     <div className="py-16 px-6 md:px-13  text-white">
      
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-center mb-12"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         My <span className="text-blue-500">Services</span>
//       </motion.h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:ml-[200px]">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-transform duration-300"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//           >
//             <div className="flex justify-center mb-4 text-purple-400 text-4xl">
//               <IoCodeSharp />
//             </div>
//             <h2 className="text-2xl font-semibold mb-3 text-center">
//               {service.title}
//             </h2>
//             <p className="text-gray-300 text-sm leading-relaxed mb-4">
//               {service.description}
//             </p>
//             <div className="flex justify-center">
//               <a
//                 href="#"
//                 className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition"
//               >
//                 Read More
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Service;


import React from "react";
import { IoCodeSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    description:
      "I specialize in UI/UX design to create visually appealing and user-friendly interfaces. My focus is on intuitive layouts, smooth navigation, and engaging experiences that keep users satisfied.",
  },
  {
    title: "Web Development",
    description:
      "I develop full-stack web applications using React, Node.js, Express, and MongoDB. I write clean, efficient, and maintainable code ensuring high performance and scalability.",
  },
  {
    title: "Responsive Design",
    description:
      "I create fully responsive websites that look great on all devices — from mobile phones to large desktops. Tailwind CSS and modern layouts ensure fluid user experiences everywhere.",
  },
];

const Service = () => {
  return (
    <div className="py-20 px-6 md:px-16 text-white ">
      {/* Section Header */}
      <motion.h1
        className="text-4xl md:text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-yellow-400 font-bold">  My Services</span>
      </motion.h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-6 text-purple-400 text-5xl">
              <IoCodeSharp />
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-white">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 text-center">
              {service.description}
            </p>

            {/* Button */}
            <div className="flex justify-center">
              <a
                href="#"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition"
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



