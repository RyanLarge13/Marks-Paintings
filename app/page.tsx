import Image from "next/image";
import H_Image from "@/assets/images/img1.jpg";
import { l1 } from "@/assets/marks-images";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="">
      <div className="w-full z-[-1] h-[700px] overflow-hidden">
        <Image src={l1} alt="header" className="w-full z-[-1] mt-[-300px]" />
      </div>
      <div className="flex flex-col justify-center text-center items-center relative translate-y-[-25%] bg-white shadow-lg z-10 p-20 w-[75%] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Mark Meissner</h1>
        <p className="text-xs mb-8">Art Gallery & Exhibition</p>
        <p className="text-xl font-semibold mb-3">
          Welcome, enjoy these beautiful pieces by Mark
        </p>
        <a
          href="/gallery"
          className="px-10 py-3 bg-orange-900 text-white font-semibold duration-200 hover:bg-black hover:text-white"
        >
          Gallery
        </a>
        <div className="absolute bottom-0 translate-y-[50%] bg-orange-900 rounded-full left-[40%] right-[40%] h-2 shadow-lg"></div>
      </div>
      <div className="my-20 w-[600px] mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Loving Buffalo, NY
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea hic
          distinctio rerum, corrupti impedit recusandae nemo sit vero repellat
          quae magnam dignissimos aspernatur et maxime quisquam numquam
          repudiandae nihil!
        </p>
      </div>
      <Gallery params={{ index: "null" }} />
      <div className="flex justify-center items-center">
        <a
          href="/gallery"
          className="px-10 py-3 bg-orange-900 text-white font-semibold duration-200 hover:bg-black hover:text-white mb-40"
        >
          More Paintings
        </a>
      </div>
    </main>
  );
}
