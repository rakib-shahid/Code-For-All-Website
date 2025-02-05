<<<<<<< Updated upstream


function ProjectCard({title, image, description, git}){

    return (
        <div className="flex flex-row justify-between items-center mx-auto bg-gradient-to-r from-white to-purple-200 shadow-xl text-slate-800 p-12 rounded-lg">
            <div className="text-center pr-16">
                <h1 className="text-6lg md:text-7xl font-bold mb-4 font-mono">{title}</h1>
                <h2 className="text-base md:text-lg font-bold mb-4 font-mono">{description}</h2>
                <a href={git} className = "cursor-pointer hover:underline text-base md:text-lg font-bold mb-4 font-mono">Github</a>
            </div>
            <img src={image} className="max-w-56 p-2"></img>
        </div>
    )
=======
import { FaGithub } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function ProjectCard({ title, image, description, git, reverse = false }) {
  const [expanded, setExpanded] = useState(false);

  // Set up intersection observer and animation controls
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const imageAnimation = useAnimation();
  const textAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      imageAnimation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 },
      });
      textAnimation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: 0.3 },
      });
    }
  }, [inView, imageAnimation, textAnimation]);

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center w-[95%] md:h-[400px] h-auto my-8`}
    >
      {/* Picture Box (Square with matching gradient design) */}
      <div className="p-4">
        <div className="bg-gradient-to-tl from-violet-600 to-slate-50 shadow-neon-purple-initial hover:shadow-neon-purple-hover shadow-purple-500/80  pb-0 pt-2 px-4 flex-col items-center rounded-xl  w-full md:w-[430px] md:h-[270px]">
          <motion.img
            src={image}
            alt={title}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={imageAnimation}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Info Box (Styled like the Hero container) */}
      <div className="p-4 flex-1 md:h-[310px]">
        <div className="bg-zinc-800/100 backdrop-blur-lg p-8 rounded-3xl shadow-2xl shadow-purple-400/50 h-full flex flex-col justify-start space-y-4">
          {/* Project Title (smaller & at the top) */}
          <motion.h1
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={textAnimation}
            className="
              bg-transparent 
              bg-gradient-to-r from-purple-500 via-pink-300 to-purple-600 
              bg-clip-text text-transparent 
              text-4xl md:text-5xl font-extrabold font-sans 
              tracking-tight hover:scale-105 transition-transform duration-300
            "
          >
            {title}
          </motion.h1>

          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={textAnimation}
            className="max-w-4xl mx-auto text-lg md:text-xl mb-8 font-sans font-semibold text-white leading-relaxed"
          >
            {expanded
              ? description
              : description.substring(0, 140) + (description.length > 140 ? "..." : "")}
            {description.length > 140 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-400 ml-2 underline"
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </motion.div>

          {/* GitHub Button (Centered text) */}
          <motion.a
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={textAnimation}
            href={git}
            className="
              inline-flex items-center justify-center gap-2 
              bg-gradient-to-br from-purple-600 to-blue-600 
              p-4 px-12 rounded-full text-xl text-white font-semibold 
              hover:scale-105 ease-in-out duration-300 
              hover:shadow-2xl hover:shadow-purple-600/50 
              border-2 border-purple-400/50 transform transition-all
            "
          >
            View source code on GitHub <FaGithub />
          </motion.a>
        </div>
      </div>
    </div>
  );
>>>>>>> Stashed changes
}

export default ProjectCard;