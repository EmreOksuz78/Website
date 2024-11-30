import React from 'react'
import {RiJavaLine} from 'react-icons/ri';
import { SiKotlin } from 'react-icons/si';
import { SiSwift } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { motion } from "motion/react";



const Technologies = () => {


    const iconVariants = (duration) => ({
        initial: {y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }
    })

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
      whileInView={{opacity:1,y:0}} 
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-1.5}}
         transition={{duration:1.5}}
         className='flex gap-5 text-7xl rounded-2xl border-4 border-neutral-800 p-4'>
            <motion.div variants={iconVariants(2.5)} 
            initial="initial"
            animate="animate"
            >
            <SiKotlin className='text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconVariants(1.6)} 
            initial="initial"
            animate="animate">
            <RiJavaLine className='text-purple-400'/>
            </motion.div>
            <motion.div variants={iconVariants(2.3)} 
            initial="initial"
            animate="animate">
            <SiReact className='text-yellow-400'/>
            </motion.div>
            <motion.div variants={iconVariants(1.8)} 
            initial="initial"
            animate="animate">
            <SiSwift className='text-pink-400'/>
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies
