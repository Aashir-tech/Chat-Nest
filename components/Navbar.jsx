"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";


const Navbar = ({darkMode}) => {

  // const user = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // console.log(user?.user?.id);
  // console.log(user?.user);

  return (
    <nav className={`${darkMode ? "bg-gray-950" : "bg-gray-50"} transition-colors duration-300  text-white shadow-lg`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute -top-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-20 ${
              darkMode ? "bg-cyan-800" : "bg-cyan-500"
            }`}
          ></div>
          <div
            className={`absolute top-1/3 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 ${
              darkMode ? "bg-purple-700" : "bg-purple-500"
            }`}
          ></div>
        </div>
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-cyan-400"
        >
          Chat Nest 🪺
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-cyan-400 text-cyan-500 font-semibold transition">
            Home
          </Link>
          <Link href="/forums" className="hover:text-cyan-400 text-cyan-500 font-semibold  transition">
            Forums
          </Link>
          <Link href="/about" className="hover:text-cyan-400 text-cyan-500 font-semibold  transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-cyan-400 text-cyan-500 font-semibold  transition">
            Contact
          </Link>
          {/* <Link href="/profile" className="hover:text-cyan-400 transition"> */}
          <div className="scale-140">
            <UserButton />

          </div>
          {/* </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="text-2xl md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-cyan-400 transition">
            Home
          </Link>
          <Link href="/forums" className="block hover:text-cyan-400 transition">
            Forums
          </Link>
          <Link href="/chat" className="block hover:text-cyan-400 transition">
            Chat
          </Link>
         <UserButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
