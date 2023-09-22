import React from "react";
// import Button from "../Button";

const Message = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-orange-400 text-2xl lg:text-4xl font-bold italic text-center">
        Ready to Get Started?
      </h3>
      <a
        href="https://calendly.com/carthagemedia/call"
        target="_blank"
        rel="noreferrer"
        className="uppercase py-3 px-4 bg-orange-400 text-white text-xl font-bold rounded-2xl  hover:bg-blue-950 cursor-pointer transition-all duration-100 lg:text-2xl text-center"
      >
        Book a call with us
      </a>
    </div>
  );
};

export default Message;
