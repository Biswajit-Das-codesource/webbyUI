import React from "react";
import CreateProject from "../UI COMPONENTS/LoginPage";
import Signup from "../UI COMPONENTS/SignupPage";
import PaymentForm from "../UI COMPONENTS/PaymentPage";
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard";

import ShowCase2 from "./ShowCase2";
function ShowCase() {
  return (
    <>
      <div className="flex md:w-full gap-10 bg-black justify-center md:gap-4 flex-wrap p-6 ">
        <CreateProject />
        <Signup />
        <PaymentForm />
      </div>
      <h1 className="text-3xl hidden md:block text-white font-bold bg-black text-center">
        Hover On me
      </h1>
      <div className="bg-black w-full md:flex justify-center min-h pt-3 md:block hidden">
        <TiltedCard
          imageSrc={"https://media.wired.com/photos/668d534f791d9d44f6741af9/master/pass/Nike-Adapt-BB-Discontinued.jpg"}
            
          containerHeight="300px"
          containerWidth="400px"
          imageHeight="300px"
          imageWidth="600px"
          rotateAmplitude={30}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text"></p>
          }
        />


        
      </div>
    </>
  );
}

export default ShowCase;
