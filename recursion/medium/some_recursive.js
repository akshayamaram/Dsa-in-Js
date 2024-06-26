
/** 
 * Question : Write a recursive function called someRecursive which accepts an array 
 * and a callback. The function returns true if a single value in the array returns true
 *  when passed to the callback. Otherwise it returns false.
 */

function someRecursive(arr, cb) {
  if (arr.length === 0) {
    return false;
  }
  if (cb(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), cb);
}

console.log(someRecursive([1, 2, 3, 4], function(el) {
  return el > 1;
}));

console.log(someRecursive([1, 2, 3, 4], function(el) {
  return el < 1;
}));

