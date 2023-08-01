import React from "react";
import NavButton from "./buttons/Nav";
import navLinks from "../constants/nav"

export default function Header() {
  
  const navData = navLinks.map((nav) => {
    return (
      <li className="mx-3">
        <NavButton title={nav.title} />
      </li>
    );
  });

  return (
      <header className="flex justify-between text-white font-rem text-2xl">
        <span>Lauren Sullivan</span>
        <span>Full-Stack Developer</span>
        <nav className="text-xl">
          <ul className="flex">
            {navData}
          </ul>
        </nav>
      </header>
  );
}
