import React from "react";
import { useRouter } from "next/router";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { myImageList, portfolioImages } from "../../config/allImages";
import { myPortfolioData } from "../../config/portfolioData";

const getSinglePortfolioData = (url) =>
  myPortfolioData.filter((ele) => ele.url == url)[0];

export async function getStaticPaths() {
  const paths = myPortfolioData.map((currEle) => {
    return {
      params: { id: currEle.url },
    };
  });

  console.log("paths", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log("context ", context);

  const portfolio = getSinglePortfolioData(context.params.id);

  console.log("return port data", portfolio);

  return {
    props: { portfolio },
  };
}

const SinglePortfolio = ({ portfolio }) => {
  console.log("single portfolio data", portfolio);

  return (
    <div className="w-full">
      <div className="h-max">
        <div className="flex bg1 h-96 justify-center items-center py-50 shadow-xl shadow-gray-400 relative">
          <h1 className="text-4xl text-white">{portfolio.title}</h1>
          <span className="absolute left-4 bottom-4 text-white bg-black text-xs sm:text-sm px-5 rounded-xl">
            /portfolio-list/{portfolio.url}
          </span>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-10">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{portfolio.description}</p>
          {portfolio.gitHubLink && (
            <a href={portfolio.gitHubLink} target="_blank">
              <button className=" button1 px-8 py-2 mt-4 mr-8 rounded-3xl">
                Code
              </button>
            </a>
          )}
          {portfolio.websiteLink && (
            <a href={portfolio.websiteLink} target="_blank">
              <button className="button1 px-8 py-2 mt-4 rounded-3xl">
                Demo
              </button>
            </a>
          )}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {portfolio.techStack.map((eachName, index) => (
                <p
                  key={index}
                  className="text-gray-600 py-2 flex items-center capitalize"
                >
                  <RiRadioButtonFill className="pr-1 " /> {eachName.techName}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/portfolio-list">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default SinglePortfolio;
