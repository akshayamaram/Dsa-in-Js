
/** 
 * Question : Implement a function called, areThereDuplicates which accepts a 
 * variable number of arguments, and checks whether there are any duplicates among 
 * the arguments passed in.  You can solve this using the frequency counter 
 * pattern OR the multiple pointers pattern.
 */


/** Solution :  (multiple pointers approach) , TC - O(n) */

function areThereDuplicates(...args) {
  args.sort()
  let i = 0;
  let j = 1;
  while( j < args.length) {
    if(args[i] === args[j]) return true
    i++;
    j++;
  }
  return false
}


console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates("a", "b", "c", "a")); // true 