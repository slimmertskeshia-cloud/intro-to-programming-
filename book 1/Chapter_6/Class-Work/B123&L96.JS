console.log("-------------------IF STATEMENT--------------------------")
var name = "stranger";  // Declare a variable 'name' and assign it the string value "Nicholas"
console.log("Hello " + name);  // Output a greeting message with the value of 'name' concatenated to the string

if (name.length > 5) {  // Check if the length of the 'name' string is greater than 7 characters
    console.log("Wow, you have a REALLY long name!", '\n');  // If the condition is true, output this message
}

console.log("---------------------------ELSE STATEMENT--------------------------------------")
var name = "sir";
console.log("Hello " + name);

if (name.length > 4) {
    console.log("Wow, you have a REALLY long name!");
} else {            // If name is not longer than 7 characters   
    console.log("Your name isn't very long.", '\n');  // Print this message
}

console.log("-------------------ELSE-IF STATEMENT--------------------------")
var father = false;      // father is not available
var mother = false;  // motheris available
var keisha = true;  // keishais available

if (father) {                     // If lemon chicken is available
    console.log("is my dad");  
} else if (mother) {        // If lemon chicken is not available, check for beef
    console.log("Is my mother.");  
} else if (keisha) {         // If neither father nor mother is available, check for keisha
    console.log("OK, keisha is my name.");  
} else {                               // If none of the dishes are available
    console.log("Well, I guess I dont know these people.");  // Print this message
}




