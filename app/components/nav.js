/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Navigation = () => {
  return (
    <nav className="hidden md:flex justify-between py-4 px-5 md:px-10 w-full">
      <div className="flex space-x-5 items-center justify-center">
        <Link href="/">
          <p className="font-thin text-aliceblue text-xl hover:text-cyanblue">
            Home
          </p>
        </Link>
        <Link href="#services">
          <p className="font-thin text-aliceblue text-xl hover:text-cyanblue">
            Services
          </p>
        </Link>
        <Link href="#about">
          <p className="font-thin text-aliceblue text-xl hover:text-cyanblue">
            About Me
          </p>
        </Link>
        <Link href="#contact">
          <p className="font-thin text-aliceblue text-xl hover:text-cyanblue">
            Contact
          </p>
        </Link>
      </div>
      <div className="flex items-center">
        <a
          href="tel:+19099059441"
          className="items-center justify-center border-aliceblue text-aliceblue border-aliceblue text-aliceblue hover:text-lightcyan rounded-full border-2 px-5 py-2 text-xl hover:border-aliceblue hover:bg-aliceblue hover:cursor"
        >
          Book
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
