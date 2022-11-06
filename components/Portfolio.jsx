import Image from "next/image";
import Link from "next/link";
import React from "react";

import p1 from "../public/assets/p1.jpg";
import p2 from "../public/assets/p2.png";
import p3 from "../public/assets/p3.jpg";
import p4 from "../public/assets/p4.jpg";
import { BsArrowRight } from "react-icons/bs";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "portfolio 1",
      imgScr: p4,
      url: "react-portfolio1",
      techStack: ["html", "css", "js"],
    },
    {
      id: 2,
      title: "portfolio 2",
      imgScr: p1,
      url: "react-portfolio2",
      techStack: ["tailwind", "react", "jquery"],
    },
    {
      id: 3,
      title: "portfolio 3",
      imgScr: p2,
      url: "react-portfolio3",
      techStack: ["html", "css", "js"],
    },
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="customComponentContainer">
        <h1 className="sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg1 py-6 ">
          Portfolio
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 gap-8 justify-items-center">
          {portfolios.map(({ id, title, imgScr, url, techStack }) => (
            <Link key={id} href={`/portfolio-list/${url}`}>
              <div className="cursor-pointer rounded overflow-hidden mx-3 group shadow-md shadow-gray-600 hover:shadow-gray-400 duration-100 ease-in">
                <Image
                  src={imgScr}
                  alt={title}
                  className="hover:scale-105 duration-300 ease-in rounded"
                />
                <p className="text-cyan-800 capitalize font-bold font-base text-md py-3 ">
                  {title}
                </p>
                <div className="grid grid-flow-col auto-cols-max justify-between">
                  <span className="badge">{techStack[0]}</span>
                  <span className="badge">{techStack[1]}</span>
                  <span className="badge">{techStack[2]}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center text-center pt-8">
          <Link href="/portfolio-list">
            <div className="group font-bold cursor-pointer text-xl flex justify-center items-center capitalize tracking-wider text-cyan-800 underline hover:text-teal-600">
              See More
              <span className="duration-150 ease-in group-hover:translate-x-3 px-2">
                <BsArrowRight size={20} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
