import React from "react";
import NavButton from "./buttons/Nav";
import navLinks from "../constants/nav";

export default function Header(props) {
  const navData = navLinks.map((nav) => {
    return (
      <li key={nav.page} className="mx-3">
        <NavButton
          currentPage={props.currentPage}
          handlePageChange={props.handlePageChange}
          title={nav.title}
          link={nav.link}
          page={nav.page}
        />
      </li>
    );
  });

  return (
    <header className="flex justify-between text-white font-rem text-4xl font-bold">
      <span className="pl-5 my-6">Lauren Sullivan</span>
      <span className="my-6">Full-Stack Developer</span>
      <nav className="text-2xl my-7">
        <ul className="flex">{navData}</ul>
      </nav>
    </header>
  );
}
