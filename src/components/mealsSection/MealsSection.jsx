import React from 'react'
import Container from '../common/Container'
import MealsContainer from './MealsContainer'

const MealsPage = () => {
  return (
    <section id='meals' className='py-16 text-mainColor relative '>
      <Container>
        <div className='space-y-8 relative z-[2]  '>

       
      <h3 className='bg-[#21294b0a] w-fit rounded-2xl py-2 px-5 font-semibold text-sm mx-auto '> قائمة الوجبات</h3>
      <h2 className='font-semibold text-2xl text-center '>احجز وجبتك المفضلة بسهولة واستمتع بأشهى الأطباق</h2>
      <p className=' font-normal text-sm text-secontColor text-center'>نقدم لك تشكيلة واسعة من الأطباق الشهية التي تناسب جميع الأذواق. استمتع بتجربة طعام لا تُنسى.</p>
      
      <div className=' w-fit mx-auto  gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5'>
        <button className='buttonStyle '>عرض الكل</button>
        <button className='buttonStyle bg-white text-mainColor border'> الأطباق الرئيسية</button>
        <button className='buttonStyle bg-white text-mainColor border'> الأطباق الجانبية</button>
        <button className='buttonStyle bg-white text-mainColor border'> الحلويات</button>
        <button className='buttonStyle bg-white text-mainColor border'> المشروبات</button>
      </div>


      <MealsContainer/>
      
      
      
      
      
      </div>
      </Container>

   
        <img src="./images/warda.svg" alt="" className='absolute top-12 right-0 z-[1]' />
        <img src="./images/wow.svg" alt="" className='absolute top-12 left-0 z-[1]' />
   
    </section>
  )
}

export default MealsPage