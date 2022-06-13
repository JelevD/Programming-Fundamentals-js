function printAndSum (num1, num2) {
    sum = 0;
    str = ""
    for (let i = num1; i <= num2; i++) {
        str += ` ${i}`
        sum += i
      
    }
    console.log(str);
    console.log(`Sum: ${sum}`);
    
    
}
printAndSum (5, 10);