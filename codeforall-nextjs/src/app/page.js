import Header from "@/components/home_components/Header";
import Hero from "@/components/home_components/Hero";
import Board from "@/components/home_components/Board";
import LottieAnimation from "@/components/home_components/LottieAnimation";
import AnimationWrapper from "@/components/home_components/AnimationWrapper";
import Events from "@/components/home_components/Events";
import Projects from "@/components/home_components/Projects";
import Social from "@/components/home_components/Social";

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
          <img
            src="/assets/animation/purple_blender.png"
            alt="Purple Blender"
            className="w-screen"
          />
        </div>
        <Board className="bg-custom-dark-blue" />
      </div>

      <div id="event" className="relative">
        <div className="absolute inset-x-0 -top-20 flex z-10 h-72 opacity-85">
          <img
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
