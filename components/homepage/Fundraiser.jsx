import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import ItemCountDisplay from "@/components/homepage/ItemCountDisplay";
import Image from 'next/image';

function Fundraiser() {
    return (
        <div className="max-w-8xl mx-auto py-10 px-5 md:px-0 mt-10 md:ml-20 lg:ml-20 md:mr-20 lg:mr-20">
            <div className="flex justify-between items-center flex-wrap">
                <h1 className="md:text-3xl text-2xl font-semibold-geist uppercase">Recent Activities in Ghana</h1>
                <div>
                    <a href="/Events" className="text-green-700 font-semibold-geist text-2xl uppercase flex justify-between gap-3">
                        See All <FiArrowUpRight className="w-7 h-7 bg-gray-600 rounded-full flex items-center" />
                    </a>
                </div>
            </div>
0
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid lg:grid-cols-2 gap-6">
                    <a className="group sm:flex rounded-xl focus:outline-none bg-green-50" href="/events">
                        <div className="shrink-0 relative rounded-xl overflow-hidden h-[200px] sm:w-[250px] sm:h-[350px] w-full">
                            <Image className="size-full absolute top-0 start-0 object-cover" src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1779-Edit.JPG?raw=true" alt="Event 01"
                                width={560}
                                height={375}
                                loading="lazy"/>
                        </div>
                        <div className="grow">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                <div className="mb-3">
                                    <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium-geist bg-green-800 text-white">
                                        Donation
                                    </p>
                                </div>
                                <h3 className="text-lg sm:text-2xl font-semibold-geist text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600">
                                    Printer Donation to Schools
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    This is to aid printing of documents, examination papers, etc.
                                </p>
                                <div className="mt-5 sm:mt-auto">
                                    <div className="flex items-center">
                                        <div className="shrink-0">
                                            <Image className="size-[46px] rounded-full" src="https://www.risingrootsfoundation.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_rising_roots.35926510.jpg&w=828&q=75" alt="Avatar"
                                                width={50}
                                                height={50}
                                                loading="lazy"/>
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold-geist text-gray-800 text-sm">
                                                Rising Roots Foundation
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                Aug 2024
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a className="group sm:flex rounded-xl focus:outline-none bg-green-50" href="/events">
                        <div className="shrink-0 relative rounded-xl overflow-hidden h-[200px] sm:w-[250px] sm:h-[350px] w-full">
                            <Image className="size-full absolute top-0 start-0 object-cover" src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1847-Edit.JPG?raw=true" alt="Blog Image"
                                width={560}
                                height={375}
                                loading="lazy"/>
                        </div>
                        <div className="grow">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                <div className="mb-3">
                                    <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium-geist bg-green-800 text-white">
                                        Donation
                                    </p>
                                </div>
                                <h3 className="text-lg sm:text-2xl font-semibold-geist text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600">
                                    Exercise Books, Writing Materials, etc.
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    Empowering Education through learning and writing.
                                </p>
                                <div className="mt-5 sm:mt-auto">
                                    <div className="flex items-center">
                                        <div className="shrink-0">
                                            <Image className="size-[46px] rounded-full" src="https://www.risingrootsfoundation.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_rising_roots.35926510.jpg&w=828&q=75" alt="Avatar"
                                                width={50}
                                                height={50}
                                                loading="lazy"/>
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold-geist text-gray-800 text-sm">
                                                Rising Roots Foundation
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                Sep 2024
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <ItemCountDisplay className="animate__animated animate__fadeInUp" />
        </div>
    );
}

export default Fundraiser;
