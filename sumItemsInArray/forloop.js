// Write a function that sums up an array

// We are setting total to 0 in which we will use in the for loop
// in arrays, 0 = the first index, so 0 is always the first place in the array, where 1 is the second
// example: in sum([8, 2, 3, 4]), the first index (which is 0th index) is 8. So the zero index in the array = 8. the first index = 3 (cause the second place in the array is 1)

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(total += arr[i])
    }
    console.log(total)
}
sum([8, 3, 9, 4])

/*

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        return total += arr[i]
    }
    return total
}
sum([8, 3, 9, 4])

*/
