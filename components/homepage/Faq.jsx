'use client'
import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faqs = [
    {
        question: 'Who are we?',
        answer: 'Rising Roots Foundation was formed by three strangers who met while providing humanitarian services in Ghana. Together, they created partnerships with local people and schools, identifying a need to support literacy and educational development.'
    },
    {
        question: 'What is our mission?',
        answer: 'Our mission is to develop a deep-rooted system that enhances education and development in communities, focusing on literacy and opportunities for students and schools.'
    },
    {
        question: 'Where are the founders from?',
        answer: 'The three founders come from South Carolina, Florida, and Ghana. They share a friendship and a passion for providing educational opportunities to underserved communities.'
    },
    {
        question: 'How did Rising Roots Foundation start?',
        answer: 'It began when the founders, while volunteering abroad, saw the need in schools and with individual students in Ghana. They explored these needs and worked towards creating partnerships to address them.'
    }
];

function Faq() {
    return (
        <div className="max-w-8xl bg-green-800 mx-auto md:py-10 pt-5 p-5 md:p-0 text-white">
            <div className="mx-auto p-10">
                <div className="text-center lg:py-10 py-5">
                    <h2 className="font-semibold-geist text-2xl lg:text-5xl lg:py-5 p-3 uppercase">Frequently Asked Questions</h2>
                    <small className="lg:text-xl text-sm">Everything you need to know</small>
                </div>

                <div>
                    <Accordion>
                        {Faqs.map((Faq, index) => (
                            <AccordionItem
                                key={index}
                                header={({ state: { isEnter } }) => (
                                    <div className="flex justify-between gap-3 items-center cursor-pointer w-full py-4">
                                        <span className="font-medium-geist truncate md:ml-20 lg:ml-60">{Faq.question}</span>
                                        <span className="border border-gray-400 p-1 rounded-full text-gray-300 lg:mr-60 md:mr-20">{isEnter ? <FaMinus /> : <FaPlus />}</span>
                                    </div>
                                )}
                            >
                                <div className="mt-1 text-gray-200 px-2 md:ml-20 lg:ml-60 md:mr-20 lg:mr-60 text-pretty">{Faq.answer}</div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faq;
