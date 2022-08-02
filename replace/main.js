//JS String Method | replace()

//The replace() method searches a string for a value or a regular expression.
//The replace() method returns a new string with the value(s) replaced.
// The replace() method does not change the original string.
// Case Sensitive

var text = "Visit Microsoft!";
var result = text.replace("Microsoft", "W3Schools");
console.log(result);

// A global replacement:
var text = "Mr Blue has a blue house and a blue car";
var result = text.replace(/blue/g, "red");
console.log(result);


