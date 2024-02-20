import React from "react";
import { FaHome, FaUser, FaSignature } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle, MdEmail, MdLogout } from "react-icons/md";
import { FaCodeCompare, FaBuilding, FaFileSignature } from "react-icons/fa6";
import { RiBox3Fill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";

import { logout } from '../utils'


const Navbar = () => {

  const navigate = useNavigate()
  
  const logOut = (e) => {

    e.preventDefault()

    logout()
    navigate('/login')
    
  }
  
  
  return (
    <div className="">
      <div className="flex ml-14 mt-12 w-72 flex-col bg-nota-black rounded-lg ">
        <div className="px-10 py-7">
          <div className="flex flex-row text-nota-white items-center my-4">
            <FaHome className="text-xl mt-px" />
            <Link className="text-xl ml-2">Home</Link>
          </div>
          <div className="flex flex-row text-nota-white items-center my-4">
            <FaUser className="text-xl mt-px" />
            <Link className="text-xl ml-2">Users</Link>
          </div>
          <div className="flex flex-row text-nota-white items-center my-4">
            <FaSignature className="text-xl mt-px" />
            <Link className="text-xl ml-2">Signatures</Link>
          </div>
          <div className="flex flex-row text-nota-white items-center my-4">
            <MdEmail className="text-xl mt-px" />
            <Link className="text-xl ml-2">Email Templates</Link>
          </div>
          <div className="flex flex-row text-nota-white items-center my-4">
            <FaCodeCompare className="text-xl mt-px" />
            <Link className="text-xl ml-2">Comparisons</Link>
          </div>
          <div className="flex flex-row text-nota-white items-center my-4">
            <RiBox3Fill className="text-xl mt-px" />
            <Link className="text-xl ml-2">Products</Link>
          </div>
          <div className="flex flex-row text-nota-white items-center my-4">
            <FaBuilding className="text-xl mt-px" />
            <Link className="text-xl ml-2">Companies</Link>
          </div>
          <div className="flex flex-row text-nota-white items-center my-4">
            <IoDocumentText className="text-xl mt-px" />
            <Link className="text-xl ml-2">Commercials</Link>
          </div>
        </div>
        <div className="px-10">
          <div className="border-t border-nota-white border-2 w-full rounded-lg"></div>
        </div>
        <div className="px-10 mb-2">
          <div className="flex flex-row text-nota-yellow items-center my-3">
            <MdAccountCircle className="text-3xl mt-px" />
            <div className="flex flex-col">
              <span className="text-xl ml-2">SuperUser</span>
              <span className="font-light  ml-2">Admin</span>
            </div>
            <button onClick={logOut} className="text-red-500 ml-auto text-2xl" alt="Logout">
              <MdLogout />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
