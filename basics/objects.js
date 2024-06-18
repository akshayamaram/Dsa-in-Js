
/** Objects in Js :
 * - also called as unordered lists
 * - used to store unordered data
 * - Insertion O(1) , Removal O(1), Access O(1), Searching O(n)
 * 
 * - BigO of built in JS Object methods :
 * - Object.keys O(n), Object.values O(n), Object.entries O(n), hasOwnProperty O(1)
 */

let instructor = {
    firstName: "Kate",
    lastName: "Winslet",
    age: 30,
    isMarried: true,
    skills: ["JavaScript", "HTML", "CSS"]
}

console.log(Object.keys(instructor));
console.log(Object.entries(instructor))
console.log(instructor.hasOwnProperty("age"))