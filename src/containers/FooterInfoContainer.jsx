import React from "react";
import Message from "../components/footer/Message";
import ContactUs from "../components/footer/ContactUs";
import Policies from "../components/footer/Policies";
import Links from "../components/footer/Links";

const FooterInfoContainer = () => {
  return (
    <div className="pt-16 pb-12 flex mx-auto gap-10 flex-col lg:flex-row lg:gap-24">
      <div className=" flex justify-around lg:gap-16 lg:order-1">
        <Policies />
        <Links />
      </div>
      <div className=" order-first mx-10 lg:order-2">
        <Message />
      </div>
      <div className=" lg:order-3 mx-auto lg:mr-10">
        <ContactUs />
      </div>
    </div>
  );
};

export default FooterInfoContainer;
