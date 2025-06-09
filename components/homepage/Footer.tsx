"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Instagram, Facebook, Loader2 } from "lucide-react"

// Modal Component
const Modal = ({
  isOpen,
  onClose,
  title,
  message,
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-auto">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-3 text-gray-600 leading-relaxed">{message}</p>
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-green-800 text-white rounded-xl hover:bg-green-700 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

// Footer Component
export default function Footer() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
  })

  const closeModal = () => setModalOpen(false)
  const currentYear = new Date().getFullYear()

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setEmail("")
        setModalOpen(true)
        setModalContent({
          title: "Subscription Successful!",
          message: "You will receive updates in your inbox. Thank you for subscribing!",
        })
      } else {
        const errorData = await response.json()
        if (errorData.error === "Contact already exist") {
          setModalOpen(true)
          setModalContent({
            title: "Email Exists",
            message: "Email already exists, please enter a different email address.",
          })
        } else {
          setModalOpen(true)
          setModalContent({
            title: "Subscription Failed",
            message: "Subscription failed, please try again later.",
          })
        }
      }
    } catch {
      setModalOpen(true)
      setModalContent({
        title: "Error",
        message: "An error occurred, please try again later.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer className="bg-green-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Newsletter Section */}
        <div className="bg-white rounded-2xl p-8 mb-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-3">Stay Updated</h2>
            <p className="text-green-700 mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest events and activities.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              className="flex-1 px-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-800 placeholder-gray-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-800 text-white rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center min-w-[120px]"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Donate Button */}
        <Link href="/donate" className="block mb-8">
          <button className="group flex items-center justify-between w-full sm:w-auto px-6 py-4 bg-white text-green-800 rounded-xl hover:bg-green-50 transition-colors duration-200">
            <span className="font-medium">Donate Now</span>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </Link>

        {/* Divider */}
        <div className="border-t border-green-700 mb-8"></div>

        {/* Footer Content */}
        <div className="space-y-8">
          {/* Links and Social */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="text-white">
              <p className="text-sm">
                © {currentYear}{" "}
                <Link href="/" className="hover:underline underline-offset-2">
                  Rising Roots Foundation
                </Link>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/rrootsfoundation/profilecard/?igsh=aGp6Y3Mxcml3eHMw"
                className="text-white hover:text-green-200 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/RRootsFoundation?mibextid=LQQJ4d"
                className="text-white hover:text-green-200 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quote */}
          <div className="text-white/90 text-center max-w-3xl mx-auto">
            <blockquote className="text-lg leading-relaxed italic">
              "Every contribution you make plants a seed of hope, nurturing dreams and building futures. Together, we
              can transform lives, one donation at a time."
            </blockquote>
          </div>

          {/* Designer Credit */}
          <div className="text-center text-white/70 text-sm">
            <p>
              Designed by{" "}
              <a
                href="https://www.aibsmart.com"
                className="hover:text-white hover:underline underline-offset-2 transition-colors duration-200"
              >
                aib.smart
              </a>
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalContent.title} message={modalContent.message} />
    </footer>
  )
}
