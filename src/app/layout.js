import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/Menu";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer"
import localFont from 'next/font/local'


const Formula_Condensed = localFont({
    src: '../../public/fonts/FormulaCondensed-Bold.otf',
    variable: "--font-formula-condensed-bold"
})



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "mrkjhm - freelance designer & developer",
  description: "by mrkjhm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Formula_Condensed.variable} antialiased`}
      >
      {/*<Cursor />*/}
      <Menu />
        {children}
      <Footer />
      </body>
    </html>
  );
}
