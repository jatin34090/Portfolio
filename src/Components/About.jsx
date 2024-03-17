import React, { useRef } from "react";
import { SiExpress, SiPostman } from "react-icons/si";
import {
  DiCss3Full,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
const aboutComponent = ()=>{
  aboutRef.current.scrollIntoView({behavior: "smooth",})
 }
 let aboutRef = "";
const About = () => {
  aboutRef= useRef(null);
  return (
    <div ref={aboutRef} className="flex flex-col justify-center items-center">
      <div className="w-2/5 text-center">
        <div className=" ml-10 mt-8 text-3xl ">About Me</div>
        <div className="ml-10 text-3xl text-sky-400 ">WHO AM I?</div>
        <div className=" text-center mt-4 text-white ml-10">
        <strong className="text-3xl">Hi, I'm Jatin. Nice to meet you.</strong>
        </div>
        <div className=" text-center mt-4 text-gray-400 ml-10">
          I’m currently pursuing a degree in{" "}
          <strong className="text-white">Computer Science.</strong> I have a
          keep interest in software engineering and technology. I’m passionate
          about learning new things and exploring new{" "}
          <strong className="text-white">technologies.</strong> I believe that
          technology has the power to change the world for the better and I’m
          excited to be a part of this change. I have experience researching new
          things and developing innovative solutions
        </div>
      </div>
      <div className="text-2xl mt-8 flex flex-col items-center ">
        <div className="text-3xl mb-4"> Skills</div>
        <div className="flex justify-center items-center py-5  ">
          <div className="text-center ">
            <DiHtml5
              size={90}
              className="mx-6 p-1"
              style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }}
            />
            <p>HTML</p>
          </div>
          <div className="text-center">
            <DiCss3Full
              size={90}
              className="p-1 mx-6"
              style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }}
            />
            <p>CSS</p>
          </div>
          <div className="text-center">
            <DiJavascript1
              size={90}
              className="mx-6"
              style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }}
            />
            <p>JavaScript</p>
          </div>
          <div className="text-center">
            <DiReact
              size={90}
              className="  mx-6"
              style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }}
            />
            <p>React</p>
          </div>
          <div className="text-center">
            <DiNodejsSmall
              size={90}
              className="  mx-6"
              style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }}
            />
            <p>NodeJS</p>
          </div>
          <div className="text-center">
            <SiExpress
              size={90}
              className="mx-6"
              style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }}
            />
            <p>ExpressJS</p>
          </div>
          <div className="text-center">
            <DiMongodb
              size={90}
              className=" mx-6"
              style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }}
            />
            <p>MongoDB</p>
          </div>
          <div className="text-center">
            <DiGithubBadge
              size={90}
              className=" mx-6"
              style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }}
            />
            <p>Github</p>
          </div>
          <div className="text-center">
            <SiPostman
              size={90}
              className="p-3 mx-6"
              style={{
                color: "rgb(56 189 248",
                boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)",
              }}
            />
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
export {aboutComponent}

