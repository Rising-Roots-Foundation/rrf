'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

const TiltedCard = ({
  imageSrc,
  altText,
  captionText,
  containerHeight = '300px',
  containerWidth = '300px',
  imageHeight = '300px',
  imageWidth = '300px',
  rotateAmplitude = 12,
  scaleOnHover = 1.2,
  showMobileWarning = false,
  showTooltip = true,
  displayOverlayContent = true,
  overlayContent,
}) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    const rotateYValue = rotateAmplitude * ((x - width / 2) / (width / 2));
    const rotateXValue = -rotateAmplitude * ((y - height / 2) / (height / 2));
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  const cardStyle = {
    height: containerHeight,
    width: containerWidth,
    transform: isHovering ? `scale(${scaleOnHover}) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : 'scale(1) perspective(1000px) rotateX(0) rotateY(0)',
    transition: 'transform 0.5s ease',
  };

  return (
    <div
      ref={cardRef}
      style={cardStyle}
      className="relative rounded-3xl shadow-lg"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={imageSrc}
        alt={altText}
        height={imageHeight}
        width={imageWidth}
        className="object-cover rounded-3xl"
      />
      {displayOverlayContent && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl">
          <div className="text-white text-center p-4">{overlayContent}</div>
        </div>
      )}
      {captionText && <p className="text-center mt-2">{captionText}</p>}
    </div>
  );
};

export default TiltedCard;