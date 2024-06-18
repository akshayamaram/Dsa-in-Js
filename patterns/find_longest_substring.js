/**
 * Question : Write a function called findLongestSubstring, which accepts a string
 * and returns the length of the longest substring with all distinct characters.
 */

/** Solution : (sliding window approach) , TC - O(n)*/

function findLongestSubstring(str) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let seen = {};

  while (right < str.length) {
    let char = str[right];

    if (seen[char]) {
      seen[str[left]] = false;
      left++;
    } else {
      seen[char] = true;
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    }
  }

  return maxLength;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
