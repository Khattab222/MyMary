import React from 'react'
import Container from '../common/Container'

const AboutPage = () => {
  return (
    <Container>
      <div id='about' className='mt-5 py-20 grid grid-cols-1 md:grid-cols-2'>
        {/* start right */}
       <div className="right  text-mainColor ">
        <div className='space-y-6 p-14 '>
            <h3 className='bg-[#21294b0a] w-fit rounded-2xl py-2 px-5 font-semibold text-sm '>من نحن</h3>
            <p className='font-semibold text-2xl leading-8'>تعرف على قصة مطابخ ميز ماري ورحلتنا في تقديم أفضل الأطباق الطازجة</p>
            <p className='font-normal text-sm leading-6 text-secontColor text-justify'>تأسست مطابخ ميز ماري في عام 2010 بهدف تقديم وجبات عالية الجودة ولذيذة مباشرة إلى منازلكم. نسعى لتحقيق رضا العملاء من خلال تقديم خدمات متميزة وأطعمة شهية محضرة بأعلى معايير النظافة والجودة.</p>
            <p className='font-normal text-sm leading-6 text-secontColor text-justify'>نؤمن بأن الطعام ليس فقط وسيلة لتلبية الجوع، بل هو تجربة ممتعة ومصدر للراحة والفرح. من خلال خبرتنا وفريقنا المتميز، نعمل جاهدين على توفير وجبات تلبي جميع الأذواق وتناسب جميع المناسبات.</p>    
            <button className='buttonStyle'>اقرأ المزيد</button>
        </div>
       </div>
        {/* end right */}
        {/* start left */}

       <div className="left text-mainColor">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='flex flex-col bg-gradient-to-r from-[#84c3ff66] to-[#cae5ff66] p-6 rounded-3xl gap-6 '>
            <img src="./images/eye1.svg" className='w-14 h-14' alt="" />
            <h2 className='font-bold text-base'>رؤيتنــــــــا</h2>
            <p className='font-normal text-sm leading-6 text-secontColor text-justify'>أن نكون الخيار الأول للعملاء في خدمات تقديم الوجبات، من خلال الابتكار المستمر والجودة التي لا تُضاهى بأي مكان آخر.</p>
          </div>

          <div className='flex flex-col bg-gradient-to-r from-[#ff909c66] to-[#ffdade66] p-6 rounded-3xl gap-6 '>
            <img src="./images/text.svg" className='w-14 h-14' alt="" />
            <h2 className='font-bold text-base'>رسالتنــــا</h2>
            <p className='font-normal text-sm leading-6 text-secontColor text-justify'>المساعدة فى تربيتهم بشكل طبيعي وسليم والابتعاد عن المخاطر وتقديم الدعم المعنوى فى كل الاوقات الصعبة .</p>
          </div>

          <div className='flex flex-col bg-gradient-to-r from-[#ff909c66] to-[#ffdade66] p-6 rounded-3xl gap-6 '>
            <img src="./images/smallstar.svg" className='w-14 h-14' alt="" />
            <h2 className='font-bold text-base'>أهدافنــــا</h2>
            <p className='font-normal text-sm leading-6 text-secontColor text-justify'>تقديم وجبات لذيذة وصحية باستخدام مكونات طازجة ومحلية، مع التركيز على خدمة العملاء الممتازة والتوصيل السريع</p>
          </div>

          <div className='flex flex-col bg-gradient-to-r from-[#84c3ff66] to-[#cae5ff66] p-6 rounded-3xl gap-6 '>
            <img src="./images/dimond.svg" className='w-14 h-14' alt="" />
            <h2 className='font-bold text-base'>قيمنـــــا</h2>
            <p className='font-normal text-sm leading-6 text-secontColor text-justify'>نحن ملتزمون بتقديم أعلى جودة في كل وجبة، نسعى دائمًا للالتزام بمواعيدنا و نبتكر دائمًا في وصفاتنا وأساليبنا لتلبية احتياجات عملائنا.</p>
          </div>
        </div>

       </div>
        {/* end left */}

      </div>
    </Container>
  )
}

export default AboutPage