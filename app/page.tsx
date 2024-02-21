'use client'

import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Popularsec from './components/Popularsec'
import About from './components/Mystory'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Goupbutton from './components/Goupbutton'
import { useRef } from 'react'
import { useInView } from 'framer-motion'



export default function Home(): React.ReactNode {
  const ref = useRef(null)
  const isInView = useInView(ref)


  return (
    <main className='relative overflow-hidden'>
      <div ref={ref}>
        <Navbar></Navbar>
      </div>
      <div id="Hero">
        <Hero></Hero>
      </div>
      <Popularsec></Popularsec>

      <About></About>
      <Contact></Contact>
      {/* <Footer></Footer> */}
      {isInView ? null : <motion.div
        initial={{ y: "12rem", opacity: 0 }}
        animate={{ x: '0', y: '0', opacity: 1 }}
        transition={{ duration: 1 }}
        className='fixed bottom-0 w-full'
      >
        <Goupbutton></Goupbutton>
      </motion.div>}
    </main >
  )
}
