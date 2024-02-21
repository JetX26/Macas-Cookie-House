'use client'

import React from 'react'


const Goupbutton = (): React.ReactNode => {

    return (
        <div className='fixed bottom-0 p-4 z-10 mx-auto w-full flex justify-center xs:hidden sm:hidden lg:w-screen'>
            <a href={`#${'Hero'}`}>
                <button className='p-4 bg-black text-white rounded-full h-20 hover:scale-110 duration-300'>Go Up</button>
            </a>
        </div>
    )
}

export default Goupbutton