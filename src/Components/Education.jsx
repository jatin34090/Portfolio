import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-8">Education</h1>
      <div className="mb-20 flex flex-row ">
        <div className="ml-28 flex flex-col items-center justify-center">
          <div className="bg-sky-500 h-4 w-4 rounded-full"></div>
          <div className="bg-sky-500 h-full w-1 "></div>
        </div>
       <div>
       <EducationCard image="src\Photos\collegeLogo.jpg" college="Teerthanker Mahaveer University" location="Moradabad, Uttar Pradesh, India" course="Bachelor of Technology (B.Tech) in Computer Science" duration="2020 - 2024" />
       <EducationCard image="src\Photos\schoolLogo.png" college="Maharaja Agarsen Public School" location="Moradabad, Uttar Pradesh, India" course="12th" duration="2019-2020" />
       <EducationCard image="src\Photos\schoolLogo.png" college="Maharaja Agarsen Public School" location="Moradabad, Uttar Pradesh, India" course="10th" duration="2017-2018" />
       </div>
      </div>
    </div>
  );
};

export default Education;
