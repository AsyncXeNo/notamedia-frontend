import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col justify-center items-center mx-14">
      <div className="border-t border-nota-blue border-2 w-full rounded-lg"></div>
      <span className="my-4 font-markazi-text text-2xl">
        © 2024 Copyright:{" "}
        <Link
          to="https://notamedia.com/"
          className="hover:text-blue-700 hover:underline"
        >
          notamedia.com
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
