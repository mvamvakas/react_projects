import fs from "fs";
import { languages } from "./HelloWorldExamples.js";

export const parser = language => {
  const text = languages[language];
  return text;
};
// export const parser = language => {
//   console.log(language);
//   const text = fs.readFileSync(
//     `HelloWorldExamples/${language}.helloworld.txt`,
//     "utf-8"
//   );
//   return text;
// };
