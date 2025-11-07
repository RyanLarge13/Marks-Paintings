"use client";

import React from "react";
import HTMLFlipBook from "react-pageflip";
import { genUrlForBucketImage } from "../utils/helpers";

const FlipBook = ({ images }) => {
  return (
    <HTMLFlipBook
      width={500}
      height={700}
      size="stretch"
      drawShadow={false}
      maxHeight={window.innerHeight}
    >
      {images.map((s) => (
        <img
          src={genUrlForBucketImage(s.name)}
          alt="painting"
          className="object-cover"
        />
      ))}
    </HTMLFlipBook>
  );
};

export default FlipBook;
