import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';
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


const Header = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-between border bg-blus h-20 fixed top-0 w-full z-10 bg-blus/90 backdrop-blur-md px-4 md:px-10'>
      
        <div className='text-white font-bold'>
          <h1 className='text-lg md:text-2xl'>OLALEKAN MUBARAK</h1>
          <p className='font-light font-mono text-xs md:text-sm'>
            Software Engineer (Front-End)
          </p>
        </div>

        <div className='flex space-x-3 md:space-x-5 items-center'>
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
          <Button className='bg-transparent text-white text-xs md:text-sm'>
            Contact
          </Button>
          <Button className='bg-white text-black text-xs md:text-sm'>
            Hire Me
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
