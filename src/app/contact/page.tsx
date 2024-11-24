
"use client";
import Header from "../components/Header";
import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";
function Contact() {
  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };
  return (
    <div>
      <Header />

      <section className="bg-orange-100">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-2xl font-bold mb-4 text-yellow-800">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto text-black font-bold">
              I am always excited to connect with new people and explore
              potential collaborations.Whether you have a project in mind a
              question or simply want to chat feel free to reach out.I had love
              to hear from you and discuss how we can create something amazing
              together. Get in touch through the form below and I will get back
              to you as soon as possible.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="text-md text-gray-800">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-100 rounded border border-gray-100 text-gray-600 p-2 "
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="text-md text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-slate-100 rounded border border-gray-100 text-gray-600 p-2"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="text-md text-gray-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-slate-100 rounded border border-gray-100 text-gray-600 h-32 py-1 px-3 resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={handleSubmit}
                  className="flex mx-auto text-white font-bold bg-gray-700 border-0 py-2 px-4 hover:bg-orange-300 rounded text-lg"
                >
                  Submit
                </button>
                <Link href="/"></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
