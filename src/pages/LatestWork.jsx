// import React from 'react';

// const LatestWork = () => {
//     return (
//         <div className='grid '>
//              <h1 className="text-4xl text-white font-bold flex justify-center mb-8">
//         My Recent <span className='text-blue-500 ml-2'>  work</span>
//       </h1>

//          <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://media.licdn.com/dms/image/v2/D4E22AQFWQ5OHUz4HCQ/feedshare-shrink_2048_1536/B4EZok_mIFHgAw-/0/1761557243703?e=1764201600&v=beta&t=3c8GeNVtmS0RzEKT75Sdcukg2fnVMtxdH-9v9wFPptk"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions ">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
//          </div>


//          <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://media.licdn.com/dms/image/v2/D4E22AQFWQ5OHUz4HCQ/feedshare-shrink_2048_1536/B4EZok_mIFHgAw-/0/1761557243703?e=1764201600&v=beta&t=3c8GeNVtmS0RzEKT75Sdcukg2fnVMtxdH-9v9wFPptk"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions ">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
//          </div>
//          <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://media.licdn.com/dms/image/v2/D4E22AQFWQ5OHUz4HCQ/feedshare-shrink_2048_1536/B4EZok_mIFHgAw-/0/1761557243703?e=1764201600&v=beta&t=3c8GeNVtmS0RzEKT75Sdcukg2fnVMtxdH-9v9wFPptk"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions ">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
//          </div>
//          <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://media.licdn.com/dms/image/v2/D4E22AQFWQ5OHUz4HCQ/feedshare-shrink_2048_1536/B4EZok_mIFHgAw-/0/1761557243703?e=1764201600&v=beta&t=3c8GeNVtmS0RzEKT75Sdcukg2fnVMtxdH-9v9wFPptk"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions ">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
//          </div>

//         </div>
//     );
// };

// export default LatestWork;



import React from 'react';
import projects3 from '../assets/pata.png'
const projects = [
  {
    title: 'Project One',
    description: 'A project built with React, Node.js, MongoDB.',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQFWQ5OHUz4HCQ/feedshare-shrink_2048_1536/B4EZok_mIFHgAw-/0/1761557243703?e=1764201600&v=beta&t=3c8GeNVtmS0RzEKT75Sdcukg2fnVMtxdH-9v9wFPptk',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A portfolio website showcasing my skills and works.',
    image: 'https://media.licdn.com/dms/image/v2/D4E22AQEI-2a8YOczvg/feedshare-shrink_2048_1536/B4EZoceCs2IQAw-/0/1761414231310?e=1764201600&v=beta&t=kKcRzdLkbVsR85r7tXEuQ3A-1p0AOHORPhuu3sHZgC4',
    link: '#',
  },

  {
    title: 'Project Three',
    description: 'A chat application using Socket.io and Node.js.',
    image: 'blob:https://www.facebook.com/b18fe410-fae0-47f2-8bbd-f0fb3ce3b2c0',
    link: '#',
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
    <div className="px-4 py-12 ">
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
