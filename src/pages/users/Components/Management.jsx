import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center w-full mt-12">
      <div className="flex flex-col  items-center w-1/3 bg-nota-cyan h-full bg-nota-blue rounded-lg">
        <span className="font-markazi-text text-4xl my-8 font-bold underline">
          User List
        </span>
        <div className="flex flex-row justify-center w-2/3 gap-x-2">
          <div className="justify-center w-2/3 bg-nota-white h-12 rounded-full flex flex-row mt-6">
            <Link className="flex flex-row  justify-center items-center w-1/2 text-nota-black text-center bg-nota-white font-markazi-text text-xl cursor-pointer">
              User 1
            </Link>
          </div>
          <div className="justify-center items-center w-1/3 bg-nota-gray h-12 rounded-full flex flex-row mt-6">
            <span className="font-markazi-text text-xl text-black">Admin</span>
          </div>
        </div>
        <div className="flex flex-row justify-center w-2/3 gap-x-2">
          <div className="justify-center w-2/3 bg-nota-white h-12 rounded-full flex flex-row mt-6">
            <Link className="flex flex-row  justify-center items-center w-1/2 text-nota-black text-center bg-nota-white font-markazi-text text-xl cursor-pointer">
              User 2
            </Link>
          </div>
          <div className="justify-center items-center w-1/3 bg-nota-gray h-12 rounded-full flex flex-row mt-6">
            <span className="font-markazi-text text-xl text-black">Worker</span>
          </div>
        </div>
        <div className="flex flex-row justify-center w-2/3 gap-x-2">
          <div className="justify-center w-2/3 bg-nota-white h-12 rounded-full flex flex-row mt-6">
            <Link className="flex flex-row  justify-center items-center w-1/2 text-nota-black text-center bg-nota-white font-markazi-text text-xl cursor-pointer">
              User 3
            </Link>
          </div>
          <div className="justify-center items-center w-1/3 bg-nota-gray h-12 rounded-full flex flex-row mt-6">
            <span className="font-markazi-text text-xl text-black">Client</span>
          </div>
        </div>

        <div className="flex justify-center items-center h-12 w-28 bg-nota-lightblue rounded-full font-markazi-text text-xl font-bold mt-32 mb-10 ml-64">
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
