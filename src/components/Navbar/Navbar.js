import React, { useState } from "react";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <header className="relative z-50 w-full h-32 bg-[#CC0000]">
      <div className="container flex items-center justify-center h-full max-w-7xl px-8 mx-auto sm:justify-between xl:px-0">
        <a
          href="/"
          className="relative flex items-center inline-block h-5 h-full font-black leading-none"
        >
          <img
            src={logo}
            width="auto"
            alt=""
            className="max-w-full h-24 lg:h-32"
          />
        </a>

        <nav
          id="nav"
          className={`absolute top-0 left-0 z-50 flex flex-col items-center justify-between w-full h-96 pt-5 mt-28 t text-sm text-[#FFE6D9] bg-[#3A001E] border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-lg md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative ${
            open ? "" : "hidden"
          }`}
        >
          <a
            href="#"
            className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-4 lg:mr-10 transition-colors hover:text-[#C88776]"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#features"
            className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-colors hover:text-[#C88776]"
            onClick={() => setOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-colors hover:text-[#C88776]"
            onClick={() => setOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="font-bold duration-100 transition-colors hover:text-[#C88776]"
            onClick={() => setOpen(false)}
          >
            Testimonials
          </a>
          <div className="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
            <a
              href="#_"
              className="w-full py-2 whitespace-nowrap font-bold text-center text-pink-500"
              onClick={() => setOpen(false)}
            >
              Sign-In
            </a>
            <a
              href="#_"
              className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-indigo-700 fold-bold"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        </nav>

        <div className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
          <a
            href="#_"
            className="relative z-40 whitespace-nowrap px-3 py-2 mr-0 text-sm font-bold text-slate-100 md:px-5 lg:text-white sm:mr-3 md:mt-0"
          >
            Sign-In
          </a>
          <a
            href="#_"
            className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-indigo-700 rounded shadow-md fold-bold lg:bg-white lg:text-indigo-700 sm:w-full lg:shadow-none hover:shadow-xl hover:bg-[#C2F9FF]"
          >
            Get Started
          </a>
        </div>

        <div
          id="nav-mobile-btn"
          className="absolute top-3 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10 close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-1 h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={openMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-1 h-10 w-10 hidden"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
