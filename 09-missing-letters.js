/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
    let alphArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let alphArrSliced = alphArr.slice(alphArr.indexOf(str[0]), alphArr.indexOf(str[str.length - 1]) + 1);
    return str.length === alphArrSliced.length ? undefined : alphArrSliced.filter(e => !str.includes(e)).toString();
  }
  
  fearNotLetter("abce");