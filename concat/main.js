// JS String Method | concat() 

// concat() method  joins two or more strings.
// The concat() method does not change the existing strings.
//The concat() method returns a new string.
var text1 = "Sea";
var text2 = "food";
var text3 = "is very";
var text4 = "tasty";
// var text = text1.concat(text2).concat( text3).concat(text4);
var text = text1.concat("",text2," ", text3," ", text4);
console.log(text)