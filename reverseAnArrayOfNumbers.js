function reverseAnArrayOfNumbers(n, arrey) {
    let arr = [];
    for (let i = 0; i < n; i++ ) {
        arr.push(arrey[i]);
    }
    
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result.join(" "));

}
 reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);