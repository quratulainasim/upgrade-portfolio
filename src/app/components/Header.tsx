"use client";
import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Header() {
  return (
    <div className="bg-gray-700 h-14">
      <div className="container mx-auto flex justify-between p-2 max-w-screen-2xl md:flex-row items-center">
        <div className="flex items-center ml-1 mb-2 md:mb-0">
          <span className="ml-1 text-4xl text-slate-200 font-extrabold font-medium">
            My Portfolio
          </span>
        </div>

        <nav className="hidden md:flex md:ml-auto flex flex-wrap items-center text-slate-100 font-bold font-medium text-xl justify-between gap-2 ">
          <Link className="mr-5 mb-5 md:mb-0  hover:text-yellow-500" href="/">
            Home
          </Link>
          <Link
            className="mr-5 mb-5 md:mb-0 hover:text-yellow-500"
            href="/about"
          >
            About Me
          </Link>
          <Link
            className="mr-5 mb-5 md:mb-0 hover:text-yellow-500"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="mr-5 mb-5 md:mb-0 hover:text-yellow-500"
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <Menu className="text-white" />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-gray-200 p-4">
            <nav className="flex flex-col gap-2">
              <Link className="block mb-5 hover:text-yellow-500" href="/">
                Home
              </Link>
              <Link className="block mb-5 hover:text-yellow-500" href="/about">
                About Me
              </Link>
              <Link
                className="block mb-5 hover:text-yellow-500"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="block mb-5 hover:text-yellow-500"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Header;
