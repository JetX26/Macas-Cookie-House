'use client'

import React from 'react'
import { useZustandStore } from '../helper/store'
import Navbar from './Navbar'
import Product from '../components/Product'
import Sidebar from './Sidebar'
import Footer from './Footer'



const Sectionplaceholder = (): React.ReactNode => {

    const { shopItems } = useZustandStore()


    return (
        <div className=' flex flex-col items-center xs:h-auto h-screen bg-white text-black'>
            <span className='w-full'>
                <Navbar></Navbar>
            </span>
            <div className='grid grid-cols-3 h-full gap-x-32 xs:grid-cols-2 xs:p-2 xs:gap-x-12 md:p-4 lg:p-4'>
                {shopItems.map((item, id) => {
                    return <Product {...item} key={id}></Product>
                })}
            </div>
            <div className='xs:hidden sm:hidden md:hidden absolute top-4 right-4'>
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}

export default Sectionplaceholder

