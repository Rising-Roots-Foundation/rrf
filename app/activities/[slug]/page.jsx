"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaYoutube } from "react-icons/fa";

import PostShareMenu from 'components/PostShareMenu.tsx';
import Head from "next/head";

const client = createClient({
  projectId: "pye3ooe5",
  dataset: "production",
  apiVersion: "2025-06-09",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) =>
      value?.asset?._ref ? (
        <Image
          src={urlFor(value)
            .width(800)
            .height(500)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt || "Post image"}
          loading="lazy"
          width={800}
          height={500}
          className="rounded-xl object-cover w-full h-auto"
        />
      ) : null,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800 transition"
      >
        {children}
      </a>
    ),
  },
};

export default function ActivityPage() {
  const { slug } = useParams();
  const galleryRef = useRef(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          title,
          description,
          mainImage,
          publishedAt,
          "slug": slug.current,
          "categories": categories[]->title,
          body,
          author->{ name, image },
          media[]{ asset }
        }`;
        const data = await client.fetch(query, { slug: slug.toString() });
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (galleryRef.current && post?.media?.length > 0) {
      lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom],
        speed: 500,
        thumbnail: true,
        zoom: true,
        mobileSettings: {
          controls: false,
          showCloseIcon: true,
          download: true,
          rotate: false,
        },
      });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="p-10 text-center text-gray-500 animate-pulse">
        ⏳ Loading event...
      </div>
    );
  }

  return (
    <section>
      <Head>
        <title>{post.title} | Activities | Rising Roots Foundation</title>
        <meta name="description" content={post.description} />
      </Head>

      {/* <PageBanner title={post.title} className="text-xs" /> */}

      <div className="max-w-screen-xl px-4 md:px-8 mx-auto py-10 font-geist">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-2 space-y-8">
            {post.mainImage && (
              <Image
                src={urlFor(post.mainImage).width(1000).height(600).url()}
                alt={post.title}
                width={1000}
                height={600}
                className="rounded-xl object-cover w-full h-auto shadow-lg"
              />
            )}

            {/* Metadata */}
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                📅 Published:{" "}
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </p>
              {post.author?.name && <p>✍️ Author: {post.author.name}</p>}
              {post.categories?.length > 0 && (
                <p>
                  🏷️ Categories:{" "}
                  {post.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full mr-2"
                    >
                      {cat}
                    </span>
                  ))}
                </p>
              )}
            </div>

            {/* Title & Share */}
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                {post.title}
              </h1>
              <PostShareMenu />
            </div>

            {/* Short Description */}
            <p className="text-gray-700 text-lg leading-relaxed">{post.description}</p>

            {/* Post Body */}
            <div className="prose max-w-none prose-gray">
              <PortableText value={post.body} components={ptComponents} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="sticky top-20 h-fit space-y-8">
            {/* Media Gallery */}
            {post.media?.length > 0 && (
              <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-5">📸 Media Gallery</h3>
                <div
                  ref={galleryRef}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 cursor-pointer"
                >
                  {post.media.map(
                    (item, index) =>
                      item?.asset && (
                        <a
                          key={index}
                          href={urlFor(item.asset).width(1200).url()}
                          data-lg-size="1200-800"
                          aria-label={`View media ${index + 1} in gallery`}
                        >
                          <Image
                            src={urlFor(item.asset)
                              .width(400)
                              .height(250)
                              .auto("format")
                              .quality(80)
                              .url()}
                            alt={`Media ${index + 1}`}
                            width={400}
                            height={250}
                            className="rounded-lg object-cover w-full h-auto shadow-md"
                          />
                        </a>
                      )
                  )}
                </div>
              </div>
            )}

            {/* Social Follow */}
            <div className="bg-green-700 text-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-lg mb-4">Follow Us</p>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="https://www.facebook.com/RRootsFoundation?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2 text-white hover:underline hover:text-blue-400 transition"
                  >
                    <BsFacebook className="text-2xl text-blue-500" />
                    Facebook @RRootsFoundation
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/rrootsfoundation/profilecard/?igsh=aGp6Y3Mxcml3eHMw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2 text-white hover:underline hover:text-pink-400 transition"
                  >
                    <AiFillInstagram className="text-2xl text-pink-500" />
                    Instagram @rrootsfoundation
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/rrootsfoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2 text-white hover:underline hover:text-black transition"
                  >
                    <FaTwitter className="text-2xl text-black" />
                    X (Twitter) @rrootsfoundation
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@rrootsfoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2 text-white hover:underline hover:text-red-500 transition"
                  >
                    <FaYoutube className="text-2xl text-red-600" />
                    YouTube @rrootsfoundation
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
