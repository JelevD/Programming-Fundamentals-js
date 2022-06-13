function amazingNumbers(num) {
    let numAsStr = num.toString()
    sum = 0;
    for (let i = 0; i < numAsStr.length; i++) {
    current = Number(numAsStr[i]);
    sum += current;
    }
    
let strAsNum = sum.toString();
let chech = false;
for (let i = 0; i < strAsNum.length; i++) {
    if (strAsNum[i] == "9") {
        chech = true;
        break;
    }
}
console.log(`${num} Amazing? ${chech ? "True" : "False"}`);

}
amazingNumbers(1233);