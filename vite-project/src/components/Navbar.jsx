import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 absolute w-full z-50">
      <h1 className="text-3xl font-serif text-white tracking-wide">elrune</h1>
      <button className="text-white text-lg tracking-widest uppercase">Menu</button>
    </nav>
  );
};

export default Navbar;
