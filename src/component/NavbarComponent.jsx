import { useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import logo from "../assets/img/logo/Logo.png";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 z-10 w-full bg-primary dark:bg-dark">
      <div className="container">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="px-4">
            <Link
              to="/"
              className="block text-lg font-bold text-light dark:text-light lg:text-2xl hover:text-primary"
            >
              <img src={logo} alt="Logo" className="w-24 h-14" />
            </Link>
          </div>

          {/* Button Hamburger */}
          <button
            onClick={toggleMenu}
            className="py-4 px-4 absolute right-4 block items-center text-white lg:hidden"
          >
            {isMenuOpen ? (
              <i className="ri-close-line text-2xl"></i> // Icon Close
            ) : (
              <i className="ri-menu-line text-2xl"></i> // Icon Menu
            )}
          </button>

          {/* Navigation Menu */}
          <nav
            className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="block justify-end lg:flex">
              <li className="group">
                <Link
                  to="/"
                  className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                >
                  Beranda
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/about"
                  className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                >
                  Tentang Kami
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/contact"
                  className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                >
                  Contact Kami
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/course"
                  className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                >
                  Bootcamp Kami
                </Link>
              </li>

              <li className="mt-3 flex items-center pl-8 lg:mt-0">
                {/* Dark Mode Toggle */}
                <div className="flex">
                  <span className="mr-2 text-sm text-slate-500">light</span>
                  <input type="checkbox" className="hidden" id="dark-toggle" />
                  <label htmlFor="dark-toggle">
                    <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                      <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                    </div>
                  </label>
                  <span className="ml-2 text-sm text-slate-500">dark</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
