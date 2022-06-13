function centuriesToMinutes(num) {
    let years = num * 100;
    let day = Math.trunc(years * 365.2422);
    let hour = day * 24;
    let min = hour * 60;
    console.log(`${num} centuries = ${years} years = ${day} days = ${hour} hours = ${min} minutes`)
}
centuriesToMinutes(1)