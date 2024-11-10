import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <main className="m-0 min-h-full bg-orange-100">
      <section className="flex flex-col md:flex-row gap-14 py-20 items-center">
        <div className="flex-1 items-center">
          <h1 className="font-bold text-3xl m-5 text-center md:text-4xl text-red-700">
            Qurat ul Ain Frontend Developer
          </h1>
          <h2 className="text-md text-center m-2 md:text-lg text-black font-semibold mt-3">
            Blending expertise in Analytical science and management to create
            intuitive high performing web experiences
          </h2>
        </div>

        <div className="flex-1 w-auto h-auto ">
          <Image
            width={350}
            height={350}
            src="/webdeveloper.jpg"
            alt="Image"
            priority
            className="object-cover rounded-lg h-auto max-w-full"
          />
        </div>
      </section>
      <div className="flex flex-col items-center py-0 m-0">
        <h2 className="font-bold text-3xl text-center text-red-700">
          My Vision and Goals
        </h2>
        <p className="font-semibold text-md text-center py-4 text-black">
          I aim to leverage my skills in analysis management and frontend
          development to create intelligent user focused web
          applications.Passionate about the potential of AI and robotic
          technologies I am especially interested in their applications within
          healthcare and scientific research.My goal is to develop streamlined
          accessible solutions that enhance precision and improve outcomes in
          these fields.
        </p>
        <Image
          width={800}
          height={200}
          src="/mygoal.webp"
          alt="image"
          className="object-cover w-full"
        />
      </div>
    </main>
  );
}

export default Hero;
