import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  console.log("Navbar rendered");
  return (
    <>
      <nav className="bg-white">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a
            href="https://maheshhbalwan.github.io/"
            className="flex items-center"
          >
            <img src="/logo.svg" className="h-5" alt="Maheshh Balwan" />
          </a>
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isNavbarOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`${
              isNavbarOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="/home"
                  className="block py-2 pl-3 pr-4 text-white rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0 hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="block py-2 pl-3 pr-4 text-white rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0 hover:underline"
                  aria-current="page"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-white rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0 hover:underline"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
