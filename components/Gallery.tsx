import React from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getBucketFolderImages } from "../utils/helpersServer";
import { genUrlForBucketImage } from "../utils/helpersClient";

const Gallery = async ({ params }: { params: { index: string } }) => {
  const indexStart = Number(params.index);

  if (!indexStart || isNaN(indexStart)) {
    return <p>Load Error</p>;
  }

  const files = await getBucketFolderImages("Gallery-Paintings/");
  const GalleryImages = files.slice(indexStart, indexStart + 10);

  return (
    <>
      <div className="mt-40 mb-10 md:grid grid-cols-3 gap-5 place-items-center">
        {GalleryImages.map((i) => (
          <Image
            src={genUrlForBucketImage(i.name)}
            alt={i.name}
            className="w-full my-10 md:my-0"
          />
        ))}
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
