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

    var lowercaseStr = str.toLowerCase();
    var strippedStr = lowercaseStr.replace(/\n|\r|\s/g, "");
    var letterArr = Array.from(strippedStr);

    return letterArr;
}

//returns array of all words with spaces and carriage returns removed
// NEED TO TEST ON WINDOWS!
export function stripStrCleanArray(str){
    //
    var trimStr = str.trim();
    var strippedStr = trimStr.replace(/\n|\r/g, " - ");
    var strToArray = strippedStr.split(" ");
    var noReturnArr = [];

    for(let ii =0; ii < strToArray.length; ii++){
        //TERTIARY!!
        // strToArray[ii] === "-" || strToArray[ii] === "" ? doThis() : noReturnArr.push(strToArray[ii]);
        if(strToArray[ii] === "-" || strToArray[ii] === ""){
            //null;
            noReturnArr = noReturnArr;
        }else{
            noReturnArr.push(strToArray[ii]);
        }
    }
    //
    return noReturnArr;
}