import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'

const partners = [
  { id: 1, src: '/images/p1.svg' },
  { id: 2, src: '/images/p2.svg' },
  { id: 3, src: '/images/p3.svg' },
  { id: 4, src: '/images/p4.svg' },
  { id: 5, src: '/images/p5.svg' },
  { id: 6, src: '/images/p6.svg' },
  { id: 7, src: '/images/p7.svg' },
  { id: 8, src: '/images/p8.svg' },
  { id: 9, src: '/images/p9.svg' },
  { id: 10, src: '/images/p10.svg' },
  { id: 11, src: '/images/p11.svg' },
  { id: 12, src: '/images/p12.svg' },
  { id: 13, src: '/images/p13.svg' },
  { id: 14, src: '/images/p14.svg' },
  { id: 15, src: '/images/p15.svg' },
]

const PartnerSection = () => {
  return (
    <section className='py-20 text-mainColor relative'>
      <Container>
        <div className='space-y-4 relative z-[2]'>
          <h3 className='bg-[#21294b0a] w-fit rounded-2xl py-2 px-5 font-semibold text-sm mx-auto'>
            شركاء النجاح
          </h3>
          <h2 className='font-semibold text-2xl text-center'>
            فخورون بشراكتنا مع أفضل الشركات والمؤسسات
          </h2>
          <p className='font-normal text-sm leading-6 text-secontColor text-justify sm:mx-16 w-fit px-16'>
            نتعاون مع مجموعة من أفضل الشركات والمؤسسات التي تساهم في دعم نجاحنا ونمونا المستمر. بفضل هذه الشراكات الاستراتيجية، نستطيع تقديم أفضل الخدمات لعملائنا وتلبية احتياجاتهم بفعالية وكفاءة عالية
          </p>
           
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 mt-4 pt-3 text-center'>
            {partners.map((partner) => (
              <div key={partner.id} className='flex items-center justify-center'>
                <Image 
                  src={partner.src} 
                  alt={`Partner ${partner.id}`}
                  width={120}
                  height={60}
                  className='w-full h-auto max-w-[120px]'
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Decorative images */}
      <Image 
        src='/images/pa1.svg' 
        alt=""
        width={100} 
        height={100} 
        className='absolute top-12 right-0 z-[1]'
      />
      <Image 
        src='/images/pa2.svg' 
        alt=""
        width={100} 
        height={100} 
        className='absolute top-12 left-0 z-[1]'
      />
    </section>
  )
}

export default PartnerSection