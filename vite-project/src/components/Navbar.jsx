import React from "react";

// Updated to accept and use the onMenuToggle function
const Navbar = ({ onMenuToggle }) => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 absolute w-full z-50">
      <h1 className="text-4xl font-serif text-white tracking-wide">Jharokha</h1>
      <button 
        onClick={onMenuToggle}
        className="text-white text-3xl tracking-widest uppercase hover:opacity-80 transition "
      >
        Menu
      </button>
    </nav>
  );
};

export default Navbar;
