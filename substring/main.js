//JS String Method | substring()

// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

// The substring() method extracts characters from start to end (exclusive).

// The substring() method does not change the original string.

// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

// Start or end values less than 0, are treated as 0.

// Extract a substring from text: 4-1=3;
var text = "Hello world!";
var result = text.substring(1, 4);
console.log(result);

// Start from position 2: 2 to end
var text = "Hello world!";
var result = text.substring(2);
console.log(result);

// If start is greater than end, parameters are swapped: start is 5 and end is 1
var text = "Hello world!";
var result = text.substring(5,1);
console.log(result);

// If "start" is less than 0, it will start from index 0:
var text = "Hello world!";
var result = text.substring(-3);
console.log(result);
// Only the first:
var text = "Hello world!";
var result = text.substring(0,1);
console.log(result);
//// Only the last:
var text = "Hello world!";
var result = text.substring(text.length-1);
console.log(result);
