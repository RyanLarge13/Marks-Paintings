import React from "react";
import BackDropImage from "@/assets/images/Contact_Img1.jpg";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";

const page = () => {
  return (
    <main className="bg-white p-10 flex flex-col lg:flex-row overflow-hidden">
      <div className="flex-1 z-20">
        <h1 className="text-6xl mb-5">Email Me</h1>
        <form className="bg-slate-100 p-5">
          <input
            name="Name"
            id="Name"
            type="text"
            placeholder="Name"
            className="bg-white outline-none focus:outline-1 focus:outline-orange-900 duration-200 px-2 py-3 w-full rounded-sm mb-3"
          />
          <input
            name="Email"
            id="Email"
            type="email"
            placeholder="Email"
            className="bg-white outline-none focus:outline-1 focus:outline-orange-900 duration-200 px-2 py-3 w-full rounded-sm mb-3"
          />
          <textarea
            name="Message"
            rows={6}
            id="Message"
            placeholder="Message"
            className="bg-white outline-none focus:outline-1 focus:outline-orange-900 duration-200 px-2 py-3 w-full rounded-sm mb-3"
          ></textarea>
          <button
            className="w-full px-10 py-3 bg-orange-900 text-white font-semibold duration-200 hover:bg-black hover:text-white"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="basis-2/5 flex justify-center items-center z-20 py-10 lg:py-0">
        <p>Image Goes Here</p>
      </div>
    </main>
  );
};

export default page;
