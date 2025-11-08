import React from "react";
import { getBucketFolderImages } from "../../utils/helpersServer";
import FlipBook from "../../components/FlipBook";

const page = async () => {
  const files = await getBucketFolderImages("Sketch-Book/");
  const SketchBookImages = files.map((f) => f.name);

  return (
    <section className="overflow-hidden px-5 py-20">
      <FlipBook images={SketchBookImages} />
    </section>
  );
};

export default page;
