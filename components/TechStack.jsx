import React from "react";
import html from "../public/assets/html.png";
import css from "../public/assets/css.png";
import js from "../public/assets/javascript.png";
import react from "../public/assets/react.png";
import nextjs from "../public/assets/nextjs.png";
import tailwind from "../public/assets/tailwind.png";
import nodejs from "../public/assets/node.png";
import github from "../public/assets/github.png";
import graphql from "../public/assets/graphql.png";
import Image from "next/image";

const TeckStack = () => {
  const technology = [
    {
      id: 1,
      language: "html",
      image: html,
    },
    {
      id: 2,
      language: "css",
      image: css,
    },
    {
      id: 3,
      language: "js",
      image: js,
    },
    {
      id: 4,
      language: "react",
      image: react,
    },
    {
      id: 4,
      language: "react",
      image: react,
    },
    {
      id: 4,
      language: "react",
      image: react,
    },
    {
      id: 4,
      language: "react",
      image: react,
    },
    {
      id: 4,
      language: "react",
      image: react,
    },
  ];

  return (
    <div id="techstack" className="w-full">
      <div className="customComponentContainer">
        <h2 className="sm:text-5xl text-4xl font-extrabold text-transparent bg-clip-text bg1 ">
          Teck Stack
        </h2>
        <p className="py-4 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          dignissimos expedita, odit dicta ipsa eius porro excepturi deserunt et
          amet praesentium quo, mollitia culpa est nemo voluptate cupiditate
          aperiam? Aliquam?
        </p>

        <div className="grid grid-cols-1 mt-8 gap-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {technology.map(({ id, language, image }) => (
            <div
              key={id}
              class="flex justify-between items-center rounded-xl bg-white p-6 shadow-lg h-3/4 ease-in duration-150 hover:scale-105"
            >
              <Image src={image} height={80} width={60} objectFit="contain" />
              <h2 class="font-semibold text-cyan-800 uppercase text-xl md:text-2xl">
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
