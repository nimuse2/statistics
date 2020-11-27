# Technical Test

An SPA that calculates statistics about text files submitted to it and displays those statistics in a useful form. The solution should be built using modern JavaScript.

## Test Requirements
- Whitespace delimited word count
- Line count
- Mean(to 1decimal place), mode and median letters per word
- Most common letter

## Additional Statistics
- Extra fuctions could be added to ```../js/functions.js```

## Build and run
- Fork this repository
- ensure npm/ yarn installed on your machine
- navigate to the root folder in terminal
- type ```yarn start' or 'npm run build'```

## Notes
- Tested on Mac. Need to test for Windows carraiage returns and hidden characters
- ```../tests``` contains different .txt files I used for testing
- Am using a loop of 20 characters for words.. this could cause issues for really big words. Could easily be increased, or maybe there is a better way to do this? 
- The main maths functions are in ```../js/functions.js``` 
- Small utility functions are in ```../js/utilities.js``` 
- there is also a file with the basic data tables: ```../js/data.js```
- Clean refresh before load new file

## improvements
- There is a 'lifecycle warning' bug that I get in my browser. 
- Numbers are not accounted for - regex?

## Median
     To find the median, the data should be arranged in order from least to greatest. 
     If there is an even number of items in the data set, 
     then the median is found by taking the mean (average) of the two middlemost numbers. (If even it is the middle 2 numbers divided by 2)

     reference:
     https://www.mathgoodies.com/lessons/vol8/median#:~:text=To%20find%20the%20median%2C%20the%20data%20should%20be%20arranged%20in,of%20the%20two%20middlemost%20numbers.

## Mode
    Put the numbers in order so that you can clearly see patterns.
    For example, lets say we have 2, 19, 44, 44, 44, 51, 56, 78, 86, 99, 99. The mode is the number that appears the most often. In this case: 44, which appears three times.

    reference:
    https://www.statisticshowto.com/probability-and-statistics/statistics-definitions/mean-median-mode/

## Mean
    Step 1: Add the numbers up to get a total.
    Example: 2 +19 + 44 + 44 +44 + 51 + 56 + 78 + 86 + 99 + 99 = 622.  Set this number aside for a moment.
    Step 2: Count the amount of numbers in the series.
    In our example (2, 19, 44, 44, 44, 51, 56, 78, 86, 99, 99), we have 11 numbers.
    Step 3: Divide the number you found in step 2 by the number you found in step 3.
    In our example: 622 / 11 = 56.5454545. This is the mean, sometimes called the average.

    reference:
    https://www.statisticshowto.com/probability-and-statistics/statistics-definitions/mean-median-mode/

