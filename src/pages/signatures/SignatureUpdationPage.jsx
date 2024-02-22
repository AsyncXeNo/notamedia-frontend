import imageType from "image-type";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import SignatureUpdation from "./Components/SignatureUpdation";

const SignatureUpdationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <SignatureUpdation />
      </div>

      <Footer />
    </div>
  );
};

export default SignatureUpdationPage;
