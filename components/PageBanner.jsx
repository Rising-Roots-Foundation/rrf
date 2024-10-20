import React from 'react';

function PageBanner({ title }) {
  return (
    <div className="bg-white h-60 relative overflow-hidden">
      {/* White background instead of an image */}
          <div className="absolute inset-0 grid place-content-center text-green-800 md:ml-10 lg:ml-20 md:mr-10 lg:mr-20">
        <h2 className="font-semibold-geist uppercase text-xl sm:text-l md:text-3xl lg:text-4xl items-center justify-center px-5 mx-5 animate__animated animate__fadeInUp">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default PageBanner;
