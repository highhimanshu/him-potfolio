import React from "react";
import { useRouter } from "next/router";
import { RiRadioButtonFill } from "react-icons/ri";

import p1 from "../../public/assets/p1.jpg";
import Link from "next/link";

const portfolios = [
  {
    id: 1,
    title: "portfolio 1",
    imgScr: p1,
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
    imgScr: p1,
    url: "react-portfolio3",
    techStack: ["html", "css", "js"],
  },
  {
    id: 4,
    title: "portfolio 4",
    imgScr: p1,
    url: "react-portfolio4",
    techStack: ["html", "css", "js"],
  },
  {
    id: 5,
    title: "portfolio 5",
    imgScr: p1,
    url: "react-portfolio5",
    techStack: ["html", "css", "js"],
  },
  {
    id: 6,
    title: "portfolio 6",
    imgScr: p1,
    url: "react-portfolio6",
    techStack: ["html", "css", "js"],
  },
];

const getSinglePortfolioData = (url) =>
  portfolios.filter((ele) => ele.url == url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((currEle) => {
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
          <p>
            I built this application in React JS and is hosted on GitHub pages.
            This app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie
            data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The
            useContext hook is also being implemented for app-wide state
            management.
          </p>
          <a
            href="https://github.com/fireclint/netflix-react-tailwind"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" button1 px-8 py-2 mt-4 mr-8 rounded-3xl">
              Code
            </button>
          </a>
          <a
            href="https://fireclint.github.io/netflix-react-tailwind/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button1 px-8 py-2 mt-4 rounded-3xl">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> IMDB API
              </p>
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
