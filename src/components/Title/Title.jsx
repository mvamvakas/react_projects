import React from "react";
import "./Title.css";
import hamburgerIcon from "../../images/hamburgerIcon.png";
import homeIcon from "../../images/homeIcon.png";

const Title = ({ titleText, openCloseMenu, goToHome }) => {
  return (
    <div className="title-text title-div">
      <div className="iconDiv">
        <img
          className="iconHome"
          src={homeIcon}
          onClick={goToHome}
          alt="home icon"
        />
        <img
          className="icon"
          src={hamburgerIcon}
          onClick={openCloseMenu}
          alt="hamburger icon"
        />
      </div>

      <div>{titleText}</div>
      <div style={{ minWidth: "70px" }}></div>
    </div>
  );
};

export default Title;
