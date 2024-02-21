import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { backend_server_url } from "../../config";
import { logout } from "../../utils";
import Management from "./Components/Management";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const UserManagementPage = () => {
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

          try {
            const users = (
              await axios.get(`${backend_server_url}/users`, { headers })
            ).data.payload;
            SetUsers(users);
            console.log(users);
          } catch (error) {
            console.error(
              `Error while fetching users: ${error.response.data.message}`
            );
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

  const [users, SetUsers] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row">
        <Navbar />
        <Management />
      </div>

      <Footer />
    </div>
  );
};

export default UserManagementPage;
