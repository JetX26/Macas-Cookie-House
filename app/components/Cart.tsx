'use client'

import Navbar from './Navbar'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useZustandStore } from '../helper/store'
import Image from 'next/image'
import axios from 'axios'




const Cart = (): React.ReactNode => {

    const { cart, increaseCartQty, removeFromCart, totalPrice, decreaseCartQty } = useZustandStore()

    const { push } = useRouter()



    const submitCheckout = async () => {
        const { data } = await axios.post('http://localhost:3000/API/checkout', {
            items: cart
        })
        push(data.checkout)
    }




    return (
        <div className='h-full'>
            <div className='w-full relative'>
                <Navbar></Navbar>
            </div>
            <div className='flex justify-center items-center h-screen w-full bg-white text-black'>
                <div className='   w-[50%] xs:w-full flex xs:flex-col sm:flex-col sm:w-full md:w-full md:flex-col lg:w-full lg:justify-center lg:items-center xl:w-full xl:justify-center xl:gap-12 xxl:gap-12 xxl:w-[90%]'>
                    <div className='w-[60%] xs:w-full sm:w-full sm:flex sm:flex-col sm:items-center md:w-full md:flex md:flex-col md:items-center xs:flex xs:flex-col xs:items-center lg:w-1/2 lg:flex lg:items-center lg:justify-center lg:flex-col xl:w-1/2 xl:flex  xl:items-center xl:flex-col xl:justify-center flex flex-col justify-start items-center lg:h-[500px] '>
                        <h2 className='p-4 m-4 text-xl'>My Cart</h2>
                        {cart.length > 0 ? cart.map((item, id) => {
                            return <div key={id} className='relative w-full p-4 m-4 flex justify-center items-center xs:flex-col xs:w-full xs:items-center sm:flex-col sm:w-full sm:gap-4 gap-12 xs:gap-2 border-t-2 border-b-2 lg:w-full xl:w-full xxl:w-full'>
                                <Image src={item.image} width={100} className=' border-2' alt="Chocolate Box Image"></Image>
                                <p className='w-[20%] xs:w-[20%] sm:w-[20%] md:w-[20%] lg:w-[20%] xl:w-[20%] xxl:w-[20%]'>{item.name}</p>
                                <p>{`$${item.price}`}</p>
                                <span className='flex justify-evenly items-center h-1/2 w-[20%] xs:w-[50%] lg:w-[30%] lg:h-[35%] xxl:w-[10%] border-black border-[1px]'>
                                    <button onClick={() => {
                                        decreaseCartQty(item.id)
                                    }}>-</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        increaseCartQty(item.id)
                                    }
                                    }>+</button>

                                </span>
                                <button onClick={() => {
                                    removeFromCart(item.id)
                                }}>Delete</button>
                            </div>
                        }) : <p>Your cart is empty!</p>}
                    </div>
                    <div className='w-[40%] xs:w-full sm:w-full md:w-full lg:h-[500px] lg:flex lg:flex-col xl:flex xl:flex-col'>
                        <h2 className=' p-4 m-4 text-xl'>Order Summary</h2>
                        <div className='border-t-2 p-4 m-4 flex flex-col gap-12'>
                            <span className='flex justify-between'>
                                <p>$</p>
                            </span>
                            <p className='border-b-2'>Estimate Delivery</p>
                            <span className='flex justify-between text-2xl'>
                                <p>Total</p>
                                <p>{`$ ${totalPrice}`}</p>
                            </span>
                            <span className='flex flex-col items-center gap-4'>
                                <button onClick={submitCheckout} className='bg-[rgba(191,167,96,1)] p-4 w-full'>Checkout</button>
                                <p className='font-light'>Secure Checkout</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Cart