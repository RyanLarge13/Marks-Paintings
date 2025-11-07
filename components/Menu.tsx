"use client";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setMenu((prev) => !prev)}
        className="text-neutral-800 hover:text-orange-600 transition-all text-3xl"
      >
        <MdMenu />
      </button>

      {/* Backdrop */}
      {menu && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setMenu(false)}
        ></div>
      )}

      {/* Slide-out Menu */}
      <nav
        className={`fixed top-0 left-0 bottom-0 z-40 p-10 w-64 bg-white shadow-2xl flex flex-col justify-start gap-y-6 transition-all duration-300
${menu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}
`}
      >
        <a
          href="/"
          className="font-bold text-xl tracking-wide mb-6 hover:text-orange-600"
        >
          Mark Meissner
        </a>

        <ul className="flex flex-col gap-y-4 text-md font-medium">
          <li>
            <a href="/gallery" className="hover:text-orange-600 transition-all">
              Gallery
            </a>
          </li>
          <li>
            <a
              href="/sketchbooks"
              className="hover:text-orange-600 transition-all"
            >
              Sketch Books
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-orange-600 transition-all">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-orange-600 transition-all">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
