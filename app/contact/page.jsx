"use client";
import Contact from "@/components/Contact"; // Ensure this path is correct
import PageBanner from "@/components/PageBanner"; // Ensure this path is correct
import React from "react";
import contactBanner from "../images/contactUs.jpg"; // Ensure this path is correct
import Link from "next/link";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

const ContactUs = () => {
    return (
        <section>
            <PageBanner title={"Contact Us"} bannerImage={contactBanner} />

            <div className="container mx-auto py-14 flex justify-center animate__animated animate__fadeInUp sm:ml-0 sm:mr-0 md:ml-10 md:mr-10 lg:mr-0 lg:ml-0">
                <div className="bg-white grid md:grid-cols-2 gap-10">
                    {/* Contact Info Section */}
                    <div className="p-6 rounded-t-lg md:rounded-l-lg md:rounded-tr-none text-gray-600">
                        <h2 className="text-2xl font-semibold-geist mb-4 uppercase">
                            Our Contacts
                        </h2>
                        <p className="mb-2 font-geist">
                            Reach out to us through any of the methods below
                        </p>

                        <div className="flex flex-col gap-5 mt-5">
                            <div className="flex gap-2 items-center">
                                <div className="p-2 shadow rounded-lg">
                                    <MdEmail size={30} />
                                </div>
                                <Link
                                    href="mailto:contact@risingrootsfoundation.org"
                                    className="text-l font-medium-geist hover:underline hover:underline-offset-4 hover:rounded-xl hover:text-green-800 hover:px-2 hover:transition-all hover:duration-300 hover:ease-in-out"
                                >
                                    contact@risingrootsfoundation.org
                                </Link>
                            </div>

                            <div className="flex gap-2 items-center">
                                <div className="p-2 shadow rounded-lg">
                                    <MdPhone size={30} />
                                </div>
                                <Link
                                    href="tel:+19546342637"
                                    className="text-l font-medium-geist  hover:underline hover:underline-offset-4  hover:rounded-xl hover:text-green-800  hover:px-2 hover:transition-all hover:duration-300 hover:ease-in-out"
                                >
                                    +1 (954) 634-2637
                                </Link>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="p-2 shadow rounded-lg">
                                    <MdLocationPin size={30} />
                                </div>
                                <p className="text-l font-medium-geist">
                                    Global
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <Contact />
                </div>
            </div>

            {/* MAP LOCATION */}
            <div>{/* Optional: You can integrate a map here */}</div>
        </section>
    );
};

export default ContactUs;
