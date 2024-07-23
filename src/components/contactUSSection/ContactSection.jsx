import React from 'react'
import Container from '../common/Container'

const ContactSection = () => {
  return (
    <section id='contact' className='bg-gradient-to-r from-[#fff0f2] via-[#ffffff] to-[#eaf5ff] text-mainColor py-16'>
        <Container>
          
            <div className='grid grid-cols-1 md:grid-cols-2'>
                  {/* start right */}
                <div className="right flex justify-center items-center">
                    <div className='space-y-10 p-14 '>
                    <h3 className='bg-[#21294b0a] w-fit rounded-2xl py-2 px-5 font-semibold text-sm '> تواصل معنا </h3>
                    <h2 className='font-semibold text-2xl  '>نحن هنا لمساعدتك في أي وقت!</h2>
                    <p className='font-normal text-sm leading-6 text-secontColor text-justify'>سواء كنت تحتاج إلى مساعدة في حجز وجبتك، أو لديك استفسار حول خدماتنا، فريقنا جاهز لمساعدتك في أي وقت. يمكنك التواصل معنا عبر النموذج التالي أو استخدام إحدى وسائل الاتصال أدناه.</p>

                   
                    </div>
                </div>
                  {/* end  right */}
                  {/* start  left */}
                <div className="left ">
                    <div className='rounded-2xl bg-white p-8  space-y-6 shadow md:mx-9'>
                    <h2 className='font-semibold text-[20px]  '>ارسل رسالتك واستفسارك</h2>
                    <p className='font-normal pe-7 text-sm leading-6 text-secontColor'>أدخل البيانات المطلوبة بلاسفل ثم اضغط زر الارسال واستفسر عن اي شىء تريد وسنقوم بالرد عليك فى اقرب وقت</p>
                    <div>
                    <input
    className="text-sm text-[#797C89] custom-input w-full  px-[16px] py-[18px] border border-[#D9D9D9] rounded-full shadow-sm  focus:outline-blue-300 hover:shadow-sm hover:border-blue-300 "
    placeholder="الاسم بالكامل"
    type="text"
   
  />
                    </div>


                    <div >
           
            <div className="relative  ">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <div className="text-sm outline-none rounded-lg h-full flex items-center justify-center gap-1">
                    <p>965+</p>
                     <img src="./images/saudi.svg" alt="" />
                    </div>
                </div>
                <input type="number" placeholder="رقم الجوال" className="text-sm custom-input w-full px-[16px] py-[18px] border border-[#D9D9D9]   focus:outline-blue-300 shadow-sm rounded-full hover:shadow-sm hover:border-blue-300 "/>
            </div>
        </div>



        <div>
                    <input
    className="text-sm text-[#797C89] custom-input w-full  px-[16px] py-[18px] border border-[#D9D9D9] rounded-full shadow-sm  focus:outline-blue-300 hover:shadow-sm hover:border-blue-300 "
    placeholder=" البريد الالكترونى (اختياري)"
    type="text"
   
  />
                    </div>


                    <div>
                      <textarea rows={6} placeholder='رسالتك' className='border-[#D9D9D9] border w-full rounded-[19px] p-4  shadow-sm  focus:outline-blue-300 hover:shadow-sm hover:border-blue-300'/>
                    </div>



                  <button className='buttonStyle w-full py-[18px] px-5 text-sm font-medium'>ارسال</button>

                    </div>
                </div>
                  {/* end  left */}


            </div>
        </Container>
    </section>
  )
}

export default ContactSection