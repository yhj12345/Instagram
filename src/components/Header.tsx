"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";

const Header = () => {
  const pathname = usePathname();

  return (
    <section className="flex justify-between items-center m-4">
      <h1 className="text-2xl font-bold">Instantgram</h1>
      <nav className="flex items-center space-x-4">
        <Link href="/">
          {pathname === "/" ? <AiFillHome /> : <AiOutlineHome />}
        </Link>
        <Link href="/search">
          {pathname === "/search" ? <RiSearchFill /> : <RiSearchLine />}
        </Link>
        <Link href="/plus">
          {pathname === "/plus" ? <BsPlusSquareFill /> : <BsPlusSquare />}
        </Link>
        <button className="border-solid border-2 border-sky-500 p-1">
          Sign in
        </button>
      </nav>
    </section>
  );
};

export default Header;
