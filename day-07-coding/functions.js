

function returnItems(){
    let greetings = "Good morning world!";
    console.log(greetings);
}
returnItems()


function squares(){
    let sqs = [10, 20, 40, 60, 80, 34, 20, 91, 38, 74, 82];

    newSqs = sqs.slice(-3, -5).forEach(item => {
        let a =  item * 9
    })

    newSqs= sqs.slice(-1).forEach(item => {
        let a =  item / 3
        
    })

    console.log(newSqs);
}
squares()


function checkNumbers(){
    const nums = [10, 50, -60, 0, 84, 32, -54, 32, 0];
    nums.forEach(i =>{
        if(i > 0){
            console.log("Number is positive");
        }
        else if(i < 0){
            console.log("Number is negative");
        }
        else{
            console.log("Number is zero");
        }
    })
}
checkNumbers()


// a function is a block of code performing a particular task. 
// A function code is executed when a function is called.
// A function is defined using the "function" keyword.
// Accessing a function without the invoke functions () returns the function and not the function results
// Variables declared within a function becomes local to the function and can be accessed from within the function
// A return statement ends the execution of a function