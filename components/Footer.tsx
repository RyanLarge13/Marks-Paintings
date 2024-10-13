import React from "react";

const Footer = () => {
  return (
    <div className="mt-40 bg-white p-10 flex relative flex-col justify-center items-center">
      <div className="absolute top-0 translate-y-[-50%] bg-orange-900 rounded-full left-[40%] right-[40%] h-2 shadow-lg"></div>
      <div className="text-sm">
        <a href="/gallery" className="mx-2 duration-200 hover:text-orange-900">
          Gallery
        </a>
        <a href="" className="mx-2 duration-200 hover:text-orange-900">
          About
        </a>
        <a href="" className="mx-2 duration-200 hover:text-orange-900">
          Contact
        </a>
      </div>
      <div className="my-10 h-1 w-20 border-t-2 border-t-orange-900 rounded-full"></div>
      <p className="text-xs">Mark ---</p>
    </div>
  );
};

export default Footer;
