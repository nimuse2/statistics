
import {alphaBet,
    alphaBetScore,
    theNumbers,
    theScore,
    } from './data.js';

import {getMaxIndex,
        stripStrLetters,
        stripStrCleanArray,
        medianEven,
        medianOdd,
        } from './utilities.js';

//

export function WordCount(str) { 
    const cleanArr = stripStrCleanArray(str);
    return cleanArr.length;
  }

export function LineCount(str) {
    return str.split("\n").length;//? pc/mac
}

export function MeanCalculate(str) {

    const cleanArr = stripStrCleanArray(str);// rename - cleanArr

    const totalWordCount = cleanArr.length;

    const letterCount = stripStrLetters(str);
    
    const wordMean = (letterCount.length/totalWordCount).toFixed(1);

    return wordMean;

  }

  export function ModeCalculate(str) {
    
    var strToArray = str.split(" ");
    var totalLetterLength = strToArray.length;

    var wordSet = [];
    for(let i=0;i<totalLetterLength;i++){
      wordSet.push(strToArray[i].length);
    }

    for(let i=0; i < wordSet.length; i++){
      for (let iii = 0; iii < theNumbers.length; iii++){
            // theScore[iii] = JSON.stringify(theNumbers[iii])===(JSON.stringify(wordSet[i])) ? theScore[iii] + 1: null;
            if(JSON.stringify(theNumbers[iii])===JSON.stringify(wordSet[i])){
                theScore[iii] = theScore[iii] + 1;
            }
        
        }
    }

    var highestScoreIndex = getMaxIndex(theScore);
   
    return theNumbers[highestScoreIndex];
                    
  }

  export function MedianCalculate(str){
    const cleanArr = stripStrCleanArray(str);
    const totalLetterLength = cleanArr.length;
    //
    const wordSet = [];
    for(let i=0;i<totalLetterLength;i++){
      wordSet.push(cleanArr[i].length);
    }

    const sortedNewArray = wordSet.sort(function(a,b) { return a - b; });
    const middlePos = sortedNewArray.length/2;

    const median = Number.isInteger(middlePos) ? medianEven(sortedNewArray, middlePos) : medianOdd(sortedNewArray, middlePos);
  
   return median;

  }

  export function MostCommonLetter(str) {

        const letterArr = stripStrLetters(str);

        for (let i=0; i < letterArr.length; i++){
            for (let ii=0; ii < alphaBet.length; ii++){
                alphaBetScore[ii] = alphaBet[ii] === letterArr[i] ?  alphaBetScore[ii]+1 : null;
            }
        }

        return alphaBet[getMaxIndex(alphaBetScore)];


  }