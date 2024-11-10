import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
function About() {
  return (
    <div>
      <Header />
      <main className="m-0 min-h-screen w-full bg-orange-100">
      <div className="mx-auto flex-col flex px-10 py-5 mb-1 items-center justify-center w-full ">
        <h1 className="font-bold text-3xl m-0 py-3 text-center md:text-4xl text-yellow-800">
          About Me
        </h1>
        </div>
        <section className="flex flex-col md:flex-row gap-16 py-18 m-5 items-center justify-center">
          <div className="flex-1 text-center">
            <p className="text-md text-center m-5 md:text-lg text-black font-semibold">
              I am Qurat ul Ain a frontend developer with a unique background
              in science and management.Holding an MSc in Analytical Chemistry
              and an EMBA plus six years as an Assistant Manager in Quality
              Control at a multinational company.I have honed strong analytical
              detail oriented and strategic skills. I am now focused on frontend
              technologies like HTML CSS Next.js TypeScript and React bringing
              precision and creativity to crafting high performing intuitive
              interfaces.My multidisciplinary experience enables me to bridge
              technical detail with strategic vision and I am eager to
              contribute to impactful tech projects.
            </p>
          </div>
          <div className="flex-1 items-center w-full h-auto">
          <Image width={400} height={400} src="/about.jpg" alt="Image" className="object-cover" />
        </div>
        </section>
        <div className="flex flex-wrap py-0 m-0 justify-center text-center gap-3 mb-20">
        <button className="text-slate-200 px-1 py-1  rounded-lg  mt-2 text-md bg-gray-700 hover:bg-yellow-500">HTML</button>
        <button className="text-slate-200 px-1 py-1  rounded-lg  mt-2 text-md bg-gray-700 hover:bg-yellow-500">CSS</button>
        <button className="text-slate-200 px-1 py-1  rounded-lg  mt-2 text-md bg-gray-700 hover:bg-yellow-500">TYPESCRIPT</button>
        <button className="text-slate-200 px-1 py-1  rounded-lg  mt-2 text-md bg-gray-700 hover:bg-yellow-500">NEXTJS</button>
        <button className="text-slate-200 px-1 py-1  rounded-lg  mt-2 text-md bg-gray-700 hover:bg-yellow-500">REACT</button>
        <button className="text-slate-200 px-1 py-1  rounded-lg  mt-2 text-md bg-gray-700 hover:bg-yellow-500">TAILWIND CSS</button>
        </div>
       
        <Footer />
      </main>
    </div>
  );
}

export default About;
