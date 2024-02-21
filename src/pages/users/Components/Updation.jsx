import React from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useState } from "react";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center w-full mt-12">
      <div className="flex flex-col  items-center w-1/3 bg-nota-cyan h-full bg-nota-blue rounded-lg">
        <span className="font-markazi-text text-4xl my-8 font-bold underline">
          User Updation
        </span>
        <div className="justify-center w-2/3 bg-nota-gray h-12 rounded-full flex flex-row mt-6">
          <input
            type="text"
            placeholder="SuperUser"
            disabled
            className="flex flex-row w-1/2 placeholder-black text-center bg-nota-gray border-none focus:outline-none font-markazi-text text-xl"
          />
        </div>
        <div className="justify-center w-2/3 bg-nota-white h-12 rounded-full flex flex-row mt-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            className="flex flex-row w-1/2 placeholder-nota-black text-center bg-nota-white border-none focus:outline-none font-markazi-text text-xl"
          />
          <Link>
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(false)}
                className=" absolute ml-3 text-2xl mt-3 text-nota-black cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(true)}
                className="absolute ml-3 text-2xl mt-3 text-nota-black cursor-pointer"
              />
            )}
          </Link>
        </div>
        <div className="justify-center w-2/3 bg-nota-white h-12 rounded-full flex flex-row mt-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm New Password"
            className="flex flex-row w-1/2 placeholder-nota-black text-center bg-nota-white border-none focus:outline-none font-markazi-text text-xl"
          />
          <Link>
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(false)}
                className=" absolute ml-3 text-2xl mt-3 text-nota-black cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(true)}
                className="absolute ml-3 text-2xl mt-3 text-nota-black cursor-pointer"
              />
            )}
          </Link>
        </div>
        <div className="flex justify-center items-center flex-row w-2/3 bg-nota-gray rounded-full h-12 mt-6">
          <select
            name="usertype"
            id="usertype"
            disabled
            className=" w-2/3 text-center font-markazi-text outline-none text-xl bg-nota-gray"
          >
            <option value="admin">Admin</option>
            <option value="">-Select User Type-</option>
            <option value="worker">Worker</option>
          </select>
        </div>
        <div className="flex flex-row justify-center items-center bg-nota-white rounded-full h-12 mt-6 w-2/3">
          <label
            className="font-markazi-text text-nota-black text-xl cursor-pointer "
            id="active"
            name="active"
          >
            <span>Active</span>
            <input
              type="checkbox"
              id="active"
              className="absolute h-5 w-5 ml-20 mt-1 cursor-pointer"
            />
          </label>
        </div>
        <div className="flex flex-row h-12 mt-32 mb-10">
          <button className="flex justify-center items-center h-12 w-28 bg-nota-red rounded-full font-markazi-text text-xl font-bold ml-32">
            Delete
          </button>
          <button className="flex justify-center items-center h-12 w-28 bg-nota-newyellow rounded-full font-markazi-text text-xl font-bold ml-2">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
