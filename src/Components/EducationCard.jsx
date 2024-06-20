import React from "react";
import { SlCalender, SlLocationPin } from "react-icons/sl";


const EducationCard = ({image, college, course, duration}) => {
  return (
    <div className="flex flex-col ml-5 md:ml-16 ">
    <div>
      <img className="w-8 h-6 bg-slate-900" src={image} alt="image" />
      <h4 className="text-xl ">{college}</h4>
      <div className="flex justify-start items-center gap-1 text-gray-400">
        <SlLocationPin />
        <span>Moradabad, Uttar Pradesh, India</span>
      </div>
      <h4 className="text-sky-400 text-xl">
        {course}
      </h4>
      <div className="flex items-center gap-2">
        <SlCalender />
        <span>{duration}</span>
      </div>
    </div>
  </div>
  );
};

export default EducationCard;
