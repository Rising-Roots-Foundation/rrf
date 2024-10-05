'use client';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { FiArrowUpRight } from "react-icons/fi";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import Image from 'next/image';

function Fundraiser() {
    // Intersection Observer for the section
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger only once when in view
        threshold: 0.3,    // Adjust this to control when the counter starts (0.3 means when 30% of the section is in view)
    });

    return (
        <div className="max-w-8xl mx-auto py-10 px-5 md:px-0 mt-10 md:ml-20 lg:ml-40 md:mr-20 lg:mr-40">
                <div className="flex justify-between items-center flex-wrap">
                    <h1 className="md:text-3xl text-2xl font-semibold-geist uppercase">Recent Activities in Ghana</h1>
                    <div>
                        <a href="/projects" className="text-green-700 font-semibold-geist text-2xl uppercase flex justify-between gap-3">See All <FiArrowUpRight className="w-7 h-7 bg-gray-600 rounded-full flex items-center" /></a>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="py-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                    <a className="group flex flex-col focus:outline-none" href="#">
                        <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                            <Image
                                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                                src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1365-Edit.JPG?raw=true"
                                alt="Activity Image"
                                width={540}
                                height={375}
                            />
                        </div>

                        <div className="pt-4">
                            <h3 className="relative inline-block font-medium-geist text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-green-800 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                                Digital Learning Hub
                            </h3>
                            <p className="mt-1 text-green-800 dark:text-neutral-400">
                                Empowering pupils through digital education tools
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="py-1.5 px-3 text-green-800 border border-green-800 text-xs sm:text-sm rounded-xl">
                                    Education
                                </span>
                                <span className="py-1.5 px-3 text-green-800 border border-green-800 text-xs sm:text-sm rounded-xl">
                                    Curriculum
                                </span>
                                <span className="py-1.5 px-3 text-green-800 border border-green-800 text-xs sm:text-sm rounded-xl">
                                    Pupils
                                </span>
                            </div>
                        </div>
                    </a>

                    <a className="group flex flex-col focus:outline-none" href="#">
                        <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                            <Image
                                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                                src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1365-Edit.JPG?raw=true"
                                alt="Activity Image"
                                width={540}
                                height={375}
                            />
                        </div>

                        <div className="pt-4">
                            <h3 className="relative inline-block font-medium-geist text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-green-800 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                                Donation Drive
                            </h3>
                            <p className="mt-1 text-green-800 dark:text-neutral-400">
                                Supporting educational access through donations
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="py-1.5 px-3 text-green-800 border border-green-800 text-xs sm:text-sm rounded-xl">
                                    Donations
                                </span>
                                <span className="py-1.5 px-3 text-green-800 border border-green-800 text-xs sm:text-sm rounded-xl">
                                    Community
                                </span>
                            </div>
                        </div>
                    </a>

                    <a className="group flex flex-col focus:outline-none" href="#">
                        <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                            <Image
                                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                                src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1365-Edit.JPG?raw=true"
                                alt="Activity Image"
                                width={540}
                                height={375}
                            />
                        </div>

                        <div className="pt-4">
                            <h3 className="relative inline-block font-medium-geist text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-green-800 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                                Teacher Support
                            </h3>
                            <p className="mt-1 text-green-800 dark:text-neutral-400">
                                Enhancing teacher resources to improve learning outcomes
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="py-1.5 px-3 text-green-800 border border-green-800 text-xs sm:text-sm rounded-xl">
                                    Teachers
                                </span>
                                <span className="py-1.5 px-3 text-green-800 border border-green-800 text-xs sm:text-sm rounded-xl">
                                    Resources
                                </span>
                            </div>
                        </div>
                    </a>

                    <a className="group flex flex-col focus:outline-none" href="#">
                        <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                            <Image
                                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                                src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1365-Edit.JPG?raw=true"
                                alt="Activity Image"
                                width={540}
                                height={375}
                            />
                        </div>

                        <div className="pt-4">
                            <h3 className="relative inline-block font-medium-geist text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-green-800 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                                Pupil Development
                            </h3>
                            <p className="mt-1 text-green-800 dark:text-neutral-400">
                                Comprehensive programs for student growth and achievement
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="py-1.5 px-3 text-green-800 border border-green-800 text-xs sm:text-sm rounded-xl">
                                    Development
                                </span>
                                <span className="py-1.5 px-3 text-green-800 border border-green-800 text-xs sm:text-sm rounded-xl">
                                    Achievement
                                </span>
                            </div>
                        </div>
                    </a>
                </div>


            {/* Counter Section */}
            <div className="flex flex-wrap md:flex-nowrap lg:justify-between justify-center items-stretch lg:px-20 gap-5 mt-10" data-aos="fade-up" data-aos-duration="300">
                <div className="lg:flex-2 flex md:flex-col gap-10">
                    <div className="bg-green-800 w-40 h-40 p-2.5 gap-2.5 rounded-3xl overflow-hidden flex flex-col items-center justify-center">
                        <BrushOutlinedIcon className="text-white text-5xl" />
                        <div className="text-3xl font-medium-geist-geist text-white">
                            {inView && <CountUp start={0} end={100} duration={5} />}
                        </div>
                        <p className="font-medium-geist-geist text-sm text-white">SCHOOL SUPPLIES</p>
                    </div>

                    <div className="bg-green-800 w-40 h-40 p-2.5 gap-2.5 rounded-3xl overflow-hidden flex flex-col items-center justify-center">
                        <BackHandOutlinedIcon className="text-white text-5xl" />
                        <div className="text-3xl font-medium-geist-geist text-white">
                            {inView && <CountUp start={0} end={100} duration={5} />}
                        </div>
                        <p className="font-medium-geist-geist text-sm text-white">HAND SANITIZERS</p>
                    </div>
                </div>

                {/* The Counter */}
                <div ref={ref} className="lg:flex-2 px-10 text-center flex flex-col justify-between">
                    <div>
                        <p className="font-medium-geist-geist md:text-xl text-pretty">
                            Join our community for donating and be a part of a positive change in the world. <br />With over:
                        </p>
                        <div className="text-5xl font-medium-geist-geist lg:pt-10 py-5 text-green-800">
                            {inView && (
                                <CountUp
                                    start={0}
                                    end={600} // Total of all items
                                    duration={10}
                                    separator=","
                                    suffix="+ items."
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        <p className="font-medium-geist-geist text-xl">people already joining</p>
                        <Link href="/coming-soon">
                            <button className="bg-green-800 hover:bg-green-600 text-white md:px-10 px-4 py-2 rounded-full mt-1">
                                GET INVOLVED
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Reading Books and School Bags */}
                <div className="lg:flex-2 flex md:flex-col gap-10">
                    <div className="bg-green-800 w-40 h-40 p-2.5 gap-2.5 rounded-3xl overflow-hidden flex flex-col items-center justify-center">
                        <AutoStoriesOutlinedIcon className="text-white text-5xl" />
                        <div className="text-3xl font-medium-geist-geist text-white">
                            {inView && <CountUp start={0} end={300} duration={5} />}
                        </div>
                        <p className="font-medium-geist-geist text-sm text-white">READING BOOKS</p>
                    </div>

                    <div className="bg-green-800 w-40 h-40 p-2.5 gap-2.5 rounded-3xl overflow-hidden flex flex-col items-center justify-center">
                        <WorkOutlinedIcon className="text-white text-5xl" />
                        <div className="text-3xl font-medium-geist-geist text-white">
                            {inView && <CountUp start={0} end={100} duration={5} />}
                        </div>
                        <p className="font-medium-geist-geist text-sm text-white">SCHOOL BAGS</p>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default Fundraiser;
