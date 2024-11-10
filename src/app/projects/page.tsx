import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
function Projects() {
  return (
    <div>
      <Header />
      <main className="m-0 min-h-screen w-full bg-orange-100">
      <div className="mx-auto flex-col flex px-10 py-5 mb-1 items-center justify-center w-full ">
        <h1 className="font-bold text-3xl m-0 py-3 text-center md:text-4xl text-yellow-800">
          My Projects
        </h1>
        </div>
        <p className="font-semibold text-2xl p-2 text-center md:text-xl text-bloack">
          I have developed a range of projects showcasing my frontend skills
          including a responsive e commerce website with Next.js and Tailwind
          CSS and Custom CSS Company website dynamic resume builder using React and TypeScript
          with HTML CSS and JavaScript. These projects highlight my abilities in
          creating engaging high performance interfaces and my dedication to
          delivering a seamless user experience.
        </p>
        <div className="container mx-auto py-20 px-5">
        <div className="flex flex-wrap justify-center gap-12 ">
        <div className="w-full lg:w-1/4 border border-gray-500 rounded-lg shadow-lg md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
        <a className="block relative h-55 border-5 rounded overflow-hidden">
        <Image
          className="object-cover object-center w-full h-full block"
          src="/comapny.png"
          alt="iamge"
          width={500}
          height={500}
        />
      </a>
      <div className="mt-4 text-center">
      <p className="text-slate-700 text-lg font-bold mb-1">
        Html CSS React
      </p>
      <p className="text-md text-center m-5 md:text-lg text-black font-semibold mt-3">
       Project <a href="https://final-html-css-web.vercel.app/" className="text-blue-500 underline hover:text-blue-600">View</a>
       </p>
       </div>
       </div>


        <div className="w-full lg:w-1/4 border border-gray-500 rounded-lg shadow-lg md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
        <a className="block relative h-55 border-5 rounded overflow-hidden">
        <Image
          className="object-cover object-center w-full h-full block"
          src="/resume.png"
          alt="iamge"
          width={500}
          height={500}
        />
      </a>
      <div className="mt-4 text-center">
      <p className="text-slate-700 text-lg font-bold mb-1">
        Html CSS React Javascript
      </p>
      <p className="text-md text-center m-5 md:text-lg text-black font-semibold mt-3">
       Project <a href="https://hack-milestone-4.vercel.app/" className="text-blue-500 underline hover:text-blue-600">View</a>
       </p>
       </div>
       </div>

       <div className="w-full lg:w-1/4 border border-gray-500 rounded-lg shadow-lg md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
       <a className="block relative h-50 border-5 rounded overflow-hidden">
       <Image
         className="object-cover object-center w-full h-full block"
         src="/ecom-t.png"
         alt="iamge"
         width={500}
         height={500}
       />
     </a>
     <div className="mt-4 text-center">
     <p className="text-slate-700 text-lg font-bold mb-1">
       Tailwind CSS React Nextjs
     </p>
     <p className="text-md text-center m-5 md:text-lg text-black font-semibold mt-3">
      Project <a href="https://bk-shop-1-website.vercel.app/" className="text-blue-500 underline hover:text-blue-600">View</a>
      </p>
      </div>
      </div>
      </div>

      <div className="flex flex-wrap justify-center py-11 gap-12 ">
      <div className="w-full lg:w-1/4 border border-gray-500 rounded-lg shadow-lg md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
      <a className="block relative h-55 border-5 rounded overflow-hidden">
      <Image
        className="object-cover object-center w-full h-full block"
        src="/organicfood.png"
        alt="iamge"
        width={500}
        height={500}
      />
    </a>
    <div className="mt-4 text-center">
    <p className="text-slate-700 text-lg font-bold mb-1">
      Tailwind CSS React Nextjs
    </p>
    <p className="text-md text-center m-5 md:text-lg text-black font-semibold mt-3">
     Project <a href="https://new-website-olive-psi.vercel.app/" className="text-blue-500 underline hover:text-blue-600">View</a>
     </p>
     </div>
     </div>

     <div className="w-full lg:w-1/4 border border-gray-500 rounded-lg shadow-lg md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
     <a className="block relative h-55 border-5 rounded overflow-hidden">
     <Image
       className="object-cover object-center w-full h-full block"
       src="/ecomcss.png"
       alt="iamge"
       width={500}
       height={500}
     />
   </a>
   <div className="mt-4 text-center">
   <p className="text-slate-700 text-lg font-bold mb-1">
     Custom CSS React Nextjs
   </p>
   <p className="text-md text-center m-5 md:text-lg text-black font-semibold mt-3">
    Project <a href="https://book-shop-2-five.vercel.app/" className="text-blue-500 underline hover:text-blue-600">View</a>
    </p>
    </div>
    </div>

    <div className="w-full lg:w-1/4 border border-gray-500 rounded-lg shadow-lg md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
    <a className="block relative h-55 border-5 rounded overflow-hidden">
    <Image
      className="object-cover object-center w-full h-full block"
      src="/NPM.webp"
      alt="iamge"
      width={500}
      height={500}
    />
  </a>
  <div className="mt-4 text-center">
  <p className="text-slate-700 text-lg font-bold mb-1">
    npm CLI Projects
  </p>
  <p className="text-md text-center m-5 md:text-lg text-black font-semibold mt-3">
   Project <a href="https://github.com/quratulainasim?tab=repositories" className="text-blue-500 underline hover:text-blue-600">View</a>
   </p>
   </div>
   </div>
   </div>
   </div>
   </main>
   <Footer />
    </div>
  );
}

export default Projects;
