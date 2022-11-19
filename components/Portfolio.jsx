import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { myPortfolioData } from "../config/portfolioData";

const Portfolio = () => {
  return (
    <div id="portfolio" className="w-full">
      <div className="customComponentContainer">
        <h1 className="sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg1 py-6 ">
          Portfolio
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 gap-6 justify-items-center ">
          {myPortfolioData.map(({ id, title, imgScr, url, techStack }) => (
            <Link key={id} href={`/portfolio-list/${url}`}>
              <div className="cursor-pointer rounded-xl bg-white overflow-hidden mx-3 group shadow-md shadow-gray-600 hover:shadow-gray-400 duration-100 ease-in">
                <Image
                  src={imgScr}
                  alt={title}
                  width="450px"
                  height="300px"
                  // layout="responsive"
                  className="hover:scale-105 duration-300 ease-in rounded"
                />
                <p className="text-cyan-800 capitalize font-bold font-base text-md py-3 ">
                  {title}
                </p>
                <div className="flex m-2 justify-start gap-4 items-center">
                  {techStack.map(({ index, techImg, techName }) => (
                    <div
                      key={index}
                      className="rounded-md bg1 px-2 pt-2 shadow-lg shadow-gray-400 h-fit w-fit ease-in duration-150 hover:scale-105"
                    >
                      <Image
                        src={techImg}
                        height={20}
                        width={20}
                        objectFit="contain"
                        alt="himanshu"
                        title={techName}
                      />
                    </div>
                  ))}
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
