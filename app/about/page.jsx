// import Navbar from '@/components/homepage/Navbar';
import Team from '@/components/homepage/Team';
import PageBanner from '@/components/PageBanner';
import aboutImg from '@/app/images/logo.png';
import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <section className="mb-20 text-justify md:ml-20 lg:ml-40 md:mr-20 lg:mr-40">
    <PageBanner title={"About Us"} />
      <div className="max-w-8xl mx-auto py-10">
        <div className="md:grid md:grid-cols-3 grid-cols-1 gap-5 mb-10">
          <div className="md:col-span-1 items-center">
            <div>
              <Image src={aboutImg} alt="image" className="h-auto w-1/2 object-fill md:ml-2 ml-5" />
            </div>
          </div>

          <div className="md:col-span-2 p-3 ml-5 mr-5 text-justify">
            <h2 className="lg:text-4xl text-2xl font-medium-geist md:leading-relaxed md:text-start">
              <span className="text-green-800">Rising Roots Foundation</span> <br />is a Nonprofit Organization!
            </h2>
            <p className="font-geist text-l md:text-l md:leading-loose text-gray-500 mt-5">
              Three strangers met while individually providing humanitarian services in Ghana, and together, identified a need in the community after volunteering abroad. These strangers created partnerships with local people and schools and further explored the need in the schools and with individual students.
            </p>
            <p className="font-geist md:text-l md:leading-loose text-gray-500 mt-4">
              Today, these three strangers are now 3 founders, from SC, Florida, and Ghana, who have developed a friendship and through relationship and connection identified a need to support and work towards a mission of developing a deep rooted system to enhance education and development in our world through literacy and opportunities.
            </p>
          </div>
        </div>

        {/* MISSION VISION SECTION */}
<div className="ml-5 grid md:grid-cols-2 md:gap-10 gap-5 p-3 md:p-0" data-aos="fade-up">
  {/* Mission Card */}
  <div className="bg-white shadow-lg rounded-lg p-5 mr-5"> {/* Added background card styles */}
    <section>
      <h2 className="text-2xl font-semibold-geist mb-4 text-green-800">Our Mission</h2>
      <p className="text-gray-500 leading-relaxed md:text-l">
        At <strong className="text-green-800">Rising Roots Foundation</strong>, Our mission is to develop a deep rooted system to enhance education and development in our world through literacy and opportunities.
      </p>
    </section>
  </div>

  {/* Vision Card */}
  <div className="bg-white shadow-lg rounded-lg p-5 mr-5"> {/* Added background card styles */}
    <section className="text-justify">
      <h2 className="text-2xl font-semibold-geist mb-4 text-green-800">Our Vision</h2>
      <p className="text-gray-500 leading-relaxed md:text-l">
        Our vision at <strong className="text-green-800">Rising Roots Foundation</strong> is a world where individual are empowered to reach their full potential, live a healthy life, and contribute to a strong, interconnected society.</p>
    </section>
  </div>
</div>

      </div>

      <Team />
    </section>
  );
}

export default Page;
