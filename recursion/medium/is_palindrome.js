
/** 
 * Question : Write a recursive function called isPalindrome which returns true 
 * if the string passed to it is a palindrome (reads the same forward and backward). 
 * Otherwise it returns false.
 */

function isPalindrome(str) {
    if( str.length <= 1) return true;
    if(str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1))
    }
    return false;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false