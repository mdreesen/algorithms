// Write a function that reverses a string

// decrementing for loop
// function reversal(str) {
//     let revString = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         console.log(revString += str[i])
//     }
//     console.log(revString)
// }

// Incrementing for loop
function reversal(str) {
    let revString = '';
    for(let i = 0; i <= str.length - 1; i++) {
        console.log(revString = str[i] + revString)
    }
    console.log(revString)
}

// Using forOf loop
// function reversal(str) {
//     let revString = '';
//     for(let char of str) {
//         revString = char + revString
//     }
//     console.log(revString)
// }



reversal('hello world')