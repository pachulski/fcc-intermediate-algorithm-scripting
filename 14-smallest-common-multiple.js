/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order. */

function smallestCommons(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const betweenArr = [];
    for (let i = sortedArr[0] + 1; i < sortedArr[1]; i++) {
      betweenArr.push(i);
    }
    const newArr = [sortedArr[0], ...betweenArr, sortedArr[1]];
    let filteredArr = [];
    let num = 0;
    for (let i = newArr[newArr.length - 1]; newArr.length !== filteredArr.length; i++) {
      filteredArr = newArr.filter(e => i % e === 0);
      num = i;
    }
    return num;
  }
  
  
  smallestCommons([1,5]);