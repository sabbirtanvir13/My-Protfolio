


import React from 'react';
import projects3 from '../assets/pata.png'
const projects = [
  {
    title: 'ARTIFY ',
    description: 'A project built with React, React Router , Tailwind CSS, SweetAlert Node.js, Express.js MongoDB Firebase Auth',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQHsfRmhwHX16g/feedshare-shrink_2048_1536/B4EZqQpPkkGYAw-/0/1763363328086?e=1766016000&v=beta&t=AQ_76uIillDiZr20vFeD2PfOw4klqmoQ2flJZ8FJPCk',
    link: 'https://fluffy-palmier-ff2ab6.netlify.app/',
  },
  {
    title: 'Hero.io',
    description: 'A project built with  React React Router React Icons CSS / TailwindCSS JSON react-toastify',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQFWQ5OHUz4HCQ/feedshare-shrink_480/B4EZok_mIFHgAY-/0/1761557243686?e=1766016000&v=beta&t=AMYUz2yfcIvF9P_rQH3UDpeC1SSIYJRRowoBWeAP4Po',
    link: 'https://soft-bonbon-e8ce0f.netlify.app/app',
  },

  {
    title: 'GameHub',
    description: ' A Game Library application using  React JS Firebase JavaScript Tailwind CSS',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQEI-2a8YOczvg/feedshare-shrink_480/B4EZoceCs2IQAY-/0/1761414231275?e=1766016000&v=beta&t=7Ui0-YyE7xb8EMPqsIH5Xx3ocjR1cJ7p0q5a1wUrrkc',
    link: 'https://fabulous-frangipane-82adb2.netlify.app/?',
  },
  {
    title: 'Project Four',
    description: 'E-commerce website with payment integration.',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQFWQ5OHUz4HCQ/feedshare-shrink_2048_1536/B4EZok_mIFHgAw-/0/1761557243703?e=1764201600&v=beta&t=3c8GeNVtmS0RzEKT75Sdcukg2fnVMtxdH-9v9wFPptk',
    link: '#',
  },
];

const LatestWork = () => {
  return (
    <div className="md:px-4  md:py-12 ">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        My Recent <span className="text-blue-500">Work</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWork;
