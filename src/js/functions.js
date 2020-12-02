import {
  stripStrLetters,
  stripStrCleanArray,
  medianEven,
  medianOdd,
  isEurope,
} from "./utilities.js";

export function WordCount(str) {
  const cleanArr = stripStrCleanArray(str);
  return cleanArr.length;
}

export function LineCount(str) {
  return str.split("\n").length; //? pc/mac line endings?
}

export function MeanCalculate(str) {
  const cleanArr = stripStrCleanArray(str);
  const totalWordCount = cleanArr.length;
  const letterCount = stripStrLetters(str);
  const wordMean = (letterCount.length / totalWordCount).toFixed(1);

  return wordMean;
}

export function ModeCalculate(str) {
  const strToArray = str.split(" ");
  const wordLengths = [];
  strToArray.forEach((ob) => {
    wordLengths.push(ob.length);
  });

  let obj = {};
  wordLengths.forEach((char) => (obj[char] = obj[char] + 1 || 1));
  let returnObj = Object.keys(obj).reduce((a, b) => (obj[a] >= obj[b] ? a : b));

  return returnObj;
}

export function MedianCalculate(str) {
  const cleanArr = stripStrCleanArray(str);
  const totalLetterLength = cleanArr.length;
  const wordLengths = [];

  for (let i = 0; i < totalLetterLength; i++) {
    wordLengths.push(cleanArr[i].length);
  }

  const sortedNewArray = wordLengths.sort(function (a, b) {
    return a - b;
  });
  const middlePos = sortedNewArray.length / 2;

  const median = Number.isInteger(middlePos)
    ? medianEven(sortedNewArray, middlePos)
    : medianOdd(sortedNewArray, middlePos);

  return median;
}

export function MostCommonLetter(str) {
  const letterArr = stripStrLetters(str);

  if (isEurope(letterArr)) {
    function maxChar(str) {
      const obj = {};
      letterArr.forEach((char) => (obj[char] = obj[char] + 1 || 1));
      return Object.keys(obj).reduce((a, b) => (obj[a] >= obj[b] ? a : b));
    }
    return maxChar(str);
  } else {
    return "Non-european text!";
  }
}
