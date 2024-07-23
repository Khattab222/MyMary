import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'

const PartnerSection = () => {
  return (
    <section className='py-20 text-mainColor relative'>
        <Container>
            <div className='space-y-4 relative z-[2] '>

        <h3 className='bg-[#21294b0a] w-fit rounded-2xl py-2 px-5 font-semibold text-sm mx-auto '>  شركاء النجاح </h3>
        <h2 className='font-semibold text-2xl text-center '>فخورون بشراكتنا مع أفضل الشركات والمؤسسات</h2>
        <p className='font-normal text-sm leading-6 text-secontColor text-justify sm:mx-16 w-fit   px-16 '>نتعاون مع مجموعة من أفضل الشركات والمؤسسات التي تساهم في دعم نجاحنا ونمونا المستمر. بفضل هذه الشراكات الاستراتيجية، نستطيع تقديم أفضل الخدمات لعملائنا وتلبية احتياجاتهم بفعالية وكفاءة عالية</p>
           
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 mt-4  pt-3 text-center'>
     
        <img src="./images/p1.svg" alt=""   className='w-full'/>
        <img src="./images/p2.svg" alt=""   className='w-full'/>
        <img src="./images/p3.svg" alt=""   className='w-full'/>
        <img src="./images/p4.svg" alt=""   className='w-full'/>
        <img src="./images/p5.svg" alt=""   className='w-full'/>
        <img src="./images/p6.svg" alt=""   className='w-full'/>
        <img src="./images/p7.svg" alt=""   className='w-full'/>
        <img src="./images/p8.svg" alt=""   className='w-full'/>
        <img src="./images/p9.svg" alt=""   className='w-full'/>
        <img src="./images/p10.svg" alt=""  className='w-full' />
        <img src="./images/p11.svg" alt=""  className='w-full' />
        <img src="./images/p12.svg" alt=""  className='w-full' />
        <img src="./images/p13.svg" alt=""  className='w-full' />
        <img src="./images/p14.svg" alt=""  className='w-full' />
        <img src="./images/p15.svg" alt=""  className='w-full' />
</div>


            </div>

        </Container>

        <Image src='./images/pa1.svg' width={100} height={100} className='absolute top-12 right-0 z-[1]'/>
        <Image src='./images/pa2.svg' width={100} height={100} className='absolute top-12 left-0 z-[1]'/>
    </section>
  )
}

export default PartnerSection