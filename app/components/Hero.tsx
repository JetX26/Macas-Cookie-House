'use client'

import { motion, } from "framer-motion"
import { useRouter } from "next/navigation"
import Sidebar from "./Sidebar"
import Burgermenu from "./Burgermenu"
import React, { useState } from 'react'



const Hero = (): React.ReactNode => {


    const { push } = useRouter()


    return (
        <div id='Hero' className=' bg-hero bg-cover bg-no-repeat h-screen overflow-hidden xs:overflow-visible xs:h-auto xs:w-auto xs:bg-center xs:p-8 sm:h-auto sm:w-auto sm:bg-center sm:p-8'>
            <div className='flex justify-center items-center h-screen xs:overflow-visible xs:h-auto xs:w-auto xs:bg-center xs:p-8 sm:h-auto sm:w-auto sm:bg-center sm:p-8 '>
                <div className="flex flex-col text-white items-center justify-center gap-8 xs:text-center sm:text-center md:text-center">
                    <h2 className='text-2xl'>Cookie Boutique</h2>
                    <span className='flex gap-4 items-center xs:flex-col sm:flex-col md:flex-col'>
                        <h2 className='text-4xl'>{`Maca's`}</h2>
                        <h2 className='text-8xl xs:text-4xl'>Cookie House</h2>
                    </span>
                    <button onClick={((e) => {
                        e.preventDefault()
                        push('/fullselection')
                    })} className=' border-white border-2 p-2 hover:bg-white hover:bg-opacity-20 hover:transition-all duration-500'>Order Online</button>
                </div>
            </div>
            <div className='xs:hidden sm:hidden md:hidden absolute top-4 right-4 lg:top-2'>
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}

export default Hero