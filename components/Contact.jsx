import Image from "next/image";
import React from "react";
import p4 from "../public/assets/p4.jpg";
import { SocialIcons } from "./SocialIcons";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="customComponentContainer">
        <h2 className="text-transparent bg-clip-text bg1 py-3 ">
          Contact
          <div class="h-1 w-20 bg1 mx-auto rounded my-3"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="col-span-1 rounded-xl p-6 bg1 hidden md:block text-white">
            <Image
              src={p4}
              className="rounded-xl border border-cyan-900"
              objectFit="fill"
              alt="CONTACT-US"
            />
            <h2 className="text-sm sm:text-lg">Himanshu Shekhar</h2>
            <p>Frontend dev</p>
            <div className="flex justify-start gap-x-4 py-3">
              <SocialIcons size={15} colorBlack="black" colorWhite="white" />
            </div>
          </div>

          <div className="col-span-2 shadow-xl bg-white rounded-xl px-6 py-6 ">
            <form>
              {/* name */}
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="name"
                  name="floating_name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Name
                </label>
              </div>

              {/* email */}
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email address
                </label>
              </div>

              {/* area */}

              <div className="relative z-0 mb-6 w-full group">
                <textarea
                  type="text"
                  rows={4}
                  name="floating_email"
                  id="large-input"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Message
                </label>
              </div>

              <button type="submit" className="button1 w-full p-2.5 rounded-xl">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
