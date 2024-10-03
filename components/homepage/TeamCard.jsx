import Image from 'next/image'
import React from 'react'

const TeamCard = ({ image, name, position}) => {
    return (
        <div className="cursor-pointer mb-10">
            <div className="h-64 bg-gray-200 overflow-hidden rounded-lg mb-3 items-center">
                <Image src={image} alt={name} className="w-full h-full object-contain" />
            </div>
            <p>{name}</p>
            <small>{position}</small>
        </div>
    )
}

export default TeamCard;
