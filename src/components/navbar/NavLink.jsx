import React from "react";
import { Link } from "react-scroll";
import { IsOpenContext } from "../../context/IsOpenContext";
import { useContext } from "react";

const NavLink = ({ section = "", sectionName, offset }) => {
  const setIsOpen = useContext(IsOpenContext);

  return (
    <li>
      <Link
        className="font-semibold text-lg hover:text-orange-400 hover:border-b-2 border-black cursor-pointer transition-all duration-75 xl:text-lg lg:text-sm"
        activeClass="border-b-2 text-orange-400 "
        to={section}
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
        }}
      >
        {sectionName}
      </Link>
    </li>
  );
};

export default NavLink;
