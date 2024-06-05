"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { SlideInFromTop, SlideInFromLeft, SlideInFromRight } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillsText = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center'>
        <motion.div
            variants={SlideInFromTop}
            className='Welcome-box py-[8px] px-[8px] border border-[#704f] opacity-[0.9]'
        >
             <SparklesIcon className='text-[#b45fff] mr-[10px] h-5 w-5' />
             <h1 className='Welcome-text text-[13px]'>Any type of software service </h1>        
        </motion.div>

        <motion.div
        variants={SlideInFromLeft(0.9)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            App made with modern technology

        </motion.div>
        <motion.div
        variants={SlideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mt-[10px] text-center'
        >
            Turning ideas into reality

        </motion.div>

    </div>
  )
}

export default SkillsText