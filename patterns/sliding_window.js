
/** 
 * Sliding Window pattern involves creating a window which can either be an array, or number 
 * from one position to another. Depending on a certain condition the window will either
 * increases or closes(and a new window is created).
 * 
 * Very useful for keeping track of a subset of data in an array/string etc...
 */

/**
 * Question : write a function called maxSubarraySum which accepts an array of  integers, and a number
 * called n, The funciton should calculate the maximum sum of n consecutive elements in the array.
 */

/** Solution : 1 (normal approach) , TC - O(n^2) */

function maxSubarraySum1(arr, n) {
    if (n > arr.length) return null
    let maxSum = - Infinity
    for(let i = 0; i < arr.length - n + 1; i++) {
        let sum = 0
        for(let j = 0; j < n; j++) {
            sum = sum + arr[i + j]
        }
        if(sum > maxSum) maxSum = sum
        // console.log(sum, maxSum)
    }
    return maxSum
}

console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum1([], 3)) // null
console.log(maxSubarraySum1([4, 2, 1, 6], 1)) // 6


/** Solution : 2 (sliding window approach) , TC - O(n)*/

function maxSubarraySum2(arr, n) {
    if (n > arr.length) return null
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}

console.log('-------------')
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum2([], 3)) // null
console.log(maxSubarraySum2([4, 2, 1, 6], 1)) // 6