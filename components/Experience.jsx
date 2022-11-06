import React from "react";
import { TbBuildingBank } from "react-icons/tb";
import Styles from "./common.module.css";

const Experience = () => {
  return (
    <div id="experience" className="w-full">
      <div className="customComponentContainer">
        <span className="flex justify-center items-center ">
          <TbBuildingBank color="black" className={Styles.CustomIcon} />
          <h2 className="sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg1 py-6 ">
            Experience
          </h2>
        </span>

        {/* <!-- component --> */}
        <div class="container">
          <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 ">
            {/* <!-- left --> */}
            <div class="flex flex-row-reverse md:contents">
              <div class="bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p class="leading-tight text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg1 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg1 shadow"></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg1 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg1 shadow"></div>
              </div>
              <div class="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p class="leading-tight text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div class="flex flex-row-reverse md:contents">
              <div class="bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p class="leading-tight text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg1 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg1 shadow"></div>
              </div>
            </div>

            {/* <!-- right --> */}
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg1 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg1 shadow"></div>
              </div>
              <div class="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p class="leading-tight text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
