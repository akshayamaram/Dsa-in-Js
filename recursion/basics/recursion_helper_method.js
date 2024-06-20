
/** 
 * Helper Method Recursion is just a pattern where we have an outer function that's not 
 * recursive, which calls an inner function which is recursive.
 */

/** Question : Collect all odd values and store it in an array */


function collectOddValues(arr) {  
    let result = []

    function helper(helperInput) {  

        // Base case: if the input array is empty, return
        if (helperInput.length === 0) {
            return
        }

        // If the first element of the input array is odd, add it to the result array
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        // Call the helper function recursively with the rest of the input array
        helper(helperInput.slice(1))
    }

    // Call the helper function with the input array
    helper(arr)

    return result
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,]))