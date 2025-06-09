import PrelineScript from "@/components/PrelineScript";
import localFont from "next/font/local";
import "./globals.css";
import 'animate.css';
import Footer from "@/components/homepage/Footer";
import NavbarClient from "@/components/NavbarClient";
import ModalInit from "@/components/ModalInit"; // new

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rising Roots Foundation",
  description: "Rising Roots Foundation is a non-profit platform designed to connect donors with those in need. Through Rising Roots Foundation, individuals can easily donate to various causes, helping provide essential support to vulnerable communities.",
  keywords: "non-profit, donation, charity, support, needy, Rising Roots Foundation"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavbarClient />
        <ModalInit />
        {children}
        <Footer />
        <div id="modal-root"></div>
        <PrelineScript />
      </body>
    </html>
  );
}
