import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { forwardRef } from "react";
import NewsLetter from "./NewsLetter";
const Social = forwardRef((props, ref) => {
  return (
    <div
      className="flex flex-col items-center pb-10 md:flex md:flex-row border-t bg-gray-100 text-black"
      ref={ref}
    >
      <div className="container mx-auto flex-row items-center">
        <div className="flex  items-center justify-between p-4">
          <div className="flex  items-center mr-20 ">
            <img
              src="/assets/logos/logo.png"
              alt="Code For All Logo"
              className="hover:scale-105 h-8"
            />
            <span className="ml-2 text-xl font-bold">CODE FOR ALL</span>
          </div>

          <div className="flex space-x-4 mr-auto ">
            <a
              className="hover:scale-105"
              href="https://www.linkedin.com/company/code-for-all-qc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className="text-gray-600 hover:text-blue-600"
              />
            </a>
            <a
              className="hover:scale-105"
              href="https://www.instagram.com/codeforall_qc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="text-gray-600 hover:text-pink-600"
              />
            </a>
          </div>
        </div>

        <div className="flex items-center p-4">
          <h1 className="font-bold text-xl ">Contact Us:</h1>
          <p className="pl-2 ">codeforallqc@gmail.com</p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
});

export default Social;
