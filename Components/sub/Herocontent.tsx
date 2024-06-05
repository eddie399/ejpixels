"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { SlideInFromLeft, SlideInFromRight, SlideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
const Herocontent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={SlideInFromTop}
            className='Welcome-box py-[8px] px-[8px] border border-[#704f] opacity-[0.9]'
            >
             <SparklesIcon className='text-[#b45fff] mr-[10px] h-5 w-5' />
             <h1 className='Welcome-text text-[13px]'>Edister Portfolio</h1>        
            </motion.div>
            <motion.div
            variants={SlideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
            >
            <span>   
            Providing
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
            software services
            </span> 
            </motion.div>
            <motion.p
            variants={SlideInFromLeft(0.8)}
            className='text-lg text-gray-400 max-w-[600px]'
            >
                A fullstack software engineer with experience in web development, mobile app and software development.
            </motion.p>
            <motion.a
            variants={SlideInFromLeft(1)}
            className='py-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
            >
                Learn More!
            </motion.a>
        </div>
        <motion.div
        variants={SlideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
        >
            <Image 
            src="/mainIconsdark.svg"
            alt='work icons'
            height={650}
            width={650}
            />

        </motion.div>
    </motion.div>
  )
}

export default Herocontent
