import Image from "next/image";
import { l1 } from "../assets/marks-images/index";
import Gallery from "../components/Gallery";
import { getBucketFolderImages } from "../utils/helpersServer";
import { genUrlForBucketImage } from "../utils/helpersClient";
import prisma from "../utils/prismaInstance";

// Home page of the artists gallery writting about him and
// showing off some of his art work
const Home = async () => {
  const files = await getBucketFolderImages("Header-Image/");

  const headerImg = files[1] ? genUrlForBucketImage(files[1].name) : l1;
  let mainPageData = await prisma.frontPageText.findFirst();
  let appStyles = await prisma.AppStyle.findFirst();

  if (!mainPageData) {
    mainPageData = {
      id: "",
      title: "Art Gallery & Exhibition",
      intro: "Loving Buffalo, NY",
      shortParagraph: `Lorem ipsum dolor sit amet consectetur, 
      adipisicing elit. Ex recusandae quos ullam minus beatae 
      nulla pariatur neque atque obcaecati totam! Error, dolorem 
      quis architecto officiis eum nesciunt ea modi quo.`,
    };
  }

  if (!appStyles) {
    
  }

  return (
    <main className="font-sans bg-neutral-100 text-neutral-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center">
        <Image
          src={headerImg}
          width={100}
          height={100}
          alt="header"
          className="absolute inset-0 object-cover w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Text */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
            Mark Meissner
          </h1>
          <p className="mt-4 text-lg tracking-widest uppercase font-light">
            {mainPageData.title}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-12 md:p-16 -mt-24 relative z-20 text-center">
        <p className="text-xl font-medium mb-6">
          Welcome — enjoy these beautiful pieces by Mark
        </p>
        <a
          href="/gallery"
          className="px-10 py-4 bg-orange-700 text-white font-semibold rounded-full shadow-lg hover:bg-black transition-all"
        >
          View Gallery
        </a>
      </section>

      {/* About */}
      <section className="my-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 tracking-wide">
            {mainPageData.intro}
          </h2>
          <p className="text-neutral-600 leading-relaxed text-lg">
            {mainPageData.shortParagraph || ""}
          </p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section>
        <Gallery params={{ index: "null" }} />
      </section>

      {/* CTA */}
      <section className="flex justify-center my-32">
        <a
          href="/gallery"
          className="px-12 py-4 bg-orange-700 text-white font-semibold rounded-full shadow-lg hover:bg-black transition-all"
        >
          More Paintings
        </a>
      </section>
    </main>
  );
};

export default Home;
