import React from "react";

export default function AboutMe() {
  return (
    <section className="pt-8 bg-white">
      <div className="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 text-align: justify sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            About Me
          </h2>
          <p className="text-justify">
            Hello, I am Maheshh Balwan (Mahesh Kumar) and I am a full-time
            Software Engineer. I have extensive experience working with Front
            End Technologies such as React and JavaScript. I thoroughly enjoy
            the process of building products and delivering high-quality
            solutions to meet customer requirements.
          </p>
          <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
            <p className="italic font-medium leading-relaxed text-gray-900">
              "Learners are the architects of their own success, and builders
              are the craftsmen who bring their visions to life."
            </p>
          </blockquote>
          <p className="text-justify">
            As a software engineer, I value clean and efficient code,
            prioritizing readability and maintainability. I am detail-oriented
            and take pride in writing code that is not only functional but also
            well-structured and easily understandable by fellow developers.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="office content 1"
          />
          <img
            className="w-full mt-4 rounded-lg lg:mt-10"
            src="https://images.pexels.com/photos/5240544/pexels-photo-5240544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
