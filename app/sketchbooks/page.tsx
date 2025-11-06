"use client";

// import Image from "next/image";
import React from "react";
import HTMLFlipBook from "react-pageflip";
import {
  genUrlForBucketImage,
  getBucketFolderImages,
} from "../../utils/helpers";

const page = async () => {
  const files = await getBucketFolderImages("Sketch-Book/");
  const SketchBookImages = files;

  return (
    <section className="overflow-hidden px-5 py-20">
      <HTMLFlipBook
        width={500}
        height={700}
        size="stretch"
        drawShadow={false}
        maxHeight={window.innerHeight}
      >
        {SketchBookImages.map((s) => (
          <img
            src={genUrlForBucketImage(s.name)}
            alt="painting"
            className="object-cover"
          />
        ))}
      </HTMLFlipBook>
    </section>
  );
};

export default page;
