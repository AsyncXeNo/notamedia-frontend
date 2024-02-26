import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useState } from "react";

const IndustriesUpdation = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  return (
    <div className="flex justify-center w-full mt-12 mb-12">
      <div className="flex flex-col  items-center w-1/3 bg-nota-cyan h-full bg-nota-blue rounded-lg">
        <span className="font-markazi-text text-4xl my-8 font-bold underline">
          Industry Updation
        </span>
        <div className="justify-center w-2/3 bg-nota-white h-12 rounded-full flex flex-row mt-6">
          <input
            type="text"
            placeholder="Industry Name"
            className="flex flex-row w-1/2 placeholder-nota-black text-center bg-nota-white border-none focus:outline-none font-markazi-text text-xl"
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-x-5">
          <div className="flex justify-center items-center flex-col mt-12">
            <label htmlFor="upload" className="relative cursor-pointer">
              <div className="relative w-36 h-36 bg-gray-300 flex justify-center items-center rounded-lg overflow-hidden">
                {image ? (
                  <>
                    <img
                      src={image}
                      alt="Uploaded"
                      className="object-cover w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={handleDeleteImage}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <span className="text-black text-xl">Upload Image</span>
                )}
              </div>
              <input
                id="upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <div className="flex justify-center items-center flex-col mt-12">
            <label htmlFor="upload" className="relative cursor-pointer">
              <div className="relative w-36 h-36 bg-gray-300 flex justify-center items-center rounded-lg overflow-hidden">
                {image ? (
                  <>
                    <img
                      src={image}
                      alt="Uploaded"
                      className="object-cover w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={handleDeleteImage}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <span className="text-black text-xl">Upload Image</span>
                )}
              </div>
              <input
                id="upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-x-5">
          <div className="flex justify-center items-center flex-col mt-12">
            <label htmlFor="upload" className="relative cursor-pointer">
              <div className="relative w-36 h-36 bg-gray-300 flex justify-center items-center rounded-lg overflow-hidden">
                {image ? (
                  <>
                    <img
                      src={image}
                      alt="Uploaded"
                      className="object-cover w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={handleDeleteImage}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <span className="text-black text-xl">Upload Image</span>
                )}
              </div>
              <input
                id="upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <div className="flex justify-center items-center flex-col mt-12">
            <label htmlFor="upload" className="relative cursor-pointer">
              <div className="relative w-36 h-36 bg-gray-300 flex justify-center items-center rounded-lg overflow-hidden">
                {image ? (
                  <>
                    <img
                      src={image}
                      alt="Uploaded"
                      className="object-cover w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={handleDeleteImage}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <span className="text-black text-xl">Upload Image</span>
                )}
              </div>
              <input
                id="upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-x-5">
          <div className="flex justify-center items-center flex-col mt-12">
            <label htmlFor="upload" className="relative cursor-pointer">
              <div className="relative w-36 h-36 bg-gray-300 flex justify-center items-center rounded-lg overflow-hidden">
                {image ? (
                  <>
                    <img
                      src={image}
                      alt="Uploaded"
                      className="object-cover w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={handleDeleteImage}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <span className="text-black text-xl">Upload Image</span>
                )}
              </div>
              <input
                id="upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-row h-12 mt-14 mb-10">
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

export default IndustriesUpdation;
