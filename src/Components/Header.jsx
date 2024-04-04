import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Button from "./Button";

export const Header = () => {
  return (
    <header className=" sticky z-50 top-0 bg-slate-900">
      <nav className="px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="cursor-pointer flex items-center text-2xl text-sky-400">
            <ScrollLink
              activeClass="active"
              to="root"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              MyPortfolio
            </ScrollLink>
          </div>
          <div className="lg:order-2">
            <Link to="https://github.com/jatin34090">
              <Button text={"Github"} className={" hover:bg-sky-400 "} />
            </Link>
          </div>
          <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <ScrollLink
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <Button
                    text={"About"}
                    className=" border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  />
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <Button
                    text={"Skills"}
                    className=" border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  />
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <Button
                    text={"Project"}
                    className=" border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  />
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button
                    text={"Eduction"}
                    className=" border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  />
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button
                    text={"Contact"}
                    className=" border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  />
                </ScrollLink>
              </li>
              {/* <li>
                <Button
                  text={"Skills"}
                  className={
                    "border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  }
                />
              </li>
              <li>
                <Button
                  text={"Project"}
                  className={
                    "border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  }
                />
              </li>
              <li>
                <Button
                  text={"Education"}
                  className={
                    "border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  }
                />
              </li>
              <li>
                <Button
                  text={"Contact"}
                  className={
                    "border-none hover:bg-transparent text-base hover:text-sky-400 duration-200"
                  }
                />
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
