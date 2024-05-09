import React from "react";
import "./style.css";
const Navbar = (props) => {
  const { nav } = props;

  return (
    <div className="navbar">
      {nav.map((item, index) => (
        <a key={index}>{item}</a>
      ))}
    </div>
  );
};

export default Navbar;
