"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

function ComingSoon() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false); // New state to track loading

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        setIsLoading(true); // Start loading spinner

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }), // Send the email to the server
            });

            if (response.ok) {
                toast.success("Great! We'll alert you soon.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setEmail(""); // Clear the input field
            } else {
                const errorData = await response.json();
                console.log("Error response:", errorData); // Log the full error response for debugging

                const errorMessage = errorData.message || "Unknown error";

                // Check for the specific error code or message
                if (
                    errorData.code === "duplicate_parameter" &&
                    errorMessage.includes("Contact already exist")
                ) {
                    toast.error(
                        "Email already exists, please enter another email address.",
                        {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        },
                    );
                } else {
                    toast.error(`Oops something unexpected happened!`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }
        } catch (error) {
            toast.error(`Network error: ${error.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } finally {
            setIsLoading(false); // Stop loading spinner
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold-geist text-gray-900 uppercase mb-4">
                Coming Soon
            </h1>
            <p className="text-l lg:text-lg font-medium-geist text-gray-700 mb-10 text-center ml-10 mr-10 md:ml-10 md:mr-10">
                We're launching something awesome! Stay tuned.
            </p>

            {/* Waitlist Form */}
            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-10"
            >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:w-80 px-4 py-3 rounded-lg font-geist text-slate-800 shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                    required
                />
                <button
                    type="submit"
                    className="w-full sm:w-80 px-4 py-3 bg-green-800 text-white font-medium-geist rounded-xl shadow-sm hover:bg-green-700 transition-all flex items-center justify-center"
                    disabled={isLoading} // Disable the button while loading
                >
                    {isLoading ? (
                        <svg
                            className="animate-spin h-5 w-5 text-white mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                        </svg>
                    ) : (
                        "Notify Me"
                    )}
                </button>
            </form>

            {/* Other components remain unchanged */}
            <Link href="/donate">
                <button className="px-14 py-3 bg-green-800 text-white text-md font-medium-geist rounded-xl shadow-sm hover:bg-green-700 transition-all">
                    Donate Now
                </button>
            </Link>

            {/* Toast container */}
            <ToastContainer />
        </div>
    );
}

export default ComingSoon;
