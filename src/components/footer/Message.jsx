import React from "react";
import Button from "../Button";

const Message = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-orange-400 text-2xl lg:text-4xl font-bold italic text-center">
        Ready to Get Started?
      </h3>
      <Button link="#" text="Book a call with us" />
    </div>
  );
};

export default Message;
