// JS String Method | localeCompare()

// localeCompare() method compares two strings in the current locale.
// localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
// The current locale is based on the language settings of the browser.

let text1 = "ab";
let text2 = "cd";
let result = text1.localeCompare(text2);
console.log(result);

let text3 ="ab";
let text4 ="ab"
let result2 = text3.localeCompare(text4);
console.log(result2);

let text5 ="cd";
let text6 ="ab"
let result3 = text5.localeCompare(text6);
console.log(result3);
