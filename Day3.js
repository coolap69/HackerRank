// Day 3: Intro to Conditional Statements

// Task 
// Given an integer, n , perform the following conditional actions:

// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20, print Not Weird
// Complete the stub code provided in your editor to print whether or not n is weird.

// Input Format

// A single line containing a positive integer, n.

function main() {
    var N = parseInt(readLine());
    
  if(N % 2 !=0) {
    console.log("Weird");
}else if (N % 2 === 0 && N >= 6 && N <=20){
      console.log("Weird");
  }else if (N % 2 === 0 && N >= 2 && N < 5) {
      console.log("Not Weird");
  } else {
      console.log("Not Weird");
  }
  }
  