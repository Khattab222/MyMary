import React from 'react'
import Container from '../common/Container'

const AboutPage = () => {
  return (
    <Container>
      <div className='mt-5 py-20 grid grid-cols-1 md:grid-cols-2'>
        {/* start right */}
       <div className="right  text-textColor">
        <div>
            <h3 className='bg-[#21294b0a] w-fit rounded-2xl py-2 px-5 '>من نحن</h3>
            <p>تعرف على قصة مطابخ ميز ماري ورحلتنا في تقديم أفضل الأطباق الطازجة</p>
            <p>تأسست مطابخ ميز ماري في عام 2010 بهدف تقديم وجبات عالية الجودة ولذيذة مباشرة إلى منازلكم. نسعى لتحقيق رضا العملاء من خلال تقديم خدمات متميزة وأطعمة شهية محضرة بأعلى معايير النظافة والجودة.</p>
            <p>نؤمن بأن الطعام ليس فقط وسيلة لتلبية الجوع، بل هو تجربة ممتعة ومصدر للراحة والفرح. من خلال خبرتنا وفريقنا المتميز، نعمل جاهدين على توفير وجبات تلبي جميع الأذواق وتناسب جميع المناسبات.</p>    
            <button>اقرأ المزيد</button>
        </div>
       </div>
        {/* end right */}
        {/* start left */}

       <div className="left">left</div>
        {/* end left */}

      </div>
    </Container>
  )
}

export default AboutPage