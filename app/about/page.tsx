import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import {
  genUrlForBucketImage,
  getBucketFolderImages,
} from "../../utils/helpers";
import { l1 } from "../../assets/marks-images";

const AboutPage = async () => {
  const files = await getBucketFolderImages("About-Page/");
  const AboutImage = files[1] ? genUrlForBucketImage(files[1].name) : l1;

  return (
    <main className="font-sans bg-neutral-100 text-neutral-900 pb-32">
      {/* Hero / Top Section */}
      <section className="relative w-full h-[50vh] overflow-hidden flex items-center justify-center">
        <Image
          src={AboutImage}
          alt="Artist portrait or studio picture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-xl">
          About the Artist
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-12 md:p-20 -mt-24 relative z-20 flex flex-col lg:flex-row gap-12">
        {/* Left text block */}
        <div className="basis-1/2">
          <p className="uppercase text-sm tracking-widest text-orange-600 mb-4 font-semibold">
            Art Exhibition
          </p>
          <h2 className="text-4xl font-bold mb-4 tracking-wide">
            Mark Meissner
          </h2>
          <p className="text-neutral-600 leading-relaxed text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis illum autem veniam similique dolore, rem fuga
            necessitatibus. Aliquid aspernatur eius velit praesentium aliquam
            laudantium dolores, magni iste distinctio laboriosam!
          </p>

          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-orange-700 text-white font-semibold rounded-full shadow-lg hover:bg-black transition-all"
          >
            Contact
          </a>
        </div>

        {/* Right column with buttons */}
        <div className="basis-1/2 flex flex-col gap-y-4">
          <a
            href="/gallery"
            className="w-full text-center px-10 py-4 bg-orange-700 text-white rounded-full shadow hover:bg-black transition-all"
          >
            View Gallery
          </a>
          <a
            href="/sketchbooks"
            className="w-full text-center px-10 py-4 bg-orange-700 text-white rounded-full shadow hover:bg-black transition-all"
          >
            Sketchbooks
          </a>
          <a
            href="/about"
            className="w-full text-center px-10 py-4 bg-orange-700 text-white rounded-full shadow hover:bg-black transition-all"
          >
            More Info
          </a>
        </div>
      </section>

      {/* Secondary Section */}
      <section className="max-w-6xl mx-auto mt-32 grid grid-cols-1 lg:grid-cols-3 overflow-hidden rounded-3xl shadow-xl">
        {/* Left block */}
        <div className="col-span-2 bg-neutral-200 p-14">
          <p className="uppercase text-sm tracking-widest text-orange-600 mb-4 font-semibold">
            Buffalo, NY Collection
          </p>
          <p className="text-neutral-700 leading-relaxed text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            ducimus doloribus exercitationem esse similique neque corporis
            dolor. Sequi sint error dolor aspernatur facilis maxime, est
            delectus.
          </p>
        </div>

        {/* Right social block */}
        <div className="bg-orange-700 text-white p-14 flex flex-col justify-between">
          <div>
            <p className="uppercase text-sm tracking-widest mb-4 font-semibold">
              Social Sharing
            </p>
            <p className="leading-relaxed mb-8">
              Follow Mark on social media to see the latest works and updates.
            </p>
          </div>

          <div className="flex gap-6 text-2xl">
            <a href="#" className="hover:text-black transition-all">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-black transition-all">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-black transition-all">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
