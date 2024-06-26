import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Button from "./Button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(-50);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && window.innerWidth > 768) {
        setOffset(-300);
      } else if(window.innerWidth < 768) {
        setOffset(-350);
      }
      else {
        setOffset(-70);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call the function initially to set the offset based on initial window size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-slate-900">
      <nav className="px-7 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="cursor-pointer flex items-center text-2xl text-sky-400">
            <ScrollLink
              activeClass="active"
              to="root"
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
            >
              MyPortfolio
            </ScrollLink>
          </div>
          <div className="lg:order-2 flex items-center">
            <Link to="https://github.com/jatin34090" target="_blank">
              <Button text={"Github"} className={"hover:bg-sky-400 ml-1"} />
            </Link>
            <Link to="https://tinyurl.com/resume-jatin" target="_blank">
              <Button
                text={"Resume"}
                className={"hover:bg-sky-400 ml-1 mr-3"}
              />
            </Link>
            <button
              className="lg:hidden absolute right-0 p-2 ml-2 text-sky-400"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:w-auto lg:order-1 w-full`}
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 w-full lg:w-auto">
              <li>
                <ScrollLink
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={500}
                >
                  <Button
                    onClick={toggleMenu}
                    text={"About"}
                    className="border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  />
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={500}
                >
                  <Button
                    onClick={toggleMenu}
                    text={"Skills"}
                    className="border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  />
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={500}
                >
                  <Button
                    onClick={toggleMenu}
                    text={"Project"}
                    className="border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  />
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={500}
                >
                  <Button
                    onClick={toggleMenu}
                    text={"Education"}
                    className="border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  />
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={500}
                >
                  <Button
                    onClick={toggleMenu}
                    text={"Contact"}
                    className="border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  />
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
