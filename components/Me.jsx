import Image from "next/image";
import Link from "next/link";
import React from "react";
import himanshu from "../public/assets/himanshu.png";
import { HiOutlineDownload } from "react-icons/hi";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="customComponentContainer">
        <h2 className="sm:text-5xl text-4xl font-extrabold text-transparent bg-clip-text bg1 ">
          About Me
        </h2>

        <div className="container shadow-xl bg-white rounded-xl p-8 my-8">
          <div className="flex justify-end flex-col md:flex-row items-center ">
            <div className="px-5 ">
              <Image
                src={himanshu}
                alt="me"
                objectFit="fill"
                className="bg1 rounded-xl"
              />
            </div>

            <div className="text-left mx-6 py-6 lg:py-2 ">
              <h2> Himanshu Shekhar</h2>
              <p className="py-2">
                Hi, I am a software engineer with 3.5+ year of experience. I
                mainly work as a frontend developer(web developer). I have
                worked on multiple frontend project with multiple organization.I
                also create content on youtube regarding software engineering
                and web development.
              </p>

              <a
                type="button"
                href="/assets/himanshu_resume.pdf"
                className="button1 p-2 px-3 rounded-3xl"
                download
              >
                <HiOutlineDownload className="inline items-center " size={25} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
