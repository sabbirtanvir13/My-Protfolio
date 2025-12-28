// src/components/PortfolioSection.jsx
import React from "react";
import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PortfolioSection() {
  const data = [
    {
      img: "https://i.ibb.co.com/k2HHCFDP/p1.jpg",
      title: "ARTIFY",
      desc: " A full-stack MERN application for artists to showcase, explore & manage digital artworks.",
      repo: "https://github.com/sabbirtanvir13/ARTIFY-CLIENT.git",
      Live: "https://fluffy-palmier-ff2ab6.netlify.app/",
    },
    {
      img: "https://i.ibb.co.com/whRycZyY/p2.jpg",
      title: "LocalChefBazar ",
      desc: "A MERN-based food marketplace enabling local chefs to sell homemade meals .",
      repo: "https://github.com/sabbirtanvir13/LocalChefBazaar-Frontend.git",
       Live: "https://localchefbazar-4ff5a.web.app/",
    },
    {
      img: "https://i.ibb.co.com/KRKgvyZ/p3.jpg",
      title: "Hero.io",
      desc: "A modern app installation platform where users can explore and download apps easily.",
      repo: "https://github.com/sabbirtanvir13/Assignment-08.git",
      Live: "https://soft-bonbon-e8ce0f.netlify.app/",
    },
    {
      img: "https://i.ibb.co.com/Y4x3spgv/p5.png",
      title: "TravelGo",
      desc: " A travel booking platform that helps users discover destinations and plan trips seamlessly.",
      repo: "https://github.com/sabbirtanvir13/Travel_Project.git",
       Live: "https://travel-project-8h6kytmnt-tanvir-ahmed-sabbirs-projects.vercel.app/",
    },
  ];

  return (
    <div className="w-full py-16 text-white">
      <h2 className="text-center text-3xl font-bold  text-yellow-400 mb-10">
        My Latest Work
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10 gap-4">
        <button className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-sm hover:bg-white/20 transition">
          Web Application
        </button>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
