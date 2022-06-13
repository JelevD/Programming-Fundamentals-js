function addAndSubtract(num1, num2, num3) {
    function sum(num1, num2) {
        let result = num1 + num2;
        return result;
    }

    function subtract(num1, num2) {
        let result = num1 - num2;
        return result;
    }

    let numSum = sum(num1 , num2);
    let result = subtract(numSum, num3);
    return result;
}
console.log(addAndSubtract(23,
    6,
    10
    ));