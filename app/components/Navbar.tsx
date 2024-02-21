'use client'

import Image from 'next/image'
import Burgermenu from './Burgermenu'
import { useZustandStore } from '../helper/store'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


const Navbar = (): React.ReactNode => {

    const { myButtons, socialMediaIcons } = useZustandStore()

    const { push } = useRouter();

    const [shopLoad, setShopLoad] = useState(false)
    const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false)


    return (
        <div>
            <div className='h-full bg-[rgb(78,74,66)]  p-4 w-full flex justify-evenly items-center xs:p-2 sm:p-2 xs:w-auto lg:w-auto lg:p-2'>
                <h1 className='text-white text-xl w-1/3 flex justify-center xs:text-sm sm:text-lg xs:w-auto sm:w-auto md:w-auto xs:p-2 sm:p-2'>{`Maca's Cookie House`}</h1>
                <div className={`flex gap-6 w-1/3 justify-center text-white xs:hidden sm:hidden md:hidden lg:w-full`}>
                    {myButtons.map((item, id) => {
                        if (item.name === 'HOME') {
                            return <a onClick={((e) => {
                                e.preventDefault()
                                push('/')
                            })} href={item.link} key={id}>{item.name}</a>
                        } else if (item.name !== 'HOME' && item.name !== 'SHOP') {
                            return <a href={`${'/'}#${item.link}`} key={id}>{item.name}</a>
                        } else if (item.link === '/fullselection') {
                            return <a className='hover:cursor-pointer' onClick={((e) => {
                                e.preventDefault()
                                push(`/fullselection`)
                                setShopLoad(true)
                            })} key={id}>{item.name}</a>
                        }
                    })}
                </div>
                <div className='flex gap-4 w-1/3 justify-center xs:hidden sm:hidden md:hidden'>
                    {socialMediaIcons.map((item, id) => {
                        return <a target='_blank' key={id} href={item.link}><Image className=' bg-transparent' width={30} src={item.icon} alt={item.name}></Image></a>
                    })}
                </div>
                {showBurgerMenu && <Burgermenu></Burgermenu>}
                <div className='absolute right-[3%]'>
                    <button onClick={((e) => {
                        e.preventDefault()
                        showBurgerMenu ? setShowBurgerMenu(false) : setShowBurgerMenu(true)
                    })} className='universal:hidden w-[60px] h-[60px] flex flex-col gap-2 items-center justify-center'>
                        <div className=' bg-black w-[50%] h-[2px]'></div>
                        <div className=' bg-black w-[50%] h-[2px]'></div>
                        <div className=' bg-black w-[50%] h-[2px]'></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar