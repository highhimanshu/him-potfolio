import React from "react";

const WorkExperience = () => {
  const experienceDetails = [
    {
      id: 1,
      companyName: "Mindtree Ltd",
      period: "Aug,2021 - current",
      companyProject: " HUSQVARNA GARDENA ECOMMERCE",
      about: [
        {
          a1: "Developed a fully responsive homepage on the top of SAP Hybris e-commerce solution",
        },
        {
          a1: "Joined as a Single UI developer, and structure the whole website width, to ensure  optimized view on all the devices",
        },
      ],
      technologyUsed: {
        t1: "Java Script",
        t2: "jQuery ",
        t3: "JSP",
        t4: "Bootstrap",
        t5: "HTML",
        t5: "CSS",
      },
    },
    {
      id: 2,
      companyName: "Freelance",
      period: "Sept, 2020 - March, 2021",
      companyProject: "BLOOMING HEIGHTS",
      about: [
        { a1: "Connecting metamask wallet using ether js library" },
        {
          a1: "Importing data from abi and displaying chart , graphs and table for analysis",
        },
      ],
      technologyUsed: {
        t1: "Web 3",
        t2: "React Js",
        t3: "Next Js",
        t4: "Ether Js ",
        t5: " React Bootstrap",
      },
    },
    {
      id: 3,
      companyName: "Deloitte USI",
      period: "Nov 2019 - Jun 2020",
      companyProject: "ETHERSAM TESTING",
      about: [
        { a1: "Responsible for optimizing UI based on React Material UI" },
        {
          a1: "Worked on receiving data from the backend and population relevant data on the screen",
        },
      ],
      technologyUsed: {
        t1: "React JS",
        t2: "Django Js",
        t3: "Celery",
        t4: "Material UI ",
        t5: "Azure Devops",
        t5: "GIT",
      },
    },
  ];

  return (
    <div className="w-full" id="experience">
      <div className="customComponentContainer">
        <h3 className="text-transparent bg-clip-text bg1 py-3 ">
          Work Experience
          <div className="h-1 w-20 bg1 mx-auto rounded my-3"></div>
        </h3>

        <ol className="border-l-2 border-cyan-600">
          {experienceDetails.map(
            ({
              id,
              companyName,
              companyProject,
              period,
              about,
              technologyUsed,
            }) => (
              <li key={id}>
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
                  <div className="block p-6 text-left rounded-lg shadow-lg bg-gray-50 w-full text-gray-600 ml-6 mb-10">
                    <div className="flex justify-between mb-2">
                      <h4>{companyProject}</h4>
                      <span>{period}</span>
                    </div>

                    <p className="my-2">{companyName}</p>

                    <ul className="space-y-1 list-inside text-gray-500">
                      {about.map((each, index) => (
                        <li className="flex items-start" key={index}>
                          <svg
                            className="w-4 h-4 mr-1.5 mt-1 text-gray-400 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {each.a1}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 p-1 text-gray-700 sm:text-md capitalize text-sm shadow-md bg-gray-100 shadow-gray-300 max-w-max rounded-lg">
                      Technology Used :
                      <span className="mx-2 font-semibold tracking-wide">
                        {technologyUsed.t1 ? `${technologyUsed.t1}` : ""}
                        {technologyUsed.t2 ? `${", " + technologyUsed.t2}` : ""}
                        {technologyUsed.t3 ? `${", " + technologyUsed.t3}` : ""}
                        {technologyUsed.t4 ? `${", " + technologyUsed.t4}` : ""}
                        {technologyUsed.t5 ? `${", " + technologyUsed.t5}` : ""}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default WorkExperience;
