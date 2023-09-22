import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import exclavator3 from "../../assets/excavator3.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Book = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  return (
    <div className="bg-slate-50 lg:bg-gradient-radial lg:from-orange-200 lg:via-slate-50 lg:to-slate-50 relative pt-28">
      <div className=" max-w-6xl flex flex-col lg:mx-auto items-center pt-16 gap-10 justify-between mx-10 px-5 -mb-44 lg:mb-0">
        <h2
          className="uppercase text-orange-400 text-3xl md:text-6xl font-semibold text-center stroke"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Strategy Call
          <span className="text-stone-950 italic font-extrabold">
            <br />
            BOOK YOUR CALL NOW!
          </span>
        </h2>
        <InlineWidget
          url="https://calendly.com/carthagemedia/call?month=2023-08"
          pageSettings={{
            backgroundColor: "f8fafc",
            hideEventTypeDetails: windowWidth < 1200,
            hideLandingPageDetails: false,
            primaryColor: "fed7aa",
            textColor: "fb923c",
          }}
          styles={{
            height: "1000px",
            width: windowWidth < 1200 ? "auto" : "1000px",
            zIndex: 1000,
          }}
        />
      </div>
      <img
        src={exclavator3}
        className="h-44 absolute bottom-0 left-32 hidden lg:block"
        data-aos="fade-right"
        alt="carthage media excavator"
      />
    </div>
  );
};

export default Book;
