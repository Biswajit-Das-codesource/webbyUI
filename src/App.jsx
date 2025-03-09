import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Main";

import Signup from "./UI COMPONENTS/SignupPage";
import PaymentForm from "./UI COMPONENTS/PaymentPage";
import Page1 from "./components/Page1";
import ShowCase from "./components/ShowCase";
import ShowCase2 from "./components/ShowCase2";
import Thread from "./components/Thread";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Page1 />
      <ShowCase/>
      <ShowCase2/>
      <Thread/>
      <Footer/>
      
    </div>
  );
}

export default App;
