import { parser } from "./helloWorldParser.js";
const helpText = `
Welcome to the help menu for the hello world bot

To find the syntax for 'hello world' for a language, enter
/hello 'language name'

To run a hello world, enter
/hello run

To access the help menu, enter
/hello help
`;

export const helloWorldBot = cmd => {
  // All strings have the first letter as capital and the rest lower case, this
  // makes all input case insensitive
  const str = cmd.charAt(0).toUpperCase() + cmd.slice(1).toLowerCase();
  if (str === "Help") {
    return helpText;
  }
  if (str === "Run") {
    return "Hello World";
  }
  try {
    const returnStr = parser(str);
    return returnStr;
  } catch (e) {
    return "Programming language not found, try using '/hello Help'";
  }
};
