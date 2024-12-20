import React from "react";
import G_Img1 from "@/assets/images/G_img1.jpeg";
import G_Img2 from "@/assets/images/G_img2.jpeg";
import G_Img3 from "@/assets/images/G_img3.jpg";
import G_Img4 from "@/assets/images/G_img4.jpg";
import G_Img5 from "@/assets/images/G_img5.jpeg";
import G_Img6 from "@/assets/images/G_img6.jpg";
import {
  l1,
  l2,
  p1,
  p2,
  p3,
  p4,
  p5,
  t1,
  t2,
  t3,
  t4,
} from "../assets/marks-images";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Gallery = ({ params }: { params: { index: string } }) => {
  return (
    <>
      <div className="mt-40 mb-10 md:grid grid-cols-3 gap-5 place-items-center">
        <Image src={l1} alt="painting" className="w-full my-10 md:my-0" />
        <Image src={l2} alt="painting" className="w-full my-10 md:my-0" />
        <Image src={p1} alt="painting" className="w-full my-10 md:my-0" />
        <Image src={t2} alt="painting" className="w-full my-10 md:my-0" />
        <Image src={p3} alt="painting" className="w-full my-10 md:my-0" />
        <Image src={t1} alt="painting" className="w-full my-10 md:my-0" />
      </div>
      {params?.index !== "null" ? (
        <div
          className={`flex mb-20 items-center ${
            Number(params.index) === 0 ? "justify-end" : "justify-between"
          }`}
        >
          {Number(params.index) !== 0 ? (
            <a
              href={`/gallery/${Number(params.index) - 1}`}
              className="flex justify-between items-center gap-x-3 text-sm font-bold p-10 hover:text-orange"
            >
              <FaArrowLeft />
              <p>Previous</p>
            </a>
          ) : null}
          <a
            href={`/gallery/${Number(params.index) + 1}`}
            className="flex justify-between items-center gap-x-3 text-sm font-bold p-10 hover:text-orange"
          >
            <p>Next</p>
            <FaArrowRight />
          </a>
        </div>
      ) : null}
    </>
  );
};

export default Gallery;
