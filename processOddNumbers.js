function processOddNumbers(input) {
    let nums = n => n
.filter((x, i) => i % 2 == 1)
.map(x => x * 2)
.reverse()
.join(" ");
console.log(nums);
 }

processOddNumbers([10, 15, 20, 25]);