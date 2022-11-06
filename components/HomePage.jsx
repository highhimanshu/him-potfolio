import Image from "next/image";
import Link from "next/link";
import React from "react";
import him from "../public/assets/him.png";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { SocialIcons } from "./SocialIcons";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const HomePage = () => {
  return (
    <div id="home" className="h-full w-full text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center pt-28 bg1 pb-10 shadow-gray-700 shadow-md">
        <div className="w-52 h-auto sm:w-6/12 sm:h-auto overflow-hidden mx-auto shadow-black">
          <Image src={him} className="shadow-black" alt="me" />
        </div>

        <div className="sm:space-y-4 ">
          <div className="flex justify-center gap-2 text-white my-2 ">
            <FaGithub className="hover:text-black hover:scale-125 ease-in duration-150" />
            <FaInstagram className="hover:text-black hover:scale-125 ease-in duration-150" />
            <FaLinkedin className="hover:text-black hover:scale-125 ease-in duration-150" />
            <FaTwitter className="hover:text-black hover:scale-125 ease-in duration-150" />
          </div>
          <h1 className="font-bold capitalize text-2xl text-gray-100 sm:text-5xl tracking-wider">
            <span className="text-black">himanshu</span> shekhar
          </h1>

          <p className="underline underline-offset-4 decoration-black-200  text-cyan-100 text-1xl sm:text-3xl">
            <Typewriter
              words={["Frontend Developer", "Content Creator"]}
              loop={false}
              cursor
              // cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#">
              <button className="group button1 rounded-3xl px-2 py-1.5 sm:px-4 sm:py-3 my-3">
                Hire Me
                <IoMdArrowDropright
                  size={25}
                  className="inline group-hover:rotate-90 duration-200 ease-in"
                />
              </button>
            </Link>
            <Link href="#">
              <button className="group bg-white shadow-xl shadow-gray-600 hover:shadow-none hover:bg-black hover:text-white rounded-3xl px-2 py-1.5 sm:px-4 sm:py-3 my-3 ease-in duration-400">
                Get Resume
                <IoMdArrowDropright
                  size={25}
                  className="inline group-hover:rotate-90 duration-200 ease-in"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
