import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl hover:text-gray-400 transition duration-300" />
          </a>
        </div>

        {/* Made by */}
        <p className="text-white text-sm mt-4 md:mt-0">Made by Biswajit Das</p>
      </div>
    </footer>
  );
};

export default Footer;
