function perfectNumber(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
        sum += i;
    }
    }
    if (num === sum) {
        return "We have a perfect number!";
    }else {
        return "It's not so perfect.";
    }

}
let result = perfectNumber(6);
console.log(result);