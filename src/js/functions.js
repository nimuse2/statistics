export function WordCount(str) { 
    //ABSTRACT/////
    var strippedStr = str.replace(/\n|\r/g, " - ");
    console.log("-> stripped -> ", strippedStr);
    var strToArray = strippedStr.split(" ");
    console.log("arr original words: ", strToArray);
    var noReturnArr = [];
    for(var ii =0; ii < strToArray.length; ii++){
        if(strToArray[ii] === "-" || strToArray[ii] === ""){
            //null;
        }else{
            noReturnArr.push(strToArray[ii]);
        }
    }
    ///////
    return noReturnArr.length;//INCORRECT!!! - carriage returns!!!
  }

export function LineCount(str) {
    return str.split("\n").length;
}

export function MeanCalculate(str) {
    //var lowercaseStr = str.toLowerCase();
    //replace carriage return with charicter

    //ABSTRACT/////-special charicters!!!
    var strippedStr = str.replace(/\n|\r/g, " - ");
    console.log("-> stripped -> ", strippedStr);
    var strToArray = strippedStr.split(" ");
    console.log("arr original words: ", strToArray);
    var noReturnArr = [];
    for(var ii =0; ii < strToArray.length; ii++){
        if(strToArray[ii] === "-" || strToArray[ii] === ""){
            //null;
        }else{
            noReturnArr.push(strToArray[ii]);
        }
    }
    /////

    // const noreturnArr = utilStrip(str);
    console.log("arr the clean words: ", noReturnArr);
    // console.log("arr total number items -> ", noReturnArr.length);
    //console.log("MEAN -> ",totalLetterLength);

    const totalLetterLength = noReturnArr.length;

    const testNewSet = [];
    for(let i=0;i<totalLetterLength;i++){
      testNewSet.push(noReturnArr[i].length);
    }

    console.log("arr total x totals", testNewSet);

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

    //abstract into utilities.js

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
    // const strToArray = str.split(" ");
    // const totalLetterLength = strToArray.length;

    /*
    two lwt let two det fun mey 
    fvg bnn kkk 
    kkk cvc mmm
    xcv

    3,3,3,3,3,
    3,3,3,3,3,
    3,3,3,3,
    */
    //ABSTRACT/////
    var strippedStr = str.replace(/\n|\r/g, " - ");
    console.log("-> stripped -> ", strippedStr);
    var strToArray = strippedStr.split(" ");
    console.log("arr original words: ", strToArray);
    var noReturnArr = [];
    for(var ii =0; ii < strToArray.length; ii++){
        if(strToArray[ii] === "-" || strToArray[ii] === ""){
            //null;
        }else{
            noReturnArr.push(strToArray[ii]);
        }
    }
    ///////
    const totalLetterLength = noReturnArr.length;
    //
    //new array of word counts
    const testNewSet = [];
    for(let i=0;i<totalLetterLength;i++){
      testNewSet.push(noReturnArr[i].length);
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

  export function MostCommonLetter(str) {
        //whole thing as letters?
        //apple / windows line breaks..
        //MAKE INTO UTILITY FUNCTION///
        const myString = "   \n \n\n Hey! \n I'm a string!!!         \n\n";
        const trimmedString = myString.trim();
        //
        var lowercaseStr = str.toLowerCase();
        var strippedStr = lowercaseStr.replace(/\n|\r|\s/g, "");
        var letterArr = Array.from(strippedStr);

        //NEED TO CHANGE to lowercase!!

        var alphaBet = [
            "a","b","c","d",
            "e","f","g","h",
            "i","j","k","l",
            "m","n","o","p",
            "q","r","s","t",
            "u","v","w","x",
            "y","z",
        ]
        var alphaBetScore = [
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
            0,0,
        ]

        console.log("-->", letterArr);
         
        //iterate through letterArr
        // find matches and add scores?
        for (let i=0; i < letterArr.length; i++){

            for (let ii=0; ii < alphaBet.length; ii++){
                //loop through alphabet
                if(alphaBet[ii] === letterArr[i]){
                    //console.log("match!",alphaBet[ii],letterArr[i]);
                    //add to score arr
                    alphaBetScore[ii] = alphaBetScore[ii]+1;
                }else{
                    //alphaBetScore
                    alphaBetScore[ii] = alphaBetScore[ii];
                }
            }
        }
        function getMaxIndex(_numArr){
            var maxNum = Math.max(..._numArr);
            var maxIndex = 0;
            console.log("max -> ", maxNum);
            for(let ii = 0; ii < _numArr.length; ii++){
                // console.log("--> ", maxNum, _numArr[ii]);
                if(_numArr[ii] == maxNum){
                    maxIndex = ii ;
                }
            }

            return maxIndex;

        }
        console.log("score arr:: ", alphaBetScore);
        console.log("score arr:: ", alphaBet[getMaxIndex(alphaBetScore)]);

        return alphaBet[getMaxIndex(alphaBetScore)];


  }