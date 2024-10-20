// ProjectCard.js
import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, image }) => (
    <figure className="relative w-full h-60">
        <Image
            className="absolute top-0 left-0 object-cover rounded-xl"
            src={image}
            alt={title}
            fill
            onError={(e) => {
                e.currentTarget.src = '/images/blur.jpg'; // Fallback image
            }}
        />
        <figcaption className="text-center mt-2">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm">{description}</p>
        </figcaption>
    </figure>
);

export default ProjectCard;
