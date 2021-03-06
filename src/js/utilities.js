// utilities.js

// number tests

// odd/even test
export function medianEven(_arr, _middlePos) {
  let middleLowerPos = _middlePos;
  let middleUpperPos = _middlePos + 1;

  middleLowerPos = middleLowerPos - 1;
  middleUpperPos = middleUpperPos - 1;

  let middleLowerCount = _arr[middleLowerPos];
  let middleUpperCount = _arr[middleUpperPos];

  return (middleUpperCount + middleLowerCount) / 2;
}

export function medianOdd(_arr, _middlePos) {
  let middlePosRoundUpAndNudgeDown = Math.ceil(_middlePos - 1);
  return _arr[middlePosRoundUpAndNudgeDown];
}

//string tests

export function isEurope(str) {
  let r = /^[a-zA-Z0-9]+$/,
    i = 10; // this could be random - or a selection?

  return r.test(str[i]) ? true : false;
}

export function isEmpty(str) {
  return str === "" ? true : false;
}

//returns string with basic cleaning done.
export function initialRegex(str) {
  let lowercaseStr = str.toLowerCase();
  let trimStr = lowercaseStr.trim();
  let trimStrNoSpecials = trimStr.replace(/[.,#!$%&;:{}=\-_`~()]/g, ""); //?
  return trimStrNoSpecials;
}

//returns array of all letters
export function stripStrLetters(str) {
  let trimStrNoSpecials = initialRegex(str);
  let strippedEndingsStr = trimStrNoSpecials.replace(/\n|\r|\s/g, "");

  let letterArr = Array.from(strippedEndingsStr);

  return letterArr;
}

// returns array of all words // NEED TO TEST ON WINDOWS!
export function stripStrCleanArray(str) {
  let trimStrNoSpecials = initialRegex(str);

  let strippedStr = trimStrNoSpecials.replace(/\n|\r/g, " ");
  let strToArray = strippedStr.split(" ");
  let noReturnArr = [];

  for (let ii = 0; ii < strToArray.length; ii++) {
    strToArray[ii] !== ""
      ? noReturnArr.push(strToArray[ii])
      : noReturnArr.push();
  }

  return noReturnArr;
}
