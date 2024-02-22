import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { backend_server_url } from "../../config";
import { logout } from "../../utils";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SignatureCreation from "./Components/SignatureCreation";

const SignatureCreationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      // navigate('/login')
    }

    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: "Bearer " + token,
      };

      const makeRequest = async () => {
        try {
          const response = await axios.get(`${backend_server_url}/users/me`, {
            headers,
          });
          const payload = response.data.payload;
          localStorage.setItem("name", payload.name);
          if (payload.user_type > 2) {
            navigate("/");
          }
        } catch (error) {
          console.error(
            `Error making axios request: ${error.response.data.message}`
          );
          logout();
          // navigate('/login')
        }
      };

      makeRequest();
    }
  }, []);

  const [unique_name, setUniqueName] = useState("");
  const [sender_full_name, setSenderFullName] = useState("");
  const [sender_short_name, setSenderShortName] = useState("");
  const [sender_designation, setSenderDesignation] = useState("");
  const [sender_phone, setSenderPhone] = useState("");
  const [sender_email, setSenderEmail] = useState("");
  const [sender_company_website, setSenderCompanyWebsite] = useState("");
  const [sender_picture, setSenderPicture] = useState("");
  const [sender_company_name, setSenderCompanyName] = useState("");

  const handlePictureChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSenderPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const create = async (e) => {
    e.preventDefault();

    const data = {
      unique_name,
      sender_full_name,
      sender_short_name,
      sender_designation,
      sender_phone,
      sender_email,
      sender_company_website,
      sender_picture: sender_picture.split(",")[1],
      sender_company_name,
    };
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: "Bearer " + token,
    };

    try {
      const response = await axios.post(
        `${backend_server_url}/signatures/new`,
        data,
        { headers }
      );
      const message = response.data.message;
      console.log(message);
      navigate("/signatures/" + unique_name);
    } catch (error) {
      console.error(
        `Error making axios request: ${error.response.data.message}`
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <SignatureCreation />
      </div>

      <Footer />
    </div>
  );
};

export default SignatureCreationPage;
