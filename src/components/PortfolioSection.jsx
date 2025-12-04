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
      img: "https://media.licdn.com/dms/image/v2/D4E22AQHsfRmhwHX16g/feedshare-shrink_800/B4EZqQpPkkGYAg-/0/1763363328234?e=1766620800&v=beta&t=6QDzEqaVDsdhhj1faNx4R6w5XQEBqdnyTbshfsKMbcQ",
      title: "ARTIFY",
      desc: " A full-stack MERN application for artists to showcase, explore & manage digital artworks.",
      repo: "#",
      Live: "https://fluffy-palmier-ff2ab6.netlify.app/",
    },
    {
      img: "https://via.placeholder.com/300x200",
      title: "Clinic Management Dashboard",
      desc: "Dashboard for patient data, appointments, and admin tools with clean layout.",
      repo: "#",
       Live: "#",
    },
    {
      img: "https://via.placeholder.com/300x200",
      title: "Corporate Agri-Food Website",
      desc: "Modern corporate website with trust-building visuals and intuitive navigation.",
      repo: "#",
      Live: "#",
    },
    {
      img: "https://via.placeholder.com/300x200",
      title: "Real Estate Property UI",
      desc: "A clean UI for browsing modern real-estate listings with images and details.",
      repo: "#",
       Live: "",
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
