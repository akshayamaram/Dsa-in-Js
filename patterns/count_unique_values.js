
/** Question : Implement a function called countUniqueValues, which accepts a SORTED array
 * and counts then unique values in the array. There can be negative numbers in the array
 * but it will always be sorted.
 */

/** Solution :  (multiple pointers approach) , TC - O(n), SC - O(1) */

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for(let j = 0; j < arr.length; j++) {
        if(arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4
console.log(countUniqueValues([])) // 0
