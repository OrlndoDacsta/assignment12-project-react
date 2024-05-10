import React from "react";
import "./style.css";
const Navlogo = ({ logo }) => {
  return (
    <div className="navlogo">
      <img src={logo} alt="logo" />
      <p>Mom's</p>
      <p>Bakery</p>
    </div>
  );
};

export default Navlogo;
