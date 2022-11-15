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
      <div className="rounded-full bg-gray-300 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-100">
        <FaFacebook size={size} color={colorBlack} />
      </div>
      <div className="rounded-full bg-gray-300 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-100">
        <FaYoutube size={size} color={colorBlack} />
      </div>
      <div className="rounded-full bg-gray-300 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-100">
        <FaLinkedin size={size} color={colorBlack} />
      </div>
      <div className="rounded-full bg-gray-300 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-100">
        <FaInstagram size={size} color={colorBlack} />
      </div>
    </>
  );
};
