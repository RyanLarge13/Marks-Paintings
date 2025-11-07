import React from "react";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";
import {
  getBucketFolderImages,
} from "../../utils/helpersServer";
import { l1 } from "../../assets/marks-images/index";
import { genUrlForBucketImage } from "../../utils/helpersClient";

const ContactPage = async () => {
  const files = await getBucketFolderImages("Contact-Page/");
  const ContactPage = files[1] ? genUrlForBucketImage(files[1].name) : l1;

  return (
    <main className="font-sans bg-neutral-100 text-neutral-900 pb-32">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden flex items-center justify-center">
        <Image
          src={ContactPage}
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-xl">
          Get In Touch
        </h1>
      </section>

      {/* Form Section */}
      <section className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-12 md:p-20 -mt-24 relative z-20 flex flex-col lg:flex-row gap-12">
        {/* Contact form */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 tracking-wide">
            Send a Message
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="bg-neutral-100 focus:bg-white outline-none focus:ring-2 focus:ring-orange-600 rounded-xl px-4 py-3 transition-all"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="bg-neutral-100 focus:bg-white outline-none focus:ring-2 focus:ring-orange-600 rounded-xl px-4 py-3 transition-all"
            />
            <textarea
              name="Message"
              rows={6}
              placeholder="Message"
              className="bg-neutral-100 focus:bg-white outline-none focus:ring-2 focus:ring-orange-600 rounded-xl px-4 py-3 transition-all"
            ></textarea>
            <button
              className="w-full px-10 py-4 bg-orange-700 text-white font-semibold rounded-full shadow-lg hover:bg-black transition-all"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details Card */}
        <aside className="basis-2/5 bg-neutral-900 text-white rounded-3xl p-10 flex flex-col justify-center items-start gap-6">
          <div className="flex items-center gap-4 text-3xl">
            <FaMailBulk />
            <span className="text-xl font-medium tracking-wide">Email</span>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            Have a question, inquiry, or want to discuss artwork? Reach out and
            Mark will respond as soon as possible.
          </p>
          <p className="text-lg font-semibold">mark@example.com</p>
        </aside>
      </section>
    </main>
  );
};

export default ContactPage;
