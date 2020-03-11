/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. */

function sumFibs(num) {
    let fibNums = [1, 1];
    for (let i = 1; fibNums[i - 1] + fibNums[i] <= num; i++) {
      fibNums.push(fibNums[i - 1] + fibNums[i]);
    }
    return fibNums.filter(e => e % 2 !== 0).reduce((a, b) => a + b);
  }
  
  sumFibs(4);