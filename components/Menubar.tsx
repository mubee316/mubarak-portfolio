"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Contacts from '@/components/Contacts'

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
                    <a href="/">About me</a>
                    <a href='/'>Contacts</a>
                    <a href="/">Hire me</a>
                </div>
            </div>
        )}
    </div>
  )
}

export default Menubar