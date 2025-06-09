"use client"
import { useForm } from "react-hook-form"
import Image from "next/image"

const DonateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
    handlePayPalClick(data)
  }

  const handlePayPalClick = (data) => {
    const { email } = data
    if (email) {
      const paypalUrl = `https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=JWTF65REUU42W&fbclid=PAZXh0bgNhZW0CMTEAAabMTmbPAX0vMYOc1RgjoJqDXaJe7V6-ilm_Fh2DHe-9w90vt9UGThpeaKE_aem_qxFKR7SrMxto_YMeK8gnYw`
      window.open(paypalUrl, "_blank")
    } else {
      console.error("Email is not valid:", email)
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
                Support Our
                <span className="block text-emerald-600 font-medium">Mission</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                Your contribution helps us continue making a positive impact. Every donation matters.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
              </div>

              <button
                type="submit"
                className="group w-full sm:w-auto bg-[#0070ba] hover:bg-[#005ea6] text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.028-.026.056-.052.08-.26 1.13-.618 2.112-1.07 2.934-.45.82-1.004 1.48-1.66 1.974a7.607 7.607 0 0 1-2.572 1.267c-.544.15-1.147.225-1.808.225h-1.937c-.524 0-.968.382-1.05.9L9.354 19.9c-.082.518.13.937.633.937h3.23c.524 0 .968-.382 1.05-.9l.429-2.72c.082-.518.526-.9 1.05-.9h.659c3.745 0 6.675-1.52 7.53-5.92.285-1.47.126-2.7-.713-3.48z" />
                </svg>
                <span>Donate with PayPal</span>
              </button>
            </form>

            <p className="text-sm text-slate-500 max-w-md">
              Your support means everything to us. Thank you for helping us make a difference.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                className="object-cover w-full h-[500px]"
                alt="Rising Roots Logo"
                src="/images/logo_rising_roots.jpg?height=500&width=500"
                height={500}
                width={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonateForm
