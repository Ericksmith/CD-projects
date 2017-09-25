function numbersOnly(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === "number") {
            newArr.push(arr[i]);
        }
    }
    return(newArr);
}

function numbersOnlyKeepArr(arr) {
    for( var i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) !== "number"){
            arr.splice(i, 1);
        }
    }
    return(arr);
}


var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);

console.log(numbersOnly(newArray));
console.log(numbersOnlyKeepArr(newArray));