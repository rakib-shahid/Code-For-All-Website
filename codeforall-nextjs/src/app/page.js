"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import components without SSR
const Header = dynamic(() => import("@/components/home_components/Header"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/home_components/Hero"), {
  ssr: false,
});
const Board = dynamic(() => import("@/components/home_components/Board"), {
  ssr: false,
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
  ssr: false,
});
const Projects = dynamic(
  () => import("@/components/home_components/Projects"),
  {
    ssr: false,
  }
);
const Social = dynamic(() => import("@/components/home_components/Social"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      <LottieAnimation />
      <div id="home">
        <Header />
      </div>
      <Hero className="mb-20" />
      <div id="about"></div>

      <div id="board" className="relative">
        <div className="absolute inset-x-0 -bottom-20 flex -z-1 opacity-40 pointer-events-none">
          <Image
            src="/assets/animation/purple_blender.png"
            alt="Purple Blender"
            className="w-screen"
          />
        </div>
        <Board className="bg-custom-dark-blue" />
      </div>

      <div id="event" className="relative">
        <div className="absolute inset-x-0 -top-20 flex z-10 h-72 opacity-85">
          <Image
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
