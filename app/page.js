'use client';
import React, { useRef, useEffect } from 'react';
import Faq from '@/components/homepage/Faq';
import Fundraiser from '@/components/homepage/Fundraiser';
import Hero from '@/components/homepage/Hero';
// import HeroSectionCards from '@/components/homepage/HeroSectionCards';
import Stripes from '@/components/homepage/Stripes';
import Team from '@/components/homepage/Team';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Page() {
    // const heroSectionCardsRef = useRef(null);

    useEffect(() => {
        AOS.init();
    }, []);

    // const handleScroll = () => {
    //     if (heroSectionCardsRef.current) {
    //         heroSectionCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    return (
        <main>
            <div className="h-auto overflow-hidden">
                <Hero />
                {/* <HeroSectionCards targetRef={heroSectionCardsRef} /> */}
            </div>
            <Fundraiser />
            <Stripes />
            <Team />
            <Faq />
        </main>
    );
}

export default Page;
