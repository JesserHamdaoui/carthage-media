import React from "react";
import NavLinks from "../components/navbar/NavLinks";
import Logo from "../components/navbar/Logo";
import NavMenu from "../components/navbar/NavMenu";

const Navbar = () => {
  return (
    <div>
      <nav className=" flex items-center justify-between px-5 lg:px-28 py-2  bg-white shadow-lg fixed z-50 w-screen">
        <Logo />
        <NavLinks />
        <NavMenu />
      </nav>
    </div>
  );
};

export default Navbar;
