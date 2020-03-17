import React from "react";
import "./HelloWorld.css";

import Title from "./../../components/Title";
import TextArea from "./../../components/TextArea";
import Select from "react-select";
import { helloWorldBot } from "./../../libs/HelloWorld/helloWorldBot.js";

const arrayLangs = [
  {
    value: "C",
    label: "C"
  },
  {
    value: "C#",
    label: "C#"
  },
  { value: "Brainfuck", label: "Brainfuck" }
];

const HelloWorldPage = () => {
  const [selectedLang, changeSelectedLang] = React.useState(
    arrayLangs[0].value
  );

  const handleChange = event => {
    changeSelectedLang(event.target.value);
  };

  let val = helloWorldBot(selectedLang);
  return (
    <div className="main-page">
      <Title titleText="Hello World" />
      <div className="content">
        <div className="page-description">
          Welcome to the hello world app, this app lets you select a programming
          language and then it will show you how to create a hello world for the
          application.
        </div>
        <select onChange={handleChange}>
          {arrayLangs.map(obj => (
            <option value={obj.value}>{obj.value}</option>
          ))}
        </select>
        <TextArea>
          {val.map(value => (
            <div>{value}</div>
          ))}
        </TextArea>
      </div>
    </div>
  );
};

export default HelloWorldPage;
