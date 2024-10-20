import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import "@/app/globals.css";
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import DrawRoundedIcon from '@mui/icons-material/DrawRounded';
import { FaShoePrints } from "react-icons/fa";
import BackpackRoundedIcon from '@mui/icons-material/BackpackRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { RiShirtFill } from 'react-icons/ri';
import Link from 'next/link';

const formatCount = (count) => {
    if (count >= 1000) {
        return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k+`;
    }
    return `${count}`;
};

const ItemCountDisplay = () => {
    const items = [
        { label: 'Printers', count: 2, icon: <PrintRoundedIcon /> },
        { label: 'Desktop Computers', count: 22, icon: <DesktopWindowsRoundedIcon /> },
        { label: 'Sanitary Pads', count: 5000, icon: <LocalHospitalRoundedIcon /> },
        { label: 'Exercise Books', count: 12000, icon: <MenuBookRoundedIcon /> },
        { label: 'Footwear (Sandals)', count: 830, icon: <FaShoePrints size={30} /> },
        { label: 'Backpacks', count: 400, icon: <BackpackRoundedIcon /> },
        { label: 'New Uniforms', count: 830, icon: <RiShirtFill size={30} /> },
        { label: 'Writing Materials', count: 10000, icon: <DrawRoundedIcon /> },
        { label: 'Crayons', count: 500, icon: <ColorLensRoundedIcon /> },
        { label: 'Educational Sponsorships', count: 2, icon: <SupportRoundedIcon /> },
    ];

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    const iconVariants = {
        hidden: { rotate: -90 },
        visible: { rotate: 0, transition: { type: 'spring', stiffness: 50 } }
    };

    return (
        <>
            <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
                <h2 className="mt-10 mb-5 text-black font-medium-geist text-xl">
                    Join our community for donating and be a part of a positive change in the world.
                </h2>
            </div>

            {/* Adjusted grid layout with animations */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:mr-10 lg:ml-10 animate__animated animate__fadeInUp">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className={`border rounded-3xl text-center font-medium-geist p-4 md:mx-5 lg:mx-10 mt-5 flex flex-col items-center
                            ${index === items.length - 1 && items.length % 3 === 1 ? 'md:col-span-3' : ''}`}
                    >
                        <motion.div className="icon text-green-800 flex justify-center" variants={iconVariants}>
                            {item.icon}
                        </motion.div>
                        <p className="text-green-950 text-xl font-medium-geist">
                            <CountUp start={0} end={item.count} duration={2.5} formattingFn={formatCount} />
                        </p>
                        <h3 className="text-l font-medium-geist mt-2 mb-3 mx-1">{item.label}</h3>
                    </motion.div>
                ))}
            </div>

            <div className="counter-items-container mt-10 text-center">
                <div className="counter-item">
                    <span className="counter-number text-4xl font-medium-geist text-green-800">
                        <CountUp start={0} end={2000} duration={2.5} formattingFn={formatCount} />
                    </span>
                    <p className="text-black">Happy Pupils</p>
                </div>
                <div className="counter-item">
                    <span className="counter-number text-4xl font-medium-geist text-green-800">
                        <CountUp start={0} end={100} duration={2.5} formattingFn={formatCount} />
                    </span>
                    <p className="text-black">Donations</p>
                </div>
            </div>

            <div className="mt-10 text-center">
                <Link className="py-3 px-4 text-white inline-flex items-center gap-x-2 text-sm font-medium-geist rounded-full border border-gray-200 bg-green-800 hover:bg-green-700 shadow-sm uppercase" href="/coming-soon">
                    Get Involved
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </Link>
            </div>
        </>
    );
};

export default ItemCountDisplay;
