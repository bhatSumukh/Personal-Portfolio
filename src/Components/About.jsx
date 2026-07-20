import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";
import Computer from '../assets/about-computer.png'

const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiNetlify />, name: "Netlify" },
  { icon: <SiRender />, name: "Render" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];

const iconStyle =
  "text-6xl text-(--primary) border-2 border-dotted border-(--primary) h-20 w-20 p-3 flex items-center justify-center hover:bg-(--surface) transition-all duration-300";

function About() {
  return (
    <>
      <section
        id="about"
        className="flex flex-col justify-center gap-10  min-h-screen pt-24 px-10 bg-(--background)"
      >
        <div className="flex justify-left items-center h-10">
          <h2 className="text-4xl text-(--primary) font-body w-full text-left">
            &gt;_About Me
          </h2>
        </div>

        <div className="h-90 w-full border-2 border-dotted border-(--primary) flex justify-between items-center">
            <div><p className="text-(--text)  font-body p-10 w-200">
            Hi, I’m Sumukh Bhat, BCA student and aspiring Full-Stack Web
            Developer exploring how AI can make the web smarter. I build
            responsive web applications using React.js, Tailwind CSS. Currently
            expanding into full stack development with Node.js and MongoDB and
            building more advanced, real-world projects, while continuing to
            explore AI integration and real-world project building. My current
            goal is to build a strong portfolio that showcases my journey from
            student to professional developer. Full Stack Web Development | AI |
            Problem Solving | UI / UX
          </p></div>
          
            <div>
                <img src={Computer} alt="about-computer" className="h-100" />
            </div>

        </div>

        <div className="flex justify-left items-center h-10">
          <h2 className="text-4xl text-(--primary) font-body w-full text-left">
            &gt;_Skills
          </h2>
        </div>

 <div className="grid grid-cols-8 gap-6 justify-items-center">
  {skills.map((skill) => (
    <div
      key={skill.name}
      className="group flex flex-col items-center"
    >
      <div className={iconStyle}>
        {skill.icon}
      </div>

      <span className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-(--primary) font-body text-sm whitespace-nowrap h-5">
        {skill.name}
      </span>
    </div>
  ))}
</div>

      </section>
    </>
  );
}

export default About;
