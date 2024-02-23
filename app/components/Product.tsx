'use client'

import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { shopItemInterface } from '../helper/store'
import { useZustandStore } from '../helper/store'





const Productcomponent = ({ image, id, price, quantity, name, priceId }: shopItemInterface): React.ReactNode => {


  const { addToCart, increaseQty, setTotalPrice, decreaseQty } = useZustandStore()


  return (
    <div>
      <div>
        <a><Image width={220} src={image} alt={name}></Image></a>
      </div>
      <div className='flex flex-col gap-4 items-center xs:gap-2'>
        <p>{name}</p>
        <p>{`$ ${price}`}</p>
        <span className='border border-black p-2 flex justify-between w-full'>
          <button className='h-[20px]' onClick={() => { decreaseQty(id) }}>-</button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              increaseQty(id)
            }}
            className='h-[20px]'>+</button>
        </span>
        <button onClick={((e) => {
          e.preventDefault()
          addToCart({ name, image, price, id, quantity, priceId })
          setTotalPrice()
        })} className='p-2 border-black border w-full bg-[rgb(78,74,66)] text-white'>Add To Cart</button>
      </div>
    </div>
  )
}

export default Productcomponent


