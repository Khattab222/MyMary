import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata = {
  title: "ميز ماري | MyzMary - أشهى الوجبات إلى باب منزلك",
  description: "مطابخ ميز ماري تقدم لكم أفضل الأطباق الطازجة والمعدة بأعلى معايير الجودة، مباشرة إلى باب منزلكم. اطلب الآن واستمتع بتجربة طعام لا تُنسى.",
  keywords: ["مطاعم", "توصيل طعام", "وجبات", "ميز ماري", "طعام سعودي", "delivery", "food"],
  authors: [{ name: "MyzMary" }],
  openGraph: {
    title: "ميز ماري | MyzMary - أشهى الوجبات إلى باب منزلك",
    description: "مطابخ ميز ماري تقدم لكم أفضل الأطباق الطازجة والمعدة بأعلى معايير الجودة",
    type: "website",
    locale: "ar_SA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#21294B',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} scroll-smooth`}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header>
            <Navbar />
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}