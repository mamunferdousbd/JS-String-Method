//JS String Method | split()

// The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.

let text = "How are you doing today?";
const myArray = text.split(" "); // Split word by word
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);

const myarray2 = text.split("") // split character including space
console.log(myarray2);
console.log(myarray2[0]);
console.log(myarray2[1]);
console.log(myarray2[2]);
console.log(myarray2[3]);
console.log(myarray2[4]);
console.log(myarray2[5]);
console.log(myarray2[6]);
console.log(myarray2[7]);
console.log(myarray2[8]);
console.log(myarray2[9]);
console.log(myarray2[10]);
console.log(myarray2[11]);
console.log(myarray2[12]);
console.log(myarray2[13]);
console.log(myarray2[14]);
console.log(myarray2[15]);
console.log(myarray2[16]);
console.log(myarray2[17]);
console.log(myarray2[18]);
console.log(myarray2[19]);
console.log(myarray2[20]);
console.log(myarray2[21]);
console.log(myarray2[22]);
console.log(myarray2[23]);

// Use a letter as a separator:
const myarray3 = text.split("o"); // character ommitted and return array as a character wise separate
console.log(myarray3);
console.log(myarray3[0]);
console.log(myarray3[1]);
console.log(myarray3[2]);
console.log(myarray3[3]);
console.log(myarray3[4]);

// If the separator parameter is omitted, an array with the original string is returned:
const myarray4= text.split();
console.log(myarray4);




