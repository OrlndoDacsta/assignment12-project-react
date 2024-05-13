import React from "react";
import "./style.css";
const Navbar = (props) => {
  const { nav } = props;

  return (
    <div className="navbar">
      {nav.map((item, index) => (
        <a key={index} href={item.href}>{item.title}</a>
      ))}
    </div>
  );
};

export default Navbar;
