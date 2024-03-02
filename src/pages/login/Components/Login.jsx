import React from "react";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col bg-nota-black lg:w-1/4 md:w-1/2 rounded-2xl items-center mt-24">
        <span className="text-nota-white text-5xl font-markazi-text my-10 font-bold">
          Login
        </span>
        <div className="w-2/3 bg-nota-white h-12 rounded-full flex flex-row mt-6">
          <FaUser className="text-3xl text-nota-black mt-2 ml-6" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="flex flex-row w-2/3 placeholder-nota-black text-center bg-nota-white border-none focus:outline-none font-markazi-text text-xl"
          />
        </div>
        <div className="w-2/3 bg-nota-white h-12 rounded-full flex flex-row my-6">
          <FaLock className="text-3xl text-nota-black mt-2 ml-6" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="flex flex-row w-2/3 placeholder-nota-black text-center bg-nota-white border-none focus:outline-none font-markazi-text text-xl"
          />
          <Link>
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(false)}
                className="text-2xl mt-3 text-nota-black cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(true)}
                className="text-2xl mt-3 text-nota-black cursor-pointer"
              />
            )}
          </Link>
        </div>
        <button className="rounded-full w-1/4 h-12 bg-nota-darkpeach font-markazi-text text-xl my-10 mb-14">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
