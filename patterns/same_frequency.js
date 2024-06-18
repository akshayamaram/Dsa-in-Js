
/** 
 * Question : Write a function called sameFrequency. Given two positive integers, 
 * find out if the two numbers have the same frequency of digits.
 */


/** Solution : (frequency counter pattern approach) O(n) */

function sameFrequency(first, second) {
  var digits1 = first.toString().split("");
  var digits2 = second.toString().split("");

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let i = 0; i < digits1.length; i++) {
    freqCounter1[digits1[i]] = (freqCounter1[digits1[i]] || 0) + 1;
  }
  for (let i = 0; i < digits2.length; i++) {
    freqCounter2[digits2[i]] = (freqCounter2[digits2[i]] || 0) + 1;
  }

  for (var key in freqCounter1) {
    if (!(key in freqCounter2)) return false;
    if (freqCounter2[key] != freqCounter1[key]) return false;
  }

  return true;
}


console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222));// false