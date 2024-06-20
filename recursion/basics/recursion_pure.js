
/** This question we already seen how to solve using helper method recursion,
 * Now we will see how to solve it using pure recursion withot any helper methods meaning the
 * function itself is totally self-contained and it's recursive without any external data structure
 */

/** Question : Collect all odd values and store it in an array */


function collectOddValues(arr) {
    // Initialize an empty array to store the odd values
    let newArr = [];

    // Base case: if the input array is empty, return the empty array
    if (arr.length === 0) {
        return newArr;
    }

    // Check if the first element of the array is odd
    if (arr[0] % 2 !== 0) {
        // If it is odd, add it to the new array
        newArr.push(arr[0]);
    }

    // Recursively call the function with the rest of the array (excluding the first element)
    // and concatenate the result with the new array
    newArr = newArr.concat(collectOddValues(arr.slice(1)));

  
    return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));