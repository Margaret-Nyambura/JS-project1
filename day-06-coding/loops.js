// THJE FOR LOOP
// For loop has an initialization (expression1), condition (expression2) and the increment/decrement (expression3)

let classes = ["Anitab", "Lovelace", "Adalab"];
for(let i = 0; i < classes.length; i++){
    console.log(classes[i]);
}

// DO...WHILE LOOP
//  The do...while statement repeats itself until a specified condition results to false
// The action is executed before the condition is cheched

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let a = 0; 

do{ 
    console.log(numbers[a]);
    a++;
   
}
while(a < numbers.length);


// WHILE LOOP
// While loop continues to loop through a block of code as long as the given condition is true

let countries = ["Kenya", "Malawi", "Uganda", "Rwanda"];

i = 0;
while(i < countries.length){
    i++;
}
console.log(countries.pop());


// FOR...IN LOOP
// For...in loop is used to iterate through the properties of an object

const details = {
    firstname: "Ann",
    lastname: "Henry",
    age: 28,
    school: "AkiraChix",
    class: "Lovelace"
}

for(let i in details){
    console.log(details[i]);
}

// FOR...OF LOOP
// For...of loop is used to perform operations on a sequence of values from an object

const scores = [50, 67, 98, 34, 96, 74, 88];

for( const i of scores){
    console.log(i - 10);
}


// BREAK STATEMENT
// The break statement is used to stop the execution of a loop
// If there is another code after the break statement, it is executed immediately after the break statement

let fruits = ["Apple", "Watermelon", "Pawpaw", "Pineapple"];
let x = 0;

while(x < fruits.length){
    if(x === 3){
        console.log(fruits[x]);
        break;
   
    }
    x++;
}

// CONTINUE STATEMENT
// Continue statement in JavaScript is used to break one iteration in a loop
// if a given condition is met, and continues with the next iteration in the loop.

let towns = ["Karen", "Nairobi", "Naivasha", "Nakuru", "Thika"];

for(let i = 0; i < towns.length; i++){
    if(i === 2){
        console.log(towns[i]);
        continue;
    }
}


// POINTS TO NOTE:

// Loops in JavaScript helps us perform operations repeatedly through iteration.
// We have different types of loops,
// for loop
// do...while loop
// while loop
// break statement
// continue statement
// for...in loop
// for...of loop

