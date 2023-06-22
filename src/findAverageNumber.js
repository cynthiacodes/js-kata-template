/* 
Function findAverageNumber

Input: numbersArray containing negative and positive numbers

declare
- sumOfPositiveNum = 0
- positiveNumCount = 0
- sumOfNegativeNum = 0
- negativeNumCount = 0

For let num of Number
    if num > 0
       sumOfPositiveNum += num
        positiveNumCount += 1
    else
        sumOfNegativeNum += num
        NegativeNumCount += 1

avgPositiveNum = sumOfPositiveNum/positiveNumCount

avgNegativeNum = sumOfNegativeNum/NegativeNumCount

return averageNumArray = [avgpositive, avgnegative]

*/
function findAverageNumber(numbersArray){
    let sumOfPositiveNum = 0;
    let positiveNumCount = 0;   
    let sumOfNegativeNum = 0;
    let negativeNumCount = 0;

    for(let num of numbersArray){
        if(num > 0){
            sumOfPositiveNum += num;
            positiveNumCount ++;
        } else{
            sumOfNegativeNum += num;
            negativeNumCount ++;
        }

    }

    const avgPositiveNum = sumOfPositiveNum / positiveNumCount;

    const avgNegativeNum = sumOfNegativeNum / negativeNumCount;

    const averageNumArray = [avgPositiveNum, avgNegativeNum];

    return averageNumArray;
}

export { findAverageNumber };