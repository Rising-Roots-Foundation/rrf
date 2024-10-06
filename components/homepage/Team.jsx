'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import team1 from '@/app/images/juliana.jpg';
import team2 from '@/app/images/kofi.jpg';
import team3 from '@/app/images/ami.jpg';

// Custom hook to get the window size
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

const teamMembers = [
    {
        id: 1,
        name: 'Juliana Santos',
        image: team1,
        position: 'President',
        bio: 'Juliana, originally from Rio de Janeiro, Brazil, moved to the U.S. in 1994 and grew up in Boston, MA, before settling in Fort Lauderdale, FL. A lifelong humanitarian, she earned her Bachelor\'s in Social Work from Florida Atlantic University in 2011. Her passion for service took her to Hohoe, Ghana, where a simple encounter with a local youth sparked the creation of the Rising Roots Foundation.',
    },
    {
        id: 2,
        name: 'Andrews (Kofi) Amenuvor',
        image: team2,
        position: 'Secretary',
        bio: 'Raised in a small town in Ghana, Kofi witnessed firsthand the challenges of poverty and the lack of educational opportunities. Fortunate to have parents who valued education, he pursued teacher training to help uplift children in his community. With over 24% of Ghana\'s population living in poverty, Kofi is deeply committed to creating opportunities for children through education.',
    },
    {
        id: 3,
        name: 'Amily Dupré Castro',
        image: team3,
        position: 'Treasurer',
        bio: 'Amily’s journey into humanitarian work began in her youth, growing up in South Louisiana and engaging in various youth initiatives. During college, she volunteered weekly with local students to enhance their reading and education. A trip to Hohoe, Ghana, transformed her perspective, leading her to co-found the Rising Roots Foundation to support children in Ghana through education.',
    },
];

// Truncate Function
const truncateBio = (bio, isExpanded, isDesktop, isTablet) => {
    const limit = 110;
    if (isDesktop || isTablet || isExpanded || bio.length <= limit) {
        return bio;
    }
    return bio.slice(0, limit) + '...';
};

const TeamCard = ({ image, name, position, bio, isReversed, isExpanded, onToggleExpand }) => {
    const size = useWindowSize();
    // const isTablet = size.width > 768;
    const isDesktop = size.width > 1024;

    return (
        <div className={`flex items-center bg-gray-200 pt-5 rounded-3xl lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col ${isReversed ? 'sm:flex-row-reverse' : ''}`}>
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 sm:ml-10 mt-10 inline-flex flex-col items-center justify-center rounded-full flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    className="w-full h-full rounded-full lg:mr-10 lg:ml-10 md:mr-10 md:ml-5"
                />
                <h3 className="text-green-800 text-l title-font font-medium-geist mt-2 sm:px-10 md:px-10 px-10 lg:px-10 uppercase">
                    {position}
                </h3>
            </div>

            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-green-800 text-lg title-font font-medium-geist mb-2 md:mt-2 lg:mt-2 sm:px-10 md:px-10 px-10 lg:px-10 uppercase">{name}</h2>

                <p className="leading-relaxed text-base text-pretty sm:px-10 md:px-10 px-10">{truncateBio(bio, isExpanded, isDesktop)}</p>
                {!isDesktop && bio.length > 120 && (
                    <button
                        onClick={onToggleExpand}
                        className="bg-gray-300 rounded-xl md:ml-10 md:mr-10 lg:ml-10 lg:mr-10 mt-3 md:mt-10 text-green-800 inline-flex sm:px-7 md:px-7 px-7 items-center"
                    >
                        {isExpanded ? 'Show Less' : 'Expand'}
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

function Team() {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleToggleExpand = (id) => {
        setExpandedCard((prev) => (prev === id ? null : id));
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-1">
                    <h1 className="md:text-3xl text-2xl font-semibold-geist text-black uppercase">Meet Our Team</h1>
                    <p className="p-5 font-geist text-l md:text-xl mb-10">
                        Empowering charities with innovative <br /> solutions for a brighter future.
                    </p>
                </div>

                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={member.id}
                        image={member.image}
                        name={member.name}
                        position={member.position}
                        bio={member.bio}
                        isReversed={index % 2 === 1} // Corrected alternating layout
                        isExpanded={expandedCard === member.id}
                        onToggleExpand={() => handleToggleExpand(member.id)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Team;
