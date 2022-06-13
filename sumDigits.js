function sumDigit (num) {
    let numOfStr = num.toString();
    let sum = 0;
    for (let digit of numOfStr) {
        sum += Number(digit);
        
    }
    console.log(sum);
}
sumDigit(245678)