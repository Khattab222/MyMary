import HomeOrder from "@/components/home/HomeOrder";
import PictureDiv from "@/components/home/PictureDiv";
import Image from "next/image";

const MainPage = () => {
  return (
    <div className="flex justify-between Home_page relative  ">

    {/* right side */}
  <div className="relative bg-gradient-to-b from-[#CAE5FF] to-[#A6D0F8] w-1/2 flex flex-col justify-center gap-8 items-start px-12 leading-[40px]">
  <div className="relative ">

    <h2 className="font-bold relative text-[#21294B] text-3xl md:text-[64px] z-[2]">استمتع</h2>
    {/* stars on head */}
    <div className=" absolute -top-[180%] -left-[50%]  mb-0 z-[1]">
  <svg width="100%" height="115" viewBox="0 0 89 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64 83L46.7803 76.88L54.6324 60.3676L38.12 68.2197L32 51L25.88 68.2197L9.36761 60.3676L17.2197 76.88L0 83L17.2197 89.12L9.36761 105.632L25.88 97.7803L32 115L38.12 97.7803L54.6324 105.632L46.7803 89.12L64 83Z" fill="#FFDADE"/>
<path d="M80.2077 49.6791L83.4069 56.4069L76.6791 53.2077L76.1788 52.9698L75.9932 53.4918L73.5 60.507L71.0068 53.4918L70.8212 52.9698L70.3209 53.2077L63.5931 56.4069L66.7923 49.6791L67.0302 49.1788L66.5082 48.9932L59.493 46.5L66.5082 44.0068L67.0302 43.8212L66.7923 43.3209L63.5931 36.5931L70.3209 39.7923L70.8212 40.0302L71.0068 39.5082L73.5 32.493L75.9932 39.5082L76.1788 40.0302L76.6791 39.7923L83.4069 36.5931L80.2077 43.3209L79.9698 43.8212L80.4918 44.0068L87.507 46.5L80.4918 48.9932L79.9698 49.1788L80.2077 49.6791Z" fill="#CAE5FF" stroke="white"/>
<path d="M61 25.5L47.2781 20.6231L53.5352 7.46482L40.3769 13.7219L35.5 0L30.6231 13.7219L17.4648 7.46482L23.7219 20.6231L10 25.5L23.7219 30.3769L17.4648 43.5352L30.6231 37.2781L35.5 51L40.3769 37.2781L53.5352 43.5352L47.2781 30.3769L61 25.5Z" fill="white"/>
</svg>

  </div>
  </div>
    <span className="font-normal text-xl md:text-6xl text-[#21294B] ">بوجبات شهية تُسلم إلى عتبة داركم</span>
    <p className="font-medium text-sm leading-8 text-[#5C6C8A]">مطابخ ميز ماري تقدم لكم أفضل الأطباق الطازجة والمعدة بأعلى معايير الجودة، مباشرة إلى باب منزلكم</p>
   {/*start blocks absolute */}
    <div className=" absolute bottom-0 w-1/3 right-0  ">
    <Image
    priority
    src="/images/blocks.svg"
    height={140}
    width={140}
    alt="Follow us on Twitter"
  />
    </div>
    {/* end blocks absolute */}
  </div>

  {/* left side */}
  <div className="  relative flex justify-center items-center  bg-gradient-to-b from-[#FFDADE] to-[#F1A1AA] w-1/2">
  
 <div className="w-full h-full  text-center  relative bg-[url('/images/mainImage.svg')] bg-contain bg-center mb-4 bg-no-repeat">

{/* <div className="  absolute top-0 bottom-3 left-0 right-0">
<img 
  src="/images/mainImage.svg"
  className="w-full  h-full "
  alt="main image"
  />
</div> */}

  
<PictureDiv/>
 </div>
 

 {/* start icon absolute */}
<div className="absolute left-0 bottom-[15%] border w-[10%]" >

  <img src="/images/start.svg" className="w-full" alt="star"/>
</div>

  {/* end icon absolute */}
  </div>

  {/* center absoulte element */}
  <div className=" absolute top-0 left-1/2 transform -translate-x-1/2  ">
  <svg width="142" height="174" viewBox="0 0 142 174" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M70.9802 174C31.7533 174 0 142.263 0 103.145H142C141.96 142.263 110.207 174 70.9802 174Z" fill="#CAE5FF"/>
<path d="M70.9802 103.145C38.9106 103.145 12.9307 77.2107 12.9307 45.1975H129.069C129.03 77.1712 103.05 103.145 70.9802 103.145Z" fill="#FFDADE"/>
<path d="M70.9802 45.1579C45.9889 45.1579 25.7427 24.9474 25.7427 0H116.257C116.218 24.9474 95.9716 45.1579 70.9802 45.1579Z" fill="#CAE5FF"/>
</svg>

  </div>

  {/*start bottom order absolute */}
  <HomeOrder/>
  {/*end bottom order absolute */}
  </div>
  )
}

export default MainPage