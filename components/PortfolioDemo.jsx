import Image from "next/image";
import Link from "next/link";
import React from "react";
import { myPortfolioData } from "../config/portfolioData";
import { BsArrowRight } from "react-icons/bs";

const PortfolioDemo = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="customComponentContainer">
          <h2 className="text-transparent bg-clip-text bg1 py-3 ">
            Portfolio
            <div class="h-1 w-20 bg1 mx-auto rounded my-3"></div>
          </h2>

          <div class="flex flex-wrap -m-4">
            {myPortfolioData.map(
              ({ id, title, imgScr, description, url, techStack }) => (
                <Link key={id} href={`/portfolio-list/${url}`}>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="bg-white p-6 rounded-lg relative border-2 shadow-lg shadow-gray-300">
                      <div className="relative border-4 border-gray-100 shadow-lg shadow-gray-400 hover:scale-105 duration-300 ease-in rounded ">
                        <Image
                          src={imgScr}
                          alt={title}
                          width="840px"
                          height="450px"
                          objectFit="cover"
                          className=" "
                        />
                      </div>

                      <h5 class="tracking-widest text-indigo-500 text-xs font-medium mt-6 title-font">
                        {url}
                      </h5>
                      <h4 class=" font-medium title-font my-3">{title}</h4>
                      <p class="leading-relaxed text-base line-clamp-2">
                        {description}
                      </p>
                      <div className="flex m-2 justify-center gap-4 items-center">
                        {techStack.map(({ index, techImg, techName }) => (
                          <div
                            key={index}
                            className="rounded-md px-2 pt-2 shadow-lg shadow-gray-400 h-fit w-fit ease-in duration-150 hover:scale-105"
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
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex justify-center text-center">
          <Link href="/portfolio-list">
            <div className="group font-bold cursor-pointer text-xl flex justify-center items-center capitalize tracking-wider text-cyan-800 underline hover:text-teal-600">
              See More
              <span className="duration-150 ease-in group-hover:translate-x-3 px-2">
                <BsArrowRight size={20} />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PortfolioDemo;
