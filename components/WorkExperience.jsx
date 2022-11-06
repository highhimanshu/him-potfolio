import React from "react";

const WorkExperience = () => {
  return (
    <div className="w-full" id="work-experience">
      <div className="customComponentContainer">
        <h1 className="sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg1 py-6 ">
          Work Experience
        </h1>

        <ol className="border-l-2 border-cyan-600">
          <li>
            <div className="md:flex flex-start">
              <div className="bg1 w-6 h-6 flex items-center justify-center rounded-full -ml-2.5">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="text-white w-3 h-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
              </div>
              <div className="block p-6 text-left rounded-lg shadow-lg bg-gray-50 max-w-max ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <h2>Husqvarna</h2>
                  <span>1/04/3002</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Quisque scelerisque diam non nisi semper, et elementum
                  lorem ornare. Maecenas placerat facilisis mollis. Duis
                  sagittis ligula in sodales vehicula.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="md:flex flex-start">
              <div className="bg1 w-6 h-6 flex items-center justify-center rounded-full -ml-2.5">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="text-white w-3 h-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
              </div>
              <div className="block p-6 text-left rounded-lg shadow-lg bg-gray-50 max-w-max ml-6 mb-4">
                <div className="flex justify-between mb-4">
                  <h2>Husqvarna</h2>
                  <span>1/04/3002</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Quisque scelerisque diam non nisi semper, et elementum
                  lorem ornare. Maecenas placerat facilisis mollis. Duis
                  sagittis ligula in sodales vehicula.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WorkExperience;
