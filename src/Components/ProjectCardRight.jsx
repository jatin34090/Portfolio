import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


const ProjectCardRight = ({
  title,
  description,
  image,
  githubLink,
  liveLink,
  technology,
}) => {

  return (
    <div className="flex mx-40 my-20">
    <div className="flex flex-col items-end md:relative right-16 z-10 order-2">
      <h2 className="text-2xl mb-1">{title}</h2>
      <div className=" border-l border-b border-r border-t rounded-lg  mt-4 border-sky-400 drop-shadow-[0_5px_35px_rgba(255,255,255,0.25)] ">
        <div className=" bg-slate-800 rounded-sm py-2 flex items-center">
          <div className="w-4 h-4 rounded-full bg-red-700 mx-1"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-700 mx-1"></div>
          <div className="w-4 h-4 rounded-full bg-green-700 mx-1"></div>
        </div>
        <div className="px-10 pb-3 bg-slate-950 text-gray-400">
          {description}
        </div>
      </div>
      <ul className="flex text-gray-400 font-medium text-xs font-serif my-1 ">
        {technology &&
          technology.map((element) => (
            <li key={element} className="mx-2 leading-relaxed">{element}</li>
          ))}
      </ul>
      <div className="flex gap-4 mt-2">
        <Link onClick={() => window.open(githubLink)}>
          <FaGithub size={23} color=" gray-500" className=" text-sky-400" />
        </Link>
       {liveLink && <Link onClick={() => window.open(liveLink)}>
          <FaExternalLinkAlt size={23} className=" text-sky-400" />
        </Link>}
      </div>
    </div>
    <img
      className="border-2 w-2/4 drop-shadow-[0_5px_35px_rgba(255,255,255,0.25)]  border-slate-900 rounded-2xl hover:border-sky-400"
      src={image}
      alt=""
    />
  </div>
  )
}

export default ProjectCardRight