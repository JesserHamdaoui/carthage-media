import React from "react";
import Message from "../components/footer/Message";
import ContactUs from "../components/footer/ContactUs";
import Policies from "../components/footer/Policies";
import Links from "../components/footer/Links";

const FooterInfoContainer = () => {
  return (
    <div className="pt-32 pb-12 flex max-w-screen-xl mx-auto gap-10 flex-col lg:flex-row lg:gap-32">
      <div className=" flex justify-around basis-1/3 lg:order-1">
        <Policies />
        <Links />
      </div>
      <div className="basis-1/3 order-first lg:order-2">
        <Message />
      </div>
      <div className="basis-1/3 lg:order-3 mx-auto">
        <ContactUs />
      </div>
    </div>
  );
};

export default FooterInfoContainer;
