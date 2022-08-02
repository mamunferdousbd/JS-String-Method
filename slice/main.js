//JS String Method | slice()

// The slice() method extracts a part of a string.

// The slice() method returns the extracted part in a new string.

// The slice() method does not change the original string.

// The start and end parameters specifies the part of the string to extract.

// The first position is 0, the second is 1, ...

// A negative number selects from the end of the string.

// Slice the first 5 positions:
var text = "Hello world!";
var result = text.slice(0, 5);
console.log(result);

// From position 3 to the end:
var text = "Hello world!";
var result = text.slice(3);
console.log(result);

// From position 3 to 8:
var text = "Hello world!";
var result = text.slice(3,8);
console.log(result);

// Only the first character:
var text = "Hello world!";
var result = text.slice(0,1);
console.log(result);

// Only the last character:
var text = "Hello world!";
var result = text.slice(-1);
console.log(result);

// The whole string:
var text = "Hello world!";
var result = text.slice(0);
console.log(result);

