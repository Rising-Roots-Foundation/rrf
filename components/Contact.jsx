import React from 'react'
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Email sent:', data);
    // Handle form submission (e.g., send email to server)
  };



  return (
    <div className=" p-6 md:shadow bg-white rounded-lg">
          <h2 className="text-2xl font-medium-geist mb-4 uppercase">Write to us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium-geist text-gray-700 mb-1">Full Name:</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium-geist text-gray-700 mb-1">Email:</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>


            {/* Text area input */}
            <div>
              <label className="block text-sm font-medium-geist text-gray-700 mb-1">Message:</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message"
                rows="5"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium-geist">
              Send Message
            </button>
          </form>
        </div>
  )
}

export default Contact
