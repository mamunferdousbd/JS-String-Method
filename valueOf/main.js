// Js String Method | valuOf()

// The valueOf() method returns the primitive value of a string.

// The valueOf() method does not change the original string.

// The valueOf() method can be used to convert a string object into a string.

// Get the value of a text:
var text = "Hello World!";
var result = text.valueOf();
console.log(result);

// The same as:
var text = "Hello World!";
var result = text;
console.log(result)

// Get the value of a String object:
var text = new String("Hello World!");
var result = text.valueOf();
console.log(result);
