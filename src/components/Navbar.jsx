import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="w-full p-4 border-b bg-white dark:bg-gray-950 flex items-center justify-between px-6 md:px-12">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
         
          <span className="ml-2 font-semibold text-lg dark:text-white">
            WebbyUI
          </span>
         
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          <Link to="/components/accordion">
          <li className="hover:text-black dark:hover:text-white cursor-pointer">
            Components
          </li>
          </Link>
          <li className="hover:text-black dark:hover:text-white cursor-pointer flex items-center">
            Templates
            <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md">
              New
            </span>
          </li>
          <li className="hover:text-black dark:hover:text-white cursor-pointer">
            Showcase
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
{/*        
        <input
          type="text"
          placeholder="Search documentation..."
          className="hidden lg:block bg-gray-100 dark:bg-gray-300 px-4 py-2 rounded-md focus:outline-none"
        />
        <IoGameControllerOutline className="text-xl cursor-pointer dark:text-white" />
        <FaGithub className="text-xl cursor-pointer dark:text-white" />
        <RxCross2 className="text-xl cursor-pointer dark:text-white" />
        */}
      </div>
    </nav>
  );
}
