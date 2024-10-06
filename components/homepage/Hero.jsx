'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { FaRegSmile, FaHeart } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import hero1 from '@/app/images/hero1.jpg';
import hero2 from '@/app/images/hero2.jpg';
import hero3 from '@/app/images/hero3.png';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    {
        name: "Cultivating Knowledge",
        image: "/images/rrf-hero-1.jpeg",
        subtitle:
            "Our mission is to develop a deep-rooted system to enhance education and development in our world through literacy and opportunities.",
    },
    {
        name: "Developing Leaders",
        image: "/images/rrf-hero-2.jpeg",
        subtitle:
            "Our mission is to develop a deep-rooted system to enhance education and development in our world through literacy and opportunities.",
    },
    {
        name: "Improving Lives",
        image: "/images/rrf-hero-3.jpeg",
        subtitle:
            "Our mission is to develop a deep-rooted system to enhance education and development in our world through literacy and opportunities.",
    },
];

function Hero() {
    const heroSectionCardsRef = useRef(null); // Reference to Hero Section Cards
    const [currentImage, setCurrentImage] = useState(0);
    const navbarHeight = 80; // Height of the sticky Navbar, adjust accordingly

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    const openModal = () => setModalOpen(true);
    // const closeModal = () => setModalOpen(false);

    const handleScroll = () => {
        if (heroSectionCardsRef.current) {
            // Scroll to Hero Section Cards and subtract the height of the sticky Navbar
            const offsetTop = heroSectionCardsRef.current.offsetTop - navbarHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <main>
            <section className="min-h-screen flex items-center justify-center font-geist overflow-hidden">
                <AnimatePresence>
                    {images.map((src, index) =>
                        index === currentImage && (
                            <motion.div
                                key={src.image}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${src.image})` }}
                            >
                                <div className="skeleton absolute inset-0 bg-black/20 z-0"></div>
                                <Image
                                    alt="hero"
                                    src={src.image}
                                    fill
                                    className="object-cover w-full h-full z-10"
                                />
                            </motion.div>
                        )
                    )}
                </AnimatePresence>

                <div className="max-w-8xl container mx-auto relative text-white z-10">
                    <div className="flex justify-center">
                        <div className="text-center lg:w-1/2">
                            <div className='sm:rounded md:rounded-3xl lg:rounded-3xl bg-green-900/30 py-5 px-3 sm:mx-5 md:mx-5'>
                                <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold-geist text-pretty uppercase">
                                    {images[currentImage].name}
                                </h2>
                                <p className="mt-5 text-gray-200 text-l md:text-xl lg:text-xl text-pretty font-medium-geist">
                                    {images[currentImage].subtitle}
                                </p>
                            </div>
                            <div className="inline-flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mt-10">
                                <Link href="/gallery">
                                    <button className="bg-white/85 text-green-800 px-14 py-3 rounded-full outline">
                                        View Gallery
                                    </button>
                                </Link>
                                <button className="bg-green-800/90 text-white px-6 py-3 rounded-full inline-flex items-center gap-4">
                                    <IoPlay /> Watch Video
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-5">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`h-3 w-3 rounded-full transition-opacity ${index === currentImage ? 'opacity-100 bg-white' : 'opacity-50 bg-gray-400'}`}
                            ></span>
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={handleScroll}
                            className="mt-6 bg-green-800/50 text-white px-6 py-3 rounded-full inline-flex justify-center items-center mouse">
                        </button>
                    </div>
                </div>
            </section>

            {/* Hero Section Cards */}
            <div ref={heroSectionCardsRef} className="bg-white h-20 mt-5 relative overflow-hidden">
                <div className="absolute w-full h-full inset-0 grid place-content-center text-green-800">
                    <h2 className="font-semibold-geist uppercase text-2xl lg:text-3xl">
                        The Kids, Our World!
                    </h2>
                </div>
            </div>

            <section className="max-w-8xl mx-auto p-5 lg:px-0 md:ml-20 lg:ml-40 md:mr-20 lg:mr-40 mt-20">
                <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
                    {/* First Card */}
                    <div className="flex flex-col gap-5 self-end animate__animated animate__fadeInUp">
                        <div className="flex flex-col justify-between h-80 p-4 bg-green-800 text-white rounded-3xl">
                            <div>
                                <h2 className="text-4xl font-semibold-geist">250 million</h2>
                                <p className="mt-2 text-sm">
                                    Children worldwide are out of school, which is an increase of 6 million from 2021.
                                </p>
                            </div>
                            <button
                                className="font-medium-geist mt-4 w-full flex items-center justify-between px-4 py-3 bg-green-700 text-green-800 rounded-xl uppercase"
                                onClick={openModal}
                            >
                                <span className="text-[15px] text-white">Sponsor A Child</span>
                                <div className="w-6 h-6 bg-lime-300 rounded-full flex justify-center items-center">
                                    <FiArrowUpRight />
                                </div>
                            </button>
                        </div>
                        <div className="bg-black text-white p-4 rounded-3xl flex items-center sm:justify-center gap-5">
                            <div><FaRegSmile size={50} /></div>
                            <div className="text-xl">Let Them Smile</div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="relative h-96 overflow-hidden rounded-3xl self-end animate__animated animate__fadeInUp">
                        <Image src={hero1} alt="Health" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 p-4 bg-black bg-opacity-40 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg text-white font-medium-geist">Education</h3>
                            </div>
                            <p className="text-white text-xl lg:w-[80%] py-3">Sponsor education to orphans in Ghana</p>
                        </div>
                    </div>

                    {/* Center Card */}
                    <div className="hidden lg:flex flex-col gap-5 justify-center h-auto px-2 self-end bg-gray-200 text-black rounded-3xl animate__animated animate__fadeInUp">
                        <p className="text-center text-xl px-4 font-medium-geist pt-10">Join 100+ Volunteers</p>
                        <div className="py-2">
                            <Link href="/coming-soon">
                                <button className="font-medium-geist mt-4 w-full flex items-center justify-between px-4 py-3 bg-slate-300 text-green-800 rounded-2xl uppercase">
                                    <span className="text-[15px]">Volunteer</span>
                                    <span className="w-6 h-6 bg-gray-600 rounded-full flex justify-center items-center text-white">
                                        <FiArrowUpRight />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="relative h-96 overflow-hidden rounded-3xl self-end animate__animated animate__fadeInUp">
                        <Image src={hero2} alt="Education" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 p-4 bg-black bg-opacity-40 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg text-white font-medium-geist">Health</h3>
                            </div>
                            <p className="text-white lg:w-[70%] text-xl text-medium">Yearly, 45 million children face severe malnutrition.</p>
                        </div>
                    </div>

                    {/* Fourth Card */}
                    <div className="flex flex-col gap-5 animate__animated animate__fadeInUp">
                        <div className="flex flex-col justify-between h-80 bg-yellow-200 text-white rounded-3xl overflow-hidden relative">
                            <Image src={hero3} alt="image" className="w-full h-full object-cover grayscale" />
                            <div className="p-2 absolute w-full bottom-0">
                                <Link href="/contact">
                                    <button className="font-medium-geist mt-4 w-full flex items-center justify-between px-4 py-3 bg-yellow-400 text-green-800 rounded-2xl text-md">
                                        <span className="text-[15px]">BECOME A PARTNER</span>
                                        <div className="w-6 h-6 bg-lime-500 rounded-full flex justify-center items-center">
                                            <FiArrowUpRight />
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Extra */}
                        <div className="bg-green-900 text-lime-200 p-4 rounded-3xl flex items-center justify-center gap-5">
                            <div><FaHeart size={50} /></div>
                            <div className="text-xl">Let Them Rise</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Hero;
