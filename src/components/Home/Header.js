import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Resume from "../../assets/resume.pdf";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);

  // const onButtonClick = () => {
  //   fetch(Resume).then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "resume.pdf";
  //       alink.click();
  //     });
  //   });
  // };
  return (
    <div className="">
      <div className="isolate bg-white">
        {/* video tag */}

        {/* <iframe
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5-LyRjHlRgQ?autoplay=1&mute=1&enablejsapi=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}

        {/* <video
          autoplay
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://www.vecteezy.com/video/8810804-animated-particle-tunnel-echnological-and-connection-motion-background-abstract-tunnel-background-animation-abstract-tunnel-background-animation-flying-through-moving-particles"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        {/* video tag */}
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fill-opacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9089FC"></stop>
                <stop offset="1" stop-color="#FF80B5"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="px-6 pt-6 lg:px-8">
          <div>
            <div className="shadow-xl shadow-violet-200">
              <div className="w-4/5 mx-auto py-4 grid grid-cols-2 justify-center items-center">
                <div className="">
                  <Link to="/">
                    <h2 className="text-2xl uppercase font-semibold tracking-widest text-violet-500">
                      Rayhan Howlader
                    </h2>
                  </Link>
                </div>

                <div className="flex justify-end">
                  <div
                    onClick={() => setOpen(!open)}
                    className="h-6 w-6 md:hidden"
                  >
                    {open ? <XMarkIcon /> : <Bars3Icon />}
                  </div>
                  <nav
                    className={`md:flex  md:static absolute duration-500 ease-in z-[100] w-5/5 ${
                      open ? "top-[120px]" : "top-[-200px]"
                    }`}
                  >
                    <Link
                      className="block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium"
                      to="/projects"
                    >
                      Projects
                    </Link>
                    <Link
                      className="block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium"
                      to="/About"
                    >
                      About Me
                    </Link>
                    <Link
                      className="block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium"
                      to="/contact"
                    >
                      Contact
                    </Link>
                    <Link
                      className="block md:inline md:mr-6 pl-2 text-white bg-violet-400 hover:bg-red-400 md:hover:bg-inherit md:bg-inherit md:text-black py-2 md:py-0 mb-2 md:mb-0 hover:text-violet-500 font-medium"
                      to="/blogs"
                    >
                      Blogs
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

            {/* something doing */}
            {/* <nav
              className="flex h-9 items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <Link to="/" className="-m-1.5 p-1.5">
                  <h4 className="text-lg font-semibold">MD Rayhan Howlader</h4>
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                <NavLink
                  to="/"
                  className="font-semibold text-gray-900 hover:text-red-900"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/projects"
                  className="font-semibold text-gray-900 hover:text-red-900"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/about"
                  className="font-semibold text-gray-900 hover:text-red-900"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="font-semibold text-gray-900 hover:text-red-900"
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/blogs"
                  className="font-semibold text-gray-900 hover:text-red-900"
                >
                  Blogs
                </NavLink>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <Link
                  to="#"
                  className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  onClick={onButtonClick}
                >
                  Download Resume
                </Link>
              </div>
            </nav> */}
            {/* <div role="dialog" aria-modal="true">
              <div
                focus="true"
                className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
              >
                <div className="flex h-9 items-center justify-between">
                  <div className="flex">
                    <Link to="/" className="-m-1.5 p-1.5">
                      <h4 className="text-lg font-semibold">
                        MD Rayhan Howlader
                      </h4>
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Link
                        to="/"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Home
                      </Link>
                      <Link
                        to="/projects"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Projects
                      </Link>
                      <Link
                        to="/about"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        About
                      </Link>
                      <Link
                        to="/contact"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Contact
                      </Link>
                      <Link
                        to="/blogs"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Blogs
                      </Link>
                    </div>
                    <div className="py-6">
                      <a
                        to="#"
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                        onClick={onButtonClick}
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
