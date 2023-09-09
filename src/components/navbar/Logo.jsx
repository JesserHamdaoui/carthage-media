import React from "react";
import image from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="cursor-pointer order-2">
        <span className="title xl:text-3xl lg:text-2xl text-xl font-bold text-orange-400 uppercase ">
          Carthage{" "}
        </span>
        <span className="title xl:text-3xl lg:text-2xl text-xl font-bold text-black ">
          Media
        </span>
      </Link>
      <img
        src={image}
        alt="carthage media logo"
        className="h-10 lg:h-16 order-1"
      />
    </div>
  );
};

export default Logo;
