// Declaring atrings
let word = 'AkiraChix'
console.log(word);

// Accessing items from a string
let a = word[1];
console.log(a);

let b = word[-1];
console.log(b);

// using charcodeAt() method
let c = word.charCodeAt(0);
console.log(c);

let d = word.charCodeAt(-1);
console.log(d);

// using concet() method to join substring together
let fruit = "water"
console.log(fruit.concat("melon"));

let fruits = "pine"
console.log(fruits.concat("apple"));

let bug = "lady";
console.log(bug.concat("bug")); 

// using ends-with() and starts-with() to check if a string ends with / starts-with the specified sub-string
// The result is always a boolean (true or false)
let county = "Nairobi";
console.log(county.endsWith("k"));
console.log(county.startsWith("n"));
console.log(county.startsWith("N"));

// Using includes() to check if a given substring exists in a string
// The result is a boolean

let sentence = "AkiraChix is a school";
console.log(sentence.includes("is"));
console.log(sentence.includes("in"));
console.log(sentence.includes("school"));
console.log(sentence.includes("the"));

// Using index_of() to check if a given substring exists in the string.
// It returns the first position of the substring if it exists in the string
// It returns -1 if the substring does not exist in the string
let statement = "I love coding";
console.log(statement.indexOf("l"));
console.log(statement.indexOf("coding"));
console.log(statement.indexOf("z"));
console.log(statement.indexOf("love"));

// Using lastindexof() to return the repeated version of a substring in a string
let news = "seen";
console.log(news.repeat(5));
console.log(news.repeat(10));

// Using replace() to replace an old substring into a new substring
let message = "You are a good dancer"
console.log(message.replace("dancer", "singer"));