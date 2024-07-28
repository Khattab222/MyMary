"use client"
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import { motion } from "framer-motion";


const HomeOrder = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [startDateShow, setStartDateShow] = useState(false);
  const [leavingdate, setleavingdate] = useState(new Date())
  const [setleavingShow, setsetleavingShow] = useState(false);

  const [personnumber, setPersonnumber] = useState(2)
  const [personNumberShow, setPersonNumberShow] = useState(false)


  const [mealsnumber, setmealsnumber] = useState(1)
  const [mealsnumbershow, setMealsnumbershow] = useState(false)

  const [selectedlocation, setSelectedlocation] = useState("فندق الرحمه , جده");
  const [selectlocashow, setSelectlocashow] = useState(false)

  const options = [
    { value: "فندق الرحمه , جده", label: "فندق الرحمه , جده" },
    { value: "فندق البركه , الرياض", label: "فندق البركه , الرياض" },
    { value: "فندق خليفه , جده", label: "فندق خليفه , جده"},
  ];




  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    
      transition: {
        duration:0.2,
        delayChildren: 0.7,
        staggerChildren: 0.2
      }
    }
  };
  const item = {
    hidden: {opacity: 0 },
    visible: {
      // y: 0,
    
      opacity: 1
    },
    transition:{
      duration:300
    }
  
  };
  
  return (
    <div

    
    className="absolute shadow bg-white rounded-xl bottom-0 left-1/2 transform -translate-x-1/2  translate-y-1/2 p-2 flex w-full md:w-[80%] items-center ">
    {/* start right */}
       <motion.div 
           
    variants={container}
    initial="hidden"
    animate="visible"
       className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 flex-grow  justify-between items-center ">

  <motion.div variants={item} className="relative">
  <div onClick={() =>setStartDateShow((prev) => !prev) } className="flex justify-start items-center gap-3 py-3 px-6 cursor-pointer ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V5" stroke="#21294B" stroke-width="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeWidth="round"/>
<path d="M16 2V5" stroke="#21294B" stroke-width="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeWidth="round"/>
<path d="M3.5 9.08997H20.5" stroke="#21294B" stroke-width="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeWidth="round"/>
<path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#21294B" stroke-width="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeWidth="round"/>
<path d="M15.6947 13.7H15.7037" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
<path d="M15.6947 16.7H15.7037" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
<path d="M11.9955 13.7H12.0045" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
<path d="M11.9955 16.7H12.0045" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
<path d="M8.29431 13.7H8.30329" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
<path d="M8.29431 16.7H8.30329" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
</svg>

  <div className="flex flex-col text-sm leading-4 gap-1 text-center ">
    <span className="px-2 text-[#797C89]">موعد الوصول</span>
    <span className="font-semibold">{startDate.toDateString()} </span>
  </div>
  <img src="./images/downarrow.svg" alt="" />

        </div>
        <div className={`absolute w-fit shadow-sm ${!startDateShow? 'hidden':"block" } border `}>
        <DatePicker selected={startDate} onChange={(date) => {
          setStartDate(date)
          setStartDateShow((prev) => !prev)
          }} />

        </div>
  </motion.div>

<motion.div variants={item} className="relative">

        <div onClick={() =>setsetleavingShow((prev) => !prev) } className="flex justify-start items-center gap-3 py-3 px-6 cursor-pointer ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V5" stroke="#21294B" stroke-width="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeWidth="round"/>
<path d="M16 2V5" stroke="#21294B" stroke-width="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeWidth="round"/>
<path d="M3.5 9.08997H20.5" stroke="#21294B" stroke-width="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeWidth="round"/>
<path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#21294B" stroke-width="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeWidth="round"/>
<path d="M15.6947 13.7H15.7037" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
<path d="M15.6947 16.7H15.7037" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
<path d="M11.9955 13.7H12.0045" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
<path d="M11.9955 16.7H12.0045" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
<path d="M8.29431 13.7H8.30329" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
<path d="M8.29431 16.7H8.30329" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
</svg>

  <div className="flex flex-col text-sm leading-4 gap-1 text-center">
    <span className="px-2 text-[#797C89]"> موعد المغادرة</span>
    <span className="font-semibold">{leavingdate.toDateString()}</span>
  </div>
<img src="./images/downarrow.svg" alt="" />

        </div>

        <div className={`absolute w-fit shadow-sm ${!setleavingShow? 'hidden':"block" } border `}>
        <DatePicker selected={leavingdate} onChange={(date) => {
          setleavingdate(date)
          setsetleavingShow((prev) => !prev)
          }} />

        </div>
</motion.div>




<motion.div variants={item} className="relative">

        <div onClick={() =>setPersonNumberShow((prev) => !prev) } className="flex justify-start items-center gap-3 py-3 px-6  cursor-pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z" stroke="#21294B" stroke-width="1.5" strokeLinecap="round" strokeWidth="round"/>
<path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" stroke="#21294B" stroke-width="1.5" strokeLinecap="round" strokeWidth="round"/>
<path d="M4.16 14.56C1.74 16.18 1.74 18.82 4.16 20.43C6.91 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.92 12.73 4.16 14.56Z" stroke="#21294B" stroke-width="1.5" strokeLinecap="round" strokeWidth="round"/>
<path d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" stroke="#21294B" stroke-width="1.5" strokeLinecap="round" strokeWidth="round"/>
</svg>

  <div className="flex flex-col text-sm leading-4 gap-1 text-center">
    <span className="px-2 text-[#797C89]"> عدد الأفراد</span>
    <span className="font-semibold">{personnumber}افراد </span>
  </div>
  <img src="./images/downarrow.svg" alt="" />

        </div>

        <div className={`absolute w-fit shadow-sm ${!personNumberShow? 'hidden':"block" } border `}>
      <input type="number" value={personnumber} onChange={(e)=>{
        setPersonnumber(e.target.value)
        
      }
        
        } />
        </div>

        
</motion.div>


<motion.div variants={item} className="relative">

        <div onClick={() =>setMealsnumbershow((prev) => !prev) } className="flex justify-start items-center gap-3 py-3 px-6  cursor-pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.97 22H4.97C1.97 22 1.97 20.65 1.97 19V18C1.97 17.45 2.42 17 2.97 17H20.97C21.52 17 21.97 17.45 21.97 18V19C21.97 20.65 21.97 22 18.97 22Z" stroke="#21294B" stroke-width="1.5" strokeLinecap="round" strokeWidth="round"/>
<path d="M20.72 13V17H3.27V13C3.27 9.16 5.98 5.95 9.59 5.18C10.13 5.06 10.69 5 11.27 5H12.72C13.3 5 13.87 5.06 14.41 5.18C18.02 5.96 20.72 9.16 20.72 13Z" stroke="#21294B" stroke-width="1.5" strokeLinecap="round" strokeWidth="round"/>
<path d="M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z" stroke="#21294B" stroke-width="1.5" strokeLinecap="round" strokeWidth="round"/>
<path d="M15 11H9" stroke="#21294B" stroke-width="1.5" strokeLinecap="round" strokeWidth="round"/>
</svg>

  <div className="flex flex-col text-sm leading-4 gap-1 text-center">
    <span className="px-2 text-[#797C89]">الوجبات </span>
    <span className="font-semibold">{mealsnumber}وجبات</span>
  </div>
  <img src="./images/downarrow.svg" alt="" />

        </div>


        <div className={`absolute w-fit shadow-sm ${!mealsnumbershow? 'hidden':"block" } border `}>
      <input type="number" value={mealsnumber} onChange={(e)=>{
        setmealsnumber(e.target.value)
        
      }
        
        } />
        </div>
</motion.div>

<motion.div variants={item} className="relative">

        <div onClick={() =>setSelectlocashow((prev) => !prev) } className="flex justify-start items-center gap-3 py-3 px-6 cursor-pointer ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 11H6.2C5.07989 11 4.51984 11 4.09202 11.218C3.71569 11.4097 3.40973 11.7157 3.21799 12.092C3 12.5198 3 13.0799 3 14.2V21M21 21V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H14.2C13.0799 3 12.5198 3 12.092 3.21799C11.7157 3.40973 11.4097 3.71569 11.218 4.09202C11 4.51984 11 5.0799 11 6.2V21M22 21H2M14.5 7H17.5M14.5 11H17.5M14.5 15H17.5" stroke="#21294B" stroke-width="2" strokeLinecap="round" strokeWidth="round"/>
</svg>



  <div className="flex flex-col text-sm leading-4 gap-1 text-center">
    <span className="px-2 text-[#797C89]">الموقع </span>
    <span className="font-semibold">{selectedlocation}</span>
  </div>
  <img src="./images/downarrow.svg" alt="" />

        </div>


        <div className={`absolute w-full shadow-sm ${!selectlocashow? 'hidden':"block" } border `}>
        <Select
        defaultValue={selectedlocation}
        onChange={(e)=>setSelectedlocation(e.label)}
        options={options}
      />
        </div>
</motion.div>



        <motion.button variants={item} className=" bg-[#21294B] rounded-xl py-3 px-6 text-white hover:bg-[#37426e] transition ">
        اطلب الآن
        </motion.button>
       </motion.div>



    
        
        </div>
  )
}

export default HomeOrder