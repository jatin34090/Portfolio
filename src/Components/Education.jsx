import React from "react";
import EducationCard from "./EducationCard";
import schoolLogo from "../assets/schoolLogo.png";
import collegeLogo from "../assets/collegeLogo.jpg";

const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col justify-center items-center mx-4 md:mx-10 lg:mx-20"
    >
      <h1 className="text-3xl mb-16">Education</h1>
      <div className="flex flex-row ">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-sky-500 h-4 w-4 rounded-full"></div>
          <div className="bg-sky-500 h-full w-1 md:h-auto md:flex-1"></div>
        </div>
        <div className="flex flex-col space-y-10 mt-10 md:mt-0 md:ml-8">
          <EducationCard
            image={collegeLogo}
            college="Teerthanker Mahaveer University"
            location="Moradabad, Uttar Pradesh, India"
            course="Bachelor of Technology (B.Tech) in Computer Science"
            duration="2020 - 2024"
          />
          <EducationCard
            image={schoolLogo}
            college="Maharaja Agarsen Public School"
            location="Moradabad, Uttar Pradesh, India"
            course="12th"
            duration="2019-2020"
          />
          <EducationCard
            image={schoolLogo}
            college="Maharaja Agarsen Public School"
            location="Moradabad, Uttar Pradesh, India"
            course="10th"
            duration="2017-2018"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
