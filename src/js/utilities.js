//utilities.js
// odd/even test
export function medianEven(_arr, _middlePos){
    
    var middleLowerPos = _middlePos;
    var middleUpperPos = _middlePos + 1;
    // array nudge - include 0
    middleLowerPos = middleLowerPos -1;
    middleUpperPos = middleUpperPos -1;

    var middleLowerCount = _arr[middleLowerPos];
    var middleUpperCount = _arr[middleUpperPos];

    return (middleUpperCount + middleLowerCount) / 2;
}

export function medianOdd(_arr, _middlePos){
    var middlePosRoundUpAndNudgeDown = Math.ceil(_middlePos - 1);
    return _arr[middlePosRoundUpAndNudgeDown];
}
//
//returns the index with the highest numnber in array..
export function getMaxIndex(_numArr){
    var maxNum = Math.max(..._numArr);
    var maxIndex = 0;

    for(let ii = 0; ii < _numArr.length; ii++){
        maxIndex = _numArr[ii] === maxNum ? ii : maxIndex;
    }
    return maxIndex;

}

//string cleaning
//returns array of all letters
export function  stripStrLetters(str) {
    //remove capitals, special characters, line endings and spaces
    var lowercaseStr = str.toLowerCase();
    var trimStr = lowercaseStr.trim();
    var trimStrNoSpecials = trimStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");//?
    //line ending/space different
    var strippedEndingsStr = trimStrNoSpecials.replace(/\n|\r|\s/g, "");

    var letterArr = Array.from(strippedEndingsStr);

    return letterArr;
}

//returns array of all words 
// NEED TO TEST ON WINDOWS!
export function stripStrCleanArray(str){
    //remove capitals, special characters, line endings and spaces
    //ABSTRACT
    var lowercaseStr = str.toLowerCase();
    var trimStr = lowercaseStr.trim();
    var trimStrNoSpecials = trimStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    //line ending different
    var strippedStr = trimStrNoSpecials.replace(/\n|\r/g, " ");

    var strToArray = strippedStr.split(" ");

    var noReturnArr = [];
    // remove duds
    for(let ii =0; ii < strToArray.length; ii++){
        strToArray[ii] !== "" ? noReturnArr.push(strToArray[ii]) : noReturnArr = noReturnArr;
    }

    //
    return noReturnArr;
}