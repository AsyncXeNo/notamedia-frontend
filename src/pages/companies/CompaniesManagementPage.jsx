import React from "react";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import CompaniesManagement from "./Components/CompaniesManagement";

const CompaniesManagementPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <CompaniesManagement />
      </div>

      <Footer />
    </div>
  );
};

export default CompaniesManagementPage;
