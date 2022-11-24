import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Card = (props) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg relative border-2 shadow-lg shadow-gray-300 text-center">
        <div className="relative border-4 border-gray-100 shadow-lg shadow-gray-400 hover:shadow-cyan-400 hover:scale-105 duration-300 ease-in rounded ">
          <Image
            src={props.snap}
            alt={props.title}
            width="840px"
            height="450px"
            objectFit="cover"
            className=" "
          />
        </div>

        <h5 className="tracking-widest text-xs font-medium mt-6 title-font">
          {props.url}
        </h5>
        <h3 className="md:text-2xl my-3 leading-relaxed text-base line-clamp-1">
          {props.title}
        </h3>
        {props.description != "" && (
          <p className="leading-relaxed text-base line-clamp-2">
            {props.description}
          </p>
        )}
        <div className="flex m-2 justify-center gap-4 items-center">
          {props.techStack &&
            props.techStack.map(({ index, techImg, techName }) => (
              <div
                key={index}
                className="rounded-md px-2 pt-2 shadow-lg shadow-gray-400 hover:shadow-cyan-400 h-fit w-fit ease-in duration-150 hover:scale-105"
              >
                <Image
                  src={techImg}
                  height={20}
                  width={20}
                  objectFit="contain"
                  alt={techName}
                  title={techName}
                />
              </div>
            ))}
        </div>
        <div className="mt-8">
          <button
            type="button"
            className="group inline-flex items-center justify-center duration-300 ease-in  hover:shadow-cyan-400 hover:text-teal-600 hover:underline decoration-cyan-400 hover:underline-offset-4 "
          >
            Read More
            <span className="duration-300 ease-in group-hover:translate-x-3 px-2">
              <BsArrowRight size={20} />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
