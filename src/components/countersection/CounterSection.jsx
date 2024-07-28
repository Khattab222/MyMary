'use client'
import React from 'react'
import Container from '../common/Container'
import {AnimatePresence, motion} from "framer-motion"

const CounterSection = () => {
  return (

    <motion.div 
    
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{
      duration:1.5
    }}
    className=' py-6 bg-gradient-to-r from-[#fff0f2] via-[#ffffff] to-[#eaf5ff] text-mainColor'>
 <Container >
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  '>
       
        <div className="flex justify-center items-center gap-3 py-3 px-6 ">
        <img src="./images/smallstar.svg" className='w-14 h-14' alt="" />
  <div className="flex flex-col text-sm leading-4 gap-1 text-center ">
    <span className="px-2 text-sm font-normal text-[#797C89]">زوار الموقع</span>
    <span className="font-bold text-2xl">4,500+</span>
  </div>
        </div>


        <div className="flex justify-center items-center gap-3 py-3 px-6 ">
        <img src="./images/face.svg" className='w-14 h-14' alt="" />
  <div className="flex flex-col text-sm leading-4 gap-1 text-center ">
    <span className="px-2 text-sm font-normal text-[#797C89]"> عميل سعيد</span>
    <span className="font-bold text-2xl">6.000+</span>
  </div>
        </div>



        <div className="flex justify-center items-center gap-3 py-3 px-6 ">
        <img src="./images/smallstar.svg" className='w-14 h-14' alt="" />
  <div className="flex flex-col text-sm leading-4 gap-1 text-center ">
    <span className="px-2 text-sm font-normal text-[#797C89]"> الوجبات</span>
    <span className="font-bold text-2xl">8,000</span>
  </div>
        </div>



        <div className="flex justify-center items-center gap-3 py-3 px-6 ">
        <img src="./images/smallstar.svg" className='w-14 h-14' alt="" />
  <div className="flex flex-col text-sm leading-4 gap-1 text-center ">
    <span className="px-2 text-sm font-normal text-[#797C89]">زوار الموقع</span>
    <span className="font-bold text-2xl">4,500+</span>
  </div>
        </div>



     
       </div>

        </Container>
    </motion.div>
   
  )
}

export default CounterSection