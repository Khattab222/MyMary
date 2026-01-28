import dynamic from 'next/dynamic';
import MainPage from "@/components/home/MainPage";

// Dynamic imports for below-the-fold content
const AboutPage = dynamic(() => import("@/components/aboutPage/AboutPage"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
});

const CounterSection = dynamic(() => import("@/components/countersection/CounterSection"), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-gray-50" />
});

const MealsPage = dynamic(() => import("@/components/mealsSection/MealsSection"), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-gray-100" />
});

const ContactSection = dynamic(() => import("@/components/contactUSSection/ContactSection"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />
});

const PartnerSection = dynamic(() => import("@/components/partnerSection/PartnerSection"), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100" />
});

export default function Home() {
  return (
    <>
      <MainPage />
      <AboutPage />
      <CounterSection />
      <MealsPage />
      <ContactSection />
      <PartnerSection />
    </>
  );
}