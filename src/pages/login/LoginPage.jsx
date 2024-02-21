import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { backend_server_url } from "../../config";
import { logout } from "../../utils";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Login from "./Components/Login";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
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
          navigate("/");
        } catch (error) {
          console.error(
            `Error making axios request: ${error.response.data.message}`
          );
          logout();
        }
      };

      makeRequest();
    }
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const data = {
        username,
        password,
      };
      const response = await axios.post(
        `${backend_server_url}/users/login`,
        data
      );
      const payload = response.data.payload;
      localStorage.setItem("name", payload.name);
      localStorage.setItem("token", payload.token);
      navigate("/");
    } catch (error) {
      console.error(
        `Error making axios request: ${error.response.data.message}`
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
