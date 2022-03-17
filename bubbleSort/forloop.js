function sortArr(arr) {
    // loop arr
    for(let i = 0; i < arr.length; i++){
        // loop content in the array
        for(let j = 0; j < arr.length; j++) {
            // condition to check if left number is greater than right number
            if (arr[j] > arr[j+1]) {
                // have to have a temp to swap numbers
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            console.log(arr)
        }
    }
    console.log(arr)
}

sortArr([1,9,6,8,4,3,2])