
function charCount(str) {
    // make object to return at end
    // we will need to loop over the string - bulk
    // - for each character
    // - if char is a key in object, add one to count
    // - if the char is not in object, add it and set value to 1
    // - if character is symbol, dont do anything
    // return object

    var obj = {};
    for (let i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                console.log(`${char}: ${obj[char]++}`)

            } else {
                console.log(`${char}: ${obj[char] = 1}`)
            }
        }
    }
    console.log(obj)

}

/*

    var obj = {};
    for (let i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                return `${char}: ${obj[char]++}`;

            } else {
                return `${char}: ${obj[char] = 1}`;
            }
        }
    }
    return obj;

}

*/

charCount("Hi there")