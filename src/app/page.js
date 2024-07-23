import AboutPage from "@/components/aboutPage/AboutPage";
import ContactSection from "@/components/contactUSSection/ContactSection";
import CounterSection from "@/components/countersection/CounterSection";
import HomeOrder from "@/components/home/HomeOrder";
import MainPage from "@/components/home/MainPage";
import PictureDiv from "@/components/home/PictureDiv";
import MealsPage from "@/components/mealsSection/MealsSection";
import PartnerSection from "@/components/partnerSection/PartnerSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <MainPage/>
    <AboutPage/>
    <CounterSection/>
    <MealsPage/>
    <ContactSection/>
    <PartnerSection/>
    
    </>
  );
}
