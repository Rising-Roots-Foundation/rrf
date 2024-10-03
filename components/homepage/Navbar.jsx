'use client';
import React, { useState } from "react";
import ModalComponent from "../Modal";
import DonationForm from "../DonationForm";
import Image from "next/image";
import logo from '@/app/images/logo.png';

// Navigation links
const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/partners", label: "Partners" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
    const [isModalOpen, setModalOpen] = useState(false); // Donation modal toggle

    // Toggle functions for modal and mobile menu
    const toggleModal = () => setModalOpen((prev) => !prev);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-transparent w-full px-5 md:px-0">
            <div className="max-w-8xl container mx-auto">
                <div className="flex items-center justify-between py-5">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/">
                            <Image src={logo} className="w-28 ml-5" alt="Logo" />
                        </a>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-4 rounded-lg bg-green-800/50 px-4 py-2">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-white hover:underline hover:font-semibold-geist px-3 py-2 text-sm font-medium-geist uppercase"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Donate Button */}
                    <div className="hidden md:flex">
                        <button
                            className="bg-green-800 text-white px-5 py-2 rounded-lg uppercase text-sm mr-5"
                            onClick={toggleModal}
                        >
                            Donate now
                        </button>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMenu} className="bg-green-800 text-white p-2 rounded-md">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden fixed top-[70px] right-0 h-screen w-[50%] bg-white/90 backdrop-blur-xl z-40 rounded-lg mt-3">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-medium-geist">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium-geist uppercase text-[12px]"
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            className="bg-green-800 text-white px-5 py-2 rounded-full text-sm hover:bg-slate-500 uppercase"
                            onClick={toggleModal}
                        >
                            Donate now
                        </button>
                    </div>
                </div>
            )}

            {/* Modal Component */}
            <ModalComponent isOpen={isModalOpen} onClose={toggleModal} contentLabel="Donate Modal">
                <h2 className="text-lg font-medium-geist mb-4 uppercase">Make a Donation</h2>
                <p className="text-gray-600 font-geist">A donation can make a big change</p>
                <DonationForm />
            </ModalComponent>
        </nav>
    );
};

export default Navbar;
