import FolderImg from "../assets/project-folder-img3.png";
import PortfolioImg from "../assets/personal-portfolio-img.png";
import StudNetImg from '../assets/p-studnet.png';
import WeatherImg from '../assets/p-weather.png';
import MusicPlayerImg from '../assets/p-musicplayer.png';
import ToDoImg from '../assets/p-todo.png'
import {
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "Personal Portfolio built using React.js and TailwindCSS showcasing all skills and projects.",
    liveLink: "#",
    gitLink: "#",
    imgURL: PortfolioImg,
  },
    {
    name: "StudNet",
    description:
      "Personal productivity dashboard. Tracks habits and get instant help from the AI ChatBot.",
    liveLink: "https://stud-net.netlify.app/",
    gitLink: "https://github.com/bhatSumukh/StudNet",
    imgURL: StudNetImg,
  },
    {
    name: "Music Player",
    description:
      "Built a music player using HTML , CSS and JS (Inspired by spotify).",
    liveLink: "https://musicplayer-mp.netlify.app/",
    gitLink: "https://github.com/bhatSumukh/Music-Player",
    imgURL: MusicPlayerImg,
  },
    {
    name: "To-Do Website",
    description:
      "A to-do web app which helps to track your work.",
    liveLink: "https://to-do-wapp.netlify.app/",
    gitLink: "https://github.com/bhatSumukh/To-Do-Web-App",
    imgURL: ToDoImg,
  },
    {
    name: "Weather App",
    description:
      "A simple JavaScript-based weather app that fetches real-time data from the OpenWeather API and displays dynamic weather details.",
    liveLink: "https://weather-wap.netlify.app/",
    gitLink: "https://github.com/bhatSumukh/Weather-App.git",
    imgURL: WeatherImg,
  },
];

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="flex flex-col justify-center gap-10  min-h-screen pt-24 px-10 bg-(--background)"
      >
        <div className="flex justify-left items-center">
          <h2 className="text-4xl text-(--primary) font-body w-full text-left">
            &gt;_Projects
          </h2>
        </div>

        <div className="flex justify-between items-center gap-10 w-full border-2 border-dotted border-(--primary) h-50">
          <div className="px-10">
            <p className="text text-2xl text-(--text)">
              A collection of things i have built with passion and curiosity.
            </p>
            <ul>
              <li className="text  text-(--primary)">&gt; npm run build...</li>
              <li className="text  text-(--primary)">
                &gt; compiling ideas...
              </li>
              <li className="text  text-(--primary)">
                &gt; building impacts...
              </li>
            </ul>
          </div>

          <div>
            <img src={FolderImg} alt="" className="h-50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <div className=" w-100 h-100 border-2 border-(--primary) flex flex-col justify-between items-center gap-4 p-4">
                <h1 className="text-2xl text-(--text)">
                  &gt;_{project.name}
                </h1>
                <img src={project.imgURL} alt="project img" className="h-40 " />
                <p className="text-(--muted)">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="border border-(--primary) text-(--primary) px-4 py-2 w-30 flex justify-center items-center gap-2 hover:bg-(--primary) hover:text-(--background) transition-all"
                  >
                    <FaGlobe></FaGlobe> Live
                  </a>

                  <a
                    href={project.gitLink}
                    className="border border-(--primary) text-(--primary) px-4 py-2 w-30 flex justify-center items-center gap-2 hover:bg-(--primary) hover:text-(--background) transition-all"
                  >
                   <FaGithub></FaGithub> GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
