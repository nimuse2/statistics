import { alphaBet, alphaBetScore, theNumbers, theScore } from "./data.js";

import {
  getMaxIndex,
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
  const totalLettersLength = strToArray.length;

  const wordLengths = [];
  for (let i = 0; i < totalLettersLength; i++) {
    wordLengths.push(strToArray[i].length);
  }

  for (let i = 0; i < wordLengths.length; i++) {
    for (let iii = 0; iii < theNumbers.length - 1; iii++) {
      theScore[iii] =
        theNumbers[iii] === wordLengths[i] ? theScore[iii] + 1 : theScore[iii];
    }
  }

  var highestScoreIndex = getMaxIndex(theScore);

  return theNumbers[highestScoreIndex];
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

  console.log("is Europe: ", isEurope(letterArr));
  if (isEurope(letterArr)) {
    for (let i = 0; i < letterArr.length; i++) {
      for (let ii = 0; ii < alphaBet.length; ii++) {
        alphaBetScore[ii] =
          alphaBet[ii] === letterArr[i]
            ? alphaBetScore[ii] + 1
            : alphaBetScore[ii];
      }
    }
    return alphaBet[getMaxIndex(alphaBetScore)];
  } else {
    return "Non-european text!";
  }
}
