// DonationForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const DonationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Use this data for both payment methods if needed
    console.log('Form submitted:', data);
  };

  const handlePayPalClick = (data) => {
    // Handle PayPal donation
    const { name, email } = data;
    const paypalUrl = `https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=JWTF65REUU42W&fbclid=PAZXh0bgNhZW0CMTEAAabMTmbPAX0vMYOc1RgjoJqDXaJe7V6-ilm_Fh2DHe-9w90vt9UGThpeaKE_aem_qxFKR7SrMxto_YMeK8gnYw`;
    window.open(paypalUrl, '_blank');
  };

//   const handleCardPaymentClick = (data) => {
//     // Redirect to card payment page (replace with your card service URL)
//     const cardPaymentUrl = `https://yourcardpaymentservice.com?name=${data.name}&email=${data.email}`;
//     window.open(cardPaymentUrl, '_blank');
//   };

  return (
    <div className="w-full p-10 bg-white rounded-lg shadow-sm">
      {/* <h2 className="text-2xl font-medium-geist mb-4">Make a Donation</h2> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium-geist text-gray-700 mb-2">Full Name:</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div className="mb-10">
          <label className="block text-sm font-medium-geist text-gray-700 mb-2">Email:</label>
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

        {/* Payment Buttons */}
        <div className="mt-4">
          <button
            type="button"
            className="w-full px-4 py-2.5 text-white bg-blue-500 hover:bg-blue-500/90 focus:ring-4 focus:outline-none focus:ring-bbg-blue-500/50 font-medium-geist rounded-full text-l text-center inline-flex items-center justify-center dark:focus:ring-bbg-blue-500/50"
            onClick={handleSubmit(handlePayPalClick)}
          ><svg class="w-4 h-4 me-2 ms-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>Donate with PayPal</button>
        </div>

        {/* donate with card */}
        {/* <div className="mt-4">
        <button
            type="button"
            className="w-full px-4 py-2.5 text-white bg-black hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-bbg-black/50 font-medium-geist rounded-full text-l text-center inline-flex items-center justify-center dark:focus:ring-bbg-black/50"
            onClick={handleSubmit(handleCardPaymentClick)}
          ><svg xmlns="http://www.w3.org/2000/svg" class="me-2 ms-2" height="22px" viewBox="0 -960 960 960" width="22px" fill="#fff"><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"/></svg>Donate with Debit Card</button>
        </div> */}
      </form>
    </div>
  );
};

export default DonationForm;
