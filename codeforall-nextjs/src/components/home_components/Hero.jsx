"use client";
import Lottie from "react-lottie";
import { forwardRef } from "react";
import animationData from "@/../public/assets/animation/PurpleComputer.json";

const Hero = forwardRef((props, ref) => {
  function handleClick() {
    window.open("https://discord.gg/vadUHTqQyx");
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="relative flex items-center min-h-screen">
      <section className="mt-0 mb-0 md:container md:mx-auto text-center rounded-lg p-8 relative z-10">
        {/* <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          className="mx-auto mb-0 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r animate-pulse-slow rounded-lg" /> */}

        <div className="relative z-20">
          <div className="pointer-events-none">
            <Lottie
              options={defaultOptions}
              height={300}
              width={300}
              className="mx-auto mb-0"
            />
          </div>

          <div className="bg-black/40 backdrop-blur-lg p-8 rounded-3xl shadow-2xl shadow-purple-900/50">
            {/* Main Heading */}
            <h1
              className="
        bg-transparent bg-gradient-to-r from-purple-500 via-pink-300 to-purple-600 
        bg-clip-text text-transparent bg-300%
        text-5xl md:text-6xl font-extrabold mb-4 font-sans
        tracking-tight hover:scale-105 transition-transform duration-300
        bright-text
        animate-headingPop
      "
            >
              Welcome to Code For All
            </h1>

            {/* Sub Heading */}
            <p
              className="
        text-2xl md:text-3xl mt-5 mb-8 text-center font-sans font-bold
        text-white bright-text
        animate-subheadingBounce
      "
            >
              <span className="text-red-500 animate-pulse">Empowering</span>{" "}
              <span className="text-green-500 animate-pulse">Programmers,</span>{" "}
              <span className="text-blue-500 animate-pulse">Building</span>{" "}
              <span className="text-yellow-500 animate-pulse">Futures</span>
            </p>

            {/* Paragraph */}
            <div className="max-w-4xl mx-auto">
              <p
                className="
          text-lg md:text-xl mb-8 text-center font-sans 
          font-semibold text-white leading-relaxed glow-purple
          animate-paragraphFadeSlide
        "
              >
                The mission of Code for All is to empower students of all
                backgrounds to excel in their problem-solving and coding
                classes. We strive to create a supportive and inclusive learning
                environment where everyone can deepen their understanding of
                code and develop the skills necessary to tackle complex
                challenges. Together, we will help each other achieve our full
                potential as coders and problem-solvers!
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleClick}
              className="
        bg-gradient-to-br from-purple-600 to-blue-600 
        p-4 px-12 rounded-full text-xl text-white font-semibold 
        hover:scale-105 ease-in-out duration-300 
        hover:shadow-2xl hover:shadow-purple-600/50 
        border-2 border-purple-400/50 
        transform transition-all glow-button
        animate-paragraphFadeSlide
      "
              style={{
                animationDelay: "0.9s",
              }} /* optional separate inline delay */
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Hero;
