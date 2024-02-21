import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { backend_server_url } from "../../config";
import { logout } from "../../utils";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Updation from "./Components/Updation";

const UserUpdationPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [is_active, setIsActive] = useState(false);

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
            const username = params.username;
            const data = { username: username };
            const user = (
              await axios.post(`${backend_server_url}/users/existing`, data, {
                headers,
              })
            ).data.payload;
            setIsActive(user.active);
          } catch (error) {
            console.error(
              `Error while fetching users: ${error.response.data.message}`
            );
            // navigate("/users");
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

  const update = async (e) => {
    e.preventDefault();

    let data;

    if (password !== "") {
      if (password !== confirmPassword) {
        console.error("Passwords do not match");
        return;
      }

      data = {
        username: params.username,
        new: {
          password: password,
          active: is_active,
        },
      };
    } else {
      data = {
        username: params.username,
        new: {
          active: is_active,
        },
      };
    }

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: "Bearer " + token,
    };

    try {
      const response = await axios.put(
        `${backend_server_url}/users/update`,
        data,
        { headers }
      );
      const message = response.data.message;
      console.log(message);
    } catch (error) {
      console.error(
        `Error making axios request: ${error.response.data.message}`
      );
    }
  };

  const deleteUser = async (e) => {
    e.preventDefault();

    const data = { username: params.username };
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: "Bearer " + token,
    };

    try {
      const response = await axios.post(
        `${backend_server_url}/users/delete`,
        data,
        { headers }
      );
      const message = response.data.message;
      console.log(message);
      navigate("/users");
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
        <Updation />
      </div>

      <Footer />
    </div>
  );
};

export default UserUpdationPage;
