function oddAndEvenSum(num) {
    let str = num.toString();
    let odd = 0;
    let even = 0;

    for(digit of str) {
        if (digit % 2 === 0) {
            even += Number(digit);
        }else {
            odd += Number(digit);
        }
    }
    let result = `Odd sum = ${odd}, Even sum = ${even}`
    return result;
}

let result1 = oddAndEvenSum(1000435);
console.log(result1);