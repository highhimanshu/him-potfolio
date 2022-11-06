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
    height: "300",
    width: "100%",

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

        <div className="flex flex-col md:flex-row  justify-center gap-4 md:gap-8 mx-5">
          {youtubeVideoId.map(({ id, youtubeId }) => (
            <div
              key={id}
              className="cursor-pointer rounded-xl overflow-hidden group shadow-md shadow-gray-600 hover:shadow-gray-400 duration-100 ease-in"
            >
              <YouTube videoId={youtubeId} opts={opts} />;
            </div>
          ))}
        </div>
        <div className="flex justify-center text-center pt-8">
          <Link href="/portfolio-list">
            <div class="group font-bold cursor-pointer text-xl flex justify-center items-center capitalize tracking-wider text-cyan-800 underline hover:text-teal-600">
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
