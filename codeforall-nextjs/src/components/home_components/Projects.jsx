"use client";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";

function Projects() {
  const projects = [
    {
      title: "Grade Distribution Visualizer",
      image: "https://i.imgur.com/6czfeXa.png",
      description: "Visualizes grade distributions for QC courses",
      git: "https://github.com/QC-Data-Science/QC-Grade-Distribution",
    },
    {
      title: "LeetCode Leaderboard",
      image: "https://i.imgur.com/mEPilHN.png",
      description: "Real-time leaderboard for LeetCode",
      git: "https://github.com/rakib-shahid/lc-leaderboard/tree/main",
    },
    {
      title: "Code For All Support Bot",
      image: "https://i.imgur.com/HaNTyKC.png",
      description: "Discord bot for tutoring assistance",
      git: "https://github.com/rakib-shahid/cfa-tutor-bot",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1
        className="p-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 
                   text-6xl font-extrabold mt-8 font-mono text-center"
      >
        Projects
      </h1>

      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        mousewheel={{
          forceToAxis: false,
          sensitivity: 1,
        }}
        loop={true}
        modules={[Pagination, Autoplay, Mousewheel]}
        className="mySwiper w-[90%] max-w-[96rem] h-[520px] px-4"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center h-full"
          >
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
