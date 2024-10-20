// ProjectCard.js
import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, image, blurDataURL }) => (
    <figure className="relative w-full h-60">
        <Image
            className="absolute top-0 left-0 object-cover rounded-xl"
            src={image}
            alt={title}
            fill
            placeholder="blur" // Optionally add placeholder while loading
            blurDataURL='/images/blur.jpg' // Include the blurDataURL for the blur effect
            onError={(e) => {
                e.currentTarget.src = '/images/rrf-hero-1.jpeg'; // Fallback image
            }}
        />
        <figcaption className="text-center mt-2">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm">{description}</p>
        </figcaption>
    </figure>
);

export default ProjectCard;
