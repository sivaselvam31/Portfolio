import { useState, useEffect } from "react";
import NAV_LINKS from "../constants/const";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { FiDownload } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import Button from "./shared/Button";

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
    <div className="fixed top-2 md:top-3 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-6xl bg-black/40 backdrop-blur-2xl z-50 border border-white/10 rounded-4xl shadow-[0_8px_32px_rgba(1,2,1, 0.6)]">
      <div className="flex items-center justify-between py-4 px-6 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-gray-600 text-white p-2 rounded-xl text-xl font-bold italic w-10 h-10 flex items-center justify-center">S</div>
          <span className="text-white font-semibold text-lg drop-shadow-md">Sivaselvam</span>
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
                  className="flex flex-col items-center justify-center translate-y-[2px]"
                  onClick={handleClick} // Close menu on link click
                >
                  <span className="pb-1 hover:text-white">{link.name}</span>
                  {link.name === "Home" && (
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="secondary" className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 rounded-full px-6 gap-3">
            <FiDownload /> Download CV
          </Button>
          <button className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white p-3 rounded-full flex items-center justify-center transition-colors">
            <BsThreeDots />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
