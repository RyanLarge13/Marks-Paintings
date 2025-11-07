"use client";

import React from "react";
import HTMLFlipBook from "react-pageflip";
import { genUrlForBucketImage } from "../utils/helpersClient";

const FlipBook = ({ images }) => {
  return (
    <HTMLFlipBook
      width={500}
      height={600}
      size="stretch"
      drawShadow={false}
      maxHeight={800}
      className={""}
      style={undefined}
      startPage={0}
      minWidth={0}
      maxWidth={500}
      minHeight={0}
      flippingTime={250}
      usePortrait={false}
      startZIndex={0}
      autoSize={false}
      maxShadowOpacity={0}
      showCover={false}
      mobileScrollSupport={true}
      clickEventForward={true}
      useMouseEvents={true}
      swipeDistance={25}
      showPageCorners={true}
      disableFlipByClick={false}
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
