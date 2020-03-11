// Flatten a nested array. You must account for varying levels of nesting. Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);