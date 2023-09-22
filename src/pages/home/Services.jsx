import React, { useEffect } from "react";
import Card from "../../components/servicesComponents/Card";
import { FaGift } from "react-icons/fa";
import exclavator2 from "../../assets/excavator2.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-slate-50 relative" id="services">
      <div className=" max-w-6xl flex flex-col lg:mx-auto items-center py-32 gap-10 justify-between mx-10 px-5">
        <div>
          <h2
            className=" uppercase text-orange-400 text-2xl lg:text-6xl font-extrabold mb-3 lg:mb-10 flex items-center justify-center gap-4"
            data-aos="fade-left"
          >
            What we offer <FaGift className="inline" />
          </h2>
          <p
            className="text-center lg:text-lg font-semibold"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            Welcome to the heart of Carthage Media's expertise. We're not just
            about excavating – we're about excavating success through a range of
            strategic digital services that set your business apart in the
            online realm.
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-around">
          <Card
            img={service1}
            title="Website Design & development"
            text="Your virtual home matters. We create user-centric websites that mirror your expertise and provide a seamless experience, turning visitors into clients."
            delay="250"
          />
          <Card
            img={service2}
            title="Google Ads Management"
            text="Fuel your visibility with pinpoint precision. Our Google Ads experts craft tailored campaigns that drive clicks, conversions, and connect you with the right audience."
            delay="350"
          />
          <Card
            img={service3}
            title="Reviews Campaigns"
            text="Earn trust one review at a time. We bolster your online reputation, encouraging positive reviews that spotlight your excavating excellence."
            delay="450"
          />
          <Card
            img={service4}
            title="Email Marketing"
            text="Stay on top of minds, not in spam folders. Our strategic email campaigns engage your audience, nurture leads, and keep your excavating brand relevant."
            delay="50"
          />
          <Card
            img={service5}
            title="Local Engine Optimization"
            text="Climb the ranks with confidence. We optimize your online presence to outshine competitors on search engines, making sure you're found when it matters most."
            delay="150"
          />
          <Card
            img={service6}
            title="Social Media Management"
            text="Unearth your potential on social platforms. We curate compelling content, engage your audience, and showcase your excavating prowess to a wider community."
            delay="250"
          />
        </div>
      </div>
      <img
        src={exclavator2}
        className=" h-48 absolute bottom-0 right-28 hidden lg:block "
        data-aos="fade-left"
        alt="carthage media excavator"
      />
    </div>
  );
};

export default Services;
