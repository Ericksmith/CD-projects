function canIHaveTheTime(hour, minute, period) {
    if (sanatizeInput(hour, minute, period) == true) { 
        if (period == "AM") {   // if it is the morning:
            if (minute < 30) {
                return("It's just after " + hour + " in the morning.");
            } else {
                return("It's almost " + (hour + 1) + " in the morning.");
            }
        } else {
            if (minute < 30) {  // if it is the evening
                return("It's just after " + hour + " in the evening.");
            } else {
                return("It's almost " + (hour + 1) + " in the evening.");
            }
        }
    } else {
        return ("Invalid input, please try again.")
    }
}

function sanatizeInput(hour, minute, period) {
    if (typeof(hour) != "number" || typeof(minute) != "number") {
        return(false);
    }
    if (period != "AM" && period != "PM") {
        return(false);
    }
    if (minute < 0 || hour > 60) {
        return(false);
    } 
    if (hour < 0 || hour > 12) {
        return(false);
    }
    if (Math.round(hour) != hour || Math.round(minute) != minute)  {
        return(false);
    }
    // all conditions of sanatize met:
    return(true)
}

console.log(canIHaveTheTime(8, 30, "AM"))
console.log(canIHaveTheTime(8, 30, "PM"))
console.log(canIHaveTheTime(8, -15, "AM"))
console.log(canIHaveTheTime(12, 13, "PM"))
console.log(canIHaveTheTime(200, 85.3, "AM"))
console.log(canIHaveTheTime(8, 30.3, "AM"))
console.log(canIHaveTheTime(8, 30, "PM"))


