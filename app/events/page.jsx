"use client";
"use client";
import PageBanner from "@/components/PageBanner";
import ProjectCard from "@/components/ProjectCard";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'pye3ooe5',
  dataset: 'production',
  apiVersion: '2025-06-09', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function EventsPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            const query = `*[_type == "post"]{
                title,
                description,
                mainImage,
                publishedAt,
                "slug": slug.current,
                "categories": categories[]->title
            }`;

            const data = await client.fetch(query);
            console.log(data);
            setEvents(data);
        }

        fetchEvents();
    }, []);

    return (
        <section>
            {/* Page Banner */}
            <PageBanner
                title={"Nurturing Education & Empowering Communities"}
                className="text-xs"
            />
            <ToastContainer />

            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-5 sm:mx-10 md:ml-20 lg:ml-40 md:mr-20 lg:mr-40 font-geist text-l">
                <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                    <div className="lg:col-span-2">
                        <div className="py-8 lg:pe-8">
                            <div className="space-y-5 lg:space-y-8">
                                <div className="grid lg:grid-cols-2 gap-3">
                                    {events.map((event, index) => (
                                        <ProjectCard
                                            key={index}
                                            title={event.title}
                                            description={event.description}
                                            image={urlFor(event.mainImage).url()}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="hidden lg:block lg:col-span-1 mt-20 mb-5">
                        <div className="space-y-5 sticky top-40">
                            <div className="bg-green-800 rounded-lg p-4 shadow-sm">
                                <h3 className="text-lg text-white font-semibold-geist uppercase mb-4">
                                    Connect with us
                                </h3>
                                <ul className="space-y-3 text-sm hover:transition-all hover:duration-500 hover:ease-in-out">
                                    <li>
                                        <a
                                            className="flex items-center gap-2 py-2 text-white hover:underline hover:underline-offset-2"
                                            href="https://www.risingrootsfoundation.org/coming-soon"
                                        >
                                            <BsFacebook />
                                            Facebook @RRootsFoundation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center gap-2 py-2 text-white hover:underline hover:underline-offset-2"
                                            href="https://www.risingrootsfoundation.org/coming-soon"
                                        >
                                            <AiFillInstagram />
                                            Instagram @rrootsfoundation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center gap-2 py-2 text-white hover:underline hover:underline-offset-2"
                                            href="#"
                                        >
                                            <FaSquareXTwitter />
                                            X (Twitter)
                                            @rrootsfoundation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center gap-2 py-2 text-white hover:underline hover:underline-offset-2"
                                            href="#"
                                        >
                                            <FaYoutube />
                                            YouTube @rrootsfoundation
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default EventsPage;
