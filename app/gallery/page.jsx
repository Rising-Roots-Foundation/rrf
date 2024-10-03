'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import SeeMore from '@/components/SeeMore';

// Static local image
const localImage = {
    name: "Gallery",
    image: "/images/rrf-hero-1.jpeg",
    subtitle: "Experience the moments from our gallery",
};

const galleryImages = [
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1358-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #1",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1360-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #2",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1362-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #3",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1363-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #4",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1365-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #5",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1542-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #6",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1543-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #7",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1544-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #8",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1546-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #9",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1548-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #10",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1758-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #11",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1763-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #12",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1767-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #13",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1774-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #14",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1779-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #15",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1844-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #16",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1846-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #17",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1847-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #18",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1849-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #19",
    },
    {
        src: "https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1850-Edit.JPG?raw=true",
        alt: "Rising Roots Foundation #20",
    },
];

export default function GalleryPage() {
    const galleryRef = useRef(null);
    const recentUploadsRef = useRef(null); // Reference for Recent Uploads section
    const navbarHeight = 80; // Adjust this based on the actual height of your sticky Navbar

    // Scroll function to move to the "Recent Uploads" section
    const handleScroll = () => {
        if (recentUploadsRef.current) {
            // Get the exact position of the "Recent Uploads" section and subtract the Navbar height
            const offsetTop = recentUploadsRef.current.offsetTop - navbarHeight;

            // Scroll to the section smoothly and stop exactly at its top
            window.scrollTo({
                top: offsetTop,  // Scroll to the adjusted position
                behavior: 'smooth',  // Enable smooth scrolling
            });
        }
    };

    // Initialize lightGallery
    useEffect(() => {
        if (galleryRef.current) {
            lightGallery(galleryRef.current, {
                plugins: [lgThumbnail, lgZoom], // Add desired plugins
                speed: 500,
                thumbnail: true, // Enable thumbnails
                zoom: true, // Enable zoom
                mobileSettings: {
                    controls: false,
                    showCloseIcon: true,
                    download: true,
                    rotate: false,
                }
            });
        }
    }, []);

    return (
        <main>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center font-geist overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center">
                    <Image
                        alt="hero"
                        src={localImage.image}
                        fill
                        loading="lazy"
                        className="absolute inset-0 object-cover z-0"
                    />
                </div>

                {/* Text Overlay */}
                <div className="max-w-8xl container mx-auto relative text-white z-10 text-center">
                    <h2 className="text-3xl font-semibold uppercase">Gallery</h2>
                    <p className="mt-1 mb-1 text-gray-200 text-xl">
                        Experience the moments from our gallery
                    </p>

                    {/* Scroll Down Button */}
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={handleScroll}
                            className="mt-6 bg-green-800/40 text-white px-6 py-3 rounded-full inline-flex justify-center items-center mouse"
                        >
                        </button>
                    </div>
                </div>
            </section>

            {/* "Recent Uploads" Section */}
            <div ref={recentUploadsRef} className="bg-white h-20 relative overflow-hidden">
                <div className="absolute w-full h-full inset-0 grid place-content-center text-green-800">
                    <h2 className="font-semibold-geist uppercase text-2xl lg:text-3xl">
                        Recent Uploads
                    </h2>
                </div>
            </div>

            {/* Gallery Section */}
            <section ref={galleryRef} className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ml-5 mr-5 md:ml-10 lg:ml-20 md:mr-10 lg:mr-20">
                {galleryImages.map((image, index) => (
                    <a
                        key={index}
                        href={image.src} // Link to open image in lightGallery
                        className="group overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                        />
                    </a>
                ))}
            </section>

            {/* 'See More' Button Component */}
            <SeeMore className="my-20" />
        </main>
    );
}
