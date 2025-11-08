"use client";

import React from "react";
import HTMLFlipBook from "react-pageflip";
import { genUrlForBucketImage } from "../utils/helpersClient";

const FlipBook = ({ images }) => {
  return (
    <div className="flex justify-center items-center w-full h-full p-4">
      <HTMLFlipBook
        width={500} 
        height={700}
        size="stretch"
        minWidth={300}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1200}
        autoSize={true} 
        drawShadow={false}
        flippingTime={400}
        usePortrait={true} 
        mobileScrollSupport={true}
        showPageCorners={true}
        className="shadow-2xl rounded-xl"
        style={undefined}
        startPage={0}
        startZIndex={0}
        maxShadowOpacity={0}
        showCover={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={25}
        disableFlipByClick={false}
      >
        {images.slice(1, images.length).map((s: string, idx: number) => (
          <div key={idx} className="w-full h-full">
            <img
              src={genUrlForBucketImage(s)}
              alt={s}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default FlipBook;