
/** Question : Given two strings, write a function to determine if second string is an anagram of first one.
 * Note : An anagram is a word or phrase formed by rearranging the letters of another
 * Examples : cinema, iceman
 */


/** Solution :  (frequency counter pattern approach) O(n) */

function validAnagram(str1, str2) {
    if(str1.length != str2.length) return false
    let frequencycounter = {}
    for(i=0; i<str1.length; i++) {
        let letter = str1[i]
        // if letter exists , increment, otherwise set to 1
        frequencycounter[letter] ? frequencycounter[letter] += 1 : frequencycounter[letter] = 1
    }
    for(i=0; i<str2.length; i++) {
        let letter = str2[i]
        // cant find letter or letter is 0 then it is not an anagram
        if(!frequencycounter[letter]) return false
        // if find the occurence of letter, subtract it to 1 
        frequencycounter[letter] -= 1;
    }

    return true
}


console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("qwerty", "wretqy")); //true