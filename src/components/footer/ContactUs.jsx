import React from "react";
import Social from "./Social";

import {
  BsEnvelopeAtFill,
  BsFacebook,
  BsLinkedin,
  BsTelephoneFill,
} from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="contact text-white flex flex-col">
      <h3 className="text-xl font-semibold">Contact Us</h3>
      <hr className="my-4 w-20 rounded-lg" />
      <ul className="flex flex-col gap-1">
        <Social
          link="mailto:mouna@carthagemedia.com?subject=Hello%20Subject&body=Hello%20Body"
          text="mouna@carthagemedia.com"
          icon={<BsEnvelopeAtFill />}
        />
        <Social
          link="tel:+1 810-206-2649"
          text="+1 810-206-2649"
          icon={<BsTelephoneFill />}
        />
        <div className="flex text-3xl gap-5 mt-5">
          <a href="https://www.facebook.com/carthagemediaa">
            <BsFacebook />
          </a>
          <a href="https://www.linkedin.com/company/carthage-media/">
            <BsLinkedin />
          </a>
        </div>
      </ul>
    </div>
  );
};

export default ContactUs;
