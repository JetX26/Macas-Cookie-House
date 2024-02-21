'use client'

import Image from 'next/image'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import MariaPortrait from '../assets/maria-portrait-placeholder.jpg'
import { useZustandStore } from '../helper/store'


const About = (): React.ReactNode => {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })


    return (
        <div id="About" className='h-[1000px] bg-[#FFE5D4] flex gap-24  items-center xs:gap-6 xs:flex-col xs:h-auto xs:p-6 sm:gap-6 sm:flex-col sm:p-6 sm:h-auto md:h-auto md:flex-col md:p-10 lg:gap-4'>
            <div className='w-1/2 flex justify-end' ref={ref}>
                <div>
                    <Image src={MariaPortrait} alt="Maria Veskov Portrait Photo"></Image>
                </div>
            </div>
            <div
                className='w-1/2 text-center xs:w-full sm:w-full md:w-full'
                ref={ref}>
                <div className='flex flex-col  gap-12 xs:items-center sm:items-center md:items-center lg:items-center '>
                    <span className=' flex flex-col w-[50%] items-center xs:w-full sm:w-full lg:w-full xl:w-full'>
                        <h2 className='text-2xl'>ABOUT</h2>
                        <h3 className='text-xl'>{`Maca's Cookie House`}</h3>
                    </span>
                    <p className='w-[50%] xs:w-full sm:w-full lg:w-[90%] xl:w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda inventore totam debitis, velit repellendus quis hic voluptate numquam cum voluptatibus maiores culpa sapiente necessitatibus ut sunt officia minus vel nesciunt!</p>
                </div>
            </div>

        </div >
    )
}

export default About