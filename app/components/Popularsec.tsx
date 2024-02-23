'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import AssortedCookies from '../assets/assorted-cookies.jpg'
import { motion, useInView } from 'framer-motion'
import { useZustandStore } from '../helper/store'



const Popularsec = (): React.ReactNode => {

    const ref = useRef(null)



    return (
        <div className='h-[1000px] text-black bg-white w-screen flex justify-center items-center xs:h-auto sm:h-auto xs:p-4 sm:p-4 md:h-auto md:w-auto lg:p-8'>
            <div ref={ref}>
                <div className='flex items-center justify-center gap-24 xs:gap-12 md:gap-4 text-center xs:flex-col xs:w-auto sm:flex-col sm:w-auto sm:gap-12 md:w-auto md:flex-col'>
                    <div
                        className='w-[20%] xs:w-full sm:w-full xs:flex xs:justify-center sm:flex sm:justify-center md:w-full md:p-8 lg:w-full xl:w-[50%]'
                    >
                        <div className='flex flex-col items-center gap-6'>
                            <span>
                                <h2 className='text-2xl xs:text-lg sm:text-xl'>CELEBRATE A SPECIAL DAY</h2>
                                <h3 className='text-xl'>Assorted Cookies</h3>
                            </span>
                            <span className='h-[1px] bg-black w-[30px]'></span>
                            <span>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus aut, magni accusantium ipsam, amet, impedit consequatur provident corporis et itaque adipisci dolor nihil quam. Eligendi aliquam quidem rerum mollitia autem.
                                    Fuga odio dolorem consequatur ut autem suscipit libero inventore cum. Neque exercitationem alias adipisci et nesciunt possimus nemo laboriosam, laborum repellendus eaque. Modi sunt architecto, nulla atque quos tempora assumenda.</p>
                            </span>
                            <button>{`SHOP ALL >`}</button>
                        </div>
                    </div>
                    <div
                        ref={ref}>
                        <div className='xs:w-[250px] sm:w-[300px] md:p-6 lg:w-[400px] xl:w-[450px]'>
                            <Image src={AssortedCookies} width={500} className=' rounded-[50%]' alt="Assorted Cookies Image"></Image>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Popularsec


