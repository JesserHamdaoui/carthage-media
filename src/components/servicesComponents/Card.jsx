import React from "react";

const Card = ({ img, title, text, delay }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 md:basis-1/3 lg:basis-1/4 mb-10 z-20"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <img src={img} alt="" className="rounded-xl" />
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default Card;
