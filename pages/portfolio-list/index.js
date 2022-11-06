import Image from "next/image";
import Link from "next/link";

import p1 from "../../public/assets/p1.jpg";

export async function getStaticProps(context) {
  const portfoliosData = [
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
      <div className="customComponentContainer">
        <h1 className="sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg1 py-6 ">
          Portfolio
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 gap-8 justify-items-center">
          {portfoliosData.map(({ id, title, imgScr, url, techStack }) => (
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
                  <span class="badge">{techStack[0]}</span>
                  <span class="badge">{techStack[1]}</span>
                  <span class="badge">{techStack[2]}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
