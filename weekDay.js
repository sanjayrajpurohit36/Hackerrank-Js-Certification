/*
    Complete the function
    A function named getWeek is there which accepts an array of weekDays.
    Eg: [Mon, Tue, Wed, Thru, Fri, Sat, Sun]
    
    getWeek should return a function namely getDay which accepts a number, and it should return
    the day which is on that number.

    PS: If the number is out of range then it should throw an error "Number out of range". 

    Inputs 1: 
    weekDays = [Mon, Tue, Wed, Thru, Fri, Sat, Sun]
    number = 1
    
    Output: Tue

    Inputs 1: 
    weekDays = [M, T, W, Th, F, Sa, Su]
    number = 5
    
    Output: Sa
*/

function getWeek(weekDays) {
    //getWeekDay is in closure with getWeek so it will be able to access the argument weekDays
    let getWeekDay = function(number) {
        if(number < 0 || number >= weekDays.length) {
            throw new Error("Number out of range");
        } else return weekDays[number];
    }
    return getWeekDay;
}

// Creating testcases array with [[array of days], number]] for the program
let testCases = [
                [["Mon", "Tue", "Wed", "Thru", "Fri", "Sat", "Sun"], 1], 
                [["M", "T", "W", "Th", "F", "Sa", "Su"], 0],
                [["M", "T", "W", "Th", "F", "Sa"], 2],
                [["M", "T", "W", "Th", "F", "Sa"], 3],
                [["Mon", "Tue", "Wed", "Thru", "Fri", "Sat", "Sun"], 10]
                
            ]
try {
    for (let input of testCases) {
        let getDay = getWeek(input[0]);
        let output = getDay(input[1]);
        console.log("Output:", output);
    }
} catch(e) {
    console.log(e.message);    
}





