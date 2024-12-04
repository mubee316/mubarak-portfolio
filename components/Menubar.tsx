"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
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
  } from "@/components/ui/alert-dialog";
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Button } from './ui/button';
  

const Menubar = () => {
    const [open, setOpen] = useState(false)

  return (
    <div>
        <Image 
        src="/menu.png"
        alt=""
        width={50}
        height={28}
        className='cursor-pointer text-white'
        onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
            <div className='absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-black text-white z-10'>
                <div className='flex flex-col items-center justify-center h-full'>
                <Link href="#about" className="hover:underline">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <span className="hover:underline">About Me</span>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="font-bold text-1xl text-center text-blue-600">
                        Building the Future, One Line of Code at a Time
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Hello, I&apos;m Mubarak Olalekan, a passionate and detail-oriented frontend developer
                        with a strong focus on creating engaging, user-friendly web applications. With expertise
                        in technologies such as Next.js, React, TypeScript, and Tailwind CSS, I thrive on
                        transforming ideas into responsive, interactive digital experiences.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-blue-600 text-white hover:border border-blue-600">Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Link>
              <Accordion type="single" collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger>Contacts</AccordionTrigger>
    <AccordionContent>
        <div className='flex items-center justify-between gap-4'>
            <Button className='hover:text-blue-500'><FaTwitter/></Button>
            <Button className='hover:text-pink-500'><FaInstagram/></Button>
            <Button className='hover:text-blue-500'><FaLinkedin/></Button>
            <Button className='hover:text-black'><FaGithub/></Button>
            </div>
        
    </AccordionContent>
  </AccordionItem>
</Accordion>

                </div>
            </div>
        )}
    </div>
  )
}

export default Menubar