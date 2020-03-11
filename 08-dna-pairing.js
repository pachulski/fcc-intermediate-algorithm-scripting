/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */

function pairElement(str) {
    let arr = str.split('');
    let arr2D = [];
    let pairsArr = [];
    arr.map(e => arr2D.push([e]));
    arr2D.map(e => {
      if (e[0] === 'G') {
        e.push('C');
      } else if (e[0] === 'C') {
        e.push('G');
      } else if (e[0] === 'A') {
        e.push('T');
      } else {
        e.push('A');
      }
    });
    return arr2D;
  }
  
  pairElement("GCG");