import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/PurpleSpace.json"; // JSON file path

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
      className="absolute left-0 w-full h-[100vh] -z-1"
      style={{ top: "-20vh" }}
    >
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieAnimation;
