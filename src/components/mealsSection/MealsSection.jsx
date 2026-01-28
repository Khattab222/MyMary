"use client"
import React from 'react'
import Container from '../common/Container'
import MealCard from './MealCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

// Meal data - could be moved to a separate data file or fetched from API
const mealsData = [
  { id: 1, image: '/images/meal1.png', price: 120, originalPrice: 150, title: 'بيتزا الدجاج الايطالية بصوص الرانش', description: 'رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية', rating: 5, reviewCount: 120, category: ['all', 'main', 'drinks'] },
  { id: 2, image: '/images/meal2.png', price: 120, originalPrice: 150, title: 'بيتزا الدجاج الايطالية بصوص الرانش', description: 'رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية', rating: 5, reviewCount: 120, category: ['all', 'main', 'drinks'] },
  { id: 3, image: '/images/meal3.png', price: 120, originalPrice: 150, title: 'بيتزا الدجاج الايطالية بصوص الرانش', description: 'رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية', rating: 5, reviewCount: 120, category: ['all', 'main', 'drinks'] },
  { id: 4, image: '/images/meal4.png', price: 120, originalPrice: 150, title: 'بيتزا الدجاج الايطالية بصوص الرانش', description: 'رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية', rating: 5, reviewCount: 120, category: ['all', 'main', 'drinks'] },
  { id: 5, image: '/images/meal5.png', price: 120, originalPrice: 150, title: 'بيتزا الدجاج الايطالية بصوص الرانش', description: 'رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية', rating: 5, reviewCount: 120, category: ['all', 'main'] },
  { id: 6, image: '/images/meal6.png', price: 120, originalPrice: 150, title: 'بيتزا الدجاج الايطالية بصوص الرانش', description: 'رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية', rating: 5, reviewCount: 120, category: ['all', 'main', 'desserts'] },
  { id: 7, image: '/images/meal7.png', price: 120, originalPrice: 150, title: 'بيتزا الدجاج الايطالية بصوص الرانش', description: 'رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية', rating: 5, reviewCount: 120, category: ['all', 'side', 'desserts'] },
  { id: 8, image: '/images/meal8.png', price: 120, originalPrice: 150, title: 'بيتزا الدجاج الايطالية بصوص الرانش', description: 'رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية', rating: 5, reviewCount: 120, category: ['all', 'side', 'desserts'] },
  { id: 9, image: '/images/meal9.png', price: 120, originalPrice: 150, title: 'بيتزا الدجاج الايطالية بصوص الرانش', description: 'رفع مستوى الوعي, المساهمة في توفير بيئة صحية لمرضى السلياك, تعزيز ودعم الأبحاث العلمية', rating: 5, reviewCount: 120, category: ['all', 'side', 'desserts'] },
]

const tabs = [
  { id: 'all', name: 'عرض الكل' },
  { id: 'main', name: 'الاطباق الرئيسيه' },
  { id: 'side', name: 'الاطباق الجانبيه' },
  { id: 'desserts', name: 'الحلويات' },
  { id: 'drinks', name: 'المشروبات' },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
}

const MealsPage = () => {
  const getMealsByCategory = (categoryId) => {
    if (categoryId === 'all') return mealsData
    return mealsData.filter(meal => meal.category.includes(categoryId))
  }

  return (
    <section id='meals' className='py-16 text-mainColor relative'>
      <Container>
        <div className='space-y-8 relative z-[2]'>
          <h3 className='bg-[#21294b0a] w-fit rounded-2xl py-2 px-5 font-semibold text-sm mx-auto'>
            قائمة الوجبات
          </h3>
          <h2 className='font-semibold text-2xl text-center'>
            احجز وجبتك المفضلة بسهولة واستمتع بأشهى الأطباق
          </h2>
          <p className='font-normal text-sm text-secontColor text-center'>
            نقدم لك تشكيلة واسعة من الأطباق الشهية التي تناسب جميع الأذواق. استمتع بتجربة طعام لا تُنسى.
          </p>

          <Tabs>
            <TabList className="border-0 mx-auto md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {tabs.map((tab) => (
                <Tab 
                  key={tab.id} 
                  selectedClassName='bg-[#21294B] text-white'
                  className='text-mainColor rounded-3xl py-2 px-6 transition duration-150 cursor-pointer border text-center text-sm font-medium h-9'
                >
                  {tab.name}
                </Tab>
              ))}
            </TabList>

            {tabs.map((tab) => (
              <TabPanel className='mt-4' key={tab.id}>
                <AnimatePresence mode='wait'>
                  <motion.div
                    className='grid grid-cols-1 md:grid-cols-3 gap-4'
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    whileInView="visible"
                  >
                    {getMealsByCategory(tab.id).map((meal) => (
                      <MealCard
                        key={meal.id}
                        image={meal.image}
                        price={meal.price}
                        originalPrice={meal.originalPrice}
                        title={meal.title}
                        description={meal.description}
                        rating={meal.rating}
                        reviewCount={meal.reviewCount}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </Container>

      <Image 
        src="/images/warda.svg" 
        alt="" 
        width={150} 
        height={150}
        className='absolute top-12 right-0 z-[1]'
      />
      <Image 
        src="/images/wow.svg" 
        alt="" 
        width={150} 
        height={150}
        className='absolute top-12 left-0 z-[1]'
      />
    </section>
  )
}

export default MealsPage