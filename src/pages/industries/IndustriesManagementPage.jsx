import React from "react";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import IndustriesManagement from "./Components/IndustriesManagement";

const IndustriesManagementPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <IndustriesManagement />
      </div>

      <Footer />
    </div>
  );
};

export default IndustriesManagementPage;
