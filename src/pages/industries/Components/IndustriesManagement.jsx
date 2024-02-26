import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

const IndustriesManagement = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setPreviewImage(imageUrl);
  };

  const handleDeletePreview = () => {
    setPreviewImage(null);
  };

  return (
    <div className="flex justify-center w-full mt-12 mb-12">
      <div className="flex flex-col  items-center w-1/3 bg-nota-cyan h-full bg-nota-blue rounded-lg">
        <span className="font-markazi-text text-4xl my-8 font-bold underline">
          Industries List
        </span>
        <div className="flex flex-row justify-center w-2/3 gap-x-2">
          <div className="justify-center w-2/3 bg-nota-white h-12 rounded-full flex flex-row mt-6">
            <Link className="flex flex-row  justify-center items-center w-2/3 text-nota-black text-center bg-nota-white font-markazi-text text-xl cursor-pointer">
              Industry Name 1
            </Link>
          </div>
          <div
            className="justify-center w-1/3 bg-nota-white h-12 rounded-full flex flex-row mt-6"
            onClick={() => handleImageClick("https://via.placeholder.com/150")}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Image 1"
              className="w-full h-full object-cover rounded-full cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-2/3 gap-x-2">
          <div className="justify-center w-2/3 bg-nota-white h-12 rounded-full flex flex-row mt-6">
            <Link className="flex flex-row  justify-center items-center w-2/3 text-nota-black text-center bg-nota-white font-markazi-text text-xl cursor-pointer">
              Industry Name 2
            </Link>
          </div>
          <div
            className="justify-center items-center w-1/3 bg-nota-gray h-12 rounded-full flex flex-row mt-6"
            onClick={() => handleImageClick("https://via.placeholder.com/150")}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Image 2"
              className="w-full h-full object-cover rounded-full cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-2/3 gap-x-2">
          <div className="justify-center w-2/3 bg-nota-white h-12 rounded-full flex flex-row mt-6">
            <Link className="flex flex-row  justify-center items-center w-2/3 text-nota-black text-center bg-nota-white font-markazi-text text-xl cursor-pointer">
              Industry Name 3
            </Link>
          </div>
          <div
            className="justify-center items-center w-1/3 bg-nota-gray h-12 rounded-full flex flex-row mt-6"
            onClick={() => handleImageClick("https://via.placeholder.com/150")}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Image 2"
              className="w-full h-full object-cover rounded-full cursor-pointer"
            />
          </div>
        </div>
        {previewImage && (
          <div className="mt-12 relative">
            <button
              onClick={handleDeletePreview}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
            >
              X
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="w-48 h-48 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="flex justify-center items-center h-12 w-28 bg-nota-lightblue rounded-full font-markazi-text text-xl font-bold mt-24 mb-10 ml-64">
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesManagement;
