import React from "react";
import CompaniesCreation from "./Components/CompaniesCreation";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CompaniesCreationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <CompaniesCreation />
      </div>

      <Footer />
    </div>
  );
};

export default CompaniesCreationPage;
