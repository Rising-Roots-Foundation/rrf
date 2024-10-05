import dynamic from 'next/dynamic';
import PrelineScript from "@/components/PrelineScript";
import localFont from "next/font/local";
import "./globals.css";
import 'animate.css';
import Footer from "@/components/homepage/Footer";


// Dynamically import Navbar to prevent server-side rendering issues
const Navbar = dynamic(() => import('@/components/homepage/Navbar'), { ssr: false });

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

// Set the app element for accessibility
if (typeof window !== 'undefined') {
  Modal.setAppElement('#modal-root'); // Ensure you have this ID in your HTML
}

export const metadata = {
  title: "Rising Roots Foundation",
  description: "Rising Roots Foundation is a non-profit platform designed to connect donors with those in need. Through Rising Roots Foundation, individuals can easily donate to various causes, helping provide essential support to vulnerable communities.",
  keywords: "non-profit, donation, charity, support, needy, Rising Roots Foundation"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        {/* Modal Root Element */}
        <div id="modal-root"></div>
          </body>
          <PrelineScript />
    </html>
  );
}
