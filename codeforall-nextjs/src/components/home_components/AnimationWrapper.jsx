"use client";
import Lottie from "react-lottie";
import animationData from "@/../public/assets/animation/PurpleSpacev2.json";
import React, { forwardRef } from "react";

const AnimationWrapper = forwardRef(({ children, ...props }, ref) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section
      id="second-section"
      className="relative md:p-20 bg-transparent overflow-hidden"
    >
      <div className="absolute inset-0 -z-1 pointer-events-none   bg-transparent overflow-hidden">
        {" "}
        <Lottie options={defaultOptions} />
      </div>
      <div className="z-1 relative">{children}</div>
    </section>
  );
});

export default AnimationWrapper;
