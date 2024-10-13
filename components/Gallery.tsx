import React from "react";
import G_Img1 from "@/assets/images/G_img1.jpeg";
import G_Img2 from "@/assets/images/G_img2.jpeg";
import G_Img3 from "@/assets/images/G_img3.jpg";
import G_Img4 from "@/assets/images/G_img4.jpg";
import G_Img5 from "@/assets/images/G_img5.jpeg";
import G_Img6 from "@/assets/images/G_img6.jpg";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="mt-40 mb-10 grid grid-cols-3 gap-5 place-items-center">
      <Image src={G_Img1} alt="painting" className="w-full h-full" />
      <Image src={G_Img2} alt="painting" className="w-full h-full" />
      <Image src={G_Img3} alt="painting" className="w-full h-full" />
      <Image src={G_Img4} alt="painting" className="w-full h-full" />
      <Image src={G_Img5} alt="painting" className="w-full h-full" />
      <Image src={G_Img6} alt="painting" className="w-full h-full" />
    </div>
  );
};

export default Gallery;
