// Start with alphabet 'a'
let alphabet = 'a';  

// End with alphabet 'z'
let z = 'z';      

// Convert characters to their ASCII codes for comparison
let currentCode = alphabet.charCodeAt(0); // ASCII code for 'a'
let endCode = z.charCodeAt(0);            // ASCII code for 'z'

// Do-while loop to print alphabets from 'a' to 'z'
do {
    console.log(String.fromCharCode(currentCode)); // Print current letter
    currentCode++;                                 // Move to next letter
} while (currentCode <= endCode);                  // Continue until 'z'

console.log("--------------END OF DO WHILE LOOP-------");

