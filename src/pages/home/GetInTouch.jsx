import React from "react";
import { Link } from "react-router-dom";
import { HiOutlinePhone } from "react-icons/hi";

function GetInTouch() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
            Let's hop on a call!
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            I am either working or making projects or practicing DSA
            (sometimes😛).
            <br /> I prefer to take calls in 2nd half of the day
          </p>
          <div className="flex flex-col mb-4 space-y-4 lg:mb-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border rounded-lg bg-primary-600 hover:text-white border-primary-300 hover:bg-primary-700 focus:ring-4 focus:ring-primary-100"
            >
              Let's talk noww &nbsp;
              <HiOutlinePhone />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
