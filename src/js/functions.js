export function WordCount(str) { 
    return str.split(" ").length;
  }

export function LineCount(str) {
    return str.split("\n").length;
}
export function MeanCalculate(str) {

    const strToArray = str.split(" ");
    const totalLetterLength = strToArray.length;

    const testNewSet = [];
    for(let i=0;i<totalLetterLength;i++){
      testNewSet.push(strToArray[i].length);
    }

    //test - -- CHANGE WORD
    var testNewTotal = testNewSet.reduce(function(a, b){
        return a + b;
    }, 0);
    const testNewLngth = testNewSet.length;

    const testMean = (testNewTotal/testNewLngth).toFixed(1);

    return testMean;

  }

  export function ModeCalculate(str) {
    //
    const strToArray = str.split(" ");
    const totalLetterLength = strToArray.length;

    //
    //new array of word counts
    const testNewSet = [];
    for(let i=0;i<totalLetterLength;i++){
      testNewSet.push(strToArray[i].length);
    }
    //test scores against 0-20?
    //could increase if using bigger words?
    let theScore = [0,0,0,0,
      0,0,0,0,
      0,0,0,0,
      0,0,0,0,
      0,0,0,0,
      ];
    let theNumbers = [0,1,2,3,
      4,5,6,7,
      8,9,10,11,
      12,13,14,15,
      16,17,18,19,20                  
      ];
    

    for(let i=0; i < testNewSet.length; i++){
      for (let iii = 0; iii < theNumbers.length; iii++){
        if (JSON.stringify(theNumbers[iii])===(JSON.stringify(testNewSet[i]))) {
              // match
              theScore[iii] = theScore[iii] + 1;
          } else {
              //No match
          }
      }

    }
    //move somewhere sensible!!!
    function indexOfMax(arr) {
      if (arr.length === 0) {
          return -1;
      }
      var max = arr[0];
      var maxIndex = 0;
  
      for (var i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
              maxIndex = i;
              max = arr[i];
          }
      }
      return maxIndex;
    }
    var highestScoreIndex = indexOfMax(theScore);
    return theNumbers[highestScoreIndex];
                    
  }

  //MEDIAN

  export function MedianCalculate(str){
    const strToArray = str.split(" ");
    const totalLetterLength = strToArray.length;
    //
    //new array of word counts
    const testNewSet = [];
    for(let i=0;i<totalLetterLength;i++){
      testNewSet.push(strToArray[i].length);
    }

    var sortedNewArray = testNewSet.sort(function(a,b) { return a - b; });
    
    var uniq = sortedNewArray.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
      },[]);


    //#Source https://bit.ly/2neWfJ2 
    const getMedian = arr => {
      const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
      return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    };


    return getMedian(uniq);
  }