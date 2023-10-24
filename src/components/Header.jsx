import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="z-50 flex flex-wrap w-full py-4 text-sm bg-white sm:justify-start sm:flex-nowrap">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-none text-xl font-semibold">
            <img src="/logo.svg" className="h-5" alt="Maheshh Balwan" />
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
              data-hs-collapse="#navbar-with-collapse"
              aria-controls="navbar-with-collapse"
              aria-label="Toggle navigation"
              onClick={handleToggle}
            >
              <svg
                className={`w-4 h-4 ${isNavbarOpen ? 'hidden' : 'block'}`}
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg
                className={`w-4 h-4 ${isNavbarOpen ? 'block' : 'hidden'}`}
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-with-collapse" className={`sm:block ${isNavbarOpen ? 'visible' : 'hidden'}`}>
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <Link to="/home" className="font-medium text-blue-500" aria-current="page">
              Home
            </Link>
            <Link to="/portfolio" className="font-medium text-gray-600 hover:text-gray-400">
              Portfolio
            </Link>
            <Link to="/contact" className="font-medium text-gray-600 hover:text-gray-400">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
