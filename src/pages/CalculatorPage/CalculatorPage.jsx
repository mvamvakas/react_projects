import React from "react";
import "./CalculatorPage.css";

import Title from "./../../components/Title";
import Calculator from "./../../components/Calculator";

const CalculatorPage = () => {
  return (
    <div className="main-page">
      <Title titleText="Calculator" />
      <div className="content">
        <div className="page-description">
          Welcome to the Calculator app, This component was designed to simulate
          a Calculator. Extra features include a stack added to the equals sign
          so you can see what numbers will be added on hover.
        </div>
        <Calculator />
      </div>
    </div>
  );
};

export default CalculatorPage;
