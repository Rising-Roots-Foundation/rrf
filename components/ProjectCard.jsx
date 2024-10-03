import Image from 'next/image'
import React from 'react'

function ProjectCard({project,index}) {
    return (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
                src={project.image} // Accessing image source
                alt={project.title}
                className="w-full h-64 object-cover"
                width={1000}
                height={1000}

            />
            <div className="p-5">
                <h3 className="text-2xl font-semibold-geist mb-3">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
