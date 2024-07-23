import React from 'react'
import Container from '../common/Container'

const ContactSection = () => {
  return (
    <section className='bg-gradient-to-r from-[#fff0f2] via-[#ffffff] to-[#eaf5ff] text-mainColor py-16'>
        <Container>
          
            <div className='grid grid-cols-1 md:grid-cols-2'>
                  {/* start right */}
                <div className="right">
                    <div className='space-y-6 p-14'>
                    <h3 className='bg-[#21294b0a] w-fit rounded-2xl py-2 px-5 font-semibold text-sm '> تواصل معنا </h3>
                    <h2 className='font-semibold text-2xl  '>نحن هنا لمساعدتك في أي وقت!</h2>
                    <p className='font-normal text-sm leading-6 text-secontColor'>سواء كنت تحتاج إلى مساعدة في حجز وجبتك، أو لديك استفسار حول خدماتنا، فريقنا جاهز لمساعدتك في أي وقت. يمكنك التواصل معنا عبر النموذج التالي أو استخدام إحدى وسائل الاتصال أدناه.</p>

                   
                    </div>
                </div>
                  {/* end  right */}
                  {/* start  left */}
                <div className="left ">
                    <div className='rounded-2xl bg-white p-8  space-y-6 shadow'>
                    <h2 className='font-semibold text-[20px]  '>ارسل رسالتك واستفسارك</h2>
                    <p className='font-normal text-sm leading-6 text-secontColor'>أدخل البيانات المطلوبة بلاسفل ثم اضغط زر الارسال واستفسر عن اي شىء تريد وسنقوم بالرد عليك فى اقرب وقت</p>

                    </div>
                </div>
                  {/* end  left */}


            </div>
        </Container>
    </section>
  )
}

export default ContactSection