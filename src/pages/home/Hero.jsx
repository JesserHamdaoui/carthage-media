import React, { useEffect } from "react";
import Button from "../../components/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import image from "../../assets/excavator.jpg";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="particles pt-16" id="home">
      <div className=" max-w-7xl flex flex-col lg:flex-row lg:mx-auto items-center py-32 gap-32 mx-10 px-5">
        <div
          className="lg:basis-2/3 text-neutral-950 flex flex-col gap-5"
          data-aos="fade-right"
        >
          <h2 className=" font-extrabold text-6xl italic">
            We Help Excavating Companies
            <span className="text-orange-400"> Grow!</span>
          </h2>
          <p className="text-lg">
            Ready to{" "}
            <span className="text-orange-400">
              excavate your digital potential?
            </span>{" "}
            Book a FREE audit with us today, and let's discuss how Carthage
            Media can transform your excavating business's online presence for{" "}
            <span className="text-orange-400">success!</span>
          </p>
          <Button link="#" text="Book a call" />
        </div>

        <img
          src={image}
          alt=""
          className="lg:basis-1/3 rounded-3xl hidden lg:block "
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default Hero;
