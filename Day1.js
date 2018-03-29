//Day 1: Data Types

// Task 
// Complete the code in the editor below. The variables i, d, and s are already declared and initialized for you. You must:

// Declare 3 variables: one of type int, one of type double, and one of type String.
// Read 3 lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your 3 variables.
// Use the + operator to perform the following operations: 
// Print the sum of i plus your int variable on a new line.
// Print the sum of d plus your double variable to a scale of one decimal place on a new line.
// Concatenate s with the string you read as input and print the result on a new line.

// Explanation

// When we sum the integers  and , we get the integer . 
// When we sum the floating-point numbers  and , we get . 
// When we concatenate HackerRank with is the best place to learn and practice coding!, we get HackerRank is the best place to learn and practice coding!.

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

// Declare second integer, double, and String variables.
        var integer = readLine();
        var double = readLine();
        var string = readLine();
        
    // Read and save an integer, double, and String to your variables.
        console.log(i + parseInt(integer));
        console.log((d + parseFloat(double)).toFixed(1));
        console.log(s + string);
}
        
    // Print the sum of both integer variables on a new line.

// Print the sum of the double variables on a new line.

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.