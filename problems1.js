function georgeBudget(input) {
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let countStudent = students;
    let priceOfFlour = Number(input[2]);
    let priceOfEgg = Number(input[3]);
    let priceOfApron = Number(input[4]);
    let countFlour = 0;

    while(countStudent >= 5) {
        countStudent -= 5;
        countFlour++;
    }
    let sumStudents = Math.ceil(students + (students * 0.20))
    let result = (priceOfApron * sumStudents) + (priceOfEgg * 10 * students) + (priceOfFlour  * (students - countFlour));

    if(budget >= result) {
        console.log(`Items purchased for ${result.toFixed(2)}$.`)
    }else 
    console.log(`${(result - budget).toFixed(2)}$ more needed.`)

}
georgeBudget([40,
    2,
    1.0,
    0.10,
    10.0])
    
    
    