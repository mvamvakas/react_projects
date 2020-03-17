import React from "react";
import { Link } from "react-router-dom";
import "./IconBox.css";

const IconBox = ({ route = "\\", imageSrc = "" }) => {
  return (
    <Link to={route} className="icon-box">
      <img src={imageSrc} />
    </Link>
  );
};
export default IconBox;
