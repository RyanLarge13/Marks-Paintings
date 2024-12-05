"use client";

import React from "react";
import HTMLFlipBook from "react-pageflip";
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
} from "@/assets/marks-images";
import Image from "next/image";

const page = () => {
  return (
    <section className="overflow-hidden px-5 py-20">
      <HTMLFlipBook width={500} height={700} size="stretch" drawShadow={false}>
        <Image src={l1} alt="painting" className="object-cover" />
        <Image src={l2} alt="painting" className="object-cover" />
        <Image src={p1} alt="painting" className="object-cover" />
        <Image src={t2} alt="painting" className="object-cover" />
        <Image src={p3} alt="painting" className="object-cover" />
        <Image src={t1} alt="painting" className="object-cover" />
        <Image src={p2} alt="painting" className="object-cover" />
        <Image src={p4} alt="painting" className="object-cover" />
        <Image src={p5} alt="painting" className="object-cover" />
        <Image src={t3} alt="painting" className="object-cover" />
        <Image src={t4} alt="painting" className="object-cover" />
      </HTMLFlipBook>
    </section>
  );
};

export default page;
