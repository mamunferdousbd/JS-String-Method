//JS String Method | substr()

// The substr() method extracts a part of a string.

// The substr() method begins at a specified position, and returns a specified number of characters.

// The substr() method does not change the original string.

// To extract characters from the end of the string, use a negative start position.

// Extract a substring from text:
var text = "Hello world!";
var result = text.substr(1, 4);
console.log(result);
//Start at position 2:
var result= text.substr(2);
console.log(result);
// Only the first:
var result= text.substr(0,1);
console.log(result);
// Only the last:
var result= text.substr(text.length-1,1);
console.log(result);
// The last 6:
var result= text.substr(-5,5);
console.log(result);

