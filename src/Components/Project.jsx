import React from "react";
import ProjectCardLeft from "./ProjectCardLeft";
import ProjectCardRight from "./ProjectCardRight";
import socialBook from "../assets/socialBook.png";
import weatherApp from "../assets/weatherApp.png";
import newsApp from "../assets/newsApp.png";
import adminDashboard from "../assets/adminDashboard.png";
const Project = () => {
  return (
    <div
      id="project"
      className="mb-20 flex flex-col items-center justify-center"
    >
      <h2 className="mb-8 text-3xl">Projects</h2>
      <div className="relative w-full mx-auto h-full max-w-full">
      <ProjectCardRight
          title="Social Book"
          description="Developed a full-stack social media platform using the MERN stack. Implemented user authentication and authorization using JWT (JSON Web Tokens). Enabled users to create accounts, post videos and images, and interact with each other through likes, comments, and follows. Implemented password reset functionality with Nodemailer for sending email notifications to users. Integrated Cloudinary for efficient uploading, storage, and management of photos and videos.
"
          image={socialBook}
          githubLink="https://github.com/jatin34090/Updated-News-React"
          liveLink="https://jat-social-book.netlify.app"
          technology={["Javascript", "React", "Bootstrap"]}
        />
        <ProjectCardLeft
          title="Weather-APP"
          description="Real-time weather updates are at your fingertips.
  Accurate forecasts for any location worldwide.
  Customizable preferences for personalized    weather experience
"
          image={weatherApp}
          githubLink="https://github.com/jatin34090/Weather-APP"
          liveLink="https://weatherapp-jat.netlify.app/"
          technology={["Javascript", "HTML", "CSS"]}
        />

        <ProjectCardRight
          title="Admin-Dashboard"
          description="Developed a modern Admin Dashboard web application using React framework and Vite for efficient development. Implemented various charts to visualize data analytics and improve data representation. Responsive design for seamless viewing across devices."
          image={adminDashboard}
          githubLink="https://github.com/jatin34090/jatin34090-AdiminDashboard"
          liveLink="https://admindashboard-jat.netlify.app/admin/dashboard"
          technology={["React", "Tailwind", "Vite", "Chart.js"]}
        />
        <ProjectCardLeft
          title="News App"
          description="Users can filter news articles based on categories such as business, entertainment, health, science, sports, and technology.
By utilizing the NewsAPI, the application fetches the latest news articles in real-time, ensuring users have access to the most current information. Users can click on a news article to read more details, including the full article on the source's website."
          image={newsApp}
          githubLink="https://github.com/jatin34090/Updated-News-React"
          liveLink=""
          technology={["Javascript", "React", "Bootstrap"]}
        />
      </div>
    </div>
  );
};

export default Project;
