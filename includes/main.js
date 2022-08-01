// JS String Method | includes() 

// The includes() method returns true if a string contains a specified string.
// Otherwise it returns false.
// The includes() method is case sensitive.


let text = "Hello world, welcome to the universe.";
console.log(text.includes("welcome"));
console.log(text.includes("Welcome"));

// Start at position 12:
console.log(text.includes("welcome",12));
console.log(text.includes("Welcome",12));