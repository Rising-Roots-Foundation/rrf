'use client';
import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import DonateForm from '@/components/DonateForm';

const Donate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Use this data for both payment methods if needed
        console.log('Form submitted:', data);
    };

    const handlePayPalClick = (data) => {
        // Handle PayPal donation
        const { name, email } = data;
        const paypalUrl = `https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=JWTF65REUU42W&fbclid=PAZXh0bgNhZW0CMTEAAabMTmbPAX0vMYOc1RgjoJqDXaJe7V6-ilm_Fh2DHe-9w90vt9UGThpeaKE_aem_qxFKR7SrMxto_YMeK8gnYw`;
        window.open(paypalUrl, '_blank');
    };

    return (
        <section>
            <div className="mx-auto py-20 flex flex-col items-center animate__animated animate__fadeInUp md:ml-20 md:mr-20 lg:mr-20 lg:ml-20 mr-10 ml-10">
                <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                                <div className="col-span-4">
                                    <Image
                                        className="rounded-xl"
                                        src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1767-Edit.JPG?raw=true"
                                        alt="Features Image"
                                        width={540}
                                        height={375}
                                    />
                                </div>
                                <div className="col-span-3">
                                    <Image
                                        className="rounded-xl"
                                        src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1548-Edit.JPG?raw=true"
                                        alt="Features Image"
                                        width={540}
                                        height={375}
                                    />
                                </div>
                                <div className="col-span-5">
                                    <Image
                                        className="rounded-xl"
                                        src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1844-Edit.JPG?raw=true"
                                        alt="Features Image"
                                        width={540}
                                        height={375}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                            <div className="space-y-6 sm:space-y-8">
                                <div className="space-y-2 md:space-y-4">
                                    <h2 className="font-bold text-2xl lg:text-3xl text-green-800 uppercase">
                                        WHAT YOUR DONATIONS DO
                                    </h2>
                                    <p className="text-gray-500 text-pretty">
                                        We use your contributions to help us make a difference in the community by providing essential resources.
                                    </p>
                                </div>
                                <ul className="space-y-2 sm:space-y-4">
                                    <li className="flex gap-x-3">
                                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-green-50 text-green-800 dark:bg-green-800/30 dark:text-green-800">
                                            <svg
                                                className="shrink-0 size-3.5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        <div className="grow">
                                            <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                                Uniforms, Shoes, and Sandals
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-green-50 text-green-800 dark:bg-green-800/30 dark:text-green-800">
                                            <svg
                                                className="shrink-0 size-3.5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        <div className="grow">
                                            <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                                Exercise Books / Text Books
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-green-50 text-green-800 dark:bg-green-800/30 dark:text-green-800">
                                            <svg
                                                className="shrink-0 size-3.5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        <div className="grow">
                                            <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                                Computers, Scholarships, etc.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-green-50 text-green-800 dark:bg-green-800/30 dark:text-green-800">
                                            <svg
                                                className="shrink-0 size-3.5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        <div className="grow">
                                            <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                                Writing Materials / Implements
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vertical arrangement of the DonateForm */}
                <div className="w-full mt-5"> {/* Added margin-top for spacing */}
                    <DonateForm />
                </div>

            </div>
        </section>
    );
};

export default Donate;
