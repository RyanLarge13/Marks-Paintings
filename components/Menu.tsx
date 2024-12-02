"use client";

import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const Menu = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <button onClick={() => setMenu((prev) => !prev)}>
        <MdMenu />
      </button>
      {menu ? (
        <div
          className="z-40 fixed inset-0"
          onClick={() => setMenu(false)}
        ></div>
      ) : null}
      <div
        className={`fixed top-0 left-0 bottom-0 z-40 p-10 duration-300 bg-white shadow-lg ${
          menu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
        }`}
      >
        <a href="/" className="font-semibold text-lg mb-5 block">
          Mark Meissner
        </a>
        <ul className="text-sm flex flex-col justify-start items-start gap-y-3">
          <li>
            <a
              href="/gallery"
              className="duration-200 hover:text-orange-900 font-semibold"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="duration-200 hover:text-orange-900 font-semibold"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="duration-200 hover:text-orange-900 font-semibold"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
