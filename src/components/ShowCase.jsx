import React from "react";
import CreateProject from "../UI COMPONENTS/LoginPage";
import Signup from "../UI COMPONENTS/SignupPage";
import PaymentForm from "../UI COMPONENTS/PaymentPage";
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard";

function ShowCase() {
  return (
    <>
      <div className="flex flex-col items-center bg-black p-6 sm:px-4 md:px-10">
        <div className="w-full flex flex-wrap justify-center gap-10 md:gap-4">
          {/* Project Creation UI */}
          <div className="bg-black p-6 rounded-lg shadow-md border md:w-96 border-white w-full sm:w-80">
            <h2 className="text-white text-lg font-semibold">Create Project</h2>
            <p className="text-gray-400 text-sm mb-4">Deploy your new project in one-click.</p>

            <div className="mb-4">
              <label className="text-white text-sm block mb-1">Name</label>
              <input
                type="text"
                placeholder="Name of your project"
                className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            <div className="mb-6">
              <label className="text-white text-sm block mb-1">Framework</label>
              <select className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
                <option value="">Select</option>
                <option value="react">React</option>
                <option value="nextjs">Next.js</option>
                <option value="vue">Vue.js</option>
                <option value="angular">Angular</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-zinc-700">Cancel</button>
              <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">Deploy</button>
            </div>
          </div>
          
          <Signup />

          {/* Payment Form UI */}
          <div className="bg-black p-6 rounded-lg shadow-md border md:w-96 border-white w-full sm:w-80">
            <h2 className="text-white text-lg font-semibold">Payment Details</h2>
            <p className="text-gray-400 text-sm mb-4">Enter your card details to complete the payment.</p>

            <div className="mb-4">
              <label className="text-white text-sm block mb-1">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="text-white text-sm block mb-1">Cardholder Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            <div className="flex gap-4 mb-6">
              <div className="w-1/2">
                <label className="text-white text-sm block mb-1">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div className="w-1/2">
                <label className="text-white text-sm block mb-1">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-zinc-700">Cancel</button>
              <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
      
      <h1 className="text-2xl md:text-3xl text-white font-bold bg-black text-center pt-4 md:pt-6">Hover On me</h1>
      
      <div className="bg-black w-full flex justify-center pt-3">
        <TiltedCard
          imageSrc="https://media.wired.com/photos/668d534f791d9d44f6741af9/master/pass/Nike-Adapt-BB-Discontinued.jpg"
          containerHeight="250px"
          containerWidth="350px"
          imageHeight="250px"
          imageWidth="400px"
          rotateAmplitude={30}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </div>
    </>
  );
}

export default ShowCase;