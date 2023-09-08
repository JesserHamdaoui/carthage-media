import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import Menu from "./Menu";
import { IsOpenContext } from "../../context/IsOpenContext";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline lg:hidden">
      <button
        className={`transition-all p-2 rounded-xl ${
          !isOpen ? "text-orange-400" : "bg-blue-950 text-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsList className="text-3xl" />
      </button>
      <IsOpenContext.Provider value={setIsOpen}>
        <Menu display={isOpen ? "inline-block" : "hidden"} />
      </IsOpenContext.Provider>
    </div>
  );
};

export default NavMenu;
