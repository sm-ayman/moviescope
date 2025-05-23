import React from "react";

const Footer = () => {
  return (
    <div className="bg-indigo-950 text-white py-6 mt-10 shadow-inner">
      <div className="text-center max-w-screen-lg mx-auto px-4">
        <p className="mb-3">
          Developed by{" "}
          <span className="font-semibold text-indigo-300">
            Sultan Md. Ayman
          </span>
        </p>

        <div className="flex justify-center flex-wrap gap-6 text-sm">
          <a
            href="https://github.com/sm-ayman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 underline transition-colors duration-200"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/sultan-md-ayman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 underline transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://sm-ayman.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 underline transition-colors duration-200"
          >
            Portfolio ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
