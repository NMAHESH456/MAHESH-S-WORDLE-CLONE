import wordBank from "./wordsfile.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const wordGenerated = async () => {
  var wordArr
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      wordArr = result.split("\n");
      
    });
  return  { wordArr };
};