// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let newArr = [];
    for (let i = sortedArr[0] + 1; i < sortedArr[1]; i++) {
      newArr.push(i);
    } 
    return sortedArr.concat(newArr).reduce((a, b) => a + b);
  }
  
  sumAll([1, 4]);