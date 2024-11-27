"use client"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Menubar from '@/components/Menubar';
import Link from 'next/link';
import { FaX } from 'react-icons/fa6';


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex flex-row items-center justify-between border bg-blus  fixed top-0 w-full z-10 bg-blus/90 backdrop-blur-md px-4  h-20  md:px-8 lg:px-16 xl:px-32 2xl:px-64 '>
      
        <div className='text-white font-bold hidden md:flex items-center  justify-between gap-8 h-full '>
          <div className='  items-center  gap-12'>
          <h1 className='text-lg md:text-2xl'>OLALEKAN MUBARAK</h1>
          <p className='font-light font-mono text-xs md:text-sm'>
            Software Engineer (Front-End)
          </p>
          </div>
        </div>

        <div className=' hidden xl:flex space-x-3 md:space-x-5 items-center'>
          <AlertDialog>
  <AlertDialogTrigger>          <Button className='bg-transparent text-white text-xs md:text-sm'>
  About Me
  </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle className='font-bold text-1xl text-center text-blus'>Building the Future, One Line of Code at a Time</AlertDialogTitle>
      <AlertDialogDescription>
      Hello, I&apos;m Mubarak Olalekan, a passionate and detail-oriented frontend developer with a strong focus on creating engaging, user-friendly web applications. With expertise in technologies such as Next.js, React, TypeScript, and Tailwind CSS, I thrive on transforming ideas into responsive, interactive digital experiences. My work is driven by a love for clean code, efficient design, and intuitive user interfaces.

I am committed to continuous learning and growth in the tech field, constantly expanding my knowledge and keeping up with the latest industry trends. Whether I&apos;m building a URL shortening app with analytics, integrating third-party APIs, or working on personal projects, I aim to deliver functional, elegant solutions that meet both user and business needs.

In addition to development, I have an entrepreneurial spirit, managing a small business where I combine creativity with technical skills to offer unique digital solutions. My goal is to contribute to innovative projects, collaborate with like-minded professionals, and continue pushing the boundaries of what modern web technologies can achieve.
<br /><br />
Let&apos;s connect and create something exceptional!s.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className='bg-blus text-white hover:border border-blus '>Cancel</AlertDialogCancel>
      {/* <AlertDialogAction>Continue</AlertDialogAction> */}
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
          <Button className='bg-transparent text-white text-xs md:text-sm'
          onClick={() => setOpen((prev) => !prev)}>
            Contacts
          </Button>
          {open && (
           <div  className=" w-max absolute p-4 rounded-md top-16 right  shadow-lg bg-white flex  flex-col gap-6 z-20 mt-4 transition-opacity duration-300">
           <h1 className="text-xl font-semibold mb-2 flex items-center m-auto text-blus">contact me on this platforms</h1>
           <div className='flex items-center justify-between gap-8'>
           <div className="flex flex-col gap-4">
           <Link href="https://twitter.com/mubaraq_olalekan">
  <div className="flex flex-col items-center gap-2 group">
    {/* Text */}
    <h2 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-500 font-bold">
      Twitter
    </h2>
    {/* Icon */}
    <div className="relative overflow-hidden bg-gradient-to-t text-blue-500 ring-1 font-bold py-2 px-2 rounded-full group-hover:text-white">
      <span className="absolute inset-0 bg-gradient-to-t from-blue-800 to-blue-600 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></span>
      <span>
        <FaTwitter />
      </span>
    </div>
  </div>
</Link>

           </div>
           <div className="flex flex-col gap-4">
           <Link href="https://twitter.com/mubaraq_olalekan">
  <div className="flex flex-col items-center gap-2 group">
    {/* Text */}
    <h2 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-purple-600  font-bold">
      Instagram
    </h2>
    {/* Icon */}
    <div className="relative overflow-hidden bg-gradient-to-t text-pink-500 ring-1 ring-pink-100 font-bold py-2 px-2 rounded-full group-hover:text-white">
      <span className="absolute inset-0 bg-gradient-to-r from-pink-800 to-purple-600 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></span>
      <span>
        <FaInstagram />
      </span>
    </div>
  </div>
</Link>

           </div>
           <div className="flex flex-col gap-4">
           <Link href="https://twitter.com/mubaraq_olalekan">
  <div className="flex flex-col items-center gap-2 group">
    {/* Text */}
    <h2 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-500 font-bold">
Linkedin    
</h2>
    {/* Icon */}
    <div className="relative overflow-hidden bg-gradient-to-t text-blue-500 ring-1 font-bold py-2 px-2 rounded-full group-hover:text-white">
      <span className="absolute inset-0 bg-gradient-to-t from-blue-800 to-blue-600 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></span>
      <span>
        <FaLinkedin />
      </span>
    </div>
  </div>
</Link>

           </div>
           <div className="flex flex-col gap-4">
           <Link href="https://twitter.com/mubaraq_olalekan">
  <div className="flex flex-col items-center gap-2 group">
    <h2 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 font-bold">
      Github
    </h2>
    <div className="relative overflow-hidden bg-gradient-to-t text-black ring-1  ring-gray-400 font-bold py-2 px-2 rounded-full group-hover:text-white">
      <span className="absolute inset-0 bg-gradient-to-t from-black to-gray-300 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></span>
      <span>
        <FaGithub />
      </span>
    </div>
  </div>
</Link>

           </div>
         </div>
         </div>
          )}
          </div>
          <Button className='bg-white text-black text-xs md:text-sm'>
            Hire Me
          </Button>
        </div>
        {/* moblie */}
        <div className='text-white font-bold h-full flex items-center justify-between  gap-16 md:hidden'>
          <div className='flex flex-col items-center '>
          <h1 className='text-lg md:text-2xl'>OLALEKAN MUBARAK</h1>
          <p className='font-light font-mono text-xs md:text-sm'>
            Software Engineer (Front-End)
          </p>
          </div>
          <Menubar/>
        </div>
      
    </>
  );
};

export default Header;
