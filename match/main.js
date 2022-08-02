// JS String Method | match()

// The match() method matches a string against a regular expression **
//The match() method returns an array with the matches.
//The match() method returns null if no match is found.

// Using as a String
var text = "The rain in SPAIN stays mainly in the plain";
var result = text.match("ain");
console.log(result);

// Using as a using a regular expression:
var text = "The rain in SPAIN stays mainly in the plain";
var result = text.match(/ain/);
console.log(result);
// Using as a using a globl expression:
var text = "The rain in SPAIN stays mainly in the plain";
var result = text.match(/ain/g);
console.log(result);
// Using as a using a A global, case-insensitive search:
var text = "The rain in SPAIN stays mainly in the plain";
var result = text.match(/ain/gi);
console.log(result);