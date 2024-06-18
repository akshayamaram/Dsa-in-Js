
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

/** Solution : 1 (normal approach) , TC - O(n^2), SC - O(1) */

function maxSubarraySum(arr, n) {
    if (n > arr.length) return null
    let maxSum = -Infinity
    for (let i = 0; i < arr.length - n + 1; i++) {
        let sum = 0
        for (let j = i; j < i + n; j++) {
            sum += arr[j]
        }
        if (sum > maxSum) maxSum = sum
    }
    return maxSum
}



console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([], 3)) // null
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6