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

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center mb-10 px-4 sm:px-8"
    >
      <div className="w-full md:w-2/3 lg:w-2/5 text-center">
        <div className=" text-3xl">About Me</div>
        <div className="mt-2 text-3xl text-sky-400">WHO AM I?</div>
        <div className="text-center mt-4 text-white">
          <strong className="text-3xl">Hi, I'm Jatin. Nice to meet you.</strong>
        </div>
        <div className="text-center mt-4 text-gray-400">
          I’m currently pursuing a degree in{" "}
          <strong className="text-white">Computer Science.</strong> I have a
          keen interest in software engineering and technology. I’m passionate
          about learning new things and exploring new{" "}
          <strong className="text-white">technologies.</strong> I believe that
          technology has the power to change the world for the better and I’m
          excited to be a part of this change. I have experience researching new
          things and developing innovative solutions.
        </div>
      </div>
      <div className="text-2xl mt-8 flex flex-col items-center">
        <div id="skills" className="text-3xl mb-4">
          Skills
        </div>
        <div className="flex flex-wrap justify-center items-center py-5">
          <div className="text-center mx-4 my-2">
            <DiHtml5
              size={90}
              className="p-1 bg-sky-400 text-slate-950"
              style={{ boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)" }}
            />
            <p>HTML</p>
          </div>
          <div className="text-center mx-4 my-2">
            <DiCss3Full
              size={90}
              className="p-1 bg-sky-400 text-slate-950"
              style={{ boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)" }}
            />
            <p>CSS</p>
          </div>
          <div className="text-center mx-4 my-2">
            <DiJavascript1
              size={90}
              className="p-1 bg-sky-400 text-slate-950"
              style={{ boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)" }}
            />
            <p>JavaScript</p>
          </div>
          <div className="text-center mx-4 my-2">
            <DiReact
              size={90}
              className="p-1 bg-sky-400 text-slate-950"
              style={{ boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)" }}
            />
            <p>React</p>
          </div>
          <div className="text-center mx-4 my-2">
            <DiNodejsSmall
              size={90}
              className="p-1 bg-sky-400 text-slate-950"
              style={{ boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)" }}
            />
            <p>NodeJS</p>
          </div>
          <div className="text-center mx-4 my-2">
            <SiExpress
              size={90}
              className="p-1 bg-sky-400 text-slate-950"
              style={{ boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)" }}
            />
            <p>ExpressJS</p>
          </div>
          <div className="text-center mx-4 my-2">
            <DiMongodb
              size={90}
              className="p-1 bg-sky-400 text-slate-950"
              style={{ boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)" }}
            />
            <p>MongoDB</p>
          </div>
          <div className="text-center mx-4 my-2">
            <DiGithubBadge
              size={90}
              className="p-1 bg-sky-400 text-slate-950"
              style={{ boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)" }}
            />
            <p>Github</p>
          </div>
          <div className="text-center mx-4 my-2">
            <SiPostman
              size={90}
              className="p-1 bg-sky-400 text-slate-950"
              style={{ boxShadow: "0 0px 35px rgba(255, 255, 255, 0.5)" }}
            />
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
