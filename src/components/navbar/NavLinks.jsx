import React from "react";
import NavLink from "./NavLink";
import Button from "../Button";

const NavLinks = () => {
  return (
    <ul className="items-center gap-4 hidden lg:flex">
      <NavLink sectionName="Home" section="home" offset={-100} />
      <NavLink sectionName="About us" section="about-us" offset={-60} />
      <NavLink sectionName="Services" section="services" offset={0} />
      <NavLink sectionName="Contact" section="contact" offset={0} />
      <li>
        <Button link="#" text="Book a call" />
      </li>
    </ul>
  );
};

export default NavLinks;
