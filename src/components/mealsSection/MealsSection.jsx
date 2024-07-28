"use client"
import React from 'react'
import Container from '../common/Container'
import MealsContainer from './MealsContainer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {AnimatePresence, motion} from "framer-motion"
const MealsPage = () => {

const tabs = [
  {
    name:" عرض الكل ",
    render:()=> {
      return ( <>
      <motion.div   variants={item}
             
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal1.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal2.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>

<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal3.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>

<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal4.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>

<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal5.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal6.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal7.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal8.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal9.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>
      </>)
    }
  },
  {
    name:"الاطباق الرئيسيه ",
    render:()=> {
      return ( <>
      <motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal1.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal2.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>

<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal3.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>

<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal4.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>

<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal5.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal6.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>
      </>)
    }
  },
  {
    name:"الاطباق الجانبيه ",
    render:()=> {
      return ( <>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal7.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal8.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal9.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>
      </>)
    }
  },
  {
    name:"الحلويات  ",
    render:()=> {
      return ( <>
<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal6.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal7.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal8.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal9.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>
      </>)
    }
  },
  {
    name:"المشروبات",
    render:()=> {
      return ( <>
      <motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal1.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>


<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal2.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>

<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal3.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>

<motion.div  variants={item}
                className='shadow rounded-2xl '>
    <div className='relative'>
        <img src="./images/meal4.png" alt="meal" className='w-full' />
       
        <img src="./images/heart.svg" alt="meal" className='absolute top-3 right-3' />
        <img src="./images/plus.svg" alt="meal" className='absolute bottom-0 left-3 transform translate-y-1/2 ' />
        <h3 className='bg-white w-fit rounded-full py-2 px-3 font-medium text-xs absolute top-3 left-3  '>  الأكثر طلبًا</h3>
            
       
    </div>
  <div className='m-1 flex flex-col gap-3 p-2'>
        <p className='text-base text-secontColor font-medium'>120 ر.س <span className='line-through'>120 ر.س</span></p>
        <p className='text-base font-semibold'>بيتزا الدجاج الايطالية بصوص الرانش</p>
        <p className='text-sm font-normal text-secontColor'>رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية </p>
        <div className="flex items-center gap-2 text-sm font-medium">
<img src="./images/stars.svg" alt="" />
<span className='font-medium text-sm'>5نجوم </span>
<span className='font-normal text-[12px] text-secontColor'>(120 تقييم) </span>
</div>

  </div>
</motion.div>
      </>)
    }
  },
]


const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
  
    transition: {
  
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: {opacity: 0 },
  visible: {
    // y: 0,
  
    opacity: 1
  },
  transition:{
    duration:300
  }

};

  return (
    <section id='meals' className='py-16 text-mainColor relative '>
      <Container>
        <div className='space-y-8 relative z-[2]  '>

       
      <h3 className='bg-[#21294b0a] w-fit rounded-2xl py-2 px-5 font-semibold text-sm mx-auto '> قائمة الوجبات</h3>
      <h2 className='font-semibold text-2xl text-center '>احجز وجبتك المفضلة بسهولة واستمتع بأشهى الأطباق</h2>
      <p className=' font-normal text-sm text-secontColor text-center'>نقدم لك تشكيلة واسعة من الأطباق الشهية التي تناسب جميع الأذواق. استمتع بتجربة طعام لا تُنسى.</p>
      
 
      <Tabs >
    <TabList className="border-0 mx-auto md:w-3/4  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
    {
      tabs.map((tabs, i) =>  <Tab key={i} selectedClassName='bg-[#21294B] text-white  ' className='text-mainColor rounded-3xl py-2 px-6 transition duration-150  cursor-pointer border text-center text-sm font-medium h-9 '> {tabs.name} </Tab> )
    }
    </TabList>


      {
        tabs.map((tab,i) => {
          return (
            <TabPanel className='mt-4' key={i}>
              <AnimatePresence mode='wait'>
              <motion.div
               className='grid grid-cols-1 md:grid-cols-3 gap-4'
               variants={container}
    initial="hidden"
    animate="visible"
    
   
               >
           { tab.render()}
        </motion.div>
              </AnimatePresence>
     
            </TabPanel>
         
          )
        })
      }

 
  </Tabs>

      {/* <MealsContainer/> */}
      
      
      
      
      
      </div>
      </Container>

   
        <img src="./images/warda.svg" alt="" className='absolute top-12 right-0 z-[1]' />
        <img src="./images/wow.svg" alt="" className='absolute top-12 left-0 z-[1]' />
   
    </section>
  )
}

export default MealsPage