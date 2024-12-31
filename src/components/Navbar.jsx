import { useState, useEffect } from "react";
import NAV_LINKS from "../constants/const";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  // Apply scroll lock when navigation is open and unlock when it is closed
  useEffect(() => {
    if (openNavigation) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }

    // Clean up by enabling scroll when the component unmounts
    return () => enablePageScroll();
  }, [openNavigation]); // Run this effect whenever openNavigation changes

  const toggleNavigation = () => {
    setOpenNavigation((prevState) => !prevState);
  };

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };

  return (
    <div className="fixed top-0 w-full bg-black bg-opacity-70 z-50 border-b border-gray-700">
      <div className="flex items-center justify-between py-4 px-6 mx-auto max-w-7xl">
        {/* Logo */}
        <div>
          <img
            src="#"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="lg:hidden flex cursor-pointer text-white"
          onClick={toggleNavigation}
        >
          {openNavigation ? <FaX className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </div>

        {/* Navigation Links */}
        <nav
          className={`absolute lg:relative left-0 top-16 lg:top-auto w-full lg:w-auto bg-black lg:bg-transparent bg-opacity-90 lg:bg-opacity-0 z-40 transform transition-transform duration-300 ease-in-out ${
            openNavigation ? "block" : "hidden"
          } lg:flex`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 items-center text-white">
            {NAV_LINKS.map((link) => (
              <li
                key={link.id}
                className="py-3 lg:py-0 px-4 lg:px-0 text-sm font-medium hover:text-purple-400 transition-colors duration-300"
              >
                <a
                  href={link.href}
                  className="flex items-center space-x-2"
                  onClick={handleClick} // Close menu on link click
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-300">
            Sign In
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
