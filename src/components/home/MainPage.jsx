"use client"
import HomeOrder from "@/components/home/HomeOrder"
import PictureDiv from "@/components/home/PictureDiv"
import Image from "next/image"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
}

const MainPage = () => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="visible"
      id="home" 
      className="grid lg:grid-cols-2 lg:h-[85vh] relative"
    >
      {/* Right side */}
      <div className="lg:h-auto h-[90vh] relative bg-gradient-to-b from-[#CAE5FF] to-[#A6D0F8] flex flex-col justify-center gap-8 items-start px-12 leading-[40px]">
        <div className="relative">
          <h2 className="font-bold relative text-[#21294B] text-[64px] z-[2]">استمتع</h2>
          {/* Stars on head */}
          <div className="absolute -top-[180%] -left-[50%] mb-0 z-[1]">
            <svg width="100%" height="115" viewBox="0 0 89 115" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64 83L46.7803 76.88L54.6324 60.3676L38.12 68.2197L32 51L25.88 68.2197L9.36761 60.3676L17.2197 76.88L0 83L17.2197 89.12L9.36761 105.632L25.88 97.7803L32 115L38.12 97.7803L54.6324 105.632L46.7803 89.12L64 83Z" fill="#FFDADE"/>
              <path d="M80.2077 49.6791L83.4069 56.4069L76.6791 53.2077L76.1788 52.9698L75.9932 53.4918L73.5 60.507L71.0068 53.4918L70.8212 52.9698L70.3209 53.2077L63.5931 56.4069L66.7923 49.6791L67.0302 49.1788L66.5082 48.9932L59.493 46.5L66.5082 44.0068L67.0302 43.8212L66.7923 43.3209L63.5931 36.5931L70.3209 39.7923L70.8212 40.0302L71.0068 39.5082L73.5 32.493L75.9932 39.5082L76.1788 40.0302L76.6791 39.7923L83.4069 36.5931L80.2077 43.3209L79.9698 43.8212L80.4918 44.0068L87.507 46.5L80.4918 48.9932L79.9698 49.1788L80.2077 49.6791Z" fill="#CAE5FF" stroke="white"/>
              <path d="M61 25.5L47.2781 20.6231L53.5352 7.46482L40.3769 13.7219L35.5 0L30.6231 13.7219L17.4648 7.46482L23.7219 20.6231L10 25.5L23.7219 30.3769L17.4648 43.5352L30.6231 37.2781L35.5 51L40.3769 37.2781L53.5352 43.5352L47.2781 30.3769L61 25.5Z" fill="white"/>
            </svg>
          </div>
        </div>
        <span className="font-normal text-6xl text-[#21294B]">بوجبات شهية تُسلم إلى عتبة داركم</span>
        <p className="font-medium text-sm leading-8 text-[#5C6C8A]">
          مطابخ ميز ماري تقدم لكم أفضل الأطباق الطازجة والمعدة بأعلى معايير الجودة، مباشرة إلى باب منزلكم
        </p>
        {/* Blocks absolute */}
        <div className="absolute bottom-0 w-1/3 right-0">
          <Image
            priority
            src="/images/blocks.svg"
            height={140}
            width={140}
            alt="Decorative blocks"
          />
        </div>
      </div>

      {/* Left side */}
      <div className="left h-[90vh] lg:h-auto relative flex justify-center items-center bg-gradient-to-b from-[#FFDADE] to-[#F1A1AA]">
        <div className="w-full h-full relative">
          <Image
            src="/images/main2.png"
            alt="Main dish"
            fill
            priority
            className="object-contain object-center mb-10"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        
        <PictureDiv />
        
        {/* Star icon absolute */}
        <div className="absolute left-0 bottom-[15%]">
          <Image 
            src="/images/start.svg" 
            alt="Star decoration"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Center absolute element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 lg:w-auto lg:h-auto">
        <Image 
          src="/images/center.svg" 
          alt="Center decoration"
          width={200}
          height={200}
        />
      </div>

      {/* Bottom order absolute */}
      <HomeOrder />
    </motion.div>
  )
}

export default MainPage