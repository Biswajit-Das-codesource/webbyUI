import React from "react";

const PaymentForm = () => {
  return (
    <div className="flex justify-center items-center  bg-black">
      <div className="bg-black p-10 rounded-lg shadow-md border md:w-96 border-white">
        {/* Title */}
        <h2 className="text-white text-lg font-semibold">Payment Details</h2>
        <p className="text-gray-400 text-sm mb-4">
          Enter your card details to complete the payment.
        </p>

        {/* Card Number */}
        <div className="mb-4">
          <label className="text-white text-sm block mb-1">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        {/* Cardholder Name */}
        <div className="mb-4">
          <label className="text-white text-sm block mb-1">Cardholder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        {/* Expiry Date and CVV */}
        <div className="flex gap-4 mb-6">
          {/* Expiry Date */}
          <div className="w-1/2">
            <label className="text-white text-sm block mb-1">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* CVV */}
          <div className="w-1/2">
            <label className="text-white text-sm block mb-1">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-zinc-700">
            Cancel
          </button>
          <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
