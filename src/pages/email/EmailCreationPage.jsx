import React from "react";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EmailCreation from "./Components/EmailCreation";

const EmailCreationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <EmailCreation />
      </div>

      <Footer />
    </div>
  );
};

export default EmailCreationPage;
