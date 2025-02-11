"use client";
import ProjectCard from "./ProjectCard";
import "swiper/css";
import "swiper/css/pagination";

function Projects() {
  const projects = [
    {
      title: "Grade Distribution Visualizer",
      image: "https://i.imgur.com/6czfeXa.png",
      description:
        "A project designed to help students make informed decisions when selecting instructors using data.",
      git: "https://github.com/QC-Data-Science/QC-Grade-Distribution",
    },
    {
      title: "LeetCode Leaderboard",
      image: "https://i.imgur.com/mEPilHN.png",
      description:
        "A real time LeetCode Leaderboard that transforms coding practice into a fun competition.",
      git: "https://github.com/rakib-shahid/lc-leaderboard/tree/main",
    },
    {
      title: "Code For All Support Bot",
      image: "https://i.imgur.com/HaNTyKC.png",
      description:
        "A Discord bot that allows students to get 1 on 1 tutoring from our tutors.",
      git: "https://github.com/justinespinal/Discord-Tutor-Bot",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-32 p-0 bg-clip-text text-white text-5xl md:text-6xl font-extrabold font-sans tracking-tight drop-shadow-[0_35px_35px_rgba(0,0,0,0.85)]">
        Projects
      </h1>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          reverse={index % 2 !== 0} // Alternates the layout for each project
        />
      ))}
    </div>
  );
}

export default Projects;
