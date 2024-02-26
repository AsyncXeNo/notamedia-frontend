import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ComparisonUpdation from "./Components/ComparisonUpdation";

const ComparisonUpdationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <ComparisonUpdation />
      </div>

      <Footer />
    </div>
  );
};

export default ComparisonUpdationPage;
