import Image from "next/image";
import Link from "next/link";
import React from "react";

import p1 from "../public/assets/p1.jpg";
import p2 from "../public/assets/p2.png";
import p3 from "../public/assets/p3.jpg";
import p4 from "../public/assets/p4.jpg";
import { BsArrowRight } from "react-icons/bs";
import YouTube from "react-youtube";

const YoutubeVideo = () => {
  const opts = {
    width: 300,

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const youtubeVideoId = [
    {
      id: 1,
      youtubeId: "liJVSwOiiwg",
    },
    {
      id: 2,
      youtubeId: "liJVSwOiiwg",
    },
    {
      id: 3,
      youtubeId: "liJVSwOiiwg",
    },
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="customComponentContainer">
        <h1 className="sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg1 py-6 ">
          Youtube Videos
        </h1>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-6 justify-items-center">
          {youtubeVideoId.map(({ id, youtubeId }) => (
            <div
              key={id}
              className="aspect-h-9 bg-gray-50 px-2 py-4 rounded-2xl shadow-2xl "
            >
              <YouTube videoId={youtubeId} opts={opts} />
              <h2 className="my-2">hello</h2>
            </div>
          ))}
        </div>
        <div className="flex justify-center text-center pt-8">
          <Link href="/portfolio-list">
            <div className="group font-bold cursor-pointer text-xl flex justify-center items-center capitalize tracking-wider text-cyan-800 underline hover:text-teal-600">
              Watch More
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

export default YoutubeVideo;
