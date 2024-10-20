import React from 'react';

function PageBanner({ title }) {
  return (
    <div className="bg-white h-60 relative overflow-hidden">
      {/* White background instead of an image */}
      <div className="absolute w-full h-full inset-0 grid place-content-center text-green-800">
        <h2 className="font-semibold-geist uppercase text-3xl lg:text-4xl text-pretty px-5 mx-5 animate__animated animate__fadeInUp">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default PageBanner;
