import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import IndustriesUpdation from "./Components/IndustriesUpdation";

const IndustriesUpdationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <IndustriesUpdation />
      </div>

      <Footer />
    </div>
  );
};

export default IndustriesUpdationPage;
