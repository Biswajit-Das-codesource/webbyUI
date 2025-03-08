import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center bg-black">
      <div className="bg-black p-6 rounded-lg shadow-md border w-96 border-white">
        {/* Title */}
        <h2 className="text-white text-lg font-semibold">Sign Up</h2>
        <p className="text-gray-400 text-sm mb-4">
          Create an account to get started.
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label className="text-white text-sm block mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-white text-sm block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-white text-sm block mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="text-white text-sm block mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-zinc-700">
            Cancel
          </button>
          <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
