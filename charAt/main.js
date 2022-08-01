// JS String Method | charAt() 

// charAt() method returns the character at a specified index (position) in a string.

var text ="ABDULLAH AL MAMUN";
console.log(text.charAt(0));
// Index returns space string
console.log(text.charAt(8));
//Index out of range returns empty string:
console.log(text.charAt(20));
//Default index is 0:
console.log(text.charAt());
//Invalid index converts to 0:
// 3.14 converted to 3
console.log(text.charAt(3.14));