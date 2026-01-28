import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import Link from 'next/link'

const contactInfo = [
  { icon: '/images/call.svg', text: '0554885955 / 0559230381', alt: 'Phone' },
  { icon: '/images/send.svg', text: 'info@mezmary.sa', alt: 'Email' },
  { icon: '/images/location.svg', text: 'info@mezmary.sa', alt: 'Location' },
]

const quickLinks1 = ['الرئيسية', 'من نحن', 'قائمة الوجبات', 'تواصل معنا']
const quickLinks2 = ['تسجيل الدخول', 'انشاء حساب', 'المفضلات', 'السلة']

const socialLinks = [
  { icon: '/images/tiktok.svg', alt: 'TikTok', href: '#' },
  { icon: '/images/x.svg', alt: 'X (Twitter)', href: '#' },
  { icon: '/images/youtube.svg', alt: 'YouTube', href: '#' },
  { icon: '/images/whatsapp.svg', alt: 'WhatsApp', href: '#' },
]

const Footer = () => {
  return (
    <section className='bg-gradient-to-r from-[#fff0f2] via-[#ffffff] to-[#eaf5ff] text-mainColor pt-12 pb-2'>
      <Container>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto'>
          {/* Logo and description */}
          <div className="right flex flex-col items-center sm:items-start pe-8 gap-y-6">
            <Image 
              src='/images/logo2.svg' 
              alt="MyzMary logo"
              width={120}
              height={60}
            />
            <p className='font-normal text-sm leading-6 text-secontColor text-justify pe-4'>
              نؤمن بأن الطعام ليس فقط وسيلة لتلبية الجوع، بل هو تجربة ممتعة ومصدر للراحة والفرح. من خلال خبرتنا، نعمل جاهدين على توفير وجبات تلبي جميع الأذواق.
            </p>
          </div>

          {/* Quick links */}
          <div className="middle space-y-6 mx-auto sm:mx-0">
            <h4 className='font-semibold text-lg'>الوصول السريع</h4>
            <div className='flex gap-6'>
              <ul className='space-y-4 text-base text-secontColor font-normal'>
                {quickLinks1.map((link) => (
                  <li key={link} className="hover:text-mainColor transition-colors cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
              <ul className='space-y-4 text-base text-secontColor font-normal'>
                {quickLinks2.map((link) => (
                  <li key={link} className="hover:text-mainColor transition-colors cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact info */}
          <div className="left space-y-6 mx-auto md:mx-0">
            <h4 className='font-semibold text-lg'>طرق التواصل</h4>
            <div className='flex flex-col justify-start gap-8'>
              {contactInfo.map((item, index) => (
                <div key={index} className='flex items-center gap-4'>
                  <Image 
                    src={item.icon} 
                    alt={item.alt}
                    width={24}
                    height={24}
                  />
                  <span className='font-normal text-base text-secontColor'>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className='grid sm:grid-cols-2 gap-2 border-t-[0.7px] border-t-[#B3B3B3] mt-6 pt-4'>
          <p className='font-normal text-sm'>© كل الحقوق محفوظة لميز ماري 2024</p>
          <div className='flex sm:justify-end gap-3 justify-center'>
            {socialLinks.map((social) => (
              <Link 
                key={social.alt} 
                href={social.href}
                aria-label={social.alt}
                className="hover:opacity-70 transition-opacity"
              >
                <Image 
                  src={social.icon} 
                  alt={social.alt}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer