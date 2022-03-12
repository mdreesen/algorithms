// write a function that add 1 up to the number provided

// This uses PEMDAS operation for sequence of events
// 1. It takes the argument n and assigned 3 (function initiation which is 3)
// 2. It will look like this -> 3 * (3 + 1) / 2
// Then PEMDAS
// 3. P = Parentheses (3 + 1) = 4, M = Multiplication 3 * 4 = 12, D = Division 12 / 2 = 6
//

function addupto(n) {
    console.log(n * (n + 1) / 2)
}

addupto(3);

/*

function addupto(n) {
    return n * (n + 1) / 2
}

addupto(3);

*/