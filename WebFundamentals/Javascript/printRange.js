// Create a function that can take a start point, end point, and skip amount, to print all numbers in the range.

// (Should go UP TO, but NOT INCLUDING the end point)

// Bonus (Only If You Have Time):

// Make sure it works for negative numbers
// If the user doesn't pass a skip amount, make it default to 1 (printRange(4, 8); would print 4, 5, 6, 7)
// If the user doesn't pass an end point, make it start at 0, and end at the first (printRange(4); would print 0, 1, 2, 3)


function printRange(start, end, step = 1) { 
    if (end == undefined) {
        end = start;
        start = 0;
    }
    result = [];
    for(var i = start; i < end; i += step) {
        result.push(i);
    }
    return result;
}

console.log(printRange(2, 10, 2));
console.log("test 1 end");
console.log(printRange(2, 10));
console.log("test 2 end");
console.log(printRange(4));
console.log("test 3 end");