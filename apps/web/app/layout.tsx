import type { Metadata } from "next";
import "./global.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marks-Gallery",
  description:
    "Modern professional art gallery by Mark --- experience a world of quality and expression through this gallery portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="md:px-10 lg:px-40 bg-slate-100">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
