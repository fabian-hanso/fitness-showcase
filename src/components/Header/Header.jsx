import React from "react";
import "./Header.scss";
import AccentureLogo from "../../logo.svg";

function Header() {
  return (
    <div className="Header">
      <img src={AccentureLogo} alt="" className="Header__Logo" />
    </div>
  );
}

export default Header;
