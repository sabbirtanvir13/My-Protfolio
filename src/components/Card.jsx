// src/components/Card.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaPlay } from "react-icons/fa";

const Card = ({ img, title, desc, repo, Live }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-[#0d0d0f] border border-[#2a2a2d] rounded-3xl p-5 shadow-xl backdrop-blur-lg w-full max-w-sm"
    >
      <div className="overflow-hidden rounded-xl mb-4">
        <img src={img} alt={title} className="w-full h-40 object-cover rounded-xl" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed mb-6">{desc}</p>

      <div className="flex items-center justify-between mt-auto">
        <a
          href={repo}
          className="flex items-center gap-2 bg-[#1a1a1d] text-white px-4 py-2 rounded-full text-sm hover:bg-[#26262a] transition"
        >
          <FaGithub /> Repository
        </a>

        <a
          href={Live}
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition"
        >
          <FaPlay />Live
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
