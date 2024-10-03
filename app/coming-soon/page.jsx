'use client';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';  // Import toastify components
import 'react-toastify/dist/ReactToastify.css';  // Import toastify styles
import ModalComponent from "@/components/Modal";
import DonationForm from "@/components/DonationForm";

function ComingSoon() {
    const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

    const calculateTimeLeft = () => {
        const launchDate = new Date("2024-12-31T00:00:00");
        const currentTime = new Date();
        const difference = launchDate - currentTime;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [email, setEmail] = useState('');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval} className="text-xl lg:text-3xl font-semibold-geist text-slate-800 mx-2">
                {timeLeft[interval]} {interval}
            </span>
        );
    });

    const handleSubmit = () => {
        // Simulate the email being sent
        toast.success("We'll alert you soon!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setEmail('');
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold-geist text-gray-900 uppercase mb-4">
                Coming Soon
            </h1>
            <p className="text-l lg:text-lg font-medium-geist text-gray-700 mb-10 text-center ml-10 mr-10 md:ml-10 md:mr-10">
                We're launching something awesome! Stay tuned.
            </p>

            {/* GO Live */}
            {/* {timerComponents.length ? (
                <div className="flex items-center font-medium-geist justify-center mb-10">
                    {timerComponents}
                </div>
            ) : (
                <span className="text-xl lg:text-3xl font-medium-geist text-green-600">We are Live!</span>
            )} */}

            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:w-80 px-4 py-3 rounded-lg font-geist text-slate-800 shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                />
                <button
                    onClick={handleSubmit}
                    className="px-4 py-3 bg-green-800 text-white font-medium-geist rounded-xl shadow-sm hover:bg-green-700 transition-all">
                    Notify Me
                </button>
            </div>

            <div className="md:hidden flex flex-col items-center my-10">
            <div className="font-medium-geist text-xl justify-center p-5">Want to help a child?</div>
            <button
                onClick={openModal}
                className="px-14 py-3 bg-green-800 text-white text-md font-medium-geist rounded-xl shadow-sm hover:bg-green-700 transition-all">
                Donate Now
            </button>
            </div>


            {/* Modal Component */}
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} contentLabel="Donate Modal" className="font-geist">
        <h2 className="text-l font-medium-geist mb-4 uppercase">Make a Donation</h2>
        <p className="text-gray-600 font-geist">A donation can make a big change</p>
        <DonationForm />
      </ModalComponent>

            {/* Toast container */}
            <ToastContainer />
        </div>
    );
}

export default ComingSoon;
