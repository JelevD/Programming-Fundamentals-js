function piccolo(commands) {
    let cars = [];

    for (let command of commands) {
        let [direction, carNumber] = command.split(", ");

        if (direction === "IN") {
            if(!cars.includes(carNumber)){
                cars.push(carNumber);
            }
        }else {
            if(cars.includes(carNumber)){
            cars.splice(cars.indexOf(carNumber), 1);

            }
        }
    }

    carSort = cars.sort((a, b) => a.localeCompare(b));
    if(cars.length > 0) {
        console.log(carSort.join("\n"));
    }else {
        console.log("Parking Lot is Empty");
    }

}
piccolo([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)