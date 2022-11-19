import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import BsYoutube from "react-icons/bs";

export const SocialIcons = ({ size, colorBlack, colorWhite }) => {
  return (
    <>
      <a
        href="https://www.youtube.com/channel/UCWZqpQXPCo6AZg7bpm4ZcZg/videos"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-gray-300 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-100"
      >
        <FaYoutube size={size} color={colorBlack} />
      </a>
      <a
        href="https://www.linkedin.com/in/himanshushekhar020/"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-gray-300 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-100"
      >
        <FaLinkedin size={size} color={colorBlack} />
      </a>
      <a
        href="https://www.instagram.com/himanshu.create/"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-gray-300 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-100"
      >
        <FaInstagram size={size} color={colorBlack} />
      </a>
    </>
  );
};
