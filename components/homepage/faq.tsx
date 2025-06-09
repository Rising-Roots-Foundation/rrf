"use client"

import { PlusIcon, MinusIcon } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who are we?",
    answer:
      "Rising Roots Foundation was formed by three strangers who met while providing humanitarian services in Ghana. Together, they created partnerships with local people and schools, identifying a need to support literacy and educational development.",
  },
  {
    question: "What is our mission?",
    answer:
      "Our mission is to develop a deep-rooted system that enhances education and development in communities, focusing on literacy and opportunities for students and schools.",
  },
  {
    question: "Where are the founders from?",
    answer:
      "The three founders come from South Carolina, Florida, and Ghana. They share a friendship and a passion for providing educational opportunities to underserved communities.",
  },
  {
    question: "How did Rising Roots Foundation start?",
    answer:
      "It began when the founders, while volunteering abroad, saw the need in schools and with individual students in Ghana. They explored these needs and worked towards creating partnerships to address them.",
  },
]

export default function Faq() {
  return (
    <section className="w-full bg-green-800 py-12 md:py-16 lg:py-20 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-green-100">Everything you need to know</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-green-700 rounded-lg bg-green-900/50 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-green-700/30 transition-all text-left">
                  <span className="font-medium text-base md:text-lg">{faq.question}</span>
                  <CustomTriggerIcon />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-green-100">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

// Custom trigger icon component to replace the default chevron
function CustomTriggerIcon() {
  return (
    <div className="accordion-icon relative ml-2">
      <div className="h-6 w-6 rounded-full border border-green-400 flex items-center justify-center">
        <PlusIcon className="h-3 w-3 text-green-200 absolute transition-opacity group-data-[state=open]:opacity-0" />
        <MinusIcon className="h-3 w-3 text-green-200 absolute opacity-0 group-data-[state=open]:opacity-100" />
      </div>
    </div>
  )
}
