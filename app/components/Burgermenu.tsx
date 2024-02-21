'use client'

import React from 'react'
import { useRouter } from 'next/navigation'



const Burgermenu = (): React.ReactNode => {

    const { push } = useRouter()


    return (
        <div className='absolute top-[0] h-screen bg-black text-white w-screen p-20 flex flex-col items-center gap-6 md:text-lg sm:text-lg'>
            <button className='text-4xl absolute right-[2%] top-[1%]'>X</button>
            <a href="/">Home</a>
            <a href="/fullselection">Order Online</a>
            <a href="/viewcart">
                <h2 className='text-2xl font-extrabold'>View Cart</h2>
            </a>
        </div>
    )

}

export default Burgermenu