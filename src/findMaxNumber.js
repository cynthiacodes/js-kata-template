function findMaxNumber(numbersArray) {
    let maxNum = 0;
    for( let num of numbersArray){
       if(maxNum < num){  // 0 < 10
         maxNum = num;  // 0 = 10
       } 
    }
    return maxNum;
  }
  
  export { findMaxNumber };