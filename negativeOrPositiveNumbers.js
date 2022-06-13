function negativeOrPositiveNumbers(nums) {
    let result = [];

    for (let loop of nums) {
        if (loop < 0) {
            result.unshift(loop) 
        }else {
            result.push(loop)
        }
    }
    for (let loop of result) {
    console.log(loop)
    }

}

negativeOrPositiveNumbers([7, -2, 8, 9])