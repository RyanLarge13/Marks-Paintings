import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const page = () => {
  return (
    <main className="flex flex-col lg:flex-row bg-white lg:mx-[-10rem]">
      <div className="flex justify-center items-center basis-2/5 py-10 lg:py-0">
        <p>Your image goes here</p>
      </div>
      <div className="flex-1">
        {/* Section 1 */}
        <div className="flex flex-col py-10 lg:flex-row lg:py-0">
          <div className="basis-1/2 p-10">
            <h1 className="text-6xl mb-2">Art Exhibition</h1>
            <p className="text-lg font-bold mb-2">Mark Meissner</p>
            <p className="mb-5 flex-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis quam sit totam itaque autem, cumque eaque excepturi
              eum, quis iste nostrum laborum quaerat fugit quos nobis. Sint
              impedit natus architecto.
            </p>
            <button className="px-10 py-3 bg-orange-900 text-white font-semibold duration-200 hover:bg-black hover:text-white">
              Information
            </button>
          </div>
          <div className="flex basis-1/2 flex-col justify-center items-center gap-y-3 px-10">
            <button className="w-full px-10 py-3 bg-orange-900 text-white font-semibold duration-200 hover:bg-black hover:text-white">
              Contact
            </button>
            <button className="w-full px-10 py-3 bg-orange-900 text-white font-semibold duration-200 hover:bg-black hover:text-white">
              Gallery
            </button>
            <button className="w-full px-10 py-3 bg-orange-900 text-white font-semibold duration-200 hover:bg-black hover:text-white">
              More ...
            </button>
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-10 bg-slate-100">
            <p className="text-lg mb-2">BUFFALO, NY COLLECTION</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis ducimus doloribus exercitationem esse similique neque
              corporis dolor, at repellendus cumque sapiente. Sequi sint error
              dolor aspernatur facilis maxime, est delectus.
            </p>
          </div>
          <div className="basis-2/5 bg-orange-900 text-white p-10">
            <p className="text-lg mb-2">SOCIAL SHARING</p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <div className="flex justify-start items-center gap-x-5">
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
