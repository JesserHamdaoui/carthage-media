import React from "react";
import { Link } from "react-scroll";

const FooterLink = ({ text, section, offset }) => {
  return (
    <li>
      <Link
        className="cursor-pointer"
        to={section}
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
      >
        {text}
      </Link>
    </li>
  );
};

export default FooterLink;
