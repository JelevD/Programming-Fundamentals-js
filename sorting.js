function sorting(nums) {
    let result = [];
    let numberLength = nums.length;

    for (let i = 0; i < numberLength; i++) {
        let number;
        if (i % 2 === 0) {
            number = Math.max(...nums);
        }else {
            number = Math.min(...nums);
        }
        result.push(number);
        nums.splice(nums.indexOf(number), 1);

    }
    console.log(result.join(" "));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);