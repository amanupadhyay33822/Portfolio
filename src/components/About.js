import React from "react";
import { FaAward } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";

const aboutItem = [
  {
    title: "Experience",
    des: "Web Developer",
    value: "TechnoHacks",
  },
  {
    title: "Education",
    des: "Bachelors of Technology",
    value: "2021-2025",
  },
];

export default function About() {
  return (
    <section id="About" className="py-12 md:mx-4 lg:ml-0">
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-medium">About Me</h1>
      </div>

      <div className=" mx-28 sm:mx-10 xxs:mx-4 lg:mx-24 xl:mx-72 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 md:justify-center ">
          <div className="xxs:rounded-3xl md:rounded-full pt-10 pb-10 pr-6 pl-6 min-w-[200px] flex flex-col items-center justify-center md:justify-center lg:justify-center border-2 border-black hover:bg-customColor2 transition-all duration-100">
            <div className="text-3xl xxl:text-4xl pb-2">
              <FaAward />
            </div>
            <h1 className="text-2xl xxl:text-3xl mb-2">{aboutItem[0].title}</h1>
            <h2 className="text-xl xxl:text-2xl mb-1">{aboutItem[0].des}</h2>
            <h2 className="text-xl xxl:text-2xl">{aboutItem[0].value}</h2>
          </div>
          <div className="xxs:rounded-3xl md:rounded-full pt-10 pb-10 pr-6 pl-6 min-w-[200px] flex flex-col items-center justify-center md:justify-center text-center lg:justify-center border-2 border-black hover:bg-customColor2 transition-all duration-100">
            <div className="text-3xl xxl:text-4xl pb-2">
              <FaGraduationCap />
            </div>
            <h1 className="text-2xl xxl:text-3xl mb-2">{aboutItem[1].title}</h1>
            <h2 className="text-xl xxl:text-2xl mb-1">{aboutItem[1].des}</h2>
            <h2 className="text-xl xxl:text-2xl">{aboutItem[1].value}</h2>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg leading-relaxed xxl:text-2xl">
            <span className="font-semibold">
              I am a dedicated and passionate full stack developer specializing
              in the MERN stack.{" "}
            </span>{" "}
            <br />
            Currently pursuing a B.Tech degree from KIET Group of Institutions,
            I have honed my skills in creating robust, visually stunning, and
            user-friendly web applications. With a strong foundation in HTML,
            CSS, JavaScript, and front-end frameworks like React, I also possess
            comprehensive experience in back-end technologies such as Node.js,
            Express, and MongoDB. Continuously exploring the latest industry
            trends and advancements, I am driven by a commitment to lifelong
            learning. This drive allows me to implement cutting-edge solutions
            and best practices in my work. As I look forward, I am excited to
            take on new challenges and opportunities where I can contribute my
            skills, grow professionally, and make a meaningful impact. I am
            actively seeking positions that will enable me to leverage my full
            stack development skills and experience.
            <br />{" "}
            <span className="font-semibold block mt-3">
              If you are looking for a passionate web developer who is eager to
              create exceptional web experiences, I would love to connect and
              explore how we can work together.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
