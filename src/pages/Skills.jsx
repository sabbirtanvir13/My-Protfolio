// import React from 'react';
// import { DiMongodb } from 'react-icons/di';
// import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
// import { SiJavascript } from 'react-icons/si';

// const Skills = () => {
//     return (
//         <div className='text-white  '>
//              <hi className="heading1  text-white flex justify-center items-center ">My    <span>  Skills</span></hi>
//            <div className='container1'>
//              <h1></h1>
                
//                <div className="tricnical-bars">
//                 <div className="bar"> <i >   <FaHtml5 style={{ color: '#c95d2e', fontSize: '50px' }} /></i>
//                     <div className="info">
//                         <span>HTML</span>
//                     </div>
                  
//                     <div className='progress-line-html'> 
//                         <span></span>
//                     </div>
//                 </div>

//                 <div className="bar"> <i > <FaCss3Alt style={{ color: '#b0bc1e', fontSize: '50px' }} /></i>
//                     <div className="info">
//                         <span>CSS</span>
//                     </div>
//                     <div className='progress-line-css'> 
//                         <span></span>
//                     </div>
//                 </div>

//                 <div className="bar"> <i > <SiJavascript style={{ color: '#c32ec9', fontSize: '50px' }} /></i>
//                     <div className="info">
//                         <span>Javascript</span>
//                     </div>
//                     <div className='progress-line-javascript'> 
//                         <span></span>
//                     </div>
//                 </div>

//                 <div className="bar"> <i > <FaReact style={{ color: '#147bbc', fontSize: '50px' }} /></i>

//                     <div className="info">
//                         <span>React</span>
//                     </div>
//                     <div className='progress-line-react'> 
//                         <span></span>
//                     </div>
//                 </div>

//                 <div className="bar"> <i ><FaNodeJs style={{ color: '#215732', fontSize: '50px' }} /> </i>
//                     <div className="info">
//                         <span>Node.js</span>
//                     </div>
//                     <div className='progress-line-node.js'> 
//                         <span></span>
//                     </div>
//                 </div>

//                 <div className="bar"> <i ><DiMongodb style={{ color: '#00ED64', fontSize: '50px' }} /> </i>
//                     <div className="info">
//                         <span> MongoDB</span>
//                     </div>
//                     <div className='progress-line-mongoDB'> 
//                         <span></span>
//                     </div>
//                 </div>

                
//                </div>
//             </div> 

//           <div className='container1'>
//   <h1 className="heading1">
//     Professional Skills
//   </h1>
//   <div className="radial-bars">
//     <svg x="0px" y="0px" viewBox="0 0 200 200">
//       <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
//       <circle className='path path-1' cx='100' cy='100' r='80'></circle>
//     </svg>
//     <div className="parcentage">90%</div>
//     <div className='text'>Creativity</div>
//   </div>

//   <div className="radial-bars">
//     <svg x="0px" y="0px" viewBox="0 0 200 200">
//       <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
//       <circle className='path path-1' cx='100' cy='100' r='80'></circle>
//     </svg>
//     <div className="parcentage">65%</div>
//     <div className='text'>communision</div>
//   </div>

//   <div className="radial-bars">
//     <svg x="0px" y="0px" viewBox="0 0 200 200">
//       <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
//       <circle className='path path-1' cx='100' cy='100' r='80'></circle>
//     </svg>
//     <div className="parcentage">75%</div>
//     <div className='text'>Problem Solving</div>
//   </div>

//   <div className="radial-bars">
//     <svg x="0px" y="0px" viewBox="0 0 200 200">
//       <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
//       <circle className='path path-1' cx='100' cy='100' r='80'></circle>
//     </svg>
//     <div className="parcentage">85%</div>
//     <div className='text'>TeamWork</div>
//   </div>

 

  


// </div>

//         </div>
//     );
// };

// export default Skills;


import React from 'react';
import { DiMongodb } from 'react-icons/di';
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { icon: <FaHtml5 />, name: 'HTML', color: '#c95d2e', progress: '90%' },
    { icon: <FaCss3Alt />, name: 'CSS', color: '#1572B6', progress: '85%' },
    { icon: <SiJavascript />, name: 'JavaScript', color: '#f7df1e', progress: '80%' },
    { icon: <FaReact />, name: 'React', color: '#61DBFB', progress: '80%' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#215732', progress: '70%' },
    { icon: <DiMongodb />, name: 'MongoDB', color: '#00ED64', progress: '75%' },
  ];

  const professionalSkills = [
    { text: 'Creativity', percentage: 90 },
    { text: 'Communication', percentage: 65 },
    { text: 'Problem Solving', percentage: 75 },
    { text: 'Team Work', percentage: 85 },
  ];

  return (
    <div className='text-white px-4 py-8'>
      {/* Header */}
      <h1 className="text-4xl font-bold flex justify-center mb-8">
        My <span className='text-blue-500 ml-2'>Skills</span>
      </h1>

      {/* Technical Skills */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
        {technicalSkills.map((skill, index) => (
          <div key={index} className='bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow-lg'>
            <div className='text-6xl mb-4' style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span className='text-xl font-semibold mb-2'>{skill.name}</span>
            <div className='w-full bg-gray-700 h-2 rounded-full'>
              <div
                className='h-2 rounded-full'
                style={{ width: skill.progress, backgroundColor: skill.color }}
              ></div>
            </div>
            <span className='mt-1'>{skill.progress}</span>
          </div>
        ))}
      </div>

      {/* Professional Skills (Radial Progress Bars) */}
  
      
       <h1 className="text-4xl font-bold flex justify-center mb-8">
       Professional  <span className='text-blue-500 ml-2'>Skills</span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {professionalSkills.map((skill, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='relative w-36 h-36'>
              <svg viewBox="0 0 36 36" className='w-full h-full'>
                <path
                  className='text-gray-700'
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='3'
                />
                <path
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831"
                  fill='none'
                  stroke='#3b82f6'
                  strokeWidth='3'
                  strokeDasharray={`${skill.percentage}, 100`}
                />
              </svg>
              <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <span className='text-xl font-bold'>{skill.percentage}%</span>
                <span className='mt-1'>{skill.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
