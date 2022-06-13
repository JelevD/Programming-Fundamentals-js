function sumFirstAndLast(nums) {
    let first = Number(nums.pop());
    let last = Number(nums.shift());
    return first + last
}

console.log(sumFirstAndLast(['20', '30', '40']))