/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let value = 0;
    let intial_time = Date.now();
    // console.log(intial_time)
    for (let index = 1; index < n+1; index++) {
        value = value + index;
    }
    console.log(value)
    console.log(Date.now() - intial_time)

    return 0.01;
}

calculateTime(100000000)
