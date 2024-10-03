import React from 'react'
import valueImg1 from '@/app/images/logo-missao.jpg'
import valueImg2 from '@/app/images/logo_rising_roots.jpg'
import valueImg3 from '@/app/images/local-schools.png'
import Image from 'next/image'




const data = [
    {
        id:1,
        image : valueImg1,
        title : "Missão Mundo",
        content : "who are they?"
    },
    {
        id:1,
        image : valueImg2,
        title : "Rising Roots Foundation",
        content : "who are they?"
    },
    {
        id:1,
        image : valueImg3,
        title : "Local Schools",
        content : "who are they?"
    },
]

const CardItem = ({img,title,content}) => {
    return (
        <div className="flex flex-col items-center ">
            <div className="w-36 h-36 rounded-3xl bg-white overflow-hidden">
                <Image src={img} alt="image" className="w-full h-full object-contain" />
            </div>
            <h4 className="lg:text-l font-semibold-geist mt-5 uppercase">{title}</h4>
            <p className="text-center lg:text-l  pt-3 font-geist">{content}</p>
        </div>
    )
}

function Values() {
    return (
        <div className="max-w-8xl mx-auto py-10 p-5 md:p-0 md:ml-20 lg:ml-40 md:mr-20 lg:mr-40" data-aos="fade-right">
            <div className="bg-lime-300 rounded-3xl p-10">
                <div className="text-center">
                    <h3 className="md:text-3xl text-2xl mt-5 text-center font-medium-geist uppercase">Our Partners</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-10 py-20 ">
                    {
                        data.map((item)=> <CardItem key={item?.id} title={item.title} img={item.image} content={item.content}/>)
                    }
                </div>

            </div>
        </div>
    )
}

export default Values
