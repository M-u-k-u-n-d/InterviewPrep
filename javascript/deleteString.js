// To delete a character or a substring from a string in JavaScript, you can use various methods, 

/*
Using slice:
The slice method extracts a section of a string and returns it as a new string, without modifying the original string.
*/

// let str = "Hello, World!";
// let indexToRemove = 7; // Index of the character 'W'
// let newStr = str.slice(0, indexToRemove) + str.slice(indexToRemove + 1);
// console.log(newStr); // Outputs: "Hello, orld!"


/*
Using substring:
The substring method returns a part of the string between the start and end indices, or to the end of the string.
*/

// let str = "Hello, World!";
// let indexToRemove = 7; // Index of the character 'W'
// let newStr = str.substring(0, indexToRemove) + str.substring(indexToRemove + 1);
// console.log(newStr); // Outputs: "Hello, orld!"


/* Difference between String.slice() and String.substring */

/*
    JavaScript substring() different results of substring()

    If start > stop, then the function swaps both arguments.
    If any argument is negative or is NaN, it is treated as 0.

    JavaScript slice() different results of slice()

    If start > stop, This function will return an empty string. (“”)
    If the start is negative, It sets char from the end of the string, like substr().
    If stop is negative, It sets stop = string.length – Math.abs(stop) (original value)
*/

/*
In this Example, In the case of substring() it swaps the arguments when start>stop where the slice() returns the empty string. 
 */

// // Input string
// let str = "This is GeeksForGeeks";
// console.log("Str = '" + str + "'");

// // Function to display output difference
// function Geeks() {
// 	console.log("str.slice() = " + str.slice(13, 0));
// 	console.log(
// 		"str.substring() = " + str.substring(13, 0)
// 	);
// }

// // Function call
// Geeks();

/*
output 

Str = 'This is GeeksForGeeks'
str.slice() = 
str.substring() = This is Geeks
*/

/*
Using replace:
The replace method returns a new string with some or all matches of a pattern replaced by a replacement. It can be used with a string or a regular expression.
 */

// let str = "Hello, World!";
// let charToRemove = "W";
// let newStr = str.replace(charToRemove, "");
// console.log(newStr); // Outputs: "Hello, orld!"






