import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaLink,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SocialIcons } from "./SocialIcons";

const Navbar = () => {
  const navlinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "me",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const [showNav, setShowNav] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 65) {
      setPageScroll(true);
    } else {
      setPageScroll(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className={`w-full h-20 z-10 fixed duration-300 ease-in ${
        pageScroll ? "bg-[#ecf0f3] shadow-lg" : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center  w-full max-w-screen h-full mx-auto px-8">
        <Link href="/">
          <h1 className="text-2xl md:text-2xl lg:text-4xl font-extrabold uppercase tracking-wider cursor-pointer">
            Himanshu Shekhar
          </h1>
        </Link>

        <div>
          <ul className="hidden md:flex">
            {navlinks.map((eachLink) => (
              <Link key={eachLink.id} href={`/#${eachLink.link}`}>
                <li className="ml-10 text-sm cursor-pointer font-bold uppercase duration-500 ease-out hover:scale-110 hover:underline underline-offset-2 tracking-widest">
                  {eachLink.link}
                </li>
              </Link>
            ))}
          </ul>

          <div className="md:hidden" onClick={() => setShowNav(!showNav)}>
            <FaBars
              size={30}
              className=" duration-500 cursor-pointer ease-out hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className={showNav == false ? " hidden" : "visible"}>
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur"
          onClick={() => setShowNav(!showNav)}
        >
          <div className="fixed left-0 top-0 w-4/5 h-full bg-slate-800 text-white  p-8">
            <div className="flex w-full justify-between items-center">
              <Link href="#">
                <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg1 ">
                  Himanshu Shekhar
                </h1>
              </Link>

              <div
                className="rounded-full shadow-lg shadow-gray-500 p-3"
                onClick={() => setShowNav(!showNav)}
              >
                <FaTimes size={20} className="cursor-pointer" />
              </div>
            </div>
            <div className="mt-14 flex flex-col items-start h-fit gap-20">
              <ul className="uppercase">
                {navlinks.map((eachLink) => (
                  <Link key={eachLink.id} href={`/#${eachLink.link}`}>
                    <li className="py-3 text-sm cursor-pointer uppercase duration-500 ease-out hover:scale-110 hover:underline underline-offset-2 tracking-wider">
                      {eachLink.link}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="py-10 flex justify-start items-start space-x-5 ">
              {/* <div className="rounded-full bg-gray-700 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-800">
                <FaFacebook size={25} />
              </div>
              <div className="rounded-full bg-gray-300 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-200">
                <FaGithub size={25} color="black " />
              </div>
              <div className="rounded-full bg-gray-700 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-800">
                <FaLinkedin size={25} />
              </div>
              <div className="rounded-full bg-gray-300 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-200">
                <FaInstagram size={25} color="black " />
              </div> */}

              <SocialIcons size={25} colorBlack="black" colorWhite="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;