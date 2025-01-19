// import github icon from react icons
import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, image, description, git }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-white to-purple-200 shadow-xl text-slate-800 p-6 rounded-lg w-[95%] md:h-[500px] h-auto">
      <img
        src={image}
        alt={title}
        className="w-full md:w-3/5 h-64 md:h-full object-contain rounded-lg mb-4 md:mb-0 md:mr-6 "
      />
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-2xl md:text-[1.5rem] font-extrabold mb-2 font-mono ">
          {title}
        </h1>
        <h2 className="text-sm md:text-lg font-medium font-mono mb-4">
          {description}
        </h2>
        <a
          href={git}
          className="cursor-pointer hover:underline text-sm md:text-lg font-bold font-mono"
        >
          View source code on GitHub <FaGithub className="inline" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
