"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  },
  transition: {
    duration: 0.3
  }
}

const MealCard = ({ 
  image, 
  price, 
  originalPrice, 
  title, 
  description, 
  rating = 5, 
  reviewCount = 120,
  badge = "الأكثر طلبًا"
}) => {
  return (
    <motion.div variants={item} className='shadow rounded-2xl'>
      <div className='relative'>
        <Image 
          src={image} 
          alt={title}
          width={400}
          height={300}
          className='w-full h-auto rounded-t-2xl'
          loading="lazy"
        />
        
        <button className='absolute top-3 right-3 hover:scale-110 transition-transform' aria-label="Add to favorites">
          <Image src="/images/heart.svg" alt="" width={24} height={24} />
        </button>
        
        <button className='absolute bottom-0 left-3 transform translate-y-1/2 hover:scale-110 transition-transform' aria-label="Add to cart">
          <Image src="/images/plus.svg" alt="" width={40} height={40} />
        </button>
        
        {badge && (
          <span className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3'>
            {badge}
          </span>
        )}
      </div>
      
      <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>
          {price} ر.س 
          {originalPrice && (
            <span className='line-through mr-2'>{originalPrice} ر.س</span>
          )}
        </p>
        <p className='text-base font-semibold'>{title}</p>
        <p className='text-sm font-normal text-secontColor line-clamp-2'>{description}</p>
        <div className="flex items-center gap-2 text-sm font-medium">
          <Image src="/images/stars.svg" alt="Rating stars" width={80} height={16} />
          <span className='font-medium text-sm'>{rating}نجوم</span>
          <span className='font-normal text-[12px] text-secontColor'>({reviewCount} تقييم)</span>
        </div>
      </div>
    </motion.div>
  )
}

export default MealCard