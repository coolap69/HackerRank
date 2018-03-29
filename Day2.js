// Day 2: Operators
// Task 
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

// Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!

// Input Format

// There are 3 lines of numeric input: 
// The first line has a double, mealCost (the cost of the meal before tax and tip). 
// The second line has an integer, tipPercent (the percentage of mealCost being added as tip). 
// The third line has an integer, taxPercent (the percentage of mealCost  being added as tax).

// Output Format

// Print The total meal cost is totalCost dollars., where totalCost is the 
// rounded integer result of the entire bill (mealCost with added tax and tip).

function main() {
    var meal_cost = parseFloat(readLine());
    var tip_percent = parseInt(readLine());
    var tax_percent = parseInt(readLine());

}
var tip = mealCost * tipPercent /100;
var tax = mealCost * taxPercent /100;

var totalCost = Math.round(mealCost + tip + tax);
console.log("The total meal cost is " + totalCost + " dollars.");
