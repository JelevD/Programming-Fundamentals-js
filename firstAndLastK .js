function firstAndLastK(nums) {
    let k = nums.shift();
    let first = nums.slice(0, k);
    let last = nums.slice(nums.length - k);

    console.log(first.join(" "));
    console.log(last.join(" "));
}

firstAndLastK([2, 
    7, 8, 9]
    );