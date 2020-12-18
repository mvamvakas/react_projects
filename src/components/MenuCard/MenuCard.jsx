import React from "react";
import "./MenuCard.css";

const MenuCard = ({ title, sectionChange }) => {
  return (
    <div className="menuCard" onClick={() => sectionChange(title)}>
      {title}
    </div>
  );
};

export default MenuCard;
