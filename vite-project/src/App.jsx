import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="font-serif bg-black min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
