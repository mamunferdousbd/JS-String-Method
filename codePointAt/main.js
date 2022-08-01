// JS String Method | codePointAt() 

// codePointAt() method returns the Unicode of the character at a specified index (position) in a string.

var text ="ABDULLAHALMAMUN";
console.log(text.codePointAt(0));
//Get the Unicode of the last character in a string:
console.log(text.codePointAt(text.length-1));
//Get the Unicode of the 15th character:NaN
console.log(text.codePointAt(18));
