import React, { useEffect } from "react";
import UpperCurve from "../../components/UpperCurve";
import LowerCurve from "../../components/LowerCurve";
import { FaHandshake } from "react-icons/fa";
import excavator1 from "../../assets/excavator1.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className=" bg-gradient-to-br from-orange-200 to-orange-100 relative z-20"
        id="about-us"
      >
        <UpperCurve />
        <div className=" py-60  mx-10 px-5 text-stone-950 relative">
          <div className="max-w-6xl flex flex-col lg:flex-row lg:mx-auto items-center z-10 gap-10 ">
            <p
              className="order-2 lg-order-1 basis-1/2 font-medium text-lg"
              data-aos="fade-right"
            >
              At Carthage Media, we're not just marketers – we're partners in
              your growth journey. We're dedicated to empowering excavating
              businesses with the tools they need to thrive in the digital age.
              From optimizing your online visibility to connecting you with a
              broader audience, we're here to transform your excavating business
              into an online powerhouse. We understand the excavating world
              inside out, and we harness the power of digital marketing to
              showcase your strengths and drive results.
            </p>
            <div className="basis-1/2 order-1 lg:order-2" data-aos="fade-left">
              <h2 className="font-extrabold text-4xl lg:text-6xl mb-10">
                With the right Partner, Great Things Can Happen!
              </h2>
              <a
                href="https://calendly.com/carthagemedia/call"
                target="_blank"
                className="uppercase py-2 px-3 bg-stone-950 text-white text-lg font-bold rounded-2xl  hover:bg-blue-950 cursor-pointer transition-all duration-100 xl:text-xl lg:text-sm text-center inline-flex items-center"
              >
                <FaHandshake className="inline mr-5 text-4xl" />
                Let's partner up!
              </a>
            </div>
          </div>
          <img
            src={excavator1}
            className="absolute bottom-0 right-0 opacity-40 hidden lg:block h-full -z-10"
          />
        </div>
        <LowerCurve />
      </div>
    </>
  );
};

export default AboutUs;
