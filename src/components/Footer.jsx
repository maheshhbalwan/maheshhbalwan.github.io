import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-4 bg-white">
      <hr className="h-px my-8 border-0 bg-primary-200" />
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="my-6 text-gray-500">
          Feel free to share opportunities and work with me. Let's connect!
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-4 mb-6 text-gray-900">
          <li>
            <Link to="/home" className=" hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className=" hover:underline">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className=" hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center">
          © 2020-2023{" "}
          <Link to="/home" className="hover:underline">
            Maheshh Balwan™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
