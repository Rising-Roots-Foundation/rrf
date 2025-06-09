"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const Donate = () => {
  const donationItems = [
    "Uniforms, Shoes, and Sandals",
    "Exercise Books / Text Books",
    "Computers, Scholarships, etc.",
    "Writing Materials / Implements",
  ]

  const handlePayPalSubmit = () => {
    const paypalUrl = "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=JWTF65REUU42W&fbclid=PAZXh0bgNhZW0CMTEAAabMTmbPAX0vMYOc1RgjoJqDXaJe7V6-ilm_Fh2DHe-9w90vt9UGThpeaKE_aem_qxFKR7SrMxto_YMeK8gnYw"
    window.open(paypalUrl, "_blank")
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Make a Difference</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your contributions help us provide essential resources to communities in need
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Images Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1767-Edit.JPG?raw=true"
                  alt="Community Impact"
                  width={300}
                  height={200}
                />
                <Image
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1548-Edit.JPG?raw=true"
                  alt="Educational Support"
                  width={300}
                  height={200}
                />
              </div>
              <div className="pt-8">
                <Image
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  src="https://github.com/Rising-Roots-Foundation/rrf-media/blob/main/gallery/IMG_1844-Edit.JPG?raw=true"
                  alt="Community Growth"
                  width={300}
                  height={250}
                />
              </div>
            </div>
          </div>

          {/* Impact Description Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">What Your Donations Do</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every contribution makes a tangible difference in someone's life. Here's how we use your donations to
                create lasting impact.
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {donationItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-xl mx-auto text-center">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-green-800">Support Our Mission</h3>
              <p className="text-gray-600 text-lg">
                100% of your donation goes directly to providing support and resources to children and communities in
                need.
              </p>
              <Button
                onClick={handlePayPalSubmit}
                className="bg-[#0070ba] hover:bg-[#005ea6] text-white py-6 text-lg font-semibold rounded-xl w-full transition"
              >
                💙 Donate with PayPal
              </Button>
              <div className="text-sm text-gray-500 pt-2">
                🔒 Secure payments processed by PayPal
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Rising Roots Foundation is committed to transparency and impact — thank you for your support.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Donate
