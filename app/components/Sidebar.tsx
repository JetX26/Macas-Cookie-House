'use client'

import React from 'react'
import Image from 'next/image'
import BagIcon from '../assets/bag-icon.png'
import { useZustandStore } from '../helper/store'
import Cartitem from './Cartitem'
import { useRouter } from 'next/navigation'




const Sidebar = (): React.ReactNode => {

    const { cart, totalPrice } = useZustandStore()


    const { push } = useRouter()


    return (
        <div className='right-4 flex items-center h-full'>
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <span className='flex active:scale-75 duration-300'>
                    <Image src={BagIcon} width={30} alt="Open Cart"></Image>
                    <p className='absolute h-full px-[0.6rem] pt-[0.5rem]'>{cart.length}</p>
                    <label htmlFor="my-drawer-4" className="absolute btn opacity-0">Open drawer</label>
                </span>
            </div>
            <div className="drawer-side h-full">
                <label htmlFor="my-drawer-4" aria-label="close-sidebar" className="drawer-overlay"></label>
                <div className="menu w-80 p-0 min-h-full bg-white text-base-content">
                    <div className='bg-[rgb(78,74,66)] text-white flex w-full justify-center p-8 relative'>
                        <h2 className='text-2xl'>CART</h2>
                    </div>
                    <span className='p-4'>
                        <button className='p-4 w-full text-white bg-[rgba(191,167,96,1)]'>View Cart</button>
                    </span>
                    <div className='flex flex-col justify-between h-full'>
                        {cart.map((item, id) => {
                            return <Cartitem key={id} {...item}></Cartitem>
                        })}
                    </div>
                    <div className='flex flex-col justify-end flex-wrap flex-grow p-4 gap-12'>
                        <div className='text-2xl'>
                            <p>Subtotal</p>
                            <p>{`$ ${totalPrice}`}</p>
                        </div>
                        <div className='text-2xl flex justify-center items-center border-t-black border-[1px] border-b-0 border-r-0 border-l-0'>
                            <button onClick={(() => {
                                push('/viewcart')
                            })} className='p-4 mt-4 text-white bg-[rgba(191,167,96,1)] w-full'>View Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar
