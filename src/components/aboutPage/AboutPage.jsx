'use client'
import React from 'react'
import Container from '../common/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'

const cards = [
  {
    icon: '/images/eye1.svg',
    title: 'رؤيتنــــــــا',
    description: 'أن نكون الخيار الأول للعملاء في خدمات تقديم الوجبات، من خلال الابتكار المستمر والجودة التي لا تُضاهى بأي مكان آخر.',
    gradient: 'from-[#84c3ff66] to-[#cae5ff66]'
  },
  {
    icon: '/images/text.svg',
    title: 'رسالتنــــا',
    description: 'المساعدة فى تربيتهم بشكل طبيعي وسليم والابتعاد عن المخاطر وتقديم الدعم المعنوى فى كل الاوقات الصعبة.',
    gradient: 'from-[#ff909c66] to-[#ffdade66]'
  },
  {
    icon: '/images/smallstar.svg',
    title: 'أهدافنــــا',
    description: 'تقديم وجبات لذيذة وصحية باستخدام مكونات طازجة ومحلية، مع التركيز على خدمة العملاء الممتازة والتوصيل السريع',
    gradient: 'from-[#ff909c66] to-[#ffdade66]'
  },
  {
    icon: '/images/dimond.svg',
    title: 'قيمنـــــا',
    description: 'نحن ملتزمون بتقديم أعلى جودة في كل وجبة، نسعى دائمًا للالتزام بمواعيدنا و نبتكر دائمًا في وصفاتنا وأساليبنا لتلبية احتياجات عملائنا.',
    gradient: 'from-[#84c3ff66] to-[#cae5ff66]'
  },
]

const AboutPage = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        id='about' 
        className='mt-5 py-20 grid grid-cols-1 md:grid-cols-2'
      >
        {/* Right side - Text content */}
        <div className="right text-mainColor">
          <div className='space-y-6 p-14'>
            <h3 className='bg-[#21294b0a] w-fit rounded-2xl py-2 px-5 font-semibold text-sm'>
              من نحن
            </h3>
            <p className='font-semibold text-2xl leading-8'>
              تعرف على قصة مطابخ ميز ماري ورحلتنا في تقديم أفضل الأطباق الطازجة
            </p>
            <p className='font-normal text-sm leading-6 text-secontColor text-justify'>
              تأسست مطابخ ميز ماري في عام 2010 بهدف تقديم وجبات عالية الجودة ولذيذة مباشرة إلى منازلكم. نسعى لتحقيق رضا العملاء من خلال تقديم خدمات متميزة وأطعمة شهية محضرة بأعلى معايير النظافة والجودة.
            </p>
            <p className='font-normal text-sm leading-6 text-secontColor text-justify'>
              نؤمن بأن الطعام ليس فقط وسيلة لتلبية الجوع، بل هو تجربة ممتعة ومصدر للراحة والفرح. من خلال خبرتنا وفريقنا المتميز، نعمل جاهدين على توفير وجبات تلبي جميع الأذواق وتناسب جميع المناسبات.
            </p>    
            <button className='buttonStyle hover:opacity-90 transition-opacity'>
              اقرأ المزيد
            </button>
          </div>
        </div>

        {/* Left side - Cards */}
        <div className="left text-mainColor">
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {cards.map((card, index) => (
              <div 
                key={index}
                className={`flex flex-col bg-gradient-to-r ${card.gradient} p-6 rounded-3xl gap-6`}
              >
                <Image 
                  src={card.icon} 
                  alt={card.title}
                  width={56}
                  height={56}
                  className='w-14 h-14'
                />
                <h2 className='font-bold text-base'>{card.title}</h2>
                <p className='font-normal text-sm leading-6 text-secontColor text-justify'>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Container>
  )
}

export default AboutPage