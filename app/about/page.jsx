import Team from '@/components/homepage/Team';
import PageBanner from '@/components/PageBanner';
import aboutImg from '@/app/images/aboutus.jpg';
import React from 'react';
import Image from 'next/image';
import { Heart, Target, Eye } from 'lucide-react';

function Page() {
  return (
    <div className="bg-gray-50">
      <PageBanner title={"About Us"} />
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="p-4">
              <h2 className="text-4xl font-bold text-green-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Three strangers met while individually providing humanitarian services in Ghana, and together, identified a need in the community after volunteering abroad. These strangers created partnerships with local people and schools and further explored the need in the schools and with individual students.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, these three strangers are now 3 founders, from SC, Florida, and Ghana, who have developed a friendship and through relationship and connection identified a need to support and work towards a mission of developing a deep rooted system to enhance education and development in our world through literacy and opportunities.
              </p>
            </div>
            <div>
              <Image src={aboutImg} alt="image" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-8 md:px-16 lg:px-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-12">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-green-800 text-white rounded-full p-4">
                  <Target size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                At <strong className="font-semibold">Rising Roots Foundation</strong>, our mission is to develop a deep-rooted system to enhance education and development in our world through literacy and opportunities.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-green-800 text-white rounded-full p-4">
                  <Eye size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision at <strong className="font-semibold">Rising Roots Foundation</strong> is a world where individuals are empowered to reach their full potential, live a healthy life, and contribute to a strong, interconnected society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Team />
    </div>
  );
}

export default Page;
