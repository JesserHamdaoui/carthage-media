import React from "react";
import Message from "../components/footer/Message";
import ContactUs from "../components/footer/ContactUs";
import Policies from "../components/footer/Policies";
import Links from "../components/footer/Links";

const FooterInfoContainer = () => {
  return (
    <div className="pt-16 pb-12 flex max-w-screen-2xl mx-auto gap-10 flex-col lg:flex-row lg:gap-32">
      <div className=" flex gap-5 basis-1/3 lg:order-1">
        <Policies />
        <Links />
      </div>
      <div className="basis-1/2 order-first lg:order-2">
        <Message />
      </div>
      <div className="basis-1/3 lg:order-3 mx-auto">
        <ContactUs />
      </div>
    </div>
  );
};

export default FooterInfoContainer;
