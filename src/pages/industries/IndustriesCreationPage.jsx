import React from "react";
import IndustriesCreation from "./Components/IndustriesCreation";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const IndustriesCreationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <IndustriesCreation />
      </div>

      <Footer />
    </div>
  );
};

export default IndustriesCreationPage;
