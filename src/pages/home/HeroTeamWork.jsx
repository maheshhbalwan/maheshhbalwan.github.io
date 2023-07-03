import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";

function HeroTeamWork() {
  return (
    <section className="bg-white">
      <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="hidden w-full rounded-lg lg:block"
          src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="dashboard image"
        />

        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            In teamwork and shared vision, I find strength and purpose.
          </h2>
          <p className="mb-8 text-justify text-gray-500">
            Nurtured by a deep appreciation for collaboration and a shared
            vision, I have honed my skills as both an independent achiever and a
            valuable team member. Inspired by my journey, I bring a versatile
            approach to any task, seamlessly transitioning between individual
            endeavors and thriving within diverse team dynamics. Recognizing the
            importance of my role, I actively contribute towards our collective
            objectives, driven by a common purpose.
          </p>
          <div className="flex flex-col gap-2 mb-4 space-y-4 lg:mb-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border rounded-lg bg-primary-600 hover:text-white border-primary-300 hover:bg-primary-700 focus:ring-4 focus:ring-primary-100"
            >
              Let's Chat Maheshh &nbsp;
              <HiOutlinePhone />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroTeamWork;
