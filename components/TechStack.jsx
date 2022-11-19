import React from "react";

import Image from "next/image";

import { myImageList } from "../config/allImages";

const TeckStack = () => {
  const technology = [
    {
      id: 1,
      language: "html",
      image: myImageList.html,
    },
    {
      id: 2,
      language: "css",
      image: myImageList.css,
    },
    {
      id: 3,
      language: "js",
      image: myImageList.js,
    },
    {
      id: 4,
      language: "jquery",
      image: myImageList.jquery,
    },
    {
      id: 5,
      language: "react",
      image: myImageList.react,
    },
    {
      id: 6,
      language: "nextjs",
      image: myImageList.nextjs,
    },
    {
      id: 7,
      language: "bootstrap",
      image: myImageList.bootstrap,
    },
    {
      id: 8,
      language: "tailwind",
      image: myImageList.tailwind,
    },
    {
      id: 9,
      language: "GIT",
      image: myImageList.githubDark,
    },
    {
      id: 10,
      language: "Agile",
      image: myImageList.agile,
    },
  ];

  return (
    <div id="tech" className="w-full">
      <div className="customComponentContainer">
        <h2 className="sm:text-5xl text-4xl font-extrabold text-transparent bg-clip-text bg1 ">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 mt-8 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {technology.map(({ id, language, image }) => (
            <div
              key={id}
              className="flex justify-between gap-y-4 flex-col md:flex-row items-center rounded-xl bg-white p-6 shadow-lg h-3/4 ease-in duration-150 hover:scale-105"
            >
              <Image
                src={image}
                height={80}
                width={60}
                objectFit="contain"
                alt="himanshu"
              />
              <h2 className="font-semibold text-cyan-800 uppercase text-xl md:text-2xl">
                {language}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeckStack;
