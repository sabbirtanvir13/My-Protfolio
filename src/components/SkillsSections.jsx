
import React, { useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import { DiResponsive } from "react-icons/di";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaGithub,
    FaNodeJs,
 
} from "react-icons/fa";
import { IoIosGitMerge } from "react-icons/io";
import {
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiFigma,
    SiVercel,
    SiNetlify,
    SiFirebase,
 
    SiReactrouter,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";

export default function SkillsSections() {
    const categories = [

        {
            name: "Frontend Technologies",
            items: [
                { name: "HTML5", icon: <FaHtml5 size={45} color="#E34F26" /> },
                { name: "CSS3", icon: <FaCss3Alt size={45} color="#1572B6" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss size={45} color="#38BDF8" /> },
                { name: "JavaScript (ES6+)", icon: <FaJsSquare size={45} color="#F0DB4F" /> },
                { name: "React.js", icon: <FaReact size={45} color="#61DAFB" /> },
                { name: "React Router", icon: <SiReactrouter size={45} color="#ff4500" /> },
                { name: "Responsive Design", icon: <DiResponsive size={45} color="#FFC0CB" /> },
                { name: "Flex & Grid", icon: <CiGrid41 size={45} color="#FFA500" /> },
            ],
        },


        {
            name: "Backend Technologies",
            items: [
                { name: "Node.js", icon: <FaNodeJs size={45} color="#68A063" /> },
                { name: "Express.js", icon: <SiExpress size={45} color="white" /> },
                { name: "MongoDB", icon: <SiMongodb size={45} color="#4DB33D" /> },
                {  name: "MySQL", icon: <TbBrandMysql size={ 45} color="#4DB33D" /> },

            ],
        },


        {
            name: "DevTools & Deployment",
            items: [
                { name: "Git", icon: <IoIosGitMerge size={45} color="red" /> },
                { name: "GitHub", icon: <FaGithub size={45} color="white" /> },
                { name: "VS Code", icon: <VscVscodeInsiders size={45} color=" #00e8ff" /> },
                { name: "Firebase", icon: <SiFirebase size={45} color="#FFA000" /> },
                { name: "Figma", icon: <SiFigma size={45} color="#A259FF" /> },
                { name: "Vercel", icon: <SiVercel size={45} color="white" /> },
                { name: "Netlify", icon: <SiNetlify size={45} color="#00C7B7" /> },
            ],
        },


        {
            name: "Soft Skills",
            items: [
                { name: "Problem Solving" },
                { name: "Team Collaboration" },
                { name: "Attention to Detail" },
                { name: "Time Management" },
            ],
        },
    ];

    const [active, setActive] = useState(0);

    return (
        <div className="w-full  py-24 text-white relative overflow-hidden">

            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-yellow-400">What I Do</h2>
                <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
                    I create modern, responsive, and user-friendly web applications with
                    clean UI and efficient backend systems.
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex gap-10 relative">

                <div className="flex flex-col items-center mt-20 mr-5">
                    <div className="rotate-[-90deg] text-3xl font-semibold text-yellow-400">
                        Skills
                    </div>
                    <div className="w-[4px] h-24 bg-yellow-500 mt-3 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">

                    {categories[active].items.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#141414] p-6 rounded-xl shadow-lg 
              flex flex-col items-center justify-center gap-4 
              hover:scale-105 transition duration-300"
                        >
                            {skill.icon && skill.icon}
                            <p className="text-sm font-semibold tracking-wide text-center">
                                {skill.name}
                            </p>
                        </div>
                    ))}

                </div>

                <div className="absolute right-0 top-20 flex flex-col gap-4 pr-6">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            onClick={() => setActive(index)}
                            className={`w-[4px] h-16 cursor-pointer rounded-full transition-all 
                ${active === index ? "bg-yellow-400" : "bg-gray-700 hover:bg-gray-400"}`}
                        ></div>
                    ))}
                </div>

            </div>
        </div>
    );
}
