import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import CompaniesUpdation from "./Components/CompaniesUpdation";

const CompaniesUpdationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <CompaniesUpdation />
      </div>

      <Footer />
    </div>
  );
};

export default CompaniesUpdationPage;
