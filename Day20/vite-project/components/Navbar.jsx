import React from "react";

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className={`nav nav-${theme}`}>
      <div>clac</div>
      <div>
        <button
          onClick={() => {
            setTheme("light");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setTheme("dark");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setTheme("neon");
          }}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default Navbar;
