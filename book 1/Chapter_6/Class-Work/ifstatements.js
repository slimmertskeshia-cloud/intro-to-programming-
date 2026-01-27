// Declare a variable 'numbers' and assign it the value 35
let numbers = 35  

// Check different conditions using if-else statements
if (numbers > 60) {
    // If numbers is greater than 60, print this message
    console.log("The number is greater than 20")  
} else if (numbers > 50) {
    // If numbers is greater than 50 (but not > 60), print this message
    console.log("The number is greater than 10")  
} else if (numbers > 40) {
    // If numbers is greater than 40 (but not > 50), print this message
    console.log("The number is greater than 5")  
} else {
    // If none of the above conditions are true, print this message
    console.log("The number is less")  
}

// Separator line for clarity
console.log("-----Ternary Operator-----")  

// Declare another variable 'number' and assign it the value 14
let number = 14  

// Use a ternary operator to check if 'number' is between 10 and 20
let result = (number > 10 && number < 20)     
    ? "Number is between 10 and 20"     // If true
    : "Number is not in the range";     // If false

// Print the result of the ternary operation
console.log(result);

// Custom message
console.log("the units are less");
