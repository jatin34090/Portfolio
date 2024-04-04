import React from "react";
import ProjectCardLeft from "./ProjectCardLeft";
import ProjectCardRight from "./ProjectCardRight";
const Project = () => {
  return (
    <div
      id="project"
      className="mb-20 flex flex-col items-center justify-center"
    >
      <h2 className="mb-8 text-3xl">Projects</h2>
      <div className="relative w-full mx-auto h-full max-w-full">
        <ProjectCardLeft
          title="Spotify Clone"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image="src\Photos\SpotifyClonePhoto.png"
          githubLink="https://github.com/jatin34090/SpotifyUi-clone"
          liveLink=""
          technology={["NodeJS", "Vite", "Tailwind"]}
        />
        <ProjectCardRight
          title="Admin Dashboard"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image="src\Photos\AdminDashboard.png"
          githubLink="https://github.com/jatin34090/jatin34090-AdiminDashboard"
          liveLink="https://admindashboard-jat.netlify.app"
          technology={["Javascript", "HTML", "CSS"]}
        />
        <ProjectCardLeft
          title="Weather-APP"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image="src\Photos\weatherApp.png"
          githubLink="https://github.com/jatin34090/Weather-APP"
          liveLink="https://weatherapp-jat.netlify.app/"
          technology={["Javascript", "HTML", "CSS"]}
        />
        <ProjectCardRight
          title="News App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image="src\Photos\newsApp.png"
          githubLink="https://github.com/jatin34090/Updated-News-React"
          liveLink=""
          technology={["Javascript", "HTML", "CSS"]}
        />

        <ProjectCardLeft
          title="Open Board"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image="src\Photos\Open Board.png"
          githubLink="https://github.com/jatin34090/SpotifyUi-clone"
          liveLink=""
          technology={["NodeJS", "Vite", "Tailwind"]}
        />
        <ProjectCardRight
          title="Excel Clone"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image="src\Photos\ExcelClone.png"
          githubLink=""
          liveLink=""
          technology={["Javascript", "HTML", "CSS"]}
        />
      </div>
    </div>
  );
};

export default Project;
