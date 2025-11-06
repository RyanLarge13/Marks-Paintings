import React from "react";


const Footer = () => {
return (
<footer className="mt-40 bg-neutral-900 text-neutral-300 py-16 px-6 flex flex-col items-center text-center">
<div className="flex gap-6 text-sm tracking-wide uppercase font-medium">
<a href="/gallery" className="hover:text-white transition-all">Gallery</a>
<a href="/about" className="hover:text-white transition-all">About</a>
<a href="/contact" className="hover:text-white transition-all">Contact</a>
</div>


<div className="my-8 w-24 h-[2px] bg-orange-600 rounded-full" />


<p className="text-xs tracking-widest">© {new Date().getFullYear()} Mark Meissner</p>
</footer>
);
};


export default Footer;