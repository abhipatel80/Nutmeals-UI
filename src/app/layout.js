import { Montserrat } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SubNavMenu from "@/components/common/SubNavMenu";
import { menus } from "@/data/menuData";
import { Suspense } from "react";
import MobileMenu from "@/components/common/MobileMenu";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], height: 0 });

export const metadata = {
  title: "Nutmeals",
  description: "Nutmeals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Suspense fallback="Loading...">
          <div className="w-full">
            <Navbar />
            <div className="block sm:hidden">
              <MobileMenu />
            </div>
            <div className="my-8 md:my-10">
              <SubNavMenu data={menus} />
            </div>
            <div className="lg:mx-32 md:mx-[60px] m-2 sm:m-6 md:my-10 flex items-center justify-center">{children}</div>
            <Footer />
          </div>
        </Suspense>
        <script
          src="https://kit.fontawesome.com/17c2745df6.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
