import React from 'react'

function Stripes() {
  return (
    <div className="relative w-full h-80 flex justify-center items-center overflow-x-clip mb-10" data-aos="fade-up">
      {/* Background Diagonal Div */}
      <div className="absolute w-screen h-20 bg-green-700 transform rotate-1 flex items-center text-white font-medium-geist text-4xl whitespace-nowrap overflow-hidden text-ellipsis">
        et  *  empowerment  *  a donation today  *  can make a difference tomorrow  * let's
      </div>
      <div className="absolute w-screen h-20 bg-lime-300 transform -rotate-6 translate-y-28 flex items-center text-green-700 font-medium-geist text-4xl whitespace-nowrap overflow-hidden text-ellipsis">
       help each other  * love  *  Empowerment  *  Health Promotion  *  Creating Partnerships
      </div>

    </div>
  )
}

export default Stripes
