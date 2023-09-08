import React from "react";

const Social = ({ link, text, icon }) => {
  return (
    <li className="text-white flex gap-3 underline items-center">
      {icon}
      <a href={link}>{text}</a>
    </li>
  );
};

export default Social;
