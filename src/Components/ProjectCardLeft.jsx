import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  liveLink,
  technology,
}) => {
  return (
    <div className="mb-10 lg:mb-20">
      <span className="lg:absolute lg:right-0 text-2xl lg:text-3xl text-sky-400 mx-4 sm:mx-20 ">
        {title}
      </span>
      <div className="flex lg:pt-8 flex-col justify-center items-center lg:flex-row mx-4 md:mx-20 lg:my-0 sm:my-2 ">
        <div className="lg:relative lg:left-16 lg:top-6 lg:z-10 lg:w-1/2 lg:order-1 order-2 sm:w-4/5">
          <div
            className="border-l border-b border-r border-t rounded-lg  mt-4 border-sky-400 drop-shadow-[0_5px_35px_rgba(255,255,255,0.25)] 
        "
          >
            <div className="bg-slate-800 rounded-t-lg py-2 flex items-center">
              <div className="w-4 h-4 rounded-full bg-red-700 mx-1"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-700 mx-1"></div>
              <div className="w-4 h-4 rounded-full bg-green-700 mx-1"></div>
            </div>
            <div className="px-6 h-32 overflow-auto py-3 bg-slate-950 text-gray-400">
              {description}
            </div>
          </div>
          <ul className="flex flex-wrap text-gray-400 font-medium text-xs font-serif my-2">
            {technology &&
              technology.map((element) => (
                <li key={element} className="mx-2 leading-relaxed">
                  {element}
                </li>
              ))}
          </ul>
          <div className="flex gap-4 mt-2">
            <Link onClick={() => window.open(githubLink)}>
              <FaGithub size={23} className="text-sky-400" />
            </Link>
            {liveLink && (
              <Link onClick={() => window.open(liveLink)}>
                <FaExternalLinkAlt size={23} className="text-sky-400" />
              </Link>
            )}
          </div>
        </div>
        <img
          className="border-2 sm:w-4/5 lg:w-2/4 lg:order-2 order-1 drop-shadow-[0_5px_35px_rgba(255,255,255,0.25)] border-slate-900 rounded-2xl hover:border-sky-400"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
