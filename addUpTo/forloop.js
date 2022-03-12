// write a function that add 1 up to the number provided

// Here are a couple things we need to do
// 1. Need to write function that takes an argument (in this case, the argument is n)
// 2. We need to make a variable called total, this total needs to be set to the number 0
// 3. Need to loop, in this case, we are using a for loop to go through the number set
//   - Setting i (or index) to 1 should be the way to go....why you ask
//   - If let i = 0, it will look for 0 and add it (total += 0), which is fine of course but then it will hit 1 (total += 1)
/* The Following output will look like this:

total = total + i 0
total = total + i 1
total = total + i 3
total = total + i 6
calculate total 6

*/
//   - This is a redundant step in which is why we set it to 1
/* Setting it to 1 (let i = 1), the output will look like this:

total = total + i 1
total = total + i 3
total = total + i 6
calculate total 6

*/
// 4. We would need to return the total (which is at 0), and add the total and index
/* When looping through, it will do something like this for illustration

let total = 0;
for (let i = 1; i <= i; i++) {

total = total + 1 (i would be 1 to start -> we set let i = 1 in the for loop)
total = total + 3 (i would be 3 because we set the argument to 3)
total = total + 6 (i would be 6 because 3 + 3 = 6)
 - this is a bit confusing to grasp but because we have the argument of 3 and i = 3, it will run:
    - total = 3 + 3 -> or total(0) = total(3) + i(3)
}

*/

// 5. We then need to get the total that is now (which is out of the for loop, located just below it) ->     console.log('calculate total', total)

function addupto(n) {
    let total = 0;
    for(let i = 0; i <= n; i++) {
        console.log('total = total + i', total += i)
    }
    console.log('calculate total', total)
}

addupto(3);



/* 

function addupto(n) {
    let total = 0;
    for(let i = 0; i <= n; i++) {
        return total += i;
    }
    return total;
}

addupto(3);

*/