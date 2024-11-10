import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-800 h-12">
      <div className="container px-5 py-2 m-1 mx-auto flex items-center justify-around sm:flex-row flex-col">
        <ul className="flex gap-3 text-slate-200 text-2xl font-bold items-center sm:mt-0 ">
          <li>
            <Link
              className="hover:text-yellow-500"
              href="https://www.facebook.com/"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" href="https://www.x.com/">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-500"
              href="https://www.linkedin.com/"
            >
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-500"
              href="https://www.instagram.com/"
            >
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
