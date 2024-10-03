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
        // Handler to call on window resize
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
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
        bio: 'Juliana, originally from Rio de Janeiro, Brazil, moved to the U.S. in 1994 and grew up in Boston, MA, before settling in Fort Lauderdale, FL. A lifelong humanitarian, she earned her Bachelor\'s in Social Work from Florida Atlantic University in 2011. Her passion for service took her to Hohoe, Ghana, where a simple encounter with a local youth sparked the creation of the Rising Roots Foundation. Together with Amily Dupre and Kofi Andrews, she has led the foundation’s growth, striving to provide books, school supplies, and healthcare to children in need.'
    },
    {
        id: 2,
        name: 'Andrews (Kofi) Amenuvor',
        image: team2,
        position: 'Secretary',
        bio: 'Raised in a small town in Ghana, Kofi witnessed firsthand the challenges of poverty and the lack of educational opportunities. Fortunate to have parents who valued education, he pursued teacher training to help uplift children in his community. With over 24% of Ghana\'s population living in poverty, Kofi is deeply committed to creating opportunities for children through education. As part of Rising Roots Foundation, he strives to offer guidance, encouragement, and resources to children in Hohoe, believing that education is the key to overcoming poverty.'
    },
    {
        id: 3,
        name: 'Amily Dupré Castro',
        image: team3,
        position: 'Treasurer',
        bio: 'Amily’s journey into humanitarian work began in her youth, growing up in South Louisiana and engaging in various youth initiatives. During college, she volunteered weekly with local students to enhance their reading and education. A trip to Hohoe, Ghana, transformed her perspective, as she worked with schools and orphanages to provide educational materials and daily essentials. Inspired by her experiences and after many discussions with Kofi and Juliana, she co-founded the Rising Roots Foundation to make a lasting impact on children’s lives in Ghana through education and community support.'
    }
];

// Truncate Function
const truncateBio = (bio, isExpanded, isDesktop) => {
    const limit = 60; // Number of characters before truncating
    if (isDesktop || isExpanded || bio.length <= limit) {
        return bio;
    }
    return bio.slice(0, limit) + '...';
};

const TeamCard = ({ image, name, position, bio, isReversed, isExpanded, onToggleExpand }) => {
    const size = useWindowSize(); // Get the current window size
    const isDesktop = size.width > 768; // Determine if the screen is desktop or larger

    return (
        <div className={`flex flex-col lg:flex-row items-center lg:items-start p-6 py-10 rounded-3xl shadow-lg bg-slate-300 lg:mr-10 lg:ml-10 ml-5 mr-5 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image and Info Container */}
            <div className="flex items-center lg:w-1/3 mb-4 lg:mb-0 lg:mr-1 lg:ml-10 flex-shrink-0">
                <div className="w-30 h-24 lg:w-50 lg:h-30 rounded-2xl overflow-hidden">
                    <Image src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                    <h3 className="font-medium-geist uppercase text-sm text-black text-pretty">{name}</h3>
                    <p className="text-slate-700 text-[12px] uppercase">{position}</p>
                </div>
            </div>

            {/* Bio Section */}
            <div className="lg:w-2/3 text-gray-700 leading-relaxed lg:mr-10 lg:ml-10 ml-2.5 mr-2.5 text-justify text-l">
                <p>{truncateBio(bio, isExpanded, isDesktop)}</p>
                {/* Show 'Expand' or 'Collapse' button only on small screens */}
                {!isDesktop && bio.length > 120 && (
                    <button
                        onClick={onToggleExpand}
                        className="text-green-700 font-medium-geist uppercase place-items-end hover:underline mt-2 text-sm"
                    >
                        {isExpanded ? 'Show Less' : 'Expand'}
                    </button>
                )}
            </div>
        </div>
    );
};

function Team() {
    const [expandedCard, setExpandedCard] = useState(null); // Track which card is expanded

    const handleToggleExpand = (id) => {
        setExpandedCard((prev) => (prev === id ? null : id)); // Collapse if clicked again, otherwise expand
    };

    return (
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-1">
                <h1 className="md:text-3xl text-2xl font-semibold-geist text-black uppercase">Meet Our Team</h1>
                <p className="p-5 font-geist text-l md:text-xl">
                    Empowering charities with innovative <br />solutions for a brighter future.
                </p>
            </div>

            {/* Team Cards */}
            <div className="space-y-8 mb-10">
                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={member.id}
                        image={member.image}
                        name={member.name}
                        position={member.position}
                        bio={member.bio}
                        isReversed={index % 2 === 1} // Alternate between normal and reversed layout
                        isExpanded={expandedCard === member.id} // Check if this card is expanded
                        onToggleExpand={() => handleToggleExpand(member.id)} // Toggle expand for this card
                    />
                ))}
            </div>
        </section>
    );
}

export default Team;
