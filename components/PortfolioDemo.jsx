import Link from "next/link";
import React from "react";
import { myPortfolioData } from "../config/portfolioData";
import { BsArrowRight } from "react-icons/bs";
import Card from "./Card";

const PortfolioDemo = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="customComponentContainer">
          <h2 className="text-transparent bg-clip-text bg1 py-3 ">
            Portfolio
            <div className="h-1 w-20 bg1 mx-auto rounded my-3"></div>
          </h2>

          <div className="flex flex-wrap -m-4">
            {myPortfolioData
              .slice(0, 3)
              .map(({ id, title, snap, url, techStack }) => (
                <Link key={id} href={`/portfolio-list/${url}`}>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <Card
                      id={id}
                      title={title}
                      snap={snap}
                      description=""
                      url={url}
                      techStack={techStack}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="flex justify-center text-center">
          <Link href="/portfolio-list">
            <div className="group  cursor-pointer text-xl flex justify-center items-center capitalize tracking-wider text-cyan-800 underline hover:text-teal-600 underline-offset-4">
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
