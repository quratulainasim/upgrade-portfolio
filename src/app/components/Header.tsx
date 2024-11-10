import React from "react";
import Link from "next/link";
function Header() {
  return (
    <div className="bg-gray-700 h-14">
      <div className="container mx-auto flex justify-between p-2 flex-col md:flex-row items-center">
        <div className="flex items-center ml-1 mb-2 md:mb-0">
          <span className="ml-1 text-4xl text-slate-200 font-extrabold font-medium">
            My Portfolio
          </span>
        </div>

        <nav className="md:ml-auto flex flex-wrap items-center text-slate-100 font-bold font-medium text-xl justify-center">
          <Link className="mr-5 mb-5 md:mb-0 hover:text-yellow-500" href="/">
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
      </div>
    </div>
  );
}
export default Header;
