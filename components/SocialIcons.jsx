import React from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaLink,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export const SocialIcons = ({ size, colorBlack, colorWhite }) => {
  return (
    <>
      <div className="rounded-full bg-gray-300 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-100">
        <FaFacebook size={size} color={colorBlack} />
      </div>
      <div className="rounded-full bg-gray-300 shadow-lg  shadow-gray-500 p-3 hover:bg-gray-100">
        <FaGithub size={size} color={colorBlack} />
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
