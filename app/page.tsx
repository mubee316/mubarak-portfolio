"use client";
import Image from "next/image";
import Header from "../components/Header";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaArrowUp, FaCarCrash, FaCss3, FaCss3Alt, FaGit, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaDiagramNext, FaGamepad, FaLinkedin } from "react-icons/fa6";
import { Progress } from "@/components/ui/progress";
import Footer from "@/components/Footer";







const Page = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false)

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("smooth", toggleVisibility);
  }, []);
  return (
    
    <div className="overflow-hidden">
         <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 px-4 py-2 bg-blus text-white rounded-md shadow-lg hover:bg-white hover:text-blus transition-all ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FaArrowUp/>
    </button>
      <Header  scrollToFooter={scrollToFooter} />

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
      <div className="flex justify-center items-center">
  <div className="max-w-5xl mx-auto flex gap-4 mt-10 md:mt-20 px-4 md:px-10 overflow-x-scroll scrollbar">
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 0.6 },
        ease: "easeIn",
        duration: 1,
      }}
    >
      <ProjectCard />
    </motion.div>
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 0.6 },
        ease: "easeIn",
        duration: 0.2,
      }}
    >
      <ProjectCard2 />
    </motion.div>
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 0.6 },
        ease: "easeIn",
        duration: 0.2,
      }}
    >
      <ProjectCard2 />
    </motion.div>
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 0.6 },
        ease: "easeIn",
        duration: 3,
      }}
    >
      <ProjectCard />
    </motion.div>
  </div>
</div>
{/* < motion.div 
           initial={{ x: 100, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{
             delay: 0.2,
             x: { type: "spring", stiffness: 60 },
             opacity: { duration: 0.6 },
             ease: "easeIn",
             duration:3 ,
           }}>
<div className="flex items-center justify-end text-black fixed  top-[100px] w-full z-10">
  <Button><FaArrowUp/></Button>
</div>
</motion.div> */}

   
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-center mt-20 space-x-20 ">
        <motion.div 
         initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{
           delay: 0.2,
           x: { type: "spring", stiffness: 60 },
           opacity: { duration: 0.6 },
           ease: "easeIn",
           duration: 1,
         }}>
          <div>
          <h1 className="text-2xl md:text-4xl font-bold text-center">
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
            <div className=" flex  items-center justify-between gap-6">
              <div className="">
                <FaHtml5 className="w-10 h-20"/>
              </div>
              <span className="flex items-center gap-8">
                <Progress value={95} className="w-56 h-10"/>
                <p>95%</p>

              </span>
            </div>
            <div className=" flex  items-center justify-between gap-6">
              <div className="">
                <FaCss3Alt className="w-10 h-20"/>
              </div>
              <span className="flex items-center gap-8">
                <Progress value={90} className="w-56 h-10"/>
                <p>90%</p>

              </span>
            </div>
            <div className=" flex  items-center justify-between gap-6">
              <div className="">
                <FaJs className="w-10 h-20"/>
              </div>
              <span className="flex items-center gap-8">
                <Progress value={88} className="w-56 h-10"/>
                <p>88%</p>

              </span>
            </div>
            <div className=" flex  items-center justify-between gap-6">
              <div className="">
                <FaReact className="w-10 h-20"/>
              </div>
              <span className="flex items-center gap-8">
                <Progress value={85} className="w-56 h-10"/>
                <p>83%</p>
              </span>
            </div>
            <div className=" flex  items-center justify-between gap-6">
              <div className="">
                <FaCarCrash className="w-10 h-20"/>
              </div>
              <span className="flex items-center gap-8">
                <Progress value={85} className="w-56 h-10"/>
                <p>83%</p>
              </span>
            </div>
   

      </motion.div>
    </div>
    <Footer ref={footerRef}/>
    </div>
  );
};

const ProjectCard = () => (
  <div className=" shadow-2xl rounded-xl w-full h-auto flex flex-col text-center p-4 ">
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

    <div className="flex  gap-6 w-max justify-between px-8 mt-4">
      <Button className="bg-blus">VIEW LIVE</Button>
      <Button className="bg-white text-blus border border-blus hover:text-white">
        GITHUB REPO
      </Button>
    </div>
  </div>
);
const ProjectCard2 = () => (
  <div className=" shadow-2xl shadow-blue-900 rounded-xl w-full h-auto flex flex-col text-center p-4 bg-blus text-white">
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

    <div className="flex  gap-16 justify-between px-8 mt-4">
      <Button className="bg-blus border border-orange-600 text-orange-600 hover:bg-white">VIEW LIVE</Button>
      <Button className="bg-orange-600 text-white border border-blus hover:text-orange hover:border border-orange-600 hover:bg-blus hover:text-orange-600">
        GITHUB REPO
      </Button>
    </div>
  </div>
);

export default Page;
