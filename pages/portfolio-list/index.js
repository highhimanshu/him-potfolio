import Image from "next/image";
import Link from "next/link";

import p1 from "../../public/assets/p1.jpg";
import { myImageList, portfolioImages } from "../../config/allImages";

export async function getStaticProps(context) {
  const portfoliosData = [
    {
      id: 1,
      title: "askamu - create online store",
      imgScr: portfolioImages.askamuSnapshot,
      url: "askamu",
      techStack: [
        { techImg: myImageList.html, techName: "html" },
        { techImg: myImageList.css, techName: "css" },
        { techImg: myImageList.js, techName: "java script" },
      ],
    },
    {
      id: 2,
      title: "What About Coding",
      imgScr: portfolioImages.wacSnapshot,
      url: "wac",
      techStack: [
        { techImg: myImageList.html, techName: "html" },
        { techImg: myImageList.css, techName: "css" },
        { techImg: myImageList.js, techName: "java script" },
      ],
    },
    {
      id: 3,
      title: "The Beta World",
      imgScr: portfolioImages.betaWorldSnapshot,
      url: "the_beta_world",
      techStack: [
        { techImg: myImageList.html, techName: "html" },
        { techImg: myImageList.css, techName: "css" },
        { techImg: myImageList.js, techName: "java script" },
        { techImg: myImageList.react, techName: "react" },
      ],
    },
  ];

  return {
    props: { portfoliosData },
  };
}

const PortfolioList = ({ portfoliosData }) => {
  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div id="portfolio" className="w-full">
      <div className="h-max">
        <div className="flex bg1 h-96 justify-center items-center py-50 shadow-xl shadow-gray-400 relative">
          <h1 className="text-4xl text-white">Portfolio List</h1>
          <span className="absolute left-4 bottom-4 text-white bg-black text-xs sm:text-sm px-5 rounded-xl">
            /portfolio-list
          </span>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 gap-8 justify-items-center">
          {portfoliosData.map(({ id, title, imgScr, url, techStack }) => (
            <Link key={id} href={`/portfolio-list/${url}`}>
              <div className="cursor-pointer rounded overflow-hidden mx-3 group shadow-md shadow-gray-600 hover:shadow-gray-400 duration-100 ease-in">
                <Image
                  src={imgScr}
                  alt={title}
                  width="450px"
                  height="300px"
                  className="hover:scale-105 duration-300 ease-in rounded"
                />
                <p className="text-cyan-800 capitalize font-bold font-base text-md py-3 ">
                  {title}
                </p>
                {/* <div className="grid grid-flow-col auto-cols-max justify-between">
                  <span className="badge">{techStack[0]}</span>
                  <span className="badge">{techStack[1]}</span>
                  <span className="badge">{techStack[2]}</span>
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
