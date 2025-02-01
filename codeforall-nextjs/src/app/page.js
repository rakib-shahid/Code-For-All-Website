"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Header = dynamic(() => import("@/components/home_components/Header"), {
  ssr: true,
});
const Hero = dynamic(() => import("@/components/home_components/Hero"), {
  ssr: false,
});
const Board = dynamic(() => import("@/components/home_components/Board"), {
  ssr: true,
});
const LottieAnimation = dynamic(
  () => import("@/components/home_components/LottieAnimation"),
  { ssr: false }
);
const AnimationWrapper = dynamic(
  () => import("@/components/home_components/AnimationWrapper"),
  { ssr: false }
);
const Events = dynamic(() => import("@/components/home_components/Events"), {
  ssr: true,
});
const Projects = dynamic(
  () => import("@/components/home_components/Projects"),
  { ssr: true }
);
const Social = dynamic(() => import("@/components/home_components/Social"), {
  ssr: true,
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [hasSeenLoading, setHasSeenLoading] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedHome");

    if (!hasVisitedBefore) {
      setHasSeenLoading(true);
      localStorage.setItem("hasVisitedHome", "true");

      setTimeout(() => {
        setIsClient(true);
        setHasSeenLoading(false);
      }, 0);
    } else {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return hasSeenLoading ? <LottieAnimation /> : null;
  }

  const heroAnimation = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <LottieAnimation />
      <div id="home">
        <Header />
      </div>

      <motion.div
        className="mb-20"
        initial="hidden"
        animate="visible"
        variants={heroAnimation}
      >
        <Hero />
      </motion.div>
      <div id="about"></div>

      <div id="board" className="relative">
        <div className="absolute inset-x-0 -bottom-20 flex -z-1 opacity-40 pointer-events-none">
          <div className="relative w-screen h-auto">
            <img
              src="/assets/animation/purple_blender.png"
              alt="Purple Blender"
              className="w-screen h-auto object-cover"
            />
          </div>
        </div>
        <Board className="bg-custom-dark-blue" />
      </div>

      <div id="event" className="relative">
        <div className="absolute inset-x-0 -top-20 flex z-10 h-72 opacity-85">
          <Image
            fill={true}
            src="/assets/animation/purple_blender.png"
            alt="Purple Blender"
            className="w-screen"
          />
        </div>
        <AnimationWrapper>
          <Events />
          <Projects />
        </AnimationWrapper>
      </div>

      <div id="contact">
        <Social />
      </div>
    </div>
  );
}
