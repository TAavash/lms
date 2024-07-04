import { useState } from "react";
import ProfilePic from "../assets/gojo.jpg";
import LightDarkToggle from "./LightDarkToggle";
// import { IoIosArrowDown } from "react-icons/io";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-right">
      <div
        onClick={handleToggle}
        className="cursor-pointer inline-flex w-fit rounded-md shadow-sm"
      >
        <span className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <div className="flex gap-2 border-2 border-slate-600 rounded-r-full rounded-l-full p-[2px]">
            <img
              className="h-10 w-10 rounded-full"
              src={ProfilePic}
              alt="gojo"
            />
          </div>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-0"
            >
              My Profile
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-1"
            >
              About
            </div>
            <div
              className="flex justify-between block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-2"
            >
              <LightDarkToggle /> : Mode
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Settings
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-4"
            >
              Notification
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-5"
            >
              Help
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
