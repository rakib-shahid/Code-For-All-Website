<<<<<<< Updated upstream
import Justin from "../assets/justin.jpg"
import ProjectCard from "./ProjectCard"

function Projects(){
    return (
        <div className="flex flex-col">
            <h1 className="p-4 
                            bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 
                            text-6xl md:text-7xl font-bold mb-4 font-mono text-center"
                            >Code for All Projects</h1>
            <ProjectCard title="Discord Tutor Bot"image={Justin} description="Test" git="https://github.com/justinespinal/GradeCalculator"/>
        </div>
    )
=======
import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Grade Distribution Visualizer",
      image: "https://i.imgur.com/6czfeXa.png",
      description: "This project is tailored specifically for Queens College students and is spearheaded by a team of dedicated researchers. Our objective is to provide a comprehensive analysis of GPA averages awarded by teachers across diverse subjects from the academic years 2017 to Spring 2023 (excluding 2020). We aim to offer a data-driven alternative to resources like Rate My Professors, assisting students in making informed instructor selections.",
      git: "https://github.com/QC-Data-Science/QC-Grade-Distribution",
    },
    {
      title: "LeetCode Leaderboard",
      image: "https://i.imgur.com/mEPilHN.png",
      description: "The LC-Leaderboard is a project designed to encourage competitive problem-solving on LeetCode by providing a leaderboard system. The repository contains an Express.js backend, while the new frontend is maintained in a separate branch.",
      git: "https://github.com/rakib-shahid/lc-leaderboard/tree/main",
    },
    {
      title: "Code For All Support Bot",
      image: "https://i.imgur.com/HaNTyKC.png",
      description: "This Discord bot enhances community engagement in the Code For All server by providing interactive slash commands. The /social command shares the club’s social media links with an embedded message and a clickable Instagram button, while the /purpose command delivers a clear mission statement, emphasizing an inclusive learning environment for coding and problem-solving. These commands help users stay informed and connected within the community. 🚀",
      git: "https://github.com/rakib-shahid/cfa-tutor-bot",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="p-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 text-6xl font-extrabold mt-8 font-mono text-center">
        Code for All Projects
      </h1>
      <div className="w-full flex flex-col items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            reverse={index % 2 !== 0} // Alternates layout: image left for even, right for odd
          />
        ))}
      </div>
    </div>
  );
>>>>>>> Stashed changes
}

export default Projects;