"use client";
import React from "react";
// import Lottie from "react-lottie";
import animationData from "@/../public/assets/animation/PurpleSpace.json";
import { Player } from "@lottiefiles/react-lottie-player";

const LottieAnimation = () => {
  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationData,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };

  return (
    <div
      className="absolute left-0 w-full h-[100vh] -z-1 pointer-events-none"
      style={{ top: "-20vh" }}
    >
      {/* <Lottie options={defaultOptions} /> */}
      <Player
        autoplay
        loop
        src={animationData}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieAnimation;
