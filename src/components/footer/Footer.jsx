import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import logo from "@/../public/logo.png"

const Footer = () => {
  return (
    <section className='bg-gradient-to-r from-[#fff0f2] via-[#ffffff] to-[#eaf5ff] text-mainColor pt-12 pb-2'>
        <Container>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto'>

            {/*start left */}
            <div className="right flex flex-col  items-center sm:items-start pe-8 gap-y-6">
                <div>  <img src='./images/logo2.svg'   alt="MyzMary logo" /></div>
                <p className='font-normal text-sm leading-6 text-secontColor text-justify  pe-4  '>نؤمن بأن الطعام ليس فقط وسيلة لتلبية الجوع، بل هو تجربة ممتعة ومصدر للراحة والفرح. من خلال خبرتنا، نعمل جاهدين على توفير وجبات تلبي جميع الأذواق.</p>

            </div>
            {/*end left */}
            {/*start middle */}
            <div className="middle space-y-6 mx-auto sm:mx-0">
                <h4 className='font-semibold text-lg '>الوصول السريع</h4>
                <div className='flex gap-6'>
                <ul className='space-y-4 text-base text-secontColor font-normal'>
                    <li>الرئيسية</li>
                    <li>من نحن</li>
                    <li>قائمة الوجبات</li>
                    <li>تواصل معنا</li>
                </ul>
                <ul  className='space-y-4 text-base text-secontColor font-normal'>
                    <li>تسجيل الدخول</li>
                    <li> انشاء حساب</li>
                    <li> المفضلات</li>
                    <li> السلة</li>
                </ul>
                </div>
            </div>
            {/*end middle */}
            {/*start left */}
            <div className="left space-y-6 mx-auto md:mx-0">
            <h4 className='font-semibold text-lg '>طرق التواصل </h4>
            <div className='flex flex-col justify-start gap-8'>
                <div className='flex items-center gap-4'>
                    <span> <img src="./images/call.svg" alt="phone" /> </span>
                    <span className='font-normal text-base text-secontColor'>0554885955 / 0559230381</span>
                </div>
                <div className='flex items-center gap-4'>
                    <span> <img src="./images/send.svg" alt="phone" /> </span>
                    <span className='font-normal text-base text-secontColor'>info@mezmary.sa</span>
                </div>
                <div className='flex items-center gap-4'>
                    <span> <img src="./images/location.svg" alt="phone" /> </span>
                    <span className='font-normal text-base text-secontColor'>info@mezmary.sa</span>
                </div>
            </div>
            </div>
            {/*end left */}

          </div>




          <div className='grid sm:grid-cols-2 gap-2  border-t-[0.7px] border-t-[#B3B3B3] mt-6 pt-4'>
           <p className='font-normal text-sm'>© كل الحقوق محفوظة لميز ماري 2024</p>
           <div className='flex sm:justify-end gap-3 justify-center '>
                <img src="./images/tiktok.svg" alt="" />
                <img src="./images/x.svg" alt="" />
                <img src="./images/youtube.svg" alt="" />
                <img src="./images/whatsapp.svg" alt="" />
           </div>

          </div>
        </Container>
    </section>
  )
}

export default Footer