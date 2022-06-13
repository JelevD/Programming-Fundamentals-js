function triangleOfNumber (num) {
    
    for (let i = 1; i <= num; i++) {
        let str = ""
        for (let j = 1; j <= i; j++){
         str += ` ${i}`  
          
        }
        console.log(str);
    }
    
}
triangleOfNumber (5);