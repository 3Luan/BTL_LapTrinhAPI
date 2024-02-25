import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="none"> </div>
        <div className="search">
          <input type="text" placeholder="Tìm kiếm"></input>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="user">
          <div className="icon">
            <i className="fa-solid fa-video"></i>
            <i className="fa-solid fa-grip"></i>
            <i className="fa-solid fa-bell"></i>
          </div>

          <div className="img">
            <img src="assets/images/logo.png" alt=""></img>
          </div>
        </div>

        <div className="toggle">
          <i className="fa-solid fa-bars" id="header-toggle"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
