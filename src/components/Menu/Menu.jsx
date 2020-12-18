import React from "react";
import "./Menu.css";

const Menu = ({ array, sectionChange, currentPage }) => {
  return (
    <div className="menu">
      <div className="line">CATEGORIES</div>
      {array.map((sectionName, index) => (
        <React.Fragment key={index}>
          {sectionName === currentPage ? (
            <div
              key={sectionName + index}
              className="section highlighted"
              onClick={() => sectionChange(sectionName)}
            >
              {sectionName}
            </div>
          ) : (
            <div
              key={sectionName + index}
              className="section"
              onClick={() => sectionChange(sectionName)}
            >
              {sectionName}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Menu;
