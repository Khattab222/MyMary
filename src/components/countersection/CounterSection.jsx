'use client'
import React from 'react'
import Container from '../common/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { icon: '/images/smallstar.svg', label: 'زوار الموقع', value: '4,500+' },
  { icon: '/images/face.svg', label: 'عميل سعيد', value: '6.000+' },
  { icon: '/images/smallstar.svg', label: 'الوجبات', value: '8,000' },
  { icon: '/images/smallstar.svg', label: 'زوار الموقع', value: '4,500+' },
]

const CounterSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className='py-6 bg-gradient-to-r from-[#fff0f2] via-[#ffffff] to-[#eaf5ff] text-mainColor'
    >
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <div key={index} className="flex justify-center items-center gap-3 py-3 px-6">
              <Image 
                src={stat.icon} 
                alt={stat.label}
                width={56}
                height={56}
                className='w-14 h-14'
              />
              <div className="flex flex-col text-sm leading-4 gap-1 text-center">
                <span className="px-2 text-sm font-normal text-[#797C89]">{stat.label}</span>
                <span className="font-bold text-2xl">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </motion.div>
  )
}

export default CounterSection