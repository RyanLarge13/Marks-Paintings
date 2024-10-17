import Gallery from "@/components/Gallery";
import React from "react";

const page = ({ params }: { params: { index: string } }) => {
  return <Gallery params={params} />;
};

export default page;
