//JS String Method | search()

// The search() method matches a string against a regular expression **

// The search() method returns the index (position) of the first match.

// The search() method returns -1 if no match is found.

// The search() method is case sensitive.

// Search for "Blue":
var text = "Mr. Blue has a blue house";
var position = text.search("Blue");
console.log(position);

// Search for "blue":
var text = "Mr. Blue has a blue house";
var position = text.search("blue");
console.log(position);

// Search for /Blue/:
var text = "Mr. Blue has a blue house";
var position = text.search(/Blue/);
console.log(position);
// Search for /blue/:
var text = "Mr. Blue has a blue house";
var position = text.search(/blue/);
console.log(position);

// Search case insensitive:
var text = "Mr. Blue has a blue house";
var position = text.search(/blue/i);
console.log(position);


