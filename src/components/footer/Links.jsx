import React from "react";

const Links = () => {
  return (
    <div className="text-white">
      <h3 className="text-xl font-semibold">Links</h3>
      <hr className="my-4 w-20 rounded-lg" />
      <ul className="underline text-base">
        <li>
          <a href="#">Welcome</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Services</a>
        </li>
        <li>
          <a href="#">Message us</a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
