import Gallery from "../../components/Gallery";
import React from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Page = ({ params }: { params: { index: string } }) => {
  return (
    <section>
      <Gallery params={params.index ? params : { index: "0" }} />
    </section>
  );
};

export default Page;
