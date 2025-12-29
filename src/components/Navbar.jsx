

import React, { useState } from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-50">

      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden md:flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">

        <img src={logo} alt="logo" />

        <ul className="flex gap-7 text-white">
          <li><a href="#Header" className="hover:text-gray-400">Home</a></li>
          <li><a href="#About" className="hover:text-gray-400">About</a></li>
          <li><a href="#Projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#Testimonials" className="hover:text-gray-400">Testimonials</a></li>
        </ul>

        <button className="bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
      </div>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden flex justify-between px-6 py-4">

       <img src={logo} alt="logo" />

        <button
          className="text-white text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`md:hidden fixed inset-0 bg-black/60 transition-opacity duration-300
        ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ================= MOBILE SLIDE MENU ================= */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[230px] bg-white text-black
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >

        {/* Close Button (ONLY) */}
        <button
          className="absolute top-4 right-[20px] text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        {/* Links ONLY */}
        <nav className="flex flex-col gap-6 px-6 py-20 text-lg">
          <a href="#Header" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#About" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#Header" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#Header" onClick={() => setMenuOpen(false)}>Testimonials</a>
        </nav>
      </div>

    </div>
  );
};

export default Navbar;
