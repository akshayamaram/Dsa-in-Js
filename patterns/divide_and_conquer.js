
/**
 * Divide and Conquer pattern involves dividing a data set into smaller
 * chunks and then repeating a process with a subset of data.
 * 
 * This pattern can tremendously decrease time complexity.
 * There are many examples of this such as Binary Search, and few Sorting Algorithms
 * 
 */

/**
 * Question : Given a SORTED array of integers, write a function called search, 
 * that accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return -1.
 *  
 */

/** Solution : 1 (normal approach) , TC - O(n) , LINEAR SEARCH*/

function search1(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i;
    }
    return -1;
}

console.log(search1([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search1([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search1([1, 2, 3, 4, 5, 6], 11)); // -1


/** Solution : 2 (divide and conquer approach) , TC - O(logn), BINARY SEARCH */

function search2(arr, n) {

    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let mid = Math.floor((min + max) / 2);
        let currentElement = arr[mid]

        if(arr[mid] < n) {
            min = mid + 1
        } 
        else if(arr[mid] > n) {
            max = mid - 1
        }
        else {
            return mid
        }
    }
    return -1
}

console.log("-------------");
console.log(search2([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search2([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search2([1, 2, 3, 4, 5, 6], 11)); // -1