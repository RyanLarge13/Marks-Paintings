import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getBucketFolderImages } from "../utils/helpersServer";
import { genUrlForBucketImage } from "../utils/helpersClient";

const Gallery = async ({ params }: { params: { index: string } }) => {
  let indexStart = Number(params.index);

  if (isNaN(indexStart)) indexStart = 0;

  const files = await getBucketFolderImages("Gallery-Paintings/");

  // remove folder entry and keep only filenames
  const cleanedFiles = files
    .map((item) => item.name)
    .filter((name) => name !== "Gallery-Paintings/");

  // calculate slicing
  const GalleryImages = cleanedFiles.slice(indexStart, indexStart + 10);

  const hasNextPage = indexStart + 10 < cleanedFiles.length;
  const hasPrevPage = indexStart > 0;

  return (
    <>
      {/* gallery grid */}
      <div className="mt-32 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center px-4">
        {GalleryImages.map((img, idx) => (
          <div
            key={idx}
            className="w-full max-w-[350px] overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.03]"
          >
            <img
              src={genUrlForBucketImage(img)}
              alt={img}
              className="w-full h-[300px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center mb-20 gap-6">
        {hasPrevPage && (
          <a
            href={`/gallery/${indexStart - 10}`}
            className="flex items-center gap-x-2 text-sm font-semibold px-6 py-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition"
          >
            <FaArrowLeft />
            Previous
          </a>
        )}

        {hasNextPage && (
          <a
            href={`/gallery/${indexStart + 10}`}
            className="flex items-center gap-x-2 text-sm font-semibold px-6 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-500 transition"
          >
            Next
            <FaArrowRight />
          </a>
        )}
      </div>
    </>
  );
};

export default Gallery;
