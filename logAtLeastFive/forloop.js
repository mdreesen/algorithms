// Write a function that logs at least five and whatever n is after

// using Math.max() -> max() is a method, it returns the highest number provided
// in this case we had 2 arguments max(5, n)
// if n < 5, it will return 5 - because 5 is greater
// if n > 5, it will return n - because n is greater

function atLeastFive(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}

atLeastFive(5)