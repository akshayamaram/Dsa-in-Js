/**
 * This pattern uses objects or sets to collect values/frequencies of values
 * This can often avoid the need for nested loops or O(n^2) operations with arrays/strings
 */

/** Question 1 : check if the two arrays are same with the numbers squared in one array and their
 * frequency also should be same, order dosent matter
 */

/** Solution : 1 (normal approach) O(n^2) */

function same1(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (i = 0; i < arr1.length; i++) {
    let corectIndex = arr2.indexOf(arr1[i] ** 2);
    if (corectIndex === -1) return false;
    arr2.splice(corectIndex, 1);
  }
  return true;
}

console.log(same1([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same1([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); // false


/** Solution : 2 (frequency counter pattern approach) O(n) */

function same2(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  let frequencycounter1 = {};
  let frequencycounter2 = {};
  for (i = 0; i < arr1.length; i++) {
    frequencycounter1[arr1[i]] = (frequencycounter1[arr1[i]] || 0) + 1;
  }
  for (i = 0; i < arr2.length; i++) {
    frequencycounter2[arr2[i]] = (frequencycounter2[arr2[i]] || 0) + 1;
  }
  for (key in frequencycounter1) {
    if (!(key ** 2 in frequencycounter2)) return false;
    if (frequencycounter2[key ** 2] !== frequencycounter1[key]) return false;
  }
  return true;
}

console.log("-------------");
console.log(same2([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same2([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); // false
