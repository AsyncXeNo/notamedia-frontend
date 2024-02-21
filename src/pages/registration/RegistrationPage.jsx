import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { backend_server_url } from "../../config";
import { logout } from "../../utils";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Registration from "./Components/Registration";

const RegistrationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      //   navigate("/login");
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
          if (payload.user_type > 1) {
            navigate("/");
          }
        } catch (error) {
          console.error(
            `Error making axios request: ${error.response.data.message}`
          );
          logout();
          //   navigate("/login");
        }
      };

      makeRequest();
    }
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user_type, setUserType] = useState(2);
  const [is_active, setIsActive] = useState(true);

  const register = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const data = { username, password, user_type, is_active };
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: "Bearer " + token,
    };

    try {
      const response = await axios.post(
        `${backend_server_url}/users/new`,
        data,
        { headers }
      );
      const message = response.data.message;
      console.log(message);
      navigate("/users/" + username);
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
        <Registration />
      </div>

      <Footer />
    </div>
  );
};

export default RegistrationPage;
