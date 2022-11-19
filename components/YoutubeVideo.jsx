import Image from "next/image";
import Link from "next/link";
import React from "react";

import p1 from "../public/assets/p1.jpg";
import p2 from "../public/assets/p2.png";
import p3 from "../public/assets/p3.jpg";
import p4 from "../public/assets/p4.jpg";
import { BsArrowRight } from "react-icons/bs";
import YouTube from "react-youtube";
// import Style from "..common.modules.css";

const YoutubeVideo = () => {
  const youtubeVideoId = [
    {
      id: 1,
      youtubeId: "gOa5GGw40pk",
    },
    {
      id: 2,
      youtubeId: "ATiMs3P_HCY",
    },
    {
      id: 3,
      youtubeId: "HTD08RwxzBM",
    },
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="customComponentContainer">
        <h1 className="sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg1 py-6 ">
          Youtube Videos
        </h1>

        <div className="wrapper">
          <div className="flex sm:flex-row md:flex-column justify-evenly gap-1 items-center flex-wrap mx-auto">
            {youtubeVideoId.map(({ id, youtubeId }) => (
              <div className="video-container" key={id}>
                <iframe
                  width="320"
                  height="215"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center text-center pt-8">
          <Link href="https://www.youtube.com/channel/UCWZqpQXPCo6AZg7bpm4ZcZg">
            <a
              className="group font-bold cursor-pointer text-xl flex justify-center items-center capitalize tracking-wider text-cyan-800 underline hover:text-teal-600"
              target="_blank"
            >
              Watch More
              <span className="duration-150 ease-in group-hover:translate-x-3 px-2">
                <BsArrowRight size={20} />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
