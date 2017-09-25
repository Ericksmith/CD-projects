// For a Few Billion
// There is an old tale about a king who offered a servant $10,000 as a reward. The servant instead asked that for 30 days he be given an amount that would double, starting with a penny. (1 penny for the first day, 2 for the second, 4 for the third, then 8, 16, 32 pennies, and so on).

// Use for loops to answer the following:

// How much was the reward after 30 days?
// remember, a penny isn't 1, but 0.01

// Bonus (Only If You Have Time):

// How many days would it take the servant to make $10,000?
// How about 1 billion?
// In JavaScript, there is a value Infinity . How many days until the servant has infinite money?

function exponentialPayout(days, goalAmount = "null") {
    var sum = 0.01;
    for (var i = 1; i <= days; i++) {
        sum += sum;
        if (goalAmount == Infinity && sum == Infinity) {
            return(console.log("Goal amount of infinity in " + i + " days."));
        } 
        if (goalAmount < sum && goalAmount != "null") {
            break;
        }
    }
    console.log("Total amount paid in " + days + " days is $" + sum.toLocaleString() + " .")
}

exponentialPayout(30);
console.log("30 days, null")
exponentialPayout(Infinity, Infinity);
console.log("Inf, inf")
exponentialPayout(Infinity, 10000);
console.log("inf, 10k")
exponentialPayout(Infinity, 1000000000);
console.log("inf, 1billion")