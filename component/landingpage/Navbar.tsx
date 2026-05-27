"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <nav
      className="fixed top-0 
        left-0 right-0 
        border-b border-gray-800
         bg-black/80 
         backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between  px-8 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="
      text-white 
      font-bold 
      text-xl
      tracking-tight"
        >
          DevPrep
        </Link>

        {/* Desktop Menu: Hidden on small screens */}
        <div
          className="hidden 
      md:flex 
      items-center 
      gap-8"
        >
          <Link
            href="/"
            className="text-white
           hover:text-purple-700 
           text-sm transition"
          >
            Features
          </Link>
          <Link
            href="/"
            className="text-white 
          hover:text-purple-700 
          text-sm transition"
          >
            Pricing
          </Link>
          <Link
            href="/"
            className="bg-purple-700 
          text-white 
          text-sm font-medium
          py-2 px-4
          rounded-lg
           hover:bg-white
            hover:text-purple-700 
            transition"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden
       text-white 
       focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`${open ? "translate-x-0" : "translate-x-full"}
       fixed top-[73px] 
       left-0 w-full h-screen 
       bg-gray-900 backdrop-blur-lg 
       transition-transform duration-300 
       ease-in-out 
       md:hidden`}
      >
        <div className="flex flex-col items-center gap-8 pt-12">
          <Link href="/" onClick={toggleMenu} className="text-xl text-white">
            Features
          </Link>
          <Link href="/" onClick={toggleMenu} className="text-xl text-white">
            Pricing
          </Link>
          <Link href="/" onClick={toggleMenu} className="text-xl text-white">
            About
          </Link>
          <Link
            href="/"
            onClick={toggleMenu}
            className="bg-purple-700 text-white px-8 py-2 rounded-full text-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
