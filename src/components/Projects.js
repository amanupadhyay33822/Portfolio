import React from "react";
import { FaReact, FaNode, FaBootstrap, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { RiNextjsLine } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";

const projects = [
  {
    title: "EDTECH PLATFORM",
    description: "Made using MERN  STACK",
    link: "https://github.com/amanupadhyay33822/Ed-Tech--Platform",
    liveLink:"https://ed-tech-platform-i1oz.vercel.app/",
    image: "./images/project1.jpg",
    icons: [<FaReact/>, <SiExpress/>, <FaNode />, <SiMongodb/>, <SiTailwindcss/>],
  },
  {
    title: "Room Rover",
    description: "Made using NextJs",
    link: "https://github.com/amanupadhyay33822/RoomRover",
    liveLink:"https://oyo-tau.vercel.app/",
    image: "./images/project4.jpg",
    icons: [<RiNextjsLine />, <SiTailwindcss/>, <FaNode />, <SiMongodb/>],
  },
  {
    title: "Portfolio-Website",
    description: "Made using React, TailwindCSS",
    link: "https://github.com/amanupadhyay33822/Portfolio-",
    liveLink:"https://portfolio-three-psi-41.vercel.app/",
    image: "./images/project3.jpg",
    icons: [<FaReact/>,  <SiTailwindcss/>],
  },
  {
    title: "Wheather App",
    description: "Made using HTML , JS,TailwindCSS",
    link: "https://github.com/amanupadhyay33822/weatherAppProject",
    liveLink:"https://6472074fcecdad7b4dd48c23--venerable-jelly-24a0d4.netlify.app/",
    image: "./images/project2.jpg",
    icons: [<FaHtml5 />,<AiOutlineJavaScript />,<SiTailwindcss/>],
  },
];

const Projects = () => {
  return (
    <section id='Projects' className='py-12 lg:ml-20 md:mx-10 xs:ml-10 '>
      <div className="flex flex-col items-center justify-center mb-20">
        <h1 className="text-xl mb-2">Explore My</h1>
        <h1 className="text-4xl lg:text-5xl font-medium">My Projects</h1>
      </div>

      <div className="container mx-auto pl-4 sm:px-6 xl:mx-0 lg:pr-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 border-2 border-black hover:bg-customColor2 transition-all duration-100"
            >
              <h2 className="text-2xl lg:text-3xl xxl:text-4xl font-medium mb-4 ">{project.title}</h2>
              <p className="flex flex-wrap text-lg lg:text-xl xxl:text-2xl mb-4">{project.description}</p>
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.icons.map((icon, i) => (
                  <div key={i} className='text-2xl lg:text-3xl p-2'>
                    {icon}
                  </div>
                ))}
              </div>
              <div className="space-x-10">
              <a
                href={project.link} target="blank"
                className="inline-block py-3 px-5 rounded-full xxl:text-2xl font-medium border-2 border-black hover:bg-gray-700 hover:text-white transition-all duration-100"
              >
                View Project 
              </a>    
              <a
                href={project.liveLink} target="blank" 
                className="inline-block py-3 px-5 rounded-full xxl:text-2xl font-medium border-2 border-black hover:bg-gray-700 hover:text-white transition-all duration-100"
              >
               Live Link
              </a>  
              </div> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



