"use client";
import Image from "next/image";
import Header from "./Header/page";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Progress } from "@/components/ui/progress";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const Page = () => {
  return (
    <div className="overflow-hidden">
      <Header />

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-center ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-lg  mt-20 md:mt-52 md:ml-10 md: text-center"
        >
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">
              <span className="text-blus">Optimizing</span> the <br />
              web <span className="text-blus">experience</span>
              <br /> one line of{" "}
              <span className="underline text-blus">
                code <br />
                at a time
              </span>
            </h1>
          </div>
          <div className="text-sm md:text-[20px] mt-4 font-mono text-gray-500">
            Hi there! I&apos;m Mubarak, a <br />
            frontend developer focused on creating responsive,
            <br /> intuitive, and efficient web interfaces{" "}
          </div>
          <div className="flex justify-center mt-4 space-x-5">
            <a href="https://github.com/mubee316">
              <Button className="bg-blus flex gap-2 font-mono text-[15px] hover:bg-white hover:text-blus hover: border border-blus active:bg-blus active:text-white">
                <FaGithub />
                Github
              </Button>
            </a>
            <a
              href="www.linkedin.com/in/
mubarak-olalekan-106a20304"
            >
              <Button className="bg-white text-blus border border-blus flex gap-2 font-mono text-[15px] hover:text-white hover:bg-blus active:bg-white active:text-blus">
                <FaLinkedin />
                Linkedin
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          src="/manu.png"
          alt="Portrait of Mubarak Olalekan"
          width={350}
          height={500}
          className="mt-10 md:mt-36"
        />
      </div>

      <div className="mt-32 md:mt-56 text-center">
        <h1 className="text-xl md:text-3xl font-bold">
          Crafting Modern and Intuitive Digital Experiences for the Web:
        </h1>
        <p className="mt-2">Discover My Work: A Tour of My Projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 md:mt-20 px-4 md:px-10">
        <motion.div 
           initial={{ x: -100, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{
             delay: 0.2,
             x: { type: "spring", stiffness: 60 },
             opacity: { duration: 0.6 },
             ease: "easeIn",
             duration: 1,
           }}><ProjectCard  /></motion.div>
        <motion.div
           initial={{ y: 100, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 0.2,
             y: { type: "spring", stiffness: 60 },
             opacity: { duration: 0.6 },
             ease: "easeIn",
             duration: 0.2,
           }}><ProjectCard2 /></motion.div>
        <motion.div 
           initial={{ x: 100, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{
             delay: 0.2,
             x: { type: "spring", stiffness: 60 },
             opacity: { duration: 0.6 },
             ease: "easeIn",
             duration:3 ,
           }}><ProjectCard /></motion.div>
      </div>
      {/* <div className="mt-32 flex  flex-col justify-center border border-red-800">
      <Progress value={90} className="w-[350px]  "/><p>HTML</p>
      <Progress value={80}  className="w-[350px] "/><p>CSS</p>
      <Progress value={75}  className="w-[350px] "/><p>REACT</p>

      </div> */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-center mt-20 space-x-20 ">
        <motion.div 
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{
           delay: 0.2,
           x: { type: "spring", stiffness: 60 },
           opacity: { duration: 0.6 },
           ease: "easeIn",
           duration: 1,
         }}>
          <div>
          <h1 className="text-2xl md:text-4xl font-bold">
          <span className="underline font-bold text-blus">Shaping</span><br /> the <span className="text-blus underline ">future of tech</span><br />
             one <span className="text-blus underline">project</span> at a time</h1>
          </div>
          <div className="text-sm  text-gray-500 text-center mt-2"><p>Take a closer look! <br />
          Hover over the card to discover my growth in tech <br /> and see how my skills have evolved over time.</p></div>
        </motion.div>
      < motion.div 
           initial={{ x: 100, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{
             delay: 0.2,
             x: { type: "spring", stiffness: 60 },
             opacity: { duration: 0.6 },
             ease: "easeIn",
             duration:3 ,
           }}>
      <table className="table-auto  flex m-auto justify-center ">
  <tbody>
    <tr className="h-20 w-40 border border-black bg-blus">
    <td className=" m-auto items-center justify-center text-center w-28  hover:bg-white hover:text-blus">
        <HoverCard>
          <HoverCardTrigger >
            <FaHtml5 size={50} className="  bg-white flex m-auto   hover:text-blus "/>
          </HoverCardTrigger>
          <HoverCardContent>
            CSS3 Proficiency – Styling and layout mastery.
          </HoverCardContent>
        </HoverCard>
      </td>  
      <td className=" m-auto items-center justify-center text-center w-28 bg-white text-blus hover:bg-blus hover:text-white">
        <HoverCard>
          <HoverCardTrigger className="bg-white">
            <FaCss3 size={50} className=" flex m-auto" />
          </HoverCardTrigger>
          <HoverCardContent>
            CSS3 Proficiency – Styling and layout mastery.
          </HoverCardContent>
        </HoverCard>
      </td>    
      <td className=" m-auto items-center justify-center text-center w-28  hover:bg-white hover:text-blus">
        <HoverCard>
          <HoverCardTrigger>
            <FaJs size={50} className=" flex m-auto  "/>
          </HoverCardTrigger>
          <HoverCardContent>
            CSS3 Proficiency – Styling and layout mastery.
          </HoverCardContent>
        </HoverCard>
      </td>    
      </tr>
    <tr className="h-20 w-40 border border-black bg-blus">
    <td className=" m-auto items-center justify-center text-center w-28  hover:bg-white hover:text-blus">
        <HoverCard>
          <HoverCardTrigger>
            <FaHtml5 size={50} className=" flex m-auto  text-white hover:text-blus "/>
          </HoverCardTrigger>
          <HoverCardContent>
            CSS3 Proficiency – Styling and layout mastery.
          </HoverCardContent>
        </HoverCard>
      </td>  
      <td className=" m-auto items-center justify-center text-center w-28 bg-white text-blus hover:bg-blus hover:text-white">
        <HoverCard>
          <HoverCardTrigger className="bg-white">
            <FaCss3 size={50} className=" flex m-auto" />
          </HoverCardTrigger>
          <HoverCardContent>
            CSS3 Proficiency – Styling and layout mastery.
          </HoverCardContent>
        </HoverCard>
      </td>    
      <td className=" m-auto items-center justify-center text-center w-28  hover:bg-white hover:text-blus">
        <HoverCard>
          <HoverCardTrigger>
            <FaJs size={50} className=" flex m-auto  text-white hover:text-blus "/>
          </HoverCardTrigger>
          <HoverCardContent>
            CSS3 Proficiency – Styling and layout mastery.
          </HoverCardContent>
        </HoverCard>
      </td>    
      </tr>
    <tr className="h-20 w-40 border border-black bg-blus">
    <td className=" m-auto items-center justify-center text-center w-28  hover:bg-white hover:text-blus">
        <HoverCard>
          <HoverCardTrigger>
            <FaHtml5 size={50} className=" flex m-auto  text-white hover:text-blus "/>
          </HoverCardTrigger>
          <HoverCardContent>
            CSS3 Proficiency – Styling and layout mastery.
          </HoverCardContent>
        </HoverCard>
      </td>  
      <td className=" m-auto items-center justify-center text-center w-28 bg-white text-blus hover:bg-blus hover:text-white">
        <HoverCard>
          <HoverCardTrigger className="bg-white">
            <FaCss3 size={50} className=" flex m-auto" />
          </HoverCardTrigger>
          <HoverCardContent>
            CSS3 Proficiency – Styling and layout mastery.
          </HoverCardContent>
        </HoverCard>
      </td>    
      <td className=" m-auto items-center justify-center text-center w-28  hover:bg-white hover:text-blus">
        <HoverCard>
          <HoverCardTrigger>
            <FaJs size={50} className=" flex m-auto  text-white hover:text-blus "/>
          </HoverCardTrigger>
          <HoverCardContent>
            CSS3 Proficiency – Styling and layout mastery.
          </HoverCardContent>
        </HoverCard>
      </td>    
      </tr>

  </tbody>
</table>

      </motion.div>
    </div>
    </div>
  );
};

const ProjectCard = () => (
  <div className="border border-blus rounded-xl w-full h-auto flex flex-col text-center p-4 ">
    <p className="animate-bounce mt-2 text-xl font-bold">DIGITAL CLOCK</p>
    <Image
      src="/nnnn.png"
      width={350}
      height={250}
      alt="Digital clock project"
      className="mx-auto hover:transition duration-300 ease-in-out transform hover:scale-110 bg-blus"
    />
    <p className="p-4">
      I created a digital clock using HTML, CSS, and JavaScript. The clock
      dynamically displays the current time by using JavaScript functions to
      retrieve the time and update it at regular intervals. This provides a
      real-time clock that users can view directly in their browser. The project
      focuses on integrating basic web technologies to create a functional and
      visually appealing digital clock interface.
    </p>

    <div className="flex justify-between px-8 mt-4">
      <Button className="bg-blus">VIEW LIVE</Button>
      <Button className="bg-white text-blus border border-blus hover:text-white">
        GITHUB REPO
      </Button>
    </div>
  </div>
);
const ProjectCard2 = () => (
  <div className="border border-blus rounded-xl w-full h-auto flex flex-col text-center p-4 bg-blus text-white">
    <p className="animate-bounce mt-2 text-xl font-bold">FOOD RECIPE FINDER</p>
    <Image
      src="/recipe.png"
      width={350}
      height={250}
      alt="food recipe project"
      className="mx-auto hover:transition duration-300 ease-in-out transform hover:scale-110 bg-blus"
    />
    <p className="p-4">
      The Food Recipe Finder is a web application I built to help users discover
      new and exciting recipes. Using a recipe API from RapidAPI, the
      application allows users to search for recipes based on ingredients,
      cuisine types, or dish names. The aim of the project was to create an
      intuitive, easy-to-use platform that gives quick access to a wide variety
      of meal ideas and cooking inspiration.
    </p>

    <div className="flex justify-between px-8 mt-4">
      <Button className="bg-blus border border-orange-600 text-orange-600 hover:bg-white">VIEW LIVE</Button>
      <Button className="bg-orange-600 text-white border border-blus hover:text-orange hover:border border-orange-600 hover:bg-blus hover:text-orange-600">
        GITHUB REPO
      </Button>
    </div>
  </div>
);

export default Page;
