// import React from "react";
import Icon from "../assets/brain.png";
const Header = () => {
  return (
    <header className="animate-fadein" style={{ color: "#f7a9a9" }}>
      <div className="container mx-auto px-4 py-3 flex m-4 md:flex-row space-x-4 items-center justify-center">
        <div className="flex items-center space-x-2 transform hover:scale-110 transition duration-300 cursor-pointer">
          <img src={Icon} alt="Puzzle-icon" className="w-10 md:w-12 mt-3" />
        </div>
        <span className="text-2xl mt-3 md:text-3xl sm:text-4xl lg:text-4xl font-semibold font-serif uppercase transform hover:scale-110 transition duration-300 cursor-pointer">
          Memory Game
        </span>
      </div>
    </header>
  );
};

export default Header;
