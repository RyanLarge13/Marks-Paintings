import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Menu from "./Menu";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-10">
      <Menu />
      <a href="/" className="text-center">
        Mark ---
      </a>
      <div className="flex justify-center items-center gap-x-3">
        <FaTwitter />
        <FaFacebook />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Nav;
