import React from "react";

const Button = ({ link, text }) => {
  return (
    <a
      href="https://calendly.com/carthagemedia/call"
      target="_blank"
      className="uppercase py-2 px-3 bg-orange-400 text-white text-lg font-bold rounded-2xl  hover:bg-blue-950 cursor-pointer transition-all duration-100 xl:text-lg lg:text-sm text-center"
    >
      {text}
    </a>
  );
};

export default Button;
