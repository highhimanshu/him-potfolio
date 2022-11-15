import React from "react";
import { TbBuildingBank } from "react-icons/tb";
import Badge from "./Badge";
import Styles from "./common.module.css";

const Education = () => {
  return (
    <div id="education" className="w-full">
      <div className="customComponentContainer">
        <h2 className="sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg1 py-6 ">
          Education
        </h2>

        {/* <!-- component --> */}
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 ">
            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              <div className="bg-white col-start-1 text-left col-end-5 p-4 rounded-xl my-4 ml-auto w-full shadow-md">
                <div className="flex justify-between items-center ">
                  <h3 className="font-semibold text-lg mb-1">
                    Bachelor in Technology
                  </h3>

                  <Badge year="2014 to 2018" />
                </div>
                <hr className="border-0 bg-gray-200 h-px mb-2" />

                <p className="leading-tight text-justify">
                  KIIT University, Bhubaneswar
                </p>
                <p>
                  Major -
                  <span className="italic mx-1 font-black">
                    Electronics and Telecommunication
                  </span>
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg1 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg1 shadow"></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative ">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg1 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg1 shadow"></div>
              </div>
              <div className="bg-white text-left col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg mb-1">12th</h3>
                  <Badge year="2011 to 2013" />
                </div>
                <hr className="border-0 bg-gray-200 h-px mb-2" />

                <p className="leading-tight text-justify">
                  Oxford Public School, Ranchi
                </p>
                <p>
                  Major -<span className="italic mx-1 font-black">PCM</span>
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              <div className="bg-white col-start-1 text-left col-end-5 p-4 rounded-xl my-4 ml-auto w-full shadow-md">
                <div className="flex justify-between items-center ">
                  <h3 className="font-semibold text-lg mb-1">10th</h3>

                  <Badge year="till 2011" />
                </div>
                <hr className="border-0 bg-gray-200 h-px mb-2" />

                <p className="leading-tight text-justify">
                  Sacred Heart School, Ranchi
                </p>
                <p>
                  Major -
                  <span className="italic mx-1 font-black">
                    Eng, Hindi, Science, Maths History ,Computer
                  </span>
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg1 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg1 shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
