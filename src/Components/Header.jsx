import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { aboutComponent } from "./About";

export const Header = () => {
  return (
    <header className=" sticky z-50 top-0 bg-slate-900">
      <nav className="px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div to="/" className="cursor-pointer flex items-center text-2xl text-sky-400">
            MyPortfolio
          </div>
          <div className="lg:order-2">
            <Link
              to="https://github.com/jatin34090"
              className="border-2 cursor-pointer hover:bg-sky-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py:2.5 mr-2 "
            >
              Github
            </Link>
          </div>
          <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <div
                  to="/about"
                  className="pr-4 pl-3 cursor-pointer duration-200 bg-transparent hover:text-sky-400"
                  onClick={aboutComponent}
                >
                  About
                </div>
              </li>
              <li>
                <div
                  to="/contact"
                  className="pr-4 pl-3 cursor-pointer duration-200 bg-transparent hover:text-sky-400"
                >
                  Skills
                </div>
              </li>
              <li>
                <div
                  to="/education"
                  className="pr-4 pl-3 cursor-pointer duration-200 bg-transparent hover:text-sky-400"
                >
                  Contact
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
