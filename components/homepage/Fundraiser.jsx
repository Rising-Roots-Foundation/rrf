'use client';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { FiArrowUpRight } from "react-icons/fi";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import image1 from '@/app/images/kid2.jpg';
import image2 from '@/app/images/kid4.jpg';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import Image from 'next/image';

function Fundraiser() {
  // Intersection Observer for the section
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once when in view
    threshold: 0.3,    // Adjust this to control when the counter starts (0.3 means when 30% of the section is in view)
  });

  return (
    <div className="max-w-8xl mx-auto py-10 px-5 md:px-0 mt-10 md:ml-20 lg:ml-40 md:mr-20 lg:mr-40">
      <div>
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="md:text-3xl text-2xl font-semibold-geist uppercase">Recent Activities in Ghana</h1>
        <div>
        <a href="/projects" className="text-green-700 font-semibold-geist text-2xl uppercase flex justify-between gap-3">See All <FiArrowUpRight className="w-7 h-7 bg-gray-600 rounded-full flex items-center"/></a>
        </div>

        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap items-baseline gap-4 py-10" data-aos="fade-up">
          {/* First Card */}
          <div className="flex flex-col gap-5 flex-1 self-end">
            <div className="relative h-full bg-green-800 text-white rounded-3xl overflow-hidden">
              <Image src={image2} alt="imagehere" className="w-full h-full object-cover" />
              <p className="mt-2 text-sm md:text-2xl font-medium-geist absolute bottom-4 md:p-4 p-1">
                Help The Kids With <span className="text-green-300">Education Fund</span>
              </p>
            </div>

            <div className="bg-black h-32 text-white rounded-3xl flex relative overflow-hidden">
              <Image src={image1} alt="imagehere" className="w-full h-full object-cover" />
              <p className=" mt-2 text-sm md:text-2xl font-medium-geist absolute bottom-4 text-center w-full">
                Education in <span className="text-green-300">Oti Region</span>
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col gap-5 flex-1 self-end">
            <div className="relative h-full bg-green-800 text-white rounded-3xl overflow-hidden">
              <Image src={image2} alt="imagehere" className="w-full h-full object-cover" />
              <p className="mt-2 text-sm md:text-2xl font-medium-geist absolute bottom-4 p-4">
                Give <span>Scholarships</span>
              </p>
            </div>

            <div className="bg-black h-32 text-white rounded-3xl flex relative overflow-hidden">
              <Image src={image1} alt="imagehere" className="w-full h-full object-cover" />
              <p className="mt-2 text-sm md:text-2xl font-medium-geist absolute bottom-4 text-center  w-full">
                Health in <span className="text-green-300">Africa</span>
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="flex flex-col gap-5 flex-1" data-aos="fade-up">
            <div className="bg-black h-32 text-white rounded-3xl flex relative overflow-hidden">
              <Image src={image2} alt="oti" className="w-full h-full object-cover" />
              <p className="mt-2 text-sm md:text-2xl font-medium-geist absolute bottom-4 text-center w-full">
                 <span className="text-green-300">Flood in</span> Oti Region
              </p>
            </div>
            <div className="relative h-full bg-green-800 text-white rounded-3xl overflow-hidden">
              <Image src={image2} alt="labour" className="w-full h-full object-cover" />
              <p className="mt-2 text-sm absolute bottom-4 p-4  md:text-2xl font-medium-geist">
                 <span className="text-green-300">Childhood labour</span> in world
              </p>
            </div>
          </div>
        </div>

        {/* Counter Section */}
        <div className="flex flex-wrap md:flex-nowrap lg:justify-between justify-center items-stretch lg:px-20 gap-5 mt-10" data-aos="fade-up" data-aos-duration="300">
        <div className="lg:flex-2 flex md:flex-col gap-10">
            <div className="bg-green-800 w-40 h-40 p-2.5 gap-2.5 rounded-3xl overflow-hidden flex flex-col items-center justify-center">
                <BrushOutlinedIcon className="text-white text-5xl"/>
              <div className="text-3xl font-medium-geist text-white">
                {inView && <CountUp start={0} end={100} duration={5} />}
              </div>
              <p className="font-medium-geist text-sm text-white">SCHOOL SUPPLIES</p>
            </div>

            <div className="bg-green-800 w-40 h-40 p-2.5 gap-2.5 rounded-3xl overflow-hidden flex flex-col items-center justify-center">
            <BackHandOutlinedIcon className="text-white text-5xl"/>
              <div className="text-3xl font-medium-geist text-white">
                {inView && <CountUp start={0} end={100} duration={5} />}
              </div>
              <p className="font-medium-geist text-sm text-white">HAND SANITIZERS</p>
            </div>
          </div>

          {/* The Counter */}
          <div ref={ref} className="lg:flex-2 px-10 text-center flex flex-col justify-between">
            <div>
              <p className="font-medium-geist md:text-xl text-pretty">
                Join our community for donating and be a part of a positive change in the world. <br />With over:
              </p>
              <div className="text-5xl font-medium-geist lg:pt-10 py-5 text-green-800">
                {inView && (
                  <CountUp
                    start={0}
                    end={600} // Total of all items
                    duration={10}
                    separator=","
                    suffix="+ items."
                  />
                )}
              </div>
            </div>
            <div>
              <p className="font-medium-geist text-xl">people already joining</p>
              <Link href="/coming-soon">
                <button className="bg-green-800 hover:bg-green-600 text-white md:px-10 px-4 py-2 rounded-full mt-1">
                  GET INVOLVED
                </button>
              </Link>
            </div>
          </div>

          {/* Reading Books and School Bags */}
          <div className="lg:flex-2 flex md:flex-col gap-10">
            <div className="bg-green-800 w-40 h-40 p-2.5 gap-2.5 rounded-3xl overflow-hidden flex flex-col items-center justify-center">
            <AutoStoriesOutlinedIcon className="text-white text-5xl"/>
              <div className="text-3xl font-medium-geist text-white">
                {inView && <CountUp start={0} end={300} duration={5} />}
              </div>
              <p className="font-medium-geist text-sm text-white">READING BOOKS</p>
            </div>

            <div className="bg-green-800 w-40 h-40 p-2.5 gap-2.5 rounded-3xl overflow-hidden flex flex-col items-center justify-center">
            <WorkOutlinedIcon className="text-white text-5xl"/>
              <div className="text-3xl font-medium-geist text-white">
                {inView && <CountUp start={0} end={100} duration={5} />}
              </div>
              <p className="font-medium-geist text-sm text-white">SCHOOL BAGS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundraiser;
