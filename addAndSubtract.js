function addAndSubtract(list) {
let oldSum = 0
let current = 0 
for (let i = 0; i < list.length; i++) {
    let currentNum = list[i];
    oldSum += list[i];
    if (list[i] % 2 === 0) {
        current += currentNum + i;
        newList = currentNum + i
        list[i] = newList;
    }else {
        current += currentNum - i;
        newList = currentNum - i;
        list[i] = newList;
    }
}
console.log(list);
console.log(oldSum)
console.log(current)
}

addAndSubtract([5, 15, 23, 56, 35]);