/ Using /the NOT (!) operator:
// isWeekend is true, so NOT true becomes false
var isWeekend = true;
var needToShowerToday = !isWeekend;
needToShowerToday; // false


// Joining strings together (string concatenation):
var greeting = "Hello";
var myName = "Nick";
greeting + myName; // "HelloNick"


// Finding the length of a string:
"Helloworld".length; // 10


// Getting a single character from a string (index starts at 0):
var myName = "Nick";
myName[1]; // "i"


// Numbers and operators:
// Multiplication and division happen before addition and subtraction
1234 + 57 * 3 - 31 / 4; // 1397.25


// Incrementing a number (pre-increment):
// Increases highFives by 1 before returning the value
var highFives = 0;
++highFives; // 1


// Decrementing a number (pre-decrement):
// Decreases highFives by 1 before returning the value
var highFives = 5;
--highFives; // 4


// Boolean AND (&&) operator:
// Both values must be true for the result to be true
var isRaining = true;
var isNotRaining = false;
isRaining && isNotRaining; // false


// Boolean OR (||) operator:
// Only one value needs to be true
var hasApple = true;
var hasBanana = false;
hasApple || hasBanana; // true


// Comparing numbers:
// Checks if height is less than the restriction
var height = 65;
var heightRestriction = 60;
height < heightRestriction; // false


// Converting a string to upper case:
"Hello there, how are you doing?".toUpperCase();
// "HELLO THERE, HOW ARE YOU DOING?"


// Converting a string to lower case:
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase();
// "hello there, how are you doing?"


// Strict equality (===):
// Compares both value AND type
var mySecretNumber = 5;
var chicoGuess = 3;
mySecretNumber === chicoGuess; // false


// Loose equality (==):
// Compares values after type conversion
var stringNumber = "5";
var actualNumber = 5;
stringNumber == actualNumber; // true


// Slice method:
// Extracts part of a string without modifying the original

// Example 1:
"This is a long string".slice(0, 4); // "This"

// Example 2:
"Hello, World!".slice(7, 12); // "World"
