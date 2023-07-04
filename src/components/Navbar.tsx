"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import ColorButton from "./ui/ColorButton";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <section className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instantgram</h1>
      </Link>
      <nav>
        <ul className="flex items-center space-x-4 p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {session ? (
            <ColorButton text="Sign in" onClick={() => {}} />
          ) : (
            <ColorButton text="Sign out" onClick={() => {}} />
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
