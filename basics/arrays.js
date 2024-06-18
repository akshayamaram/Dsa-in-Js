
/** Arrays in Js :
 * - also called as ordered lists
 * - used to store ordered data, used when we need fast access/insertion and removal(sort of...)
 * - Insertion (depends..) , Removal (depends..), Access O(1), Searching O(n)
 * - Insertion : at end O(1), at beggining O(n), 
 * - Removal : at end O(1), at beggining O(n), 
 * - push and pop are always faster than shift and unshift
 * 
 * - BigO of built in JS Array methods :
 * - push O(1), pop O(1), shift O(n), unshift O(n), concat O(n), slice O(n), splice O(n), sort O(nlogn),
 *   forEach & map & filter & reduce etc - O(n)
 */

let names = ["kate", "zoy", "Fay"]
let random = [true, {}, "hey", [], 278937]