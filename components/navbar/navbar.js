import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./navbarMobile";
import GoogleLogin from "../auth/auth";

const Navbar = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleFunction = () => {
    setdropdownOpen(!dropdownOpen);
  };
  return (
    <nav className="w-screen">
      <div className="flex justify-between items-center flex-row px-[4%] h-10 pt-8 max-sm:mb-4">
        <div className="flex justify-center items-center gap-2">
          <span className="text-2xl font-bold ml-2">YO! Blogs</span>
        </div>

        <div className="flex items-center relative group z-10">
          <div className="hidden max-md:block">
            <div className=" w-10 h-10 flex justify-center items-center hover:cursor-pointer ">
              <RxHamburgerMenu
                className="h-full w-full"
                onClick={handleFunction}
              />
            </div>
            {dropdownOpen ? <MobileNav handler={handleFunction} /> : ""}
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-6 max-md:hidden text-sm font-bold">
          <Link href="/blog/homeBlogs">
            <ul>Blogs</ul>
          </Link>
          <Link href="/section/tutorials">
            <ul>Tutorials</ul>
          </Link>
          <Link href="/section/reviews">
            <ul>Reviews</ul>
          </Link>
          <Link href="/section/community">
            <ul>Community</ul>
          </Link>
          <Link href="/section/newsLetter">
            <ul>New's Letter</ul>
          </Link>
          <GoogleLogin />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
