'use client';
import PageBanner from '@/components/PageBanner';
import ProjectCard from '@/components/ProjectCard';
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EventsPage() {
    const Events = [
        {
            title: "Project One",
            description: "",
            image: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1767-Edit.JPG?raw=true"
        },
        {
            title: "Project Two",
            description: "",
            image: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1847-Edit.JPG?raw=true"
        },
        {
            title: "Project Three",
            description: "",
            image: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1844-Edit.JPG?raw=true"
        },
        {
            title: "Project Four",
            description: "",
            image: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1365-Edit.JPG?raw=true"
        },
    ];


    useEffect(() => {
        // Function to toggle dropdown menu
        const toggleDropdown = function () {
            const menu = this.nextElementSibling;
            if (menu) {
                menu.classList.toggle('hidden');
                menu.classList.toggle('opacity-0');
            }
        };

        // Add event listeners to all dropdown toggle buttons
        const buttons = document.querySelectorAll('.hs-dropdown-toggle');
        buttons.forEach((button) => {
            button.addEventListener('click', toggleDropdown);
        });

        // Get the title text from the <h2> element
        const titleElement = document.querySelector('h2');
        const title = titleElement ? titleElement.textContent : 'Event'; // Fallback title

        // Set up social share links using the title
        const currentPageUrl = window.location.href;
        const twitterShareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentPageUrl)}&text=${encodeURIComponent(`Check out "${title}"!`)}`;
        const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPageUrl)}&quote=${encodeURIComponent(`Check out "${title}"!`)}`;
        const linkedinShareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentPageUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(`Check out "${title}"!`)}`;

        // Set the href attributes of the share links
        document.getElementById('twitter-share').setAttribute('href', twitterShareLink);
        document.getElementById('facebook-share').setAttribute('href', facebookShareLink);
        document.getElementById('linkedin-share').setAttribute('href', linkedinShareLink);

        // Handle the copy link button
        const copyLinkHandler = function (e) {
            e.preventDefault();
            navigator.clipboard.writeText(currentPageUrl).then(() => {
                toast.success('Share URL copied to clipboard!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }); // Show success toast
            });
        };

        const copyLinkButton = document.getElementById('copy-link');
        copyLinkButton.addEventListener('click', copyLinkHandler);

        // Cleanup function to remove event listeners
        return () => {
            buttons.forEach((button) => {
                button.removeEventListener('click', toggleDropdown);
            });
            copyLinkButton.removeEventListener('click', copyLinkHandler);
        };
    }, []);

        return (
            <section>
                {/* Page Banner */}
                <PageBanner title={"Events"} />
                <ToastContainer />

                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 md:ml-20 lg:ml-40 md:mr-20 lg:mr-40 font-geist text-l">
                    <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                        <div className="lg:col-span-2">
                            <div className="py-8 lg:pe-8">
                                <div className="space-y-5 lg:space-y-8">
                                    <a className="inline-flex items-center gap-x-1.5 text-sm text-green-800 decoration-2 hover:underline focus:outline-none focus:underline" href="#">
                                        <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                        Events
                                    </a>

                                    <h2 className="text-2xl font-semibold-geist lg:text-4xl">Nurturing Education & Empowering Communities</h2>

                                    <div className="flex items-center gap-x-5">
                                        <a className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-xl text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">
                                            Donate
                                        </a>
                                        <p className="text-xs sm:text-sm text-gray-800">September 2024</p>
                                    </div>

                                    <p className="text-l text-gray-800 font-geist">
                                        In a world where education is the key to unlocking potential, the Rising Roots Foundation stands as a beacon of hope, fostering positive change through the power of community and generosity. Our mission is simple yet profound: to provide essential educational resources to those who need them most, creating a ripple effect of empowerment that touches lives and transforms communities.
                                    </p>

                                    <div className="text-center">
                                        <div className="grid lg:grid-cols-2 gap-3">
                                            {Events.map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
                                        </div>
                                        <span className="mt-3 block text-sm text-center text-gray-500 italic">
                                            Photo Credit: Rising Roots Foundation
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-medium-geist">Our Impact: Numbers That Tell a Story</h3>
                                    <ul className="p-4 border-l-4 list-disc list-outside space-y-5 ps-5 text-l text-gray-800 border-green-800 bg-green-50 rounded-md">
                                        <li><strong>22 Desktop Computers and 2 Printers:</strong> Bridging the digital divide and opening doors to technological literacy.</li>
                                        <li><strong>5,000+ Sanitary Pads:</strong> Ensuring that young girls can attend school with dignity and confidence.</li>
                                        <li><strong>12,000+ Exercise Books and 10,000+ Writing Materials:</strong> Providing the basic tools needed for learning and self-expression.</li>
                                        <li><strong>830 New Uniforms and Footwear:</strong> Instilling a sense of pride and belonging among students.</li>
                                        <li><strong>400 Backpacks:</strong> Helping students carry their dreams and aspirations along with their books.</li>
                                        <li><strong>500 Crayons:</strong> Nurturing creativity and bringing color to young minds.</li>
                                        <li><strong>2 Educational Sponsorships:</strong> Offering life-changing opportunities for promising students.</li>
                                    </ul>

                                    <p className="text-l text-gray-800">
                                        Our efforts have directly impacted over 2,000 pupils, bringing smiles to their faces and hope to their hearts. But the true measure of our success lies in the long-term effects of education on these young lives and their communities.
                                    </p>

                                    <h3 className="text-xl font-medium-geist">The Power of 100 Donations</h3>
                                    <p className="text-l text-gray-800">
                                        With just 100 donations, we've managed to create this significant impact. Imagine what we could achieve with your support. Every contribution, no matter how small, has the power to change a life.
                                    </p>

                                    <h3 className="text-xl font-medium-geist">Join Our Community of Change-Makers</h3>
                                    <p className="text-l text-gray-800">
                                        The Rising Roots Foundation is more than just an NGO; we're a community of passionate individuals committed to making a difference. By joining us, you become part of a movement that believes in the transformative power of education.
                                    </p>

                                    <aside className="p-4 border-l-4 border-green-800 bg-green-50 rounded-md">
                                        <strong>Ready to make a difference?</strong><br></br>
                                        Visit our <a href="https://www.risingrootsfoundation.org/coming-soon" className="text-blue-600 hover:underline">Get Involved</a> page to learn how you can contribute to this noble cause. Whether through donations, volunteering, or spreading awareness, your involvement can help us reach more children and create lasting change.
                                    </aside>

                                    <p className="text-l text-gray-800">
                                        Together, we can nurture the roots of education and watch as communities rise to new heights of opportunity and empowerment. Join the Rising Roots Foundation today, and be the change you wish to see in the world.
                                    </p>

                                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                                        <div>
                                            <a className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-xl text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">#RisingRootsFoundation</a>
                                            <a className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-xl text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">#Education</a>
                                            <a className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-xl text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">#Empowerment</a>
                                            <a className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-xl text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">#GivingBack</a>
                                        </div>

                                        {/* Share Menu */}
                                        <div className="hs-dropdown relative inline-flex">
                                            <button
                                                id="hs-blog-article-share-dropdown"
                                                type="button"
                                                className="hs-dropdown-toggle bg-green-800 py-2 px-3 rounded-xl flex items-center gap-x-2 text-sm text-white hover:text-gray-300 focus:outline-none focus:text-gray-200"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                aria-label="Dropdown"
                                            >
                                                <svg
                                                    className="shrink-0 size-4"
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
                                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                                    <polyline points="16 6 12 2 8 6" />
                                                    <line x1="12" x2="12" y1="2" y2="15" />
                                                </svg>
                                                Share
                                            </button>
                                            <div
                                                className="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-white shadow-md rounded-xl p-2"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="hs-blog-article-share-dropdown"
                                            >
                                                <a
                                                    id="copy-link"
                                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-green-800/10 focus:outline-none focus:bg-white/10"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="shrink-0 size-4"
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
                                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                                    </svg>
                                                    Copy link
                                                </a>
                                                <div className="border-t border-gray-600 my-2 dark:border-neutral-800"></div>
                                                <a
                                                    id="twitter-share"
                                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-green-800/10 focus:outline-none focus:bg-white/10"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="shrink-0 size-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                    </svg>
                                                    Share on Twitter
                                                </a>
                                                <a
                                                    id="facebook-share"
                                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-green-800/10 focus:outline-none focus:bg-white/10"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="shrink-0 size-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                    </svg>
                                                    Share on Facebook
                                                </a>
                                                <a
                                                    id="linkedin-share"
                                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-green-800/10 focus:outline-none focus:bg-white/10"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="shrink-0 size-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169H7.148c.03.662 0 7.225 0 7.225h2.401z" />
                                                    </svg>
                                                    Share on LinkedIn
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <aside className="hidden lg:block lg:col-span-1 mt-20 mb-5">
                            <div className="space-y-5 sticky top-40">

                                <div className="bg-green-800 rounded-lg p-4 shadow-sm">
                                    <h3 className="text-lg text-white font-semibold-geist uppercase mb-4">Connect with us</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <a className="block py-2 text-white hover:underline hover:underline-offset-2" href="#">Facebook</a>
                                        </li>
                                        <li>
                                            <a className="block py-2 text-white hover:underline hover:underline-offset-2" href="#">Twitter</a>
                                        </li>
                                        <li>
                                            <a className="block py-2 text-white hover:underline hover:underline-offset-2" href="#">Instagram</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
)};

export default EventsPage;
