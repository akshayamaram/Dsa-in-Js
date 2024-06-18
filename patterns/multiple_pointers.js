
/** 
 * Usaully Multiple Pointers is used when we want to search for a (pair or kind of) that meets a 
 * certain condition in strings or arrays or linkedlists..
 */

/** Question 1 : Write a function called sumZero, which accepts a SORTED array of integers. The function
 * should find the first pair whose sum equals to zero. Return the array that includes both values that
 * sum to zero or undefined if a pair does not exist.
 */

/** Solution : 1 (normal approach) , TC - O(n^2), SC - O(1) */

function sumZero1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr [j] === 0) {
                return [arr[i], arr[j]]
            } 
        }
    }
}

console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero1([-2, 0, 1, 3])) // undefined
console.log(sumZero1([1, 2, 3])) // undefined



/** Solution : 2 (multiple pointers approach) , TC - O(n), SC - O(1) */

function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero2([-2, 0, 1, 3])) // undefined
console.log(sumZero2([1, 2, 3])) // undefined