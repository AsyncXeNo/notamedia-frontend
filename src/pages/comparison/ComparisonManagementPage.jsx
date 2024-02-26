import React from "react";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ComparisonManagement from "./Components/ComparisonManagement";

const ComparisonManagementPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <ComparisonManagement />
      </div>

      <Footer />
    </div>
  );
};

export default ComparisonManagementPage;
