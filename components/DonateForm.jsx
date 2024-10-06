'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

const DonateForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        handlePayPalClick(data); // Ensure handlePayPalClick is called here
    };

    const handlePayPalClick = (data) => {
        const { email } = data;
        if (email) {
            const paypalUrl = `https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=JWTF65REUU42W&fbclid=PAZXh0bgNhZW0CMTEAAabMTmbPAX0vMYOc1RgjoJqDXaJe7V6-ilm_Fh2DHe-9w90vt9UGThpeaKE_aem_qxFKR7SrMxto_YMeK8gnYw`;
            window.open(paypalUrl, '_blank');
        } else {
            console.error('Email is not valid:', email);
        }
    };

    return (
        <section className="font-geist text-l lg:text-lg font-medium-geist text-gray-700 mb-10 text-center ml-10 mr-10 md:ml-10 md:mr-10">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-800 uppercase">
                        Support Our Cause
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Your contribution helps us continue our mission. Donate via PayPal below.
                    </p>
                    <div className="flex w-full md:justify-start justify-center items-end">
                        <div className="relative mr-20 md:w-full lg:w-full xl:w-1/2 w-2/4">
                            <label htmlFor="email" className="leading-7 text-sm text-green-800 uppercase">EMAIL</label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                                })}
                                className="md:w-full w-60 bg-gray-100 rounded-lg border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="flex lg:flex-row md:flex-col my-3 justify-center">
                        <button className="bg-indigo-800 text-white inline-flex py-3 px-5 text-sm sm:px-5 md:px-5 rounded-xl items-center hover:bg-indigo-800/90 focus:outline-none" onClick={handleSubmit(onSubmit)}>
                            <svg className="w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path>
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
                                Donate via PayPal
                            </span>
                        </button>
                    </div>
                    <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                        Your support means a lot to us. Thank you!
                    </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image className="object-cover object-center rounded" alt="logo" src="/images/logo_rising_roots.jpg" />
                </div>
            </div>
        </section>
    );
};

export default DonateForm;
