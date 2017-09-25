function birthdayCountDown(daysUntilBday) {
    var daysLeft = daysUntilBday;
    while(daysLeft > 0 ) {
        if (daysLeft > 30) {
            console.log(daysLeft, "Days until my birthday. such a long time... :(");
            daysLeft--;
        } else if ( daysLeft > 5) {
            console.log(daysLeft, "Days until my birthday. You better start shopping for a present!");
            daysLeft--;
        } else if (daysLeft > 1) {
            console.log(daysLeft, "DAYS UNTIL MY BIRTHDAY!!!!");
            daysLeft--;
        } else if (daysLeft == 1) {
            console.log(daysLeft, "HAAAAAAPY BIRTHDAY TO ME!!!!!!");
            daysLeft--;
        }
    }
}

birthdayCountDown(40);