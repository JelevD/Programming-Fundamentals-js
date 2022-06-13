function palindromeIntegers(arr) {
    for (arrString of arr) {

    let numberToString = arrString.toString();
    let reverseString = numberToString.split("").reverse().join("");
    
    if (numberToString === reverseString) {
        console.log(true);
    }else {
        console.log(false);
    }
}
}

palindromeIntegers([123,323,421,121]);
