//JS String Method |  toLocaleUpperCase()

// The toLocaleUpperCase() method converts a string to lowercase letters, using current locale.

// The locale is based on the language settings of the browser.

// The toLocaleUpperCase() method does not change the original string.

// The toLocaleUpperCase() returns the same result as toUpperCase(),
//  except for locales that conflict with the regular Unicode case mappings (such as Turkish).

let text = "hello world!";
let result = text.toLocaleUpperCase();
console.log(result);