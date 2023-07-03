import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-start md:text-5xl lg:text-6xl">
              Hello 👋
            </h1>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-start md:text-5xl lg:text-6xl">
              I am{" "}
              <mark className="px-2 text-white rounded bg-primary-600">
                &#160;Maheshh Balwan&#160;
              </mark>
            </h1>
            <h1 className="mt-8 mb-8 font-medium leading-none tracking-tight text-gray-500 mt-8text-lg text-start">
              Welcome to my portfolio website.💻👨‍💻
            </h1>
            <Link
              to="/contact"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
            >
              Let's Connect
            </Link>
          </div>
          {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://avatars.githubusercontent.com/u/85355816?v=4"
              alt="mockup"
            />
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Hero;
