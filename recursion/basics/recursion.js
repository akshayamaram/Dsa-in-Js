
/**
 * Recursion - It's just a process (a function in our case) that calls itself.
 * Two essential parts of recursion : 1. Base Case 2. Differnt Input
 */

/** Example 1: write a function which takes a value and prints numbers in decreasing order
 * like if value = 5, Output: 5, 4, 3, 2, 1,
  */

function countDown(num) {
    // base case
    if(num <= 0) {
        console.log("done")
        return   // having return is important here otherwise we will stuck in infinite loops
    }
    // recursion
    console.log(num)
    num--
    countDown(num)
}


console.log(countDown(5))


/** Example 2 : Write a function that calculates the sum of all numbers from given number to 1. */

function sumRange(num) {
    // base case
    if (num === 1) {
        return 1;
    }
    // recursion
    return num + sumRange(num - 1);
    
}

console.log(sumRange(4))
