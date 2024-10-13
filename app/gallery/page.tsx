import Gallery from "@/components/Gallery";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Page = () => {
  return (
    <section>
      <Gallery />
      <div className="flex justify-between items-center mb-20">
        <div className="flex justify-between items-center gap-x-3 text-sm font-bold p-10">
          <FaArrowLeft />
          <p>Previous</p>
        </div>
        <div className="flex justify-between items-center gap-x-3 text-sm font-bold p-10">
          <p>Next</p>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default Page;
