// Js String Method | trim()

// The trim() method removes whitespace from both sides of a string.

// The trim() method does not change the original string.

//Remove spaces with trim():
var text = "       Hello World!        ";
var result = text.trim();
console.log(result);

// Remove spaces with replace() using a regular expression:
var text = "       Hello World!        ";
var result = text.replace(/^\s+|\s+$/gm,'');
console.log(result);