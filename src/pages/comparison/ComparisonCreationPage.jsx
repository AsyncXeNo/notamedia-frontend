import React from "react";
import ComparisonCreation from "./Components/ComparisonCreation";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ComparisonCreationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <ComparisonCreation />
      </div>

      <Footer />
    </div>
  );
};

export default ComparisonCreationPage;
