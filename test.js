function test(num) {
    let numToString = num.toString()
    for (let i = 0; i < numToString; i++) {
        numToString += numToString[0]
        
    }
    console.log(numToString)

}
test(10)