'use client';
import React from 'react';
import TiltedCard from './TiltedCard';
import team1 from '@/app/images/juliana.jpg';
import team2 from '@/app/images/kofi.jpg';
import team3 from '@/app/images/ami.jpg';

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

function Team() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-10">
                    <h1 className="md:text-3xl text-2xl font-semibold-geist text-black uppercase">Meet Our Team</h1>
                    <p className="p-5 font-geist text-l md:text-xl mb-10">
                        Empowering charities with innovative <br /> solutions for a brighter future.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member) => (
                        <TiltedCard
                            key={member.id}
                            imageSrc={member.image}
                            altText={member.name}
                            containerHeight="350px"
                            containerWidth="300px"
                            imageHeight="350px"
                            imageWidth="300px"
                            overlayContent={
                                <>
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-lg">{member.position}</p>
                                    <p className="text-sm mt-2">{member.bio}</p>
                                </>
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
