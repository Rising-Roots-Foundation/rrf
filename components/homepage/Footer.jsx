'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl p-6 max-w-sm mx-auto animate__animated animate__fadeInUp">
                <h2 className="text-xl font-medium-geist">Subscription Successful!</h2>
                <p className="mt-3 text-gray-800 text-pretty">You will receive updates in your inbox. <br /> Thank you for subscribing!</p>
                <div className="flex justify-center">
                    <button
                        onClick={onClose}
                        className="mt-4 px-7 py-3 text-white bg-green-800 inline-flex justify-center items-center rounded-xl hover:bg-green-700 transition duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

function Footer() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const currentYear = new Date().getFullYear();

    const handleSubscribe = async (event) => {
        event.preventDefault();  // Prevent default form submission
        setIsLoading(true);      // Start loading spinner

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Subscription successful', data.message);
                setEmail(''); // Clear the email input after successful subscription
                setModalOpen(true); // Show the modal
            } else {
                const errorData = await response.json();
                console.error('Subscription failed:', errorData.error || 'Unknown error');
            }
        } catch (error) {
            console.error('Network or server error:', error.message || error);
        } finally {
            setIsLoading(false);  // Stop loading spinner
        }
    };

    return (
        <footer className="md:p-0 bg-green-800 ">
            <div className="max-w-8xl container mx-auto p-5">

                {/* Newsletter Subscription Section */}
                <div className="bg-white p-6 rounded-2xl mb-8 mt-10 md:ml-20 lg:ml-40 md:mr-20 lg:mr-40">
                    <h2 className="text-green-800 text-xl font-semibold-geist mb-4">Subscribe to our Newsletter</h2>
                    <p className="text-green-600 mb-4">
                        Stay updated with our latest projects and activities by subscribing to our newsletter.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            className="flex-1 p-3 border border-green-600 focus:outline-none focus:ring-1 focus:ring-green-700 rounded-lg font-geist text-slate-800"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-green-800 text-white rounded-xl hover:bg-green-700 transition duration-300 flex items-center justify-center"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                            ) : (
                                'Subscribe'
                            )}
                        </button>
                    </form>
                </div>

                {/* Modal for Subscription Success */}
                <Modal isOpen={isModalOpen} onClose={closeModal} />

                {/* Donate Button */}
                <Link href="/donate">
                    <button className="mt-4 mb-4 w-60 flex items-center justify-between px-4 py-3 bg-white text-green-600 rounded-xl md:ml-20 lg:ml-40 md:mr-20 lg:mr-40">
                        <span>Donate now</span>
                        <div className="w-6 h-6 bg-lime-300 rounded-full flex justify-center items-center">
                            <FiArrowUpRight />
                        </div>
                    </button>
                </Link>

                <hr className="bg-white md:ml-20 lg:ml-40 md:mr-20 lg:mr-40" />

                {/* Footer Links and Social Icons */}
                <div className="flex flex-wrap justify-between mt-5 gap-5 md:ml-20 lg:ml-40 md:mr-20 lg:mr-40">
                    <div className="inline-flex gap-3 md:gap-10 text-white text-sm md:text-normal">
                        <p>&nbsp;&copy; {currentYear} Rising Roots Foundation</p>
                        <p><a href="#">Cookie Policy</a></p>
                    </div>

                    <div className="inline-flex gap-3 md:gap-10 text-white">
                        <a href="#" className="text-white hover:text-green-800 transition duration-300">
                            <BsTwitterX />
                        </a>
                        <a href="#" className="text-white hover:text-green-800 transition duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-white hover:text-green-800 transition duration-300">
                            <FaFacebook />
                        </a>
                    </div>
                </div>

                {/* Footer Description */}
                <div className="text-white my-5 text-sm md:text-base italic md:ml-20 lg:ml-40 md:mr-20 lg:mr-40">
                    "Every contribution you make plants a seed of hope, nurturing dreams and building futures. Together, we can transform lives, one donation at a time, and create a world where every child has the opportunity to grow, learn, and succeed. Join us in making a lasting difference."
                </div>
            </div>
        </footer>
    );
}

export default Footer;
