import React from "react";
import { Link } from "react-router-dom";

const Policies = () => {
  return (
    <div className="text-white">
      <h3 className="text-xl font-semibold">Policies</h3>
      <hr className="my-4 w-20 rounded-lg" />
      <ul className="underline text-base">
        <li>
          <Link to="/policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms">Terms & Conditions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Policies;
