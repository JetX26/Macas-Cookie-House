
'use client'


import React from 'react'
import Image from 'next/image'
import { shopItemInterface } from '../helper/store'
import { useZustandStore } from '../helper/store'

const Cartitem = ({ image, id, quantity, name, price }: shopItemInterface): React.ReactNode => {

    const { removeFromCart, increaseCartQty, setTotalPrice, decreaseCartQty } = useZustandStore()




    return (
        <div className='w-full'>
            <div className='flex w-full justify-center items-center p-4'>
                <Image src={image} className='w-1/2' alt="Placeholder"></Image>
                <div className='flex flex-col items-center gap-2 w-1/2'>
                    <p>{name}</p>
                    <p>{`$ ${price}`}</p>
                    <span className='flex justify-evenly w-[50%] border-black border-[1px] relative'>
                        <button onClick={() => {
                            decreaseCartQty(id)
                        }}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => {
                            increaseCartQty(id)
                            // setTotalPrice()
                        }}>+</button>
                    </span>
                    <button onClick={() => { removeFromCart(id) }} className='border-[1px] border-black px-1'>X</button>
                </div>
            </div>
        </div>
    )
}

export default Cartitem