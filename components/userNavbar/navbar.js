import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import MobileNav from "./navbarMobile";
import GoogleLogin from "../auth/auth";
import Link from "next/link";

const UserNavbar = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleFunction = () => {
    setdropdownOpen(!dropdownOpen);
  };
  return (
    <nav className="w-screen">
      <div className="flex justify-between items-center flex-row px-[6%] h-6 pt-8 max-sm:mb-4">
        <div className="flex justify-center items-center gap-2">
          <span className="text-2xl font-bold">YO! Blogs</span>
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

        <div className="flex flex-row justify-center items-center gap-10 max-md:hidden text-sm font-bold">
          <Link href="/user">
            <ul>Home</ul>
          </Link>
          <Link href="/blog/myBlogs">
            <ul>My Blogs</ul>
          </Link>
          <Link href="/blog/writeBlog">
            <ul>Create</ul>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
