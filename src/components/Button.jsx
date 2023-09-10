import React from "react";

const Button = ({ link, text }) => {
  return (
    <a
      href="https://calendly.com/carthagemedia/call"
      target="_blank"
      className="uppercase py-3 px-4 bg-orange-400 text-white text-xl font-bold rounded-2xl  hover:bg-blue-950 cursor-pointer transition-all duration-100 lg:text-2xl text-center"
    >
      {text}
    </a>
  );
};

export default Button;
