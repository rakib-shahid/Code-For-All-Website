"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "@/../public/assets/animation/PurpleSpace.json";

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="absolute left-0 w-full h-[100vh] -z-1 pointer-events-none"
      style={{ top: "-20vh" }}
    >
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieAnimation;
