"use client"
import logo from "@/../public/logo.png"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className=" lg:px-24 px-1 py-2 flex sm:flex-row flex-col justify-between items-center leading-5 text-[#001F15] ">
       <div className="flex items-center justify-between gap-5 lg:gap-20">
       <div className=" md:hidden">

<button >  <img src="./images/burger.svg" alt="burger" /> </button>
</div>
            <Image src={logo} width={81} height={56} alt="MyzMary logo" />
       
        <ul className="hidden md:flex  text-sm gap-4 lg:gap-8  ">
            <li className="font-bold "> <Link href="">الرئيسية</Link> </li>
            <li> <Link href="">من نحن</Link> </li>
            <li> <Link href="">قائمة الوجبات</Link> </li>
            <li> <Link href="">تواصل معنا</Link> </li>
        </ul>

        
       </div>



       <div className="flex items-center gap-6 ">
        <div className="text-[14px] " >اللغة العربية</div>
        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.235 4.70229L12 5.52422L12.765 4.70229C14.8777 2.43257 18.3029 2.43257 20.4155 4.70229C22.5282 6.972 22.5282 10.6519 20.4155 12.9217L13.5301 20.3191C12.685 21.227 11.315 21.227 10.4699 20.3191L3.58447 12.9217C1.47185 10.6519 1.47185 6.972 3.58447 4.70229C5.69709 2.43257 9.12233 2.43257 11.235 4.70229Z" stroke="#28303F" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
 </div>
        <div> <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9999 13H4.86414C3.85131 13 3.3449 13 2.94175 12.8112C2.58662 12.6448 2.28822 12.3777 2.08368 12.0432C1.85148 11.6633 1.79556 11.16 1.68371 10.1534L1.09871 4.88835C1.06454 4.58088 1.04746 4.42715 1.0969 4.30816C1.14032 4.20366 1.21791 4.11697 1.31697 4.06228C1.42978 4 1.58446 4 1.89381 4H18.4999M21 1H19.7516C19.4869 1 19.3546 1 19.2511 1.05032C19.16 1.09463 19.0845 1.16557 19.0346 1.25376C18.9779 1.35394 18.9696 1.48599 18.9531 1.7501L18.0469 16.2499C18.0304 16.514 18.0221 16.6461 17.9654 16.7462C17.9155 16.8344 17.84 16.9054 17.7489 16.9497C17.6454 17 17.5131 17 17.2484 17H4M15.5 20.5H15.49M6.5 20.5H6.49M15 20.5C15 20.7761 15.2239 21 15.5 21C15.7761 21 16 20.7761 16 20.5C16 20.2239 15.7761 20 15.5 20C15.2239 20 15 20.2239 15 20.5ZM6 20.5C6 20.7761 6.22386 21 6.5 21C6.77614 21 7 20.7761 7 20.5C7 20.2239 6.77614 20 6.5 20C6.22386 20 6 20.2239 6 20.5Z" stroke="#21294B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="7" cy="3.5" rx="7" ry="3.5" transform="matrix(-1 0 0 1 19 14)" stroke="#28303F" stroke-width="1.5" stroke-linejoin="round"/>
<circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 16 3)" stroke="#28303F" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
 </div>

 <button className="w-[140px] h-[48px] px-[24px] py-[14px] bg-[#21294B] rounded-2xl text-white">اطلب الآن</button>
       </div>
    </nav>
  )
}

export default Navbar