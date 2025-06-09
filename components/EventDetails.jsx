"use client";

import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import ItemCountDisplay from "@/components/homepage/ItemCountDisplay";

function EventDetails({ event }) {
  return (
    <div className="max-w-8xl mx-auto py-10 px-5 md:px-0 mt-10 md:mx-20">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-2xl md:text-3xl font-semibold-geist uppercase">
          {event.title}
        </h1>
        <a
          href="/Events"
          className="text-green-700 text-2xl font-semibold-geist uppercase flex items-center gap-2 hover:text-green-800 transition"
        >
          See All
          <FiArrowUpRight className="w-7 h-7 bg-gray-600 text-white rounded-full p-1" />
        </a>
      </div>

      {/* Event Content */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative h-[200px] sm:h-[350px] w-full rounded-xl overflow-hidden">
            <Image
              src={event.mainImage}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={false}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              {/* Categories */}
              {event.categories?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {event.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium-geist bg-green-800 text-white"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              {/* Title & Description */}
              <h2 className="text-lg sm:text-2xl font-semibold-geist text-gray-800">
                {event.title}
              </h2>
              <p className="text-gray-600">{event.description}</p>
            </div>

            {/* Author */}
            <div className="flex items-center mt-6">
              <Image
                src="https://www.risingrootsfoundation.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_rising_roots.35926510.jpg&w=828&q=75"
                alt="Rising Roots Logo"
                width={46}
                height={46}
                className="rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold-geist text-gray-800 text-sm">
                  Rising Roots Foundation
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(event.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stats */}
      <ItemCountDisplay className="animate__animated animate__fadeInUp" />
    </div>
  );
}

export default EventDetails;
