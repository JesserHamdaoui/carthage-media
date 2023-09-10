import React from "react";
import FooterLink from "./FooterLink";

const Links = () => {
  return (
    <div className="text-white">
      <h3 className="text-xl font-semibold">Links</h3>
      <hr className="my-4 w-20 rounded-lg" />
      <ul className="underline text-base">
        <FooterLink text="Home" section="home" offset={-100} />
        <FooterLink text="About us" section="about-us" offset={-60} />
        <FooterLink text="Services" section="services" offset={0} />
        <FooterLink text="Contact" section="contact" offset={0} />
      </ul>
    </div>
  );
};

export default Links;
