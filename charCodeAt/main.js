// JS String Method | charCodeAt() 

// charCodeAt() method returns the UTF of the character at a specified index (position) in a string.

var text ="ABDULLAHALMAMUN";
console.log(text.charCodeAt(0));
//Get the Unicode of the last character in a string:
console.log(text.charCodeAt(text.length-1));
//Get the Unicode of the 15th character:NaN
console.log(text.charCodeAt(18));
